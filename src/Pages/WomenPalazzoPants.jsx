import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/palazzo-pants/img1.webp";
import img2 from "../assets/palazzo-pants/img2.webp";
import img3 from "../assets/palazzo-pants/img3.webp";
import img4 from "../assets/palazzo-pants/img4.webp";
import img5 from "../assets/palazzo-pants/img5.webp";
import img6 from "../assets/palazzo-pants/img6.webp";
import img7 from "../assets/palazzo-pants/img7.webp";
import img8 from "../assets/palazzo-pants/img8.webp";

// --- Placeholder Product Data for Women's Palazzo Pants ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const palazzoProducts = [
  // Row 1
  { 
    id: 1901, 
    name: "Women's Palazzo Pants | Indigo block print dress... Lounge pants...", 
    price: "Rs. 4,600.00", 
    imageUrl: img1, 
    sku: "PLZ1901", 
    options: ['Woven Squares', 'Elephant Print', 'Plain Indigo'] 
  },
  { 
    id: 1902, 
    name: "Women's Palazzo pants | wide leg pants | Spotted in block print...", 
    price: "Rs. 4,600.00", 
    imageUrl: img2, 
    sku: "PLZ1902", 
    options: [] 
  },
  { 
    id: 1903, 
    name: "Women's Palazzo pants | wide leg pants | Coconut Trees | Summer...", 
    price: "Rs. 4,600.00", 
    imageUrl: img3, 
    sku: "PLZ1903", 
    options: ['Coconut Trees', 'Palm Leaves'] 
  },
  { 
    id: 1904, 
    name: "Women's Palazzo pants | wide leg pants | Parallel pants...", 
    price: "Rs. 4,600.00", 
    imageUrl: img4, 
    sku: "PLZ1904", 
    options: [] 
  },
  
  // Row 2
  { 
    id: 1905, 
    name: "Women's Indigo palazzo pants | wide leg pants | Woven...", 
    price: "Rs. 4,600.00", 
    imageUrl: img5, 
    sku: "PLZ1905", 
    options: [] 
  },
  { 
    id: 1906, 
    name: "Women's Indigo palazzo pants | wide leg pants | Cute...", 
    price: "Rs. 4,600.00", 
    imageUrl: img6, 
    sku: "PLZ1906", 
    options: ['Bolton', 'Carson'] 
  },
  { 
    id: 1907, 
    name: "Women's Ajrakh Palazzo Capri pants | Brown n black Hand...", 
    price: "Rs. 4,600.00", 
    imageUrl: img7, 
    sku: "PLZ1907", 
    options: [] 
  },
  { 
    id: 1908, 
    name: "Women's Ajrakh Palazzo Capri pants | Brown n black Hand...", 
    price: "Rs. 4,600.00", 
    imageUrl: img8, 
    sku: "PLZ1908", 
    options: [] 
  },
];

// Reusable Product Card Component (No Cart Context used)
const ProductCard = ({ product }) => {
  // Option state for the dropdown
  const [selectedOption, setSelectedOption] = useState(product.options.length > 0 ? product.options[0] : null); 

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
const WomenPalazzoPants = () => {
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

      {/* 2. Product Grid (4 columns) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8 lg:grid-cols-4">
          {palazzoProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenPalazzoPants;