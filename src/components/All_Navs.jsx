import React, { useContext } from "react";
import SaleSlider from "./SaleSlider";
import NavBar from "./NavBar";
import NavSection from "./NavSections";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const All_Navs = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <>
      <SaleSlider />
      <NavBar />
      <NavSection />
      <div className="cart-container">
        <Link to="/Cart" className="cart-link">
          🛒 Cart
          {totalItems > 0 && <span className="badge">{totalItems}</span>}
        </Link>
      </div>
    </>
  );
};

export default All_Navs;
