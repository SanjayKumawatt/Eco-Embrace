import React, { createContext, useContext, useState } from 'react';

// 1. Context बनाएँ
const CartContext = createContext();

// 2. Custom hook बनाएँ ताकि components आसानी से Cart data यूज़ कर सकें
export const useCart = () => {
  return useContext(CartContext);
};

// 3. Provider component बनाएँ
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      // Check if item already exists in the cart
      const existingItemIndex = prevItems.findIndex(item => item.sku === product.sku);

      if (existingItemIndex > -1) {
        // If it exists, update the quantity
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      } else {
        // If it's a new item, add it to the cart
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // Function to get the total number of items in the cart (for the icon badge)
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const contextValue = {
    cartItems,
    addToCart,
    getTotalItems,
    // You can add removeFromCart, updateQuantity, etc. here
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};