import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";
import List from "./components/List/List.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const links = [
    { name: "Home", url: "/" },
    { name: "Form", url: "/form" },
    { name: "List", url: "/list" },
  ];

  return (
    <>
      <div>
        <BrowserRouter>
          <Header links={links} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
