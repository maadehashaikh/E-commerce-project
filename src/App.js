import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import All_Navs from "./components/All_Navs";

function App() {
  return (
    <>
      <All_Navs />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </>
  );
}

export default App;
