import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/tanks-&-tops/img1.webp";
import img2 from "../assets/tanks-&-tops/img2.webp";
import img3 from "../assets/tanks-&-tops/img3.webp";
import img4 from "../assets/tanks-&-tops/img4.webp";
import img5 from "../assets/tanks-&-tops/img5.webp";
import img6 from "../assets/tanks-&-tops/img6.webp";
import img7 from "../assets/tanks-&-tops/img7.webp";
import img8 from "../assets/tanks-&-tops/img8.webp";



// --- Placeholder Product Data for Summer Tops ---
// NOTE: 'export' किया गया है ताकि PDP इसे यूज़ कर सके।
export const topProducts = [
  // Row 1
  { 
    id: 1401, 
    name: "Tie n Dye Peplum Tops | Summer Cotton Shirts | Women's Blouse...", 
    price: "Rs. 3,000.00", 
    imageUrl: img1, 
    sku: "TOP1401", 
    sizes: ['S (Bust 34")', 'M (Bust 36")', 'L (Bust 38")'] 
  },
  { 
    id: 1402, 
    name: "Tie n Dye Peplum Tops | Summer Cotton Shirts | Women's Blouse...", 
    price: "Rs. 3,000.00", 
    imageUrl: img2, 
    sku: "TOP1402", 
    sizes: ['S (Bust 34")', 'M (Bust 36")', 'L (Bust 38")'] 
  },
  { 
    id: 1403, 
    name: "Sunny Daisy Summer Tank Tops | Spaghetti Tops | Women's...", 
    price: "Rs. 8,000.00", 
    imageUrl: img3, 
    sku: "TOP1403", 
    sizes: ['S (Bust 34")', 'M (Bust 36")', 'L (Bust 38")'] 
  },
  { 
    id: 1404, 
    name: "Sleeveless Cotton Tunics | Short Kurtis | Cotton Kurtis |...", 
    price: "Rs. 2,800.00", 
    imageUrl: img4, 
    sku: "TOP1404", 
    sizes: ['S (Bust 34")', 'M (Bust 36")', 'L (Bust 38")'] 
  },
  
  // Row 2
  { 
    id: 1405, 
    name: "Women's Sleeveless Tops | V Neck | Half Cotton Balloon Tops...", 
    price: "Rs. 3,000.00", 
    imageUrl: img5, 
    sku: "TOP1405", 
    sizes: ['XS (Bust 32")', 'S (Bust 34")', 'M (Bust 36")'] 
  },
  { 
    id: 1406, 
    name: "Women's Sleeveless Tops | Tucked up Cotton Balloon Tops...", 
    price: "Rs. 3,000.00", 
    imageUrl: img6, 
    sku: "TOP1406", 
    sizes: ['XS (Bust 32")', 'S (Bust 34")', 'M (Bust 36")'] 
  },
  { 
    id: 1407, 
    name: "Women's Sleeveless Tops | V Neck | Half Cotton Balloon Tops...", 
    price: "Rs. 3,000.00", 
    imageUrl: img7, 
    sku: "TOP1407", 
    sizes: ['XS (Bust 32")', 'S (Bust 34")', 'M (Bust 36")'] 
  },
  { 
    id: 1408, 
    name: "Braided Strap Tops Hand Block Printed Cotton Tank Tops...", 
    price: "Rs. 3,000.00", 
    imageUrl: img8, 
    sku: "TOP1408", 
    sizes: ['XS (Bust 32")', 'S (Bust 34")', 'M (Bust 36")'] 
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
        <Link to={`/product/${product.sku}`} className="block text-sm font-medium text-gray-700 hover:text-indigo-600 mb-1 h-10 overflow-hidden">
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
const SummerTops = () => {
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
          {topProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummerTops;