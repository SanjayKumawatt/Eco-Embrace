import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 👈 Cart Context को इम्पोर्ट करें (पाथ एडजस्ट करें)
import { useCart } from '../context/CartContext'; 
// 👉 यह Import सुनिश्चित करें कि PremiumLinenStoles.jsx में products array एक्सपोर्ट हो रहा है
import { linenProducts } from './PremiumLinenStoles'; 

// Reusable Product Card Component (NOW FUNCTIONAL)
const ProductCard = ({ product }) => {
    // 👈 1. Option State: Dropdown selection को ट्रैक करें
    // अगर options हैं, तो पहला option default होगा
    const options = product.options || [];
    const [selectedOption, setSelectedOption] = useState(options.length > 0 ? options[0] : null); 
    
    // 👈 2. useCart Hook
    const { addToCart, toggleCartDrawer } = useCart();

    const handleAddToCart = (e) => {
      e.preventDefault(); 
      e.stopPropagation(); 
        
        // 👈 3. Cart में Item और Selected Option भेजें
        addToCart(
            product, 
            1, 
            { selectedOption: selectedOption } // Option (Color/Variant) भेजें
        );
        
        // Cart Drawer को खोलें
        toggleCartDrawer(); 
    };

    return (
      <div className="bg-white border border-gray-100 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl group">
        
        {/* Product Image Link */}
        <Link to={`/product/${product.sku}`} className="block w-full h-96 overflow-hidden bg-gray-50">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Product Details and CTA */}
      <div className="p-4 text-center">
        {/* Product Name Link */}
        <Link to={`/product/${product.sku}`} className="block text-base font-medium text-gray-700 hover:text-indigo-600 mb-2 h-10 overflow-hidden">
          {product.name}
        </Link>
        
        {/* Price */}
        <p className="text-xl font-semibold text-gray-900 mb-3">
          {product.price}
        </p>

        {/* Conditional Dropdown for Options */}
        {product.options && product.options.length > 0 && (
            <select 
                className="w-full p-2 mb-3 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)} // State अपडेट करें
            >
                {product.options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        )}

        {/* Add to Cart Button (Calls functional handler) */}
        <button
          type="button"
          className="w-full py-2 text-sm font-semibold text-white bg-neutral-800 rounded-md transition duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={handleAddToCart} // 👈 Updated Handler
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

// Main Component
const PremiumLinenStolesTwoCol = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Header/Toolbar (Filters and Sorting - Simplified) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200 flex justify-end items-center text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="hidden sm:block">Sort By</label>
          <select id="sort" className="border border-gray-300 rounded-md p-1 focus:ring-indigo-500 focus:border-indigo-500">
            <option>Featured</option>
            <option>Price: Low to High</option>
          </select>
        </div>
      </div>

      {/* 2. Product Grid (2 columns on large screens) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* 👇 GRID CHANGE: lg:grid-cols-2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-10">
          {linenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumLinenStolesTwoCol;