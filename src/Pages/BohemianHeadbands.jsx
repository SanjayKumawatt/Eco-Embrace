import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/headbands/img1.webp";
import img2 from "../assets/headbands/img2.webp";
import img3 from "../assets/headbands/img3.webp";
import img4 from "../assets/headbands/img4.webp";
import img5 from "../assets/headbands/img5.webp";

// --- Placeholder Product Data for Bohemian Headbands ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const headbandProducts = [
  // Row 1
  { 
    id: 2201, 
    name: "Rainbow Headbands | Masmerizing Hair wrap | Cotton Tie Dye Headbands...", 
    price: "Rs. 900.00", 
    imageUrl: img1, 
    sku: "HDB2201", 
    quantityOptions: ['1', '2', '3'] 
  },
  { 
    id: 2202, 
    name: "Purple Skies Headband | Cotton Tie Dye Headbands | Bohemian...", 
    price: "Rs. 900.00", 
    imageUrl: img2, 
    sku: "HDB2202", 
    quantityOptions: ['1', '2', '3'] 
  },
  { 
    id: 2203, 
    name: "Blue Sky Headbands | Cotton Tie Dye Headbands | Bohemian...", 
    price: "Rs. 900.00", 
    imageUrl:img3, 
    sku: "HDB2203", 
    quantityOptions: ['1', '2', '3'] 
  },
  { 
    id: 2204, 
    name: "Cotton Fabric Tie Dye Headband | Purple Color Bohemian Headbands...", 
    price: "Rs. 900.00", 
    imageUrl: img4, 
    sku: "HDB2204", 
    quantityOptions: ['1', '2', '3'] 
  },
  
  // Row 2
  { 
    id: 2205, 
    name: "Teal Headbands | Mesmerizing Hair wrap | Cotton Tie Dye Headbands...", 
    price: "Rs. 900.00", 
    imageUrl: img5, 
    sku: "HDB2205", 
    quantityOptions: ['1', '2', '3'] 
  },
];

// Reusable Product Card Component (No Cart Context used)
const ProductCard = ({ product }) => {
  // Option state for the dropdown (Quantity selection)
  const [selectedQuantity, setSelectedQuantity] = useState(product.quantityOptions[0]); 

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    
    // Cart logic replaced with a console log (as per your request)
    console.log(`Action: Attempted to add ${selectedQuantity} unit(s) of ${product.name} to cart.`);
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

        {/* Conditional Dropdown for Quantity */}
        {product.quantityOptions && product.quantityOptions.length > 0 && (
            <select 
                className="w-full p-2 mb-3 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(e.target.value)} // Update local state on change
            >
                {product.quantityOptions.map((qty, index) => (
                    <option key={index} value={qty}>{qty}</option>
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
const BohemianHeadbands = () => {
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
          {headbandProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BohemianHeadbands;