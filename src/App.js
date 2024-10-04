import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import All_Navs from "./components/All_Navs";
import Description from "./components/Description";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <All_Navs />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<Description />} />
        <Route path="/cart" component={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
