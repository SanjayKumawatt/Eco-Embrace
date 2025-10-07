import React from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/chettinad-south-cotton-sarees/img1.webp";
import img2 from "../assets/chettinad-south-cotton-sarees/img2.webp";
import img3 from "../assets/chettinad-south-cotton-sarees/img3.jpg";

// --- Placeholder Product Data for South Cotton Sarees ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const southCottonSareeProducts = [
  { 
    id: 901, 
    name: "Classic South Cotton sari | Peacock saree | Thalamboo design |...", 
    price: "Rs. 4,100.00", 
    imageUrl: img1, 
    sku: "SCS901",
    options: ['Red/Pink Peacock', 'Blue/Green Peacock'] // Example dropdown option
  },
  { 
    id: 902, 
    name: "Double Shaded South Cotton Saree | Triple Tone Saree |...", 
    price: "Rs. 6,300.00", 
    imageUrl: img2, 
    sku: "SCS902",
    options: []
  },
  { 
    id: 903, 
    name: "Kanchi South Cotton | Dark Eggplant Purple with Tissue Zari...", 
    price: "Rs. 4,700.00", 
    imageUrl: img3, 
    sku: "SCS903",
    options: []
  },
];

// Reusable Product Card Component (with conditional dropdown)
const ProductCard = ({ product }) => (
  <div className="bg-white border border-gray-100 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl group">
    
    {/* Product Image Link */}
    <Link to={`/product/${product.sku}`} className="block w-full h-80 sm:h-96 overflow-hidden bg-gray-50">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    </Link>

    {/* Product Details and CTA */}
    <div className="p-4 text-center">
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
              defaultValue={product.options[0]}
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
        onClick={() => console.log(`Adding ${product.name} to cart`)}
      >
        ADD TO CART
      </button>
    </div>
  </div>
);

// Main Component
const SouthCottonSarees = () => {
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

      {/* 2. Product Grid (3 columns) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {southCottonSareeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SouthCottonSarees;