/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import { API_KEY } from "../../config/key";

const initialState = {
  news: [],
  isDarkThemeEnabled: false,
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getNews = async () => {
    const response = await axios.get(
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=" + API_KEY
    );

    dispatch({
      type: "GET_NEWS",
      payload: response.data.results,
    });
  };

  const changeTheme = () => {
    state.isDarkThemeEnabled = !state.isDarkThemeEnabled;
    console.log("state.isDarkThemeEnabled", state.isDarkThemeEnabled);
    dispatch({
      type: "CHANGE_THEME",
      payload: state.isDarkThemeEnabled,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        news: state.news,
        getNews,
        changeTheme,
        isDarkThemeEnabled: state.isDarkThemeEnabled,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
