import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 👈 Cart Context को इम्पोर्ट करें (पाथ एडजस्ट करें)
import { useCart } from '../context/CartContext'; 

import img1 from "../assets/gratitude-journals/img1.webp";
import img2 from "../assets/gratitude-journals/img2.webp";
import img3 from "../assets/gratitude-journals/img3.webp";
import img4 from "../assets/gratitude-journals/img4.webp";
import img5 from "../assets/gratitude-journals/img5.webp";
import img6 from "../assets/gratitude-journals/img6.webp";
import img7 from "../assets/gratitude-journals/img7.webp";
import img8 from "../assets/gratitude-journals/img8.webp";

// --- Placeholder Product Data for Leather Diaries ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const diaryProducts = [
  // Row 1
  { 
    id: 2301, 
    name: "Mahindra Pre-Embossed good luck gift journal diary for...", 
    price: "Rs. 1,500.00", 
    imageUrl: img1, 
    sku: "DRY2301", 
    options: ['90 GSM Sheets'] 
  },
  { 
    id: 2302, 
    name: "Ganesha Symbol of PROSPERITY journal diary gift journal for...", 
    price: "Rs. 1,500.00", 
    imageUrl: img2, 
    sku: "DRY2302", 
    options: ['85 GSM Sheets'] 
  },
  { 
    id: 2303, 
    name: "Ganesha Symbol of PROSPERITY journal diary gift journal for...", 
    price: "Rs. 1,500.00", 
    imageUrl: img3, 
    sku: "DRY2303", 
    options: ['85 GSM Sheets'] 
  },
  { 
    id: 2304, 
    name: "OM Symbol of PROSPERITY journal diary gift journal for...", 
    price: "Rs. 1,500.00", 
    imageUrl: img4, 
    sku: "DRY2304", 
    options: ['85 GSM Sheets'] 
  },
  
  // Row 2
  { 
    id: 2305, 
    name: "Mahindra Pre-Embossed, good luck gift journal diary for...", 
    price: "Rs. 1,500.00", 
    imageUrl: img5, 
    sku: "DRY2305", 
    options: ['120 GSM Sheets'] 
  },
  { 
    id: 2306, 
    name: "Maharani Block Printed journal diary (Limited Edition)...", 
    price: "Rs. 1,500.00", 
    imageUrl: img6, 
    sku: "DRY2306", 
    options: ['Bagru Block I'] 
  },
  { 
    id: 2307, 
    name: "Maharani Block Printed journal diary (Limited Edition)...", 
    price: "Rs. 1,500.00", 
    imageUrl: img7, 
    sku: "DRY2307", 
    options: ['Pink Shibori'] 
  },
  { 
    id: 2308, 
    name: "Ganesha Symbol of PROSPERITY journal diary gift journal for...", 
    price: "Rs. 1,500.00", 
    imageUrl: img8, 
    sku: "DRY2308", 
    options: ['Brown Leather'] 
  },
];

// Reusable Product Card Component (NOW FUNCTIONAL)
const ProductCard = ({ product }) => {
    // 👈 1. Option State: Dropdown selection को ट्रैक करें
    const [selectedOption, setSelectedOption] = useState(product.options[0]); 

    // 👈 2. useCart Hook
    const { addToCart, toggleCartDrawer } = useCart();

    const handleAddToCart = (e) => {
      e.preventDefault(); 
      e.stopPropagation(); 
        
        // 👈 3. Cart में Item और Selected Option भेजें
        addToCart(
            product, 
            1, 
            { selectedOption: selectedOption } // Option (Sheet GSM/Design) भेजें
        );
        
        // Cart Drawer को खोलें
        toggleCartDrawer(); 
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
                onChange={(e) => setSelectedOption(e.target.value)} // State अपडेट करें
            >
                {product.options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        )}

        {/* Add to Cart Button */}
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
const LeatherDiaries = () => {
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
          {diaryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeatherDiaries;