import React, { useContext } from "react";
import { CartContext } from "./CartContext"; // Import the CartContext
const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Access the cart items and remove function

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - {item.quantity} x {item.price} RS
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
