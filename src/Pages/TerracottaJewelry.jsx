import React from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/earth-tones-terracotta-jewelry/img1.webp";
import img2 from "../assets/earth-tones-terracotta-jewelry/img2.webp";
import img3 from "../assets/earth-tones-terracotta-jewelry/img3.webp";
import img4 from "../assets/earth-tones-terracotta-jewelry/img4.jpg";
import img5 from "../assets/earth-tones-terracotta-jewelry/img5.webp";
import img6 from "../assets/earth-tones-terracotta-jewelry/img6.jpg";
import img7 from "../assets/earth-tones-terracotta-jewelry/img7.jpg";
import img8 from "../assets/earth-tones-terracotta-jewelry/img8.webp";

// --- Placeholder Product Data for Terracotta Jewelry ---
// Note: Replace the image imports/paths with your actual assets
export const terracottaProducts = [
  // Row 1
  { id: 201, name: "New Beginnings GOODLUCK Pendants Mural Terracotta Pendant Ear...", price: "Rs. 2,790.00", imageUrl: img1, sku: "TC201" },
  { id: 202, name: "3 Layer Antique Karen Set Terracotta Jewelry in USA |...", price: "Rs. 990.00", imageUrl: img2, sku: "TC202" },
  { id: 203, name: "Clay Stud Earrings Artisan Handmade Jewelry Organic Natural Eco Friendly...", price: "Rs. 990.00", imageUrl: img3, sku: "TC203" },
  { id: 204, name: "Clay Stud Earrings Artisan Handmade Jewelry Organic Natural Eco Friendly...", price: "Rs. 990.00", imageUrl: img4, sku: "TC204" },
  // Row 2
  { id: 205, name: "Clay Stud Earrings Artisan Handmade Jewelry Organic Natural Eco Friendly...", price: "Rs. 990.00", imageUrl: img5, sku: "TC205" },
  { id: 206, name: "Artisan Handmade Ecofriendly Handpainted Terracotta Dangler Earrings - Earrings...", price: "Rs. 990.00", imageUrl: img6, sku: "TC206" },
  { id: 207, name: "Artisan Handmade Ecofriendly Handpainted Terracotta Dangler Earrings - Earrings...", price: "Rs. 990.00", imageUrl: img7, sku: "TC207" },
  { id: 208, name: "Clay Stud Earrings Artisan Handmade Jewelry Organic Natural Eco Friendly...", price: "Rs. 990.00", imageUrl: img8, sku: "TC208" },
];

// Reusable Product Card Component
const ProductCard = ({ product }) => (
  <div className="bg-white border border-gray-100 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl group">
    
    {/* Product Image Link */}
    {/* Link directs to the PDP route: /product/TCxxx */}
    <Link to={`/product/${product.sku}`} className="block w-full h-64 sm:h-72 overflow-hidden bg-gray-50">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
    </Link>

    {/* Product Details and CTA */}
    <div className="p-3 text-center">
      {/* Product Name Link */}
      <Link to={`/product/${product.sku}`} className="block text-xs font-medium text-gray-700 hover:text-indigo-600 mb-2 h-10 overflow-hidden">
        {product.name}
      </Link>
      
      {/* Price */}
      <p className="text-base font-semibold text-gray-900 mb-3">
        {product.price}
      </p>

      {/* Quantity Control and ADD TO CART */}
      <div className="flex items-center space-x-2">
        {/* Quantity Dropdown (Simplified as a select element) */}
        <select 
            className="w-1/4 p-2 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue="1"
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            {/* Add more options as needed */}
        </select>
        
        {/* Add to Cart Button */}
        <button
          type="button"
          className="w-3/4 py-2 text-sm font-semibold text-white bg-neutral-800 rounded-md transition duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => console.log(`Adding ${product.name} to cart`)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
);

// Main Component
const TerracottaJewelry = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Header/Toolbar (Filters and Sorting - Simplified) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200 flex justify-end items-center text-sm text-gray-600">
        
        {/* Sort By (Simplified to match the available space in the toolbar) */}
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="hidden sm:block">Sort By</label>
          <select id="sort" className="border border-gray-300 rounded-md p-1 focus:ring-indigo-500 focus:border-indigo-500">
            <option>Best sellers</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* 2. Product Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8 lg:grid-cols-4">
          {terracottaProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TerracottaJewelry;