import React, { useContext } from "react";
import { CartContext } from "./CartContext"; // Import the CartContext
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, checkout } = useContext(CartContext); // Access the cart items and remove function
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      <Link to={`/`} className="no-underline">
        <h6 className="text-yellow-400">Back To Home </h6>
      </Link>
      <div className="bg-yellow-400 w-full md:w-3/4 lg:w-1/2 mx-auto p-4 rounded mt-4">
        <h2 className="text-center text-white font-sans text-xl md:text-2xl lg:text-3xl">
          Your Cart
        </h2>
        {cartItems.length === 0 ? (
          <p className="text-center text-white font-sans text-xl md:text-2xl lg:text-3xl">
            Your cart is empty
          </p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                className="flex justify-between items-center p-2 bg-white rounded shadow-md"
                key={item.id}
              >
                <div>
                  <span className="font-semibold">{item.title}</span> -{" "}
                  {item.quantity} x {item.price} RS
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
            <h5 className="text-right font-semibold p-2 bg-white rounded shadow-md">
              Total Price: {totalPrice} RS
            </h5>
          </ul>
        )}

        <button
          onClick={checkout}
          className="block w-full md:w-auto bg-blue-500 text-white p-2 mt-4 rounded hover:bg-blue-600"
        >
          Check Out
        </button>
      </div>
    </>
  );
};

export default Cart;
