/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useContext } from "react";

// Create Cart Context
const CartContext = createContext();

// Provide Cart Context to the app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product, selectedSize, selectedColor, quantity) => {
    const newItem = { ...product, selectedSize, selectedColor, quantity };
    setCart((prevCart) => [...prevCart, newItem]);
    alert("Product added to cart successfully!");
  };

  // Remove product from cart
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart Context
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
