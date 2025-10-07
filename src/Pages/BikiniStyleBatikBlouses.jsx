import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/batik-blouses/img1.webp";
import img2 from "../assets/batik-blouses/img2.webp";
import img3 from "../assets/batik-blouses/img3.jpg";
import img4 from "../assets/batik-blouses/img4.webp";



// --- Placeholder Product Data for Bikini Style Batik Blouses ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const bikiniBlouseProducts = [
  // Item 1: Green Batik
  { 
    id: 4201, 
    name: "M/L Bust size 40\"/42\" | Soft Cotton Batik with Crochet...", 
    price: "Rs. 4,600.00", 
    imageUrl: img1, 
    sku: "BKB4201", 
    options: ['S/M - Fox (Bust 36"-40")', 'M/L (Bust 40"-42")', 'L/XL (Bust 42"-44")'] 
  },
  // Item 2: Orange Batik
  { 
    id: 4202, 
    name: "M/L Bust size 40\"/42\" | Soft Cotton Batik with Crochet...", 
    price: "Rs. 4,600.00", 
    imageUrl: img2, 
    sku: "BKB4202", 
    options: ['Green', 'Orange', 'Red'] 
  },
  // Item 3: Blue Batik
  { 
    id: 4203, 
    name: "S/M Bust size 36\"/40\" | Soft Cotton Batik with Crochet...", 
    price: "Rs. 4,600.00", 
    imageUrl: img3, 
    sku: "BKB4203", 
    options: ['S/M (Bust 36"-40") / Black', 'M/L (Bust 40"-42") / Red'] 
  },
  // Item 4: Red Batik
  { 
    id: 4204, 
    name: "L/XL Bust size 42\"/44\" | Soft Cotton Batik with Crochet...", 
    price: "Rs. 4,600.00", 
    imageUrl: img4, 
    sku: "BKB4204", 
    options: ['L/XL Bust 42"/44" / Orange', 'M/L Bust 40"/42" / Green'] 
  },
];

// Reusable Product Card Component (No Cart Context used)
const ProductCard = ({ product }) => {
  const [selectedOption, setSelectedOption] = useState(product.options[0]); 

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
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
        <Link to={`/product/${product.sku}`} className="block text-sm font-medium text-gray-700 hover:text-indigo-600 mb-2 h-10 overflow-hidden">
          {product.name}
        </Link>
        
        <p className="text-base font-semibold text-gray-900 mb-3">
          {product.price}
        </p>

        {/* Option Dropdown (Size/Color) */}
        {product.options && product.options.length > 0 && (
            <select 
                className="w-full p-2 mb-3 text-sm border border-gray-300 rounded-md focus:ring-neutral-800 focus:border-neutral-800"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
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
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

// --- Main Component ---
const BikiniStyleBatikBlouses = () => {
    return (
        <div className="bg-white min-h-screen">
            
            <h2 className="text-3xl font-bold text-center pt-10 pb-6 text-gray-800">Bikini Style Batik Blouses</h2>

            {/* Toolbar/Sorting Bar (Simple) */}
            <div className="container mx-auto px-4 py-4 border-b border-gray-200 flex justify-end items-center text-sm text-gray-600">
                <select className="border border-gray-300 rounded-md p-1">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                </select>
            </div>

            {/* Product Grid: 4-column layout */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8 lg:grid-cols-4"> 
                    {bikiniBlouseProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BikiniStyleBatikBlouses;