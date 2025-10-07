import React from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/maheshwari-sarees/img1.webp";
import img2 from "../assets/maheshwari-sarees/img2.webp";
import img3 from "../assets/maheshwari-sarees/img3.webp";
import img4 from "../assets/maheshwari-sarees/img4.webp";

// --- Placeholder Product Data for Maheshwari Silk Sarees ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const maheshwariSareeProducts = [
  { 
    id: 701, 
    name: "Mung green & black Maheshwari Handloom saree with matching handmade...", 
    price: "Rs. 13,500.00", 
    imageUrl: img1, 
    sku: "MHS701" 
  },
  { 
    id: 702, 
    name: "Maheshwari Handloom Silk Saree | Anniversary Gift sarees | Genuine...", 
    price: "Rs. 10,800.00", 
    imageUrl:img2, 
    sku: "MHS702" 
  },
  { 
    id: 703, 
    name: "Daffodil Pure Maheshwari silk saree | 50/50 Handwoven Cotton Silk...", 
    price: "Rs. 11,900.00", 
    imageUrl: img3, 
    sku: "MHS703" 
  },
  { 
    id: 704, 
    name: "Baby Pink Maheshwari Handloom Silk Saree | Genuine Handloom mark...", 
    price: "Rs. 9,900.00", 
    imageUrl: img4, 
    sku: "MHS704" 
  },
];

// Reusable Product Card Component (Same as previous grids)
const ProductCard = ({ product }) => (
  <div className="bg-white border border-gray-100 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl group">
    
    {/* Product Image Link */}
    <Link to={`/product/${product.sku}`} className="block w-full h-64 sm:h-72 overflow-hidden bg-gray-50">
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
const MaheshwariSilkSarees = () => {
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
          {maheshwariSareeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaheshwariSilkSarees;