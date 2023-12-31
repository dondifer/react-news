/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import { API_KEY } from "../../config/key";

const initialState = {
  news: [],
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
  return (
    <GlobalContext.Provider
      value={{
        news: state.news,
        getNews,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
