import React, { useState } from 'react'; // useState added for tracking selected option
import { Link } from 'react-router-dom';
// 👈 Cart Context को इम्पोर्ट करें (पाथ एडजस्ट करें)
import { useCart } from '../context/CartContext'; 

import img1 from "../assets/Bagru/img1.webp";
import img2 from "../assets/Bagru/img2.webp";
import img3 from "../assets/Bagru/img3.webp";
import img4 from "../assets/Bagru/img4.webp";

// --- Placeholder Product Data (Same) ---
export const bagruSareeProducts = [
  { 
    id: 1001, 
    name: "Unique Color mulmul Cotton Saree | Bagru Hand Block using...", 
    price: "Rs. 4,100.00", 
    imageUrl: img1, 
    sku: "BGR1001",
    options: ['Black/White Zigzag', 'Red/Black Diamond'] 
  },
  { 
    id: 1002, 
    name: "Sober Green mulmul Cotton saree | Bagru Hand Block prints...", 
    price: "Rs. 4,100.00", 
    imageUrl: img2, 
    sku: "BGR1002",
    options: ['Sober Chrome Green', 'Dusty Blue']
  },
  { 
    id: 1003, 
    name: "Beautiful orange block printed cotton saree with stitched blouse, Indian...", 
    price: "Rs. 5,000.00", 
    imageUrl: img3, 
    sku: "BGR1003",
    options: [] // No options for this one
  },
  { 
    id: 1004, 
    name: "Bagru Hand Block Print Saree | mulmul Cotton sarees...", 
    price: "Rs. 5,400.00", 
    imageUrl: img4, 
    sku: "BGR1004",
    options: ['CrisCross', 'Diamond Pattern']
  },
];

// Reusable Product Card Component (NOW FUNCTIONAL)
const ProductCard = ({ product }) => {
    // 👈 1. Option State: अगर options हैं तो पहला default चुनें
    const [selectedOption, setSelectedOption] = useState(product.options.length > 0 ? product.options[0] : null); 
    
    // 👈 2. useCart Hook
    const { addToCart, toggleCartDrawer } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault(); 
        e.stopPropagation(); 
        
        // 👈 3. Cart में Item और Selected Option भेजें
        addToCart(
            product, 
            1, 
            { selectedOption: selectedOption }
        );
        
        // Cart Drawer को खोलें
        toggleCartDrawer(); 
    };

    return (
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
                <Link to={`/product/${product.sku}`} className="block text-sm font-medium text-gray-700 hover:text-indigo-600 mb-2 h-10 overflow-hidden">
                    {product.name}
                </Link>

                <p className="text-base font-semibold text-gray-900 mb-3">
                    {product.price}
                </p>

                {/* Conditional Dropdown for Options */}
                {product.options && product.options.length > 0 && (
                    <select 
                        className="w-full p-2 mb-3 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        value={selectedOption} // 👈 Value state से लिंक करें
                        onChange={(e) => setSelectedOption(e.target.value)} // 👈 State अपडेट करें
                    >
                        {product.options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                )}
                {/* Note: If product.options is empty, dropdown will not show (as intended) */}

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
const BagruBlockPrintSarees = () => {
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
                    {bagruSareeProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BagruBlockPrintSarees;