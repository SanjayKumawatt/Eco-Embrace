import React, { createContext, useContext, useState } from 'react';

// Context object
const CartContext = createContext();

// Custom Hook to use the cart anywhere
export const useCart = () => {
  return useContext(CartContext);
};

// Provider Component
export const CartProvider = ({ children }) => {
  // Cart state: holds the list of items
  const [cartItems, setCartItems] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // New state for Drawer

  // Function to add an item
  const addToCart = (product, quantity = 1, options = {}) => {
    setCartItems(prevItems => {
      // Create a unique identifier based on SKU and selected option (size, color, etc.)
      const uniqueId = `${product.sku}-${options.selectedOption || ''}`;
      
      const existingItemIndex = prevItems.findIndex(item => item.uniqueId === uniqueId);

      if (existingItemIndex > -1) {
        // Item पहले से मौजूद है: Quantity बढ़ाओ
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      } else {
        // नया आइटम है: Cart में जोड़ो
        return [...prevItems, { 
            ...product, 
            quantity, 
            uniqueId,
            selectedOption: options.selectedOption // Add selected option
        }];
      }
    });
    // जब भी आइटम ऐड हो, drawer को खोल दो
    setIsDrawerOpen(true);
  };
  
  // Function to toggle the cart drawer
  const toggleCartDrawer = () => {
    setIsDrawerOpen(prev => !prev);
  };
  
  // Function to remove an item
  const removeFromCart = (uniqueId) => {
    setCartItems(prevItems => prevItems.filter(item => item.uniqueId !== uniqueId));
  };
  
  // Function to update quantity
  const updateQuantity = (uniqueId, newQuantity) => {
    setCartItems(prevItems => 
        prevItems.map(item => 
            item.uniqueId === uniqueId ? { ...item, quantity: Math.max(1, newQuantity) } : item
        )
    );
  };

  // Helper functions
  const getTotalAmount = () => cartItems.reduce((total, item) => {
      // Assuming price format is "Rs. 4,500.00"
      const price = parseFloat(item.price.replace('Rs.', '').replace(',', '').trim());
      return total + (price * item.quantity);
  }, 0);


  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalAmount,
    isDrawerOpen,         // 👈 New state
    toggleCartDrawer,     // 👈 New function
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};