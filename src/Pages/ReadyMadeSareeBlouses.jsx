import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from "../assets/sleeveless-blouses/img1.webp";
import img2 from "../assets/sleeveless-blouses/img2.webp";
import img3 from "../assets/sleeveless-blouses/img3.webp";
import img4 from "../assets/sleeveless-blouses/img4.webp";
import img5 from "../assets/sleeveless-blouses/img5.jpg";
import img6 from "../assets/sleeveless-blouses/img6.jpg";
import img7 from "../assets/sleeveless-blouses/img7.webp";
import img8 from "../assets/sleeveless-blouses/img8.jpg";
import img9 from "../assets/sleeveless-blouses/img9.webp";
import img10 from "../assets/sleeveless-blouses/img10.webp";
import img11 from "../assets/sleeveless-blouses/img11.webp";
import img12 from "../assets/sleeveless-blouses/img12.webp";


// --- Placeholder Product Data for Ready Made Saree Blouses ---
// NOTE: 'export' किया गया है ताकि ProductDetailPage इसे यूज़ कर सके।
export const blouseProducts = [
  // Row 1
  { id: 1201, name: "Saree Blouse readymade cotton with lining/Sari blouse cotton...", price: "Rs. 1,900.00", imageUrl: img1, sku: "BLS1201", sizes: ['XS (Bust 30-32")', 'S (Bust 34-36")', 'M (Bust 37-39")'] },
  { id: 1202, name: "Designer Blouse readymade cotton with lining/Sari blouse cotton...", price: "Rs. 1,900.00", imageUrl: img2, sku: "BLS1202", sizes: ['S (Bust 34-36")', 'M (Bust 37-39")', 'L (Bust 40-42")'] },
  { id: 1203, name: "Readymade cotton with lining/Sari blouse cotton with lining...", price: "Rs. 1,900.00", imageUrl: img3, sku: "BLS1203", sizes: ['S (Bust 34-36")', 'M (Bust 37-39")', 'L (Bust 40-42")'] },
  { id: 1204, name: "Silk cotton readymade cotton with lining/Sari blouse cotton...", price: "Rs. 1,900.00", imageUrl: img4, sku: "BLS1204", sizes: ['XS (Bust 30-32")', 'S (Bust 34-36")', 'M (Bust 37-39")'] },
  
  // Row 2
  { id: 1205, name: "Sari Arawali cotton readymade cotton with lining/Sari blouse cotton...", price: "Rs. 1,900.00", imageUrl:img5, sku: "BLS1205", sizes: ['S (Bust 34-36")', 'M (Bust 37-39")', 'L (Bust 40-42")'] },
  { id: 1206, name: "Sari Ayush readymade cotton with lining/Sari blouse cotton...", price: "Rs. 1,900.00", imageUrl: img6, sku: "BLS1206", sizes: ['S (Bust 34-36")', 'M (Bust 37-39")', 'L (Bust 40-42")'] },
  { id: 1207, name: "Sachi Padaki silk spaghetti strap saree blouse readymade...", price: "Rs. 1,900.00", imageUrl: img7, sku: "BLS1207", sizes: ['S (Bust 34-36")', 'M (Bust 37-39")', 'L (Bust 40-42")'] },
  { id: 1208, name: "Sachi Padaki silk spaghetti strap saree blouse readymade...", price: "Rs. 1,900.00", imageUrl: img8, sku: "BLS1208", sizes: ['S (Bust 34-36")', 'M (Bust 37-39")', 'L (Bust 40-42")'] },
  
  // Row 3 (Remaining items based on your image)
  { id: 1209, name: "Sachi Padaki silk spaghetti strap saree blouse readymade...", price: "Rs. 1,900.00", imageUrl: img9, sku: "BLS1209", sizes: ['XS (Bust 30-32")', 'S (Bust 34-36")', 'M (Bust 37-39")'] },
  { id: 1210, name: "Sachi Padaki silk spaghetti strap saree blouse readymade...", price: "Rs. 1,900.00", imageUrl: img10, sku: "BLS1210", sizes: ['XS (Bust 30-32")', 'S (Bust 34-36")', 'M (Bust 37-39")'] },
  { id: 1211, name: "Plain Silk readymade blouse | Patty your Designer Blouse | Ready to...", price: "Rs. 1,900.00", imageUrl:img11, sku: "BLS1211", sizes: ['XS (Bust 30-32")', 'S (Bust 34-36")', 'M (Bust 37-39")'] },
  { id: 1212, name: "Silk cotton readymade cotton with lining/Sari blouse cotton...", price: "Rs. 1,900.00", imageUrl: img12, sku: "BLS1212", sizes: ['XS (Bust 30-32")', 'S (Bust 34-36")', 'M (Bust 37-39")'] },
];

// Reusable Product Card Component (No Cart Context used)
const ProductCard = ({ product }) => {
  // Size state is still needed to manage the dropdown selection
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]); 

  // No useCart hook/import

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    
    // 👇 Cart logic replaced with a console log (Optional: you can remove this line too)
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
const ReadyMadeSareeBlouses = () => {
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
          {blouseProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadyMadeSareeBlouses;