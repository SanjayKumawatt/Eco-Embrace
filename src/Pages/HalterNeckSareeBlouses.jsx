import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 👈 Cart Context को इम्पोर्ट करें (पाथ एडजस्ट करें)
import { useCart } from '../context/CartContext'; 

import img1 from "../assets/halter-tops/img1.webp";
import img2 from "../assets/halter-tops/img2.webp";
import img3 from "../assets/halter-tops/img3.webp";
import img4 from "../assets/halter-tops/img4.jpg";
import img5 from "../assets/halter-tops/img5.webp";
import img6 from "../assets/halter-tops/img6.webp";
import img7 from "../assets/halter-tops/img7.webp";
import img8 from "../assets/halter-tops/img8.jpg";


// --- Placeholder Product Data for Halter Neck Blouses ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const halterBlouseProducts = [
  // Row 1
  { 
    id: 2001, 
    name: "Meher Ajrakh halter saree blouse | Red sparkles halter blouse halter tops for...", 
    price: "Rs. 1,700.00", 
    imageUrl: img1, 
    sku: "HLT2001", 
    sizes: ['M/L (Bust 40"-42")', 'L/XL (Bust 42"-44")', 'XL (Bust 44"-46")'] 
  },
  { 
    id: 2002, 
    name: "Meher Ajrakh halter saree blouse | Rare mauve color halter blouse halter tops...", 
    price: "Rs. 1,700.00", 
    imageUrl: img2, 
    sku: "HLT2002", 
    sizes: ['M/L (Bust 40"-42")', 'L/XL (Bust 42"-44")', 'XL (Bust 44"-46")'] 
  },
  { 
    id: 2003, 
    name: "Meher Ajrakh halter saree blouse | Mughal blue halter blouse halter tops for...", 
    price: "Rs. 1,700.00", 
    imageUrl: img3, 
    sku: "HLT2003", 
    sizes: ['M/L (Bust 40"-42")', 'L/XL (Bust 42"-44")', 'XL (Bust 44"-46")'] 
  },
  { 
    id: 2004, 
    name: "Meher Ajrakh halter saree blouse | Gray blue dainty halter blouse halter tops...", 
    price: "Rs. 1,700.00", 
    imageUrl: img4, 
    sku: "HLT2004", 
    sizes: ['M/L (Bust 40"-42")', 'L/XL (Bust 42"-44")', 'XL (Bust 44"-46")'] 
  },
  
  // Row 2
  { 
    id: 2005, 
    name: "Meher Ajrakh halter saree blouse | Chutney green halter blouse halter tops for...", 
    price: "Rs. 1,700.00", 
    imageUrl: img5, 
    sku: "HLT2005", 
    sizes: ['M/L (Bust 40"-42")', 'L/XL (Bust 42"-44")', 'XL (Bust 44"-46")'] 
  },
  { 
    id: 2006, 
    name: "Meher Ajrakh halter saree blouse | Black blue dainty halter blouse halter tops...", 
    price: "Rs. 1,700.00", 
    imageUrl: img6, 
    sku: "HLT2006", 
    sizes: ['M/L (Bust 40"-42")', 'L/XL (Bust 42"-44")', 'XL (Bust 44"-46")'] 
  },
  { 
    id: 2007, 
    name: "Meher Ajrakh halter saree blouse | halter tops to wear with sarees...", 
    price: "Rs. 1,700.00", 
    imageUrl: img7, 
    sku: "HLT2007", 
    sizes: ['S/M (Bust 38"-40")', 'M/L (Bust 40"-42")', 'L/XL (Bust 42"-44")'] 
  },
  { 
    id: 2008, 
    name: "Meher Ajrakh halter saree blouse | halter tops to wear with sarees...", 
    price: "Rs. 1,700.00", 
    imageUrl: img8, 
    sku: "HLT2008", 
    sizes: ['M/L (Bust 40"-42")', 'L/XL (Bust 42"-44")', 'XL (Bust 44"-46")'] 
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

// Main Component
const HalterNeckSareeBlouses = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Header/Toolbar (Filters and Sorting - Simplified) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200 flex justify-end items-center text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="hidden sm:block">Sort By</label>
          <select id="sort" className="border border-gray-300 rounded-md p-1 focus:ring-indigo-500 focus:border-indigo-500">
            <option>Newest Arrivals</option>
            <option>Price: Low to High</option>
          </select>
        </div>
      </div>

      {/* 2. Product Grid (4 columns) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8 lg:grid-cols-4">
          {halterBlouseProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HalterNeckSareeBlouses;