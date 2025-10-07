import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/bookmarks/img1.webp";
import img2 from "../assets/bookmarks/img2.webp";
import img3 from "../assets/bookmarks/img3.webp";


// --- Placeholder Product Data for Pattachitra Bookmarks ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const bookmarkProducts = [
  // Row 1
  { 
    id: 2401, 
    name: "Apsaras The Dancing Beauties | Pattachitra Handmade Palm Leaf Eco...", 
    price: "Rs. 500.00", 
    imageUrl: img1, 
    sku: "BMK2401", 
    options: ['Dancing Apsaras / 1'] 
  },
  { 
    id: 2402, 
    name: "Tribal Farm and Home Scene | Pattachitra Handmade Palm Leaf...", 
    price: "Rs. 500.00", 
    imageUrl: img2, 
    sku: "BMK2402", 
    options: ['1'] 
  },
  { 
    id: 2403, 
    name: "Coexistence- Tribal Home Scene | Pattachitra Handmade Palm Leaf Eco...", 
    price: "Rs. 500.00", 
    imageUrl: img3, 
    sku: "BMK2403", 
    options: ['1'] 
  },
  // यहाँ मैंने चौथा प्रोडक्ट नहीं जोड़ा है क्योंकि इमेज में केवल 3 ही दिख रहे हैं।
];

// Reusable Product Card Component (No Cart Context used)
const ProductCard = ({ product }) => {
  // Option state for the dropdown
  const [selectedOption, setSelectedOption] = useState(product.options[0]); 

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    
    // Cart logic replaced with a console log (as per your request)
    console.log(`Action: Attempted to add ${product.name} with option ${selectedOption} to cart.`);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl group">
      
      {/* Product Image Link */}
      <Link to={`/product/${product.sku}`} className="block w-full h-72 sm:h-80 overflow-hidden bg-gray-50">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Product Details and CTA */}
      <div className="p-3 text-center">
        {/* Product Name Link */}
        <Link to={`/product/${product.sku}`} className="block text-sm font-medium text-gray-700 hover:text-indigo-600 mb-2 h-10 overflow-hidden">
          {product.name}
        </Link>
        
        {/* Price */}
        <p className="text-base font-semibold text-gray-900 mb-3">
          {product.price}
        </p>

        {/* Conditional Dropdown for Options */}
        {product.options && product.options.length > 0 && (
            <select 
                className="w-full p-2 mb-3 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)} // Update local state on change
            >
                {product.options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        )}

        {/* Add to Cart Button (Calls non-functional handler) */}
        <button
          type="button"
          className="w-full py-2 text-sm font-semibold text-white bg-neutral-800 rounded-md transition duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

// Main Component
const PattachitraBookmarks = () => {
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

      {/* 2. Product Grid (4 columns, though only 3 are visible) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8 lg:grid-cols-4">
          {bookmarkProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PattachitraBookmarks;