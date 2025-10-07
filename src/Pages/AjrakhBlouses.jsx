import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/ajrakh-blouses/img1.webp";
import img2 from "../assets/ajrakh-blouses/img2.webp";
import img3 from "../assets/ajrakh-blouses/img3.webp";
import img4 from "../assets/ajrakh-blouses/img4.webp";
import img5 from "../assets/ajrakh-blouses/img5.webp";
import img6 from "../assets/ajrakh-blouses/img6.webp";
import img7 from "../assets/ajrakh-blouses/img7.webp";
import img8 from "../assets/ajrakh-blouses/img8.webp";
import img9 from "../assets/ajrakh-blouses/img9.jpg";
import img10 from "../assets/ajrakh-blouses/img10.jpg";
import img11 from "../assets/ajrakh-blouses/img11.webp";
import img12 from "../assets/ajrakh-blouses/img12.jpg";
import img13 from "../assets/ajrakh-blouses/img13.webp";
import img14 from "../assets/ajrakh-blouses/img14.webp";
import img15 from "../assets/ajrakh-blouses/img15.webp";
import img16 from "../assets/ajrakh-blouses/img16.webp";

// --- Placeholder Product Data for Ajrakh Blouses ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const ajrakhBlouseProducts = [
    // Row 1
    {
        id: 4101,
        name: "Red in cross dyed cotton Ajrakh plain blouse, Readymade Saree Blouses...",
        price: "Rs. 3,900.00",
        imageUrl: img1,
        sku: "AJR4101",
        sizes: ['S/M (38"-40")', 'M/L (40"-42")', 'L/XL (42"-44")']
    },
    {
        id: 4102,
        name: "Blue readymade cotton Ajrakh plain blouse, Readymade Saree Blouses...",
        price: "Rs. 3,500.00",
        imageUrl: img2,
        sku: "AJR4102",
        sizes: ['S/M (38"-40")', 'M/L (40"-42")', 'L/XL (42"-44")']
    },
    {
        id: 4103,
        name: "Leaf green Ajrakh plain blouse, Readymade Saree Blouses, Women Handloom blouse with cross dyed...",
        price: "Rs. 3,900.00",
        imageUrl: img3,
        sku: "AJR4103",
        sizes: ['S/M (38"-40")', 'M/L (40"-42")', 'L/XL (42"-44")']
    },
    {
        id: 4104,
        name: "Pink/Red Ajrakh plain blouse, Readymade Saree Blouses, Women Handloom blouse with cross dyed...",
        price: "Rs. 3,900.00",
        imageUrl: img4,
        sku: "AJR4104",
        sizes: ['S/M (38"-40")', 'M/L (40"-42")', 'L/XL (42"-44")']
    },

    // Row 2
    {
        id: 4105,
        name: "Blue/Navy cross dyed cotton Ajrakh plain blouse, Readymade Saree Blouses...",
        price: "Rs. 3,900.00",
        imageUrl: img5,
        sku: "AJR4105",
        sizes: ['S/M (38"-40")', 'M/L (40"-42")', 'L/XL (42"-44")']
    },
    {
        id: 4106,
        name: "Indigo Blue Ajrakh plain blouse, Readymade Saree Blouses, Women Handloom blouse with cross dyed...",
        price: "Rs. 3,900.00",
        imageUrl: img6,
        sku: "AJR4106",
        sizes: ['S/M (38"-40")', 'M/L (40"-42")', 'L/XL (42"-44")']
    },
    {
        id: 4107,
        name: "Yellow/Green Ajrakh plain blouse, Readymade Saree Blouses, Women Handloom blouse with cross dyed...",
        price: "Rs. 3,900.00",
        imageUrl: img7,
        sku: "AJR4107",
        sizes: ['S/M (38"-40")', 'M/L (40"-42")', 'L/XL (42"-44")']
    },
    {
        id: 4108,
        name: "Brown/Maroon Ajrakh plain blouse, Readymade Saree Blouses, Women Handloom blouse with cross dyed...",
        price: "Rs. 3,900.00",
        imageUrl: img8,
        sku: "AJR4108",
        sizes: ['S/M (38"-40")', 'M/L (40"-42")', 'L/XL (42"-44")']
    },

    // Row 3
    {
        id: 4109,
        name: "Navy Blue Ajrakh plain blouse, Readymade Saree Blouses, Women Handloom blouse with cross dyed...",
        price: "Rs. 3,900.00",
        imageUrl: img9,
        sku: "AJR4109",
        sizes: ['S/M (38"-40")', 'M/L (40"-42")', 'L/XL (42"-44")']
    },
    {
        id: 4110,
        name: "White block print Cotton Ajrakh Blouse, Readymade Saree Blouses...",
        price: "Rs. 3,900.00",
        imageUrl: img10,
        sku: "AJR4110",
        sizes: ['S/M (38"-40")', 'M/L (40"-42")', 'L/XL (42"-44")']
    },
    {
        id: 4111,
        name: "Mustard yellow Ajrakh blouse, Readymade Saree Blouses...",
        price: "Rs. 3,900.00",
        imageUrl: img11,
        sku: "AJR4111",
        sizes: ['S/M (38"-40")', 'M/L (40"-42")', 'L/XL (42"-44")']
    },
    {
        id: 4112,
        name: "Light olive green Ajrakh blouse, Readymade Saree Blouses...",
        price: "Rs. 3,900.00",
        imageUrl: img12,
        sku: "AJR4112",
        sizes: ['S/M (38"-40")', 'M/L (40"-42")', 'L/XL (42"-44")']
    },

    // Row 4
    {
        id: 4113,
        name: "Multi color cross dyed Ajrakh blouse, Readymade Saree Blouses...",
        price: "Rs. 3,900.00",
        imageUrl: img13,
        sku: "AJR4113",
        sizes: ['S/M (38"-40")', 'M/L (40"-42")', 'L/XL (42"-44")']
    },
    {
        id: 4114,
        name: "Reddish brown Ajrakh blouse, Readymade Saree Blouses...",
        price: "Rs. 3,900.00",
        imageUrl: img14,
        sku: "AJR4114",
        sizes: ['S/M (38"-40")', 'M/L (40"-42")', 'L/XL (42"-44")']
    },
    {
        id: 4115,
        name: "Green color Ajrakh blouse, Readymade Saree Blouses...",
        price: "Rs. 3,900.00",
        imageUrl: img15,
        sku: "AJR4115",
        sizes: ['S/M (38"-40")', 'M/L (40"-42")', 'L/XL (42"-44")']
    },
    {
        id: 4116,
        name: "Aqua blue Ajrakh blouse, Readymade Saree Blouses...",
        price: "Rs. 3,900.00",
        imageUrl: img16,
        sku: "AJR4116",
        sizes: ['S/M (Bust 38"-40")', 'M/L (Bust 40"-42")', 'L/XL (Bust 42"-44")']
    },
];

// Reusable Product Card Component (No Cart Context used)
const ProductCard = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
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
                    onClick={handleAddToCart}
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