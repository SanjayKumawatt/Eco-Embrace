import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/short-tops-&-tunics/img1.webp";
import img2 from "../assets/short-tops-&-tunics/img2.webp";
import img3 from "../assets/short-tops-&-tunics/img3.webp";
import img4 from "../assets/short-tops-&-tunics/img4.webp";
import img5 from "../assets/short-tops-&-tunics/img5.webp";
import img6 from "../assets/short-tops-&-tunics/img6.webp";
import img7 from "../assets/short-tops-&-tunics/img7.webp";
import img8 from "../assets/short-tops-&-tunics/img8.webp";



// --- Placeholder Product Data for Women's Tunics ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const tunicProducts = [
  // Row 1
  { 
    id: 1501, 
    name: "Women's Tunics | Trendy Tunics | Cotton Tunics | Short...", 
    price: "Rs. 3,000.00", 
    imageUrl:img1, 
    sku: "TNC1501", 
    sizes: ['S/M', 'L/XL', 'XXL'] 
  },
  { 
    id: 1502, 
    name: "Indigo Blue Clusters Block Print Tunic | Cotton Print Shirts...", 
    price: "Rs. 3,500.00", 
    imageUrl: img2, 
    sku: "TNC1502", 
    sizes: ['S/M', 'L/XL', 'XXL'] 
  },
  { 
    id: 1503, 
    name: "Lotus Vines | Cotton Print Shirts for women | Short...", 
    price: "Rs. 2,800.00", 
    imageUrl: img3, 
    sku: "TNC1503", 
    sizes: ['S/M', 'L/XL', 'XXL'] 
  },
  { 
    id: 1504, 
    name: "Turquoise Minimalist Tunics | Wear to work Tunics | Girls/Women's Tunics...", 
    price: "Rs. 4,600.00", 
    imageUrl: img4, 
    sku: "TNC1504", 
    sizes: ['S/M', 'L/XL', 'XXL'] 
  },
  
  // Row 2
  { 
    id: 1505, 
    name: "Red long sleeve Tunics | Cotton Print Shirts for women |...", 
    price: "Rs. 3,500.00", 
    imageUrl: img5, 
    sku: "TNC1505", 
    sizes: ['S/M', 'L/XL', 'XXL'] 
  },
  { 
    id: 1506, 
    name: "Red floral short Tunics | Cotton Print Shirts for women |...", 
    price: "Rs. 3,500.00", 
    imageUrl: img6, 
    sku: "TNC1506", 
    sizes: ['S/M', 'L/XL', 'XXL'] 
  },
  { 
    id: 1507, 
    name: "Sea green Tunics | Cotton Print Shirts for women | Long...", 
    price: "Rs. 2,800.00", 
    imageUrl: img7, 
    sku: "TNC1507", 
    sizes: ['S/M', 'L/XL', 'XXL'] 
  },
  { 
    id: 1508, 
    name: "Olive Green Long Sleeve Tunics | Rayon gold Print Shirts for...", 
    price: "Rs. 2,800.00", 
    imageUrl: img8, 
    sku: "TNC1508", 
    sizes: ['Medium (40")', 'Large (42")', 'XL (44")'] 
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
const WomenTunics = () => {
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
          {tunicProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenTunics;