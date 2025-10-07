import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Adjust path accordingly



import img1 from "../assets/sacred-seeds-jewelry/img1.webp";
import img2 from "../assets/sacred-seeds-jewelry/img2.webp";
import img3 from "../assets/sacred-seeds-jewelry/img3.webp";
import img4 from "../assets/sacred-seeds-jewelry/img4.webp";
import img5 from "../assets/sacred-seeds-jewelry/img5.webp";
import img6 from "../assets/sacred-seeds-jewelry/img6.webp";
import img7 from "../assets/sacred-seeds-jewelry/img7.webp";
import img8 from "../assets/sacred-seeds-jewelry/img8.webp";
import img9 from "../assets/sacred-seeds-jewelry/img9.webp";
import img10 from "../assets/sacred-seeds-jewelry/img10.webp";





// --- Placeholder Product Data (based on the image) ---
export const products = [
  // Row 1
  { id: 101, name: "HIDDEN POTENTIAL SEED BEADS - Small Beaded Necklace...", price: "Rs. 1,598.00", imageUrl: img1, sku: "SKU001" },
  { id: 102, name: "HIDDEN POTENTIAL SEED BEADS - Star Shape Beaded Necklaces...", price: "Rs. 2,198.00", imageUrl: img2, sku: "SKU002" },
  { id: 103, name: "HIDDEN POTENTIAL SEED BEADS - Drop Black Beaded Necklace...", price: "Rs. 2,598.00", imageUrl: img3, sku: "SKU003" },
  { id: 104, name: "HIDDEN POTENTIAL SEED BEADS - Small Beaded Necklace, Full Bead...", price: "Rs. 1,998.00", imageUrl: img4, sku: "SKU004" },
  // Row 2
  { id: 105, name: "HIDDEN POTENTIAL SEED BEADS - Large Beaded Necklace, Buddha Brass...", price: "Rs. 1,598.00", imageUrl: img5, sku: "SKU005" },
  { id: 106, name: "HIDDEN POTENTIAL SEED BEADS - Yellow Pearl Beaded Necklace...", price: "Rs. 1,298.00", imageUrl: img6, sku: "SKU006" },
  { id: 107, name: "HIDDEN POTENTIAL SEED BEADS - Red Beaded Mala Necklace, Small...", price: "Rs. 1,398.00", imageUrl: img7, sku: "SKU007" },
  { id: 108, name: "HIDDEN POTENTIAL SEED BEADS - Golden Beaded Necklace, Tribal Motif...", price: "Rs. 1,598.00", imageUrl: img8, sku: "SKU008" },
  // Row 3
  { id: 109, name: "HIDDEN POTENTIAL SEED BEADS - Oval Seed and Beaded Necklace...", price: "Rs. 1,298.00", imageUrl: img9, sku: "SKU009" },
  { id: 110, name: "HIDDEN POTENTIAL SEED BEADS - Mala Seed Beads and Brass Pendant...", price: "Rs. 1,898.00", imageUrl: img10, sku: "SKU010" },
];

// Reusable Product Card Component
const ProductCard = ({ product }) => (

  
  

  <div className="bg-white border border-gray-100 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl group">

    {/* Product Image Link */}
    <Link to={`/product/${product.sku}`} className="block w-full h-72 sm:h-80 overflow-hidden bg-gray-50">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    </Link>

    {/* Product Details */}
    <div className="p-4 text-center">
      {/* Product Name Link */}
      <Link to={`/product/${product.sku}`} className="block text-sm font-medium text-gray-700 hover:text-indigo-600 mb-1 h-12 overflow-hidden">
        {product.name}
      </Link>

      {/* Price */}
      <p className="text-base font-semibold text-gray-900 mb-3">
        {product.price}
      </p>

      {/* Add to Cart Button */}
      {/* Note: In a real app, this should be a button with an onClick handler */}
      <button
        type="button"
        className="w-full py-2 text-sm font-semibold text-white bg-neutral-800 rounded-md transition duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={() => console.log(`Adding ${product.name} to cart`)}
      >
        ADD TO CART
      </button>
    </div>
  </div>
);

// Main Component
const HiddenPotentialSeedJewelry = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* 1. Header/Toolbar (Filters and Sorting) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200 flex justify-between items-center text-sm text-gray-600">

        {/* Item Count */}
        <p className="hidden sm:block">
          {products.length} Products
        </p>

        {/* View Options (Simplified) */}
        <div className="flex space-x-4">
          <label htmlFor="view" className="hidden md:block">View</label>
          <select id="view" className="border border-gray-300 rounded-md p-1 focus:ring-indigo-500 focus:border-indigo-500">
            <option>Grid / 4-Col</option>
            <option>List / 1-Col</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="flex space-x-4">
          <label htmlFor="sort" className="hidden md:block">Sort By</label>
          <select id="sort" className="border border-gray-300 rounded-md p-1 focus:ring-indigo-500 focus:border-indigo-500">
            <option>Best sellers</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
      </div>

      {/* 2. Product Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8 invisible">
          Hidden Potential Seed Jewelry
        </h2> {/* Invisible title if needed for SEO/structure */}

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* 3. Pagination (Placeholder) */}
      <div className="container mx-auto text-center py-8">
        <button className="text-gray-500 hover:text-indigo-600 text-sm font-medium">
          Load More...
        </button>
      </div>

    </div>
  );
};

export default HiddenPotentialSeedJewelry;