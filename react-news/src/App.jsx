import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";
import List from "./components/List/List.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";
import { lightTheme, darkTheme } from "./assets/styles/Theme";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./assets/styles/GlobalStyles";

function App() {
  const links = [
    { name: "Home", url: "/" },
    { name: "Form", url: "/form" },
    { name: "List", url: "/list" },
  ];
  let theme;
  // eslint-disable-next-line no-unused-vars
  const { news, getNews, changeTheme, isDarkThemeEnabled } =
    useContext(GlobalContext);

  useEffect(() => {
    theme = isDarkThemeEnabled;
  }, []);
  return (
    <>
      <div>
        <ThemeProvider theme={theme ? darkTheme : lightTheme}>
          <GlobalStyles />
          <GlobalProvider>
            <BrowserRouter>
              <Header links={links} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<Form />} />
                <Route path="/list" element={<List />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </GlobalProvider>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
