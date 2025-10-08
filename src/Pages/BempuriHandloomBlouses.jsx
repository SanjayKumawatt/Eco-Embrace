import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 👈 Cart Context को इम्पोर्ट करें (पाथ एडजस्ट करें)
import { useCart } from '../context/CartContext'; 

import img1 from "../assets/handloom-blouses/img1.webp";
import img2 from "../assets/handloom-blouses/img2.webp";
import img3 from "../assets/handloom-blouses/img3.webp";


// --- Placeholder Product Data for Bempuri Handloom Blouses ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const bempuriBlouseProducts = [
  // Item 1: White Bempuri
  { 
    id: 4301, 
    name: "White Bempuri Handloom Cotton Blouse/Long Sleeves saree blouse | Designer Saree...", 
    price: "Rs. 4,500.00", 
    imageUrl: img1, 
    sku: "BMP4301", 
    sizes: ['S (Bust 38"/40")', 'M (Bust 40"/42")', 'L (Bust 42"/44")'] 
  },
  // Item 2: Black Bempuri
  { 
    id: 4302, 
    name: "Black Bempuri Handloom Cotton Blouse/Long Sleeves saree blouse | Designer Saree...", 
    price: "Rs. 4,500.00", 
    imageUrl: img2, 
    sku: "BMP4302", 
    sizes: ['S (Bust 36"/38")', 'M (Bust 38"/40")', 'L (Bust 40"/42")'] 
  },
  // Item 3: White V-neck Bempuri
  { 
    id: 4303, 
    name: "White Bempuri Handloom Blouse /V neck short sleeves saree blouse | Designer...", 
    price: "Rs. 4,500.00", 
    imageUrl: img3, 
    sku: "BMP4303", 
    sizes: ['L/XL (Bust 42"/44")', 'M/L (Bust 40"/42")', 'XL (Bust 44"/46")'] 
  },
];

// Reusable Product Card Component (NOW FUNCTIONAL)
const ProductCard = ({ product }) => {
    // 👈 1. Size State: Dropdown selection को ट्रैक करें
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]); 

    // 👈 2. useCart Hook
    const { addToCart, toggleCartDrawer } = useCart();

    const handleAddToCart = (e) => {
      e.preventDefault(); 
      e.stopPropagation(); 
        
        // 👈 3. Cart में Item और Selected Size भेजें
        addToCart(
            product, 
            1, 
            { selectedOption: selectedSize } // Size option
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
          <Link to={`/product/${product.sku}`} className="block text-sm font-medium text-gray-700 hover:text-indigo-600 mb-2 h-10 overflow-hidden">
            {product.name}
          </Link>
          
          <p className="text-base font-semibold text-gray-900 mb-3">
            {product.price}
          </p>

          {/* Size Dropdown */}
          {product.sizes && product.sizes.length > 0 && (
              <select 
                  className="w-full p-2 mb-3 text-sm border border-gray-300 rounded-md focus:ring-neutral-800 focus:border-neutral-800"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)} // State अपडेट करें
              >
                  {product.sizes.map((size, index) => (
                      <option key={index} value={size}>{size}</option>
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

// --- Main Component ---
const BempuriHandloomBlouses = () => {
    return (
        <div className="bg-white min-h-screen">
            
            <h2 className="text-3xl font-bold text-center pt-10 pb-6 text-gray-800">Bempuri Handloom Blouses</h2>

            {/* Toolbar/Sorting Bar (Simple) */}
            <div className="container mx-auto px-4 py-4 border-b border-gray-200 flex justify-end items-center text-sm text-gray-600">
                <select className="border border-gray-300 rounded-md p-1">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                </select>
            </div>

            {/* Product Grid: 3-column layout */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 max-w-4xl mx-auto"> 
                    {bempuriBlouseProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BempuriHandloomBlouses;