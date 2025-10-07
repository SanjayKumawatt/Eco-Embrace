import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/skirts/img1.webp";
import img2 from "../assets/skirts/img2.webp";
import img3 from "../assets/skirts/img3.webp";
import img4 from "../assets/skirts/img4.webp";
import img5 from "../assets/skirts/img5.webp";
import img6 from "../assets/skirts/img6.webp";


// --- Placeholder Product Data for Long Skirts ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const longSkirtsProducts = [
  // Item 1: Blue Indigo Skirt
  { 
    id: 1801, 
    name: "5 meter Super Flair Indigo Skirts | HandBlock Printed leg...", 
    price: "Rs. 7,700.00", 
    imageUrl: img1, 
    sku: "LGS1801", 
    options: [] 
  },
  // Item 2: Red Bandini Skirt
  { 
    id: 1802, 
    name: "Women's Bandini sequins work Bollywood Skirts, with soft les Waist...", 
    price: "Rs. 2,300.00", 
    imageUrl: img2, 
    sku: "LGS1802", 
    options: ['Red/Brown', 'Yellow/Green', 'Blue/Navy'] // Example dropdown
  },
  // Item 3: Yellow Ethnic Skirt
  { 
    id: 1803, 
    name: "Ethnic Skirt with necklace set/Women's Long Indian Festive Dance skirts...", 
    price: "Rs. 4,100.00", 
    imageUrl: img3, 
    sku: "LGS1803", 
    options: [] 
  },
  // Item 4: Pink Ethnic Skirt
  { 
    id: 1804, 
    name: "Pink Yellow Ethnic Skirt with necklace set /Women's Long Indian...", 
    price: "Rs. 4,100.00", 
    imageUrl: img4, 
    sku: "LGS1804", 
    options: [] 
  },
  // Adding more products for a full grid effect
  { 
    id: 1805, 
    name: "Vibrant Patchwork Skirt | Mirror work cotton skirt...", 
    price: "Rs. 3,500.00", 
    imageUrl: img5, 
    sku: "LGS1805", 
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
const LongSkirts = () => {
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
          {longSkirtsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LongSkirts;