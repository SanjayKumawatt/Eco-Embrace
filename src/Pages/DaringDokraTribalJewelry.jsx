import React, { useState } from 'react'; // useState added
import { Link } from 'react-router-dom';
// 👈 Cart Context को इम्पोर्ट करें (पाथ एडजस्ट करें)
import { useCart } from '../context/CartContext'; 


import img1 from "../assets/dokra-craft-jewelry/img1.webp";
import img2 from "../assets/dokra-craft-jewelry/img2.webp";
import img3 from "../assets/dokra-craft-jewelry/img3.webp";
import img4 from "../assets/dokra-craft-jewelry/img4.webp";
import img5 from "../assets/dokra-craft-jewelry/img5.webp";
import img6 from "../assets/dokra-craft-jewelry/img6.webp";
import img7 from "../assets/dokra-craft-jewelry/img7.webp";
import img8 from "../assets/dokra-craft-jewelry/img8.webp";


// --- Placeholder Product Data for Dokra Tribal Jewelry ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const dokraProducts = [
    // Row 1
    { id: 301, name: "Geometric Pendants - Dokra Lost Wax Method Brass Pendant Earring...", price: "Rs. 1,598.00", imageUrl: img1, sku: "DKR301", quantityOptions: ['1', '2', '3'] },
    { id: 302, name: "DHOKRA TRIBAL NECKLACE - Gunguru Choker Necklace, Classic Handcrafted...", price: "Rs. 5,900.00", imageUrl: img2, sku: "DKR302", quantityOptions: ['1', '2'] },
    { id: 303, name: "Geometric Pendants - Dokra Lost Wax Method Brass Pendant Earring...", price: "Rs. 1,598.00", imageUrl: img3, sku: "DKR303", quantityOptions: ['1', '2', '3'] },
    { id: 304, name: "DHOKRA TRIBAL NECKLACE - Evening Sun Rays Necklace, Antique Sun...", price: "Rs. 4,400.00", imageUrl: img4, sku: "DKR304", quantityOptions: ['1'] },

    // Row 2
    { id: 305, name: "DHOKRA TRIBAL NECKLACE - Chariot Rays Necklace, Handcrafted Pendant Necklace...", price: "Rs. 5,000.00", imageUrl: img5, sku: "DKR305", quantityOptions: ['1', '2'] },
    { id: 306, name: "DHOKRA TRIBAL NECKLACE - Uma Princess Necklace, Antique Princess Brass...", price: "Rs. 1,900.00", imageUrl: img6, sku: "DKR306", quantityOptions: ['1'] },
    { id: 307, name: "DHOKRA TRIBAL NECKLACE - Dokra Orissa Necklace, Handcrafted Pendant...", price: "Rs. 1,900.00", imageUrl: img7, sku: "DKR307", quantityOptions: ['1', '2', '3'] },
    { id: 308, name: "DHOKRA TRIBAL NECKLACE - Rustic Craft Product Necklace, Multicolor Squares Brass...", price: "Rs. 1,900.00", imageUrl: img8, sku: "DKR308", quantityOptions: ['1'] },
];

// Reusable Product Card Component (NOW FUNCTIONAL)
const ProductCard = ({ product }) => {
    // Dropdown options
    const options = product.quantityOptions || ['1']; 
    
    // 👈 1. Quantity State: Dropdown selection को ट्रैक करें
    const [selectedQuantity, setSelectedQuantity] = useState(options[0]); 
    
    // 👈 2. useCart Hook
    const { addToCart, toggleCartDrawer } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault(); 
        e.stopPropagation(); 
        
        // 👈 3. Cart में Item और Selected Quantity (number में) भेजें
        addToCart(
            product, 
            parseInt(selectedQuantity), // Quantity को integer में कन्वर्ट करें
            {} // कोई ऑप्शन नहीं, सिर्फ़ क्वांटिटी
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
                <Link to={`/product/${product.sku}`} className="block text-sm font-medium text-gray-700 hover:text-indigo-600 mb-1 h-12 overflow-hidden">
                    {product.name}
                </Link>

                {/* Price */}
                <p className="text-base font-semibold text-gray-900 mb-3">
                    {product.price}
                </p>

                {/* Quantity Dropdown and Add to Cart */}
                <div className="flex items-center space-x-2">
                    {/* Quantity Dropdown */}
                    {product.quantityOptions && product.quantityOptions.length > 0 && (
                        <select
                            className="w-1/4 p-2 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            value={selectedQuantity}
                            onChange={(e) => setSelectedQuantity(e.target.value)}
                        >
                            {options.map((qty, index) => (
                                <option key={index} value={qty}>{qty}</option>
                            ))}
                        </select>
                    )}
                    
                    <button
                        type="button"
                        className="w-3/4 py-2 text-sm font-semibold text-white bg-neutral-800 rounded-md transition duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onClick={handleAddToCart} // 👈 Updated Handler
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
};

// Main Component
const DaringDokraTribalJewelry = () => {
    return (
        <div className="bg-white min-h-screen">

            {/* 1. Header/Toolbar (Simplified) */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200 flex justify-end items-center text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                    <label htmlFor="sort" className="hidden sm:block">Sort By</label>
                    <select id="sort" className="border border-gray-300 rounded-md p-1 focus:ring-indigo-500 focus:border-indigo-500">
                        <option>Best sellers</option>
                        <option>Price: Low to High</option>
                    </select>
                </div>
            </div>

            {/* 2. Product Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8 lg:grid-cols-4">
                    {dokraProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DaringDokraTribalJewelry;