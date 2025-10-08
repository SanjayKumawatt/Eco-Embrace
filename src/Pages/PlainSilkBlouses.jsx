import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 👈 Cart Context को इम्पोर्ट करें (पाथ एडजस्ट करें)
import { useCart } from '../context/CartContext'; 

import img1 from "../assets/plain-silk-blouses/img1.webp";
import img2 from "../assets/plain-silk-blouses/img2.webp";
import img3 from "../assets/plain-silk-blouses/img3.webp";
import img4 from "../assets/plain-silk-blouses/img4.webp";
import img5 from "../assets/plain-silk-blouses/img5.webp";
import img6 from "../assets/plain-silk-blouses/img6.webp";
import img7 from "../assets/plain-silk-blouses/img7.webp";
import img8 from "../assets/plain-silk-blouses/img8.webp";

// --- Placeholder Product Data for Plain Silk Blouses ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const plainBlouseProducts = [
  // Row 1
  { 
    id: 3801, 
    name: "Parrot Green plain silk blouses Bridesmaids Designer Blouses, Readymade Saree Blouse...", 
    price: "Rs. 4,100.00", 
    imageUrl: img1, 
    sku: "PSB3801", 
    sizes: ['L/XL (Bust 42"-44")', 'S/M (Bust 38"-40")', 'M/L (Bust 40"-42")'] 
  },
  { 
    id: 3802, 
    name: "Elegant Grey plain silk blouses Bridesmaids Designer Blouses, Readymade Saree Blouse...", 
    price: "Rs. 4,100.00", 
    imageUrl: img2, 
    sku: "PSB3802", 
    sizes: ['L/XL (Bust 42"-44")', 'S/M (Bust 38"-40")', 'M/L (Bust 40"-42")'] 
  },
  { 
    id: 3803, 
    name: "Rare Light Pink silk blouses Bridesmaids Designer Blouses, Readymade Sari Blouse...", 
    price: "Rs. 4,500.00", 
    imageUrl: img3, 
    sku: "PSB3803", 
    sizes: ['M/L (Bust 40"-42")', 'L/XL (Bust 42"-44")', 'XL (Bust 44"-46")'] 
  },
  { 
    id: 3804, 
    name: "Rani Pink silk blouses Bridesmaids Designer Blouses, Readymade Sari Blouse...", 
    price: "Rs. 4,500.00", 
    imageUrl: img4, 
    sku: "PSB3804", 
    sizes: ['S/M (Bust 38"-40")', 'M/L (Bust 40"-42")', 'L/XL (Bust 42"-44")'] 
  },
  
  // Row 2
  { 
    id: 3805, 
    name: "Emerald Green Plain silk elbow blouses/Bridesmaids Designer Blouses", 
    price: "Rs. 4,100.00", 
    imageUrl: img5, 
    sku: "PSB3805", 
    sizes: ['S/M (Bust 38"-40")', 'M/L (Bust 40"-42")', 'L/XL (Bust 42"-44")'] 
  },
  { 
    id: 3806, 
    name: "Turquoise sleeveless blouse / Party wear Designer Blouse, Readymade...", 
    price: "Rs. 3,500.00", 
    imageUrl: img6, 
    sku: "PSB3806", 
    sizes: ['M/L (Bust 40"-42")', 'L/XL (Bust 42"-44")', 'XL (Bust 44"-46")'] 
  },
  { 
    id: 3807, 
    name: "Turquoise Blue plain silk blouses Bridesmaids Designer Blouses, Readymade Saree Blouse...", 
    price: "Rs. 4,100.00", 
    imageUrl: img7, 
    sku: "PSB3807", 
    sizes: ['S/M (Bust 38"-40")', 'M/L (Bust 40"-42")', 'L/XL (Bust 42"-44")'] 
  },
  { 
    id: 3808, 
    name: "Tomato Red sleeveless blouse / Party wear Designer Blouse, Readymade...", 
    price: "Rs. 3,900.00", 
    imageUrl: img8, 
    sku: "PSB3808", 
    sizes: ['L/XL (Bust 42"-44")', 'S/M (Bust 38"-40")', 'M/L (Bust 40"-42")'] 
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
const PlainSilkBlouses = () => {
    return (
        <div className="bg-white min-h-screen">
            
            <h2 className="text-3xl font-bold text-center pt-10 pb-6 text-gray-800">Plain Silk Blouses</h2>

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
                    {plainBlouseProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlainSilkBlouses;