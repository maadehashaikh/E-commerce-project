import React, { createContext, useState } from "react";

// Create the context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // Function to add items to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If the item already exists, update its quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add a new item
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const checkout = () => {
    setCartItems([]);
    alert("Thank you for your purchase! Your order has been placed.");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
};
