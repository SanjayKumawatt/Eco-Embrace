import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/benarsi-brocade-blouses/img1.webp";
import img2 from "../assets/benarsi-brocade-blouses/img2.webp";
import img3 from "../assets/benarsi-brocade-blouses/img3.webp";
import img4 from "../assets/benarsi-brocade-blouses/img4.webp";
import img5 from "../assets/benarsi-brocade-blouses/img5.webp";



// --- Placeholder Product Data for Banarasi Brocade Blouses ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const banarasiBlouseProducts = [
  // Row 1
  { 
    id: 1301, 
    name: "Plain Pink Blouse with Banarasi sleeves | Designer Blouse...", 
    price: "Rs. 4,500.00", 
    imageUrl: img1, 
    sku: "BNS1301", 
    sizes: ['S/M (Bust 38"-40")', 'M/L (Bust 42"-44")', 'XL (Bust 46"-48")'] 
  },
  { 
    id: 1302, 
    name: "Plain Black Blouse with Banarasi sleeves | Designer Blouse Readymade...", 
    price: "Rs. 4,500.00", 
    imageUrl: img2, 
    sku: "BNS1302", 
    sizes: ['S/M (Bust 38"-40")', 'M/L (Bust 42"-44")', 'XL (Bust 46"-48")'] 
  },
  { 
    id: 1303, 
    name: "Hot Rani Pink Banarasi blouse, Banarasi Designer Blouse Readymade...", 
    price: "Rs. 4,500.00", 
    imageUrl: img3, 
    sku: "BNS1303", 
    sizes: ['S/M (Bust 38"-40")', 'M/L (Bust 42"-44")', 'XL (Bust 46"-48")'] 
  },
  { 
    id: 1304, 
    name: "Rani Gold Brocade blouse, Readymade Designer Blouses Readymade Saree...", 
    price: "Rs. 4,500.00", 
    imageUrl: img4, 
    sku: "BNS1304", 
    sizes: ['S/M (Bust 38"-40")', 'M/L (Bust 42"-44")', 'XL (Bust 46"-48")'] 
  },
  
  // Row 2
  { 
    id: 1305, 
    name: "Maroon/Maroon Gold Brocade blouse, Readymade Designer Blouses Readymade Saree...", 
    price: "Rs. 4,500.00", 
    imageUrl: img5, 
    sku: "BNS1305", 
    sizes: ['S/M (Bust 38"-40")', 'M/L (Bust 42"-44")', 'XL (Bust 46"-48")'] 
  },
];

// Reusable Product Card Component (No Cart Context used)
const ProductCard = ({ product }) => {
  // Size state is still needed to manage the dropdown selection
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]); 

  // No useCart hook/import
  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    
    // Cart logic replaced with a console log (as per your request)
    console.log(`Action: Attempted to add ${product.name} with size ${selectedSize} to cart.`);
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
        <Link to={`/product/${product.sku}`} className="block text-sm font-medium text-gray-700 hover:text-indigo-600 mb-1 h-10 overflow-hidden">
          {product.name}
        </Link>
        
        {/* Price */}
        <p className="text-base font-semibold text-gray-900 mb-3">
          {product.price}
        </p>

        {/* Size Dropdown */}
        {product.sizes && product.sizes.length > 0 && (
            <select 
                className="w-full p-2 mb-3 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)} // Update local state on change
            >
                {product.sizes.map((size, index) => (
                    <option key={index} value={size}>{size}</option>
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
const BanarasiBrocadeBlouses = () => {
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
          {banarasiBlouseProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BanarasiBrocadeBlouses;