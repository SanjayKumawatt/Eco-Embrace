import React from 'react';
import { Link } from 'react-router-dom';


import img1 from "../assets/tussar-silk-sarees/img1.webp";
import img2 from "../assets/tussar-silk-sarees/img2.webp";
import img3 from "../assets/tussar-silk-sarees/img3.webp";


// --- Placeholder Product Data for Tussar Silk Sarees ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const sareeProducts = [
  { 
    id: 501, 
    name: "Rarefinds Dark Gray Wedding Silk Saree | Tussar Gicha silk...", 
    price: "Rs. 12,200.00", 
    imageUrl: img1, 
    sku: "SRE501" 
  },
  { 
    id: 502, 
    name: "Rare Green Pure Tussar silk saree | Tussar Gicha silk...", 
    price: "Rs. 11,300.00", 
    imageUrl: img2, 
    sku: "SRE502" 
  },
  { 
    id: 503, 
    name: "Classy Black in Copper zari border silk saree | Tussar...", 
    price: "Rs. 10,900.00", 
    imageUrl: img3, 
    sku: "SRE503" 
  }
];

// Reusable Product Card Component
const ProductCard = ({ product }) => (
  // Note: Using a standard flex basis or w-full for the grid items
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
const TussarSilkSarees = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Header/Toolbar (Filters and Sorting - Simplified) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200 flex justify-end items-center text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="hidden sm:block">Sort By</label>
          <select id="sort" className="border border-gray-300 rounded-md p-1 focus:ring-indigo-500 focus:border-indigo-500">
            <option>Price: High to Low</option>
            <option>Best sellers</option>
          </select>
        </div>
      </div>

      {/* 2. Product Grid (Using 3 columns for better visualization) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {sareeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TussarSilkSarees;