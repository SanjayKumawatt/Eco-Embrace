import React, { useState } from 'react'; // useState added for tracking selected option
import { Link } from 'react-router-dom';
// 👈 Cart Context को इम्पोर्ट करें (पाथ एडजस्ट करें)
import { useCart } from '../context/CartContext'; 

import img1 from "../assets/lightheart-paper-jewelry/img1.webp";
import img2 from "../assets/lightheart-paper-jewelry/img2.webp";
import img3 from "../assets/lightheart-paper-jewelry/img3.webp";
import img4 from "../assets/lightheart-paper-jewelry/img4.webp";
import img5 from "../assets/lightheart-paper-jewelry/img5.webp";
import img6 from "../assets/lightheart-paper-jewelry/img6.webp";
import img7 from "../assets/lightheart-paper-jewelry/img7.webp";




// --- Placeholder Product Data for Silk Thread Jhumka Earrings ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const jhumkaProducts = [
  // Row 1
  { id: 401, name: "Paper Earrings - Eco Jewelry Paper Jhumka Earrings...", price: "Rs. 1,600.00", imageUrl: img1, sku: "JHM401", options: ['Vol. 1', 'Vol. 2', 'Vol. 3'] },
  { id: 402, name: "Paper Earrings - Eco Jewelry Paper Jhumka Earrings...", price: "Rs. 1,600.00", imageUrl: img2, sku: "JHM402", options: ['Blue-L', 'Red-M', 'Green-S'] },
  { id: 403, name: "Paper Earrings - Eco Jewelry Paper Jhumka Earrings...", price: "Rs. 1,600.00", imageUrl: img3, sku: "JHM403", options: ['1', '2', '3'] },
  { id: 404, name: "New Pearl colors Jadao Meenakari Paper Earrings - Eco...", price: "Rs. 900.00", imageUrl: img4, sku: "JHM404", options: ['1'] },
  
  // Row 2
  { id: 405, name: "New Peacock colors satin silk Paper Earrings - Eco Jewelry...", price: "Rs. 900.00", imageUrl: img5, sku: "JHM405", options: ['1'] },
  { id: 406, name: "New Pearl colors satin silk Paper Earrings - Eco Jewelry...", price: "Rs. 900.00", imageUrl: img6, sku: "JHM406", options: ['1'] },
  { id: 407, name: "Satin silk Paper Earrings - Eco Jewelry - Paper Jhumka...", price: "Rs. 900.00", imageUrl: img7, sku: "JHM407", options: ['1'] },
];

// Reusable Product Card Component (NOW FUNCTIONAL)
const ProductCard = ({ product }) => {
    // 👈 1. Option State: Dropdown selection को ट्रैक करें
    // Note: यहाँ option में quantity (string) या variant (string) हो सकता है।
    const [selectedOption, setSelectedOption] = useState(product.options.length > 0 ? product.options[0] : null); 
    
    // 👈 2. useCart Hook
    const { addToCart, toggleCartDrawer } = useCart();

    const handleAddToCart = (e) => {
      e.preventDefault(); 
      e.stopPropagation(); 
        
        // Quantity को parse करें (यदि ऑप्शन सिर्फ़ संख्या है)
        let quantity = 1;
        if (selectedOption && !isNaN(parseInt(selectedOption))) {
            quantity = parseInt(selectedOption);
        }

        // 👈 3. Cart में Item और Selected Option भेजें
        addToCart(
            product, 
            quantity, 
            { selectedOption: selectedOption } // Option (Variant/Volume/Count) भेजें
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
        <Link to={`/product/${product.sku}`} className="block text-sm font-medium text-gray-700 hover:text-indigo-600 mb-1 h-12 overflow-hidden">
          {product.name}
        </Link>
        
        {/* Price */}
        <p className="text-base font-semibold text-gray-900 mb-3">
          {product.price}
        </p>

        {/* Quantity Dropdown and Add to Cart */}
        <div className="flex items-center space-x-2">
          {/* Quantity Dropdown (Using options array) */}
          {product.options && product.options.length > 0 && (
                <select 
                    className="w-1/4 p-2 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)} // State अपडेट करें
                >
                    {product.options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            )}
        
            <button
              type="button"
              className="w-3/4 py-2 text-sm font-semibold text-white bg-neutral-800 rounded-md transition duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={handleAddToCart} // 👈 Updated Handler
            >
              ADD TO CART
            </button>
          </div>
        </div>
    </div>
  );
};

// Main Component
const SilkThreadJhumkaEarrings = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Header/Toolbar (Simplified) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200 flex justify-end items-center text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="hidden sm:block">Sort By</label>
          <select id="sort" className="border border-gray-300 rounded-md p-1 focus:ring-indigo-500 focus:border-indigo-500">
            <option>Best sellers</option>
            <option>Price: Low to High</option>
          </select>
        </div>
      </div>

      {/* 2. Product Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8 lg:grid-cols-4">
          {jhumkaProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SilkThreadJhumkaEarrings;