import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/kurtis/img1.webp";
import img2 from "../assets/kurtis/img2.webp";
import img3 from "../assets/kurtis/img3.webp";
import img4 from "../assets/kurtis/img4.webp";
import img5 from "../assets/kurtis/img5.webp";
import img6 from "../assets/kurtis/img6.webp";
import img7 from "../assets/kurtis/img7.webp";
import img8 from "../assets/kurtis/img8.webp";

// --- Placeholder Product Data for Women's Kurtis ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const kurtiProducts = [
  // Row 1
  { 
    id: 1601, 
    name: "L-size Lime Green Kurti | Handloom Kurtis | Indian...", 
    price: "Rs. 3,800.00", 
    imageUrl: img1, 
    sku: "KRT1601", 
    sizes: ['L (Bust 40")', 'M (Bust 38")', 'XL (Bust 42")'] 
  },
  { 
    id: 1602, 
    name: "Pink/Tree Block Print High neck Kurtis | Cotton Tunic Kurta...", 
    price: "Rs. 3,700.00", 
    imageUrl: img2, 
    sku: "KRT1602", 
    sizes: ['S (36")', 'M (38")', 'L (40")'] 
  },
  { 
    id: 1603, 
    name: "White sleeveless Tunic | Women's 3/4th Tunics | Kurti...", 
    price: "Rs. 4,100.00", 
    imageUrl: img3, 
    sku: "KRT1603", 
    sizes: ['M (Bust 40")', 'L (Bust 42")', 'XL (Bust 44")'] 
  },
  { 
    id: 1604, 
    name: "Dandelion Yellow Tunic | Women's Solid Short Tunics | Kurti...", 
    price: "Rs. 3,900.00", 
    imageUrl: img4, 
    sku: "KRT1604", 
    sizes: ['M (Bust 40")', 'L (Bust 42")', 'XL (Bust 44")'] 
  },
  
  // Row 2
  { 
    id: 1605, 
    name: "Pink Long Gown Hand Block Print cotton Kurtis | Long...", 
    price: "Rs. 4,400.00", 
    imageUrl: img5, 
    sku: "KRT1605", 
    sizes: ['S (Bust 36")', 'M (Bust 38")', 'L (Bust 40")'] 
  },
  { 
    id: 1606, 
    name: "Polka Dots Long Gown Hand Block Print cotton Kurta | Long...", 
    price: "Rs. 4,400.00", 
    imageUrl: img6, 
    sku: "KRT1606", 
    sizes: ['S (Bust 36")', 'M (Bust 38")', 'L (Bust 40")'] 
  },
  { 
    id: 1607, 
    name: "Sleeveless Tunics for women | Hand Block Print Tunic in Rust/Orange...", 
    price: "Rs. 3,300.00", 
    imageUrl: img7, 
    sku: "KRT1607", 
    sizes: ['M (Bust 40")', 'L (Bust 42")', 'XL (Bust 44")'] 
  },
  { 
    id: 1608, 
    name: "Hot Pink Tunic | Women's Solid Short Tunics | Kurti...", 
    price: "Rs. 3,900.00", 
    imageUrl: img8, 
    sku: "KRT1608", 
    sizes: ['M (Bust 40")', 'L (Bust 42")', 'XL (Bust 44")'] 
  },
];

// Reusable Product Card Component (No Cart Context used)
const ProductCard = ({ product }) => {
  // Size state is still needed to manage the dropdown selection
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]); 

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
        <Link to={`/product/${product.sku}`} className="block text-sm font-medium text-gray-700 hover:text-indigo-600 mb-2 h-10 overflow-hidden">
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
const WomenKurtis = () => {
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
          {kurtiProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenKurtis;