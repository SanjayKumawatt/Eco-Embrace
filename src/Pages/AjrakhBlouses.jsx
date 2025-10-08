import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 👈 Cart Context को इम्पोर्ट करें (पाथ एडजस्ट करें)
import { useCart } from '../context/CartContext'; 

// --- Image Imports (Keep them as they are) ---
import img1 from "../assets/ajrakh-blouses/img1.webp";
// ... (rest of the img imports)
import img16 from "../assets/ajrakh-blouses/img16.webp";

// --- Placeholder Product Data (Same) ---
export const ajrakhBlouseProducts = [
    // ... (Your product data remains the same)
    { id: 4101, name: "Red in cross dyed cotton Ajrakh plain blouse...", price: "Rs. 3,900.00", imageUrl: img1, sku: "AJR4101", sizes: ['S/M (38"-40")', 'M/L (40"-42")', 'L/XL (42"-44")'] },
    // ... (all 16 products)
];

// Reusable Product Card Component (NOW FUNCTIONAL)
const ProductCard = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    
    // 👈 useCart Hook का उपयोग करें
    const { addToCart, toggleCartDrawer } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // 👈 1. addToCart को कॉल करें, साथ में selectedSize को option में भेजें
        addToCart(
            product, 
            1, // Quantity 1
            { selectedOption: selectedSize } // Size option
        );
        
        // 👈 2. Cart Drawer को खोलें ताकि यूजर देख सके कि आइटम ऐड हो गया है
        toggleCartDrawer(); 
        
        console.log(`Added ${product.name} with size ${selectedSize} to cart.`);
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
                        onChange={(e) => setSelectedSize(e.target.value)}
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
                    onClick={handleAddToCart} // 👈 Updated handler
                >
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

// --- Main Component ---
const AjrakhBlouses = () => {
    return (
        <div className="bg-white min-h-screen">
            
            <h2 className="text-3xl font-bold text-center pt-10 pb-6 text-gray-800">Ajrakh Handblock Print Blouses</h2>

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
                    {ajrakhBlouseProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AjrakhBlouses;