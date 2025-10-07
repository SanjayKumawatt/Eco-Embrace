import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// Heroicons for the navigation arrows
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'; 
import img1 from "../assets/BestSelling/img1.webp";
import img2 from "../assets/BestSelling/img2.webp"
import img3 from "../assets/BestSelling/img3.webp"
import img4 from "../assets/BestSelling/img4.webp"
import img5 from "../assets/BestSelling/img5.webp"
import img6 from "../assets/BestSelling/img6.webp"
import img7 from "../assets/BestSelling/img7.webp"
import img8 from "../assets/BestSelling/img8.webp"
import img9 from "../assets/BestSelling/img9.webp"
import img10 from "../assets/BestSelling/img10.webp"


// --- Placeholder Data for Best Selling Jewelry ---
const jewelryData = [
  {
    id: 101,
    name: "Geometric Pendants - Dokra Lost Wax Method Brass Pendant Earring...",
    price: "Rs. 1,500.00",
    imageUrl: img1, // Replace with actual image path
    linkTo: "/product/DKR301"
  },
  {
    id: 102,
    name: "DHOKRA TRIBAL NECKLACE - Gunguru Choker Necklace, Classic Handcrafted",
    price: "Rs. 5,900.00",
    imageUrl: img2, // Replace with actual image path
    linkTo: "/product/DKR302"
  },
  {
    id: 103,
    name: "Geometric Pendants - Dokra Lost Wax Method Brass Pendant Earring...",
    price: "Rs. 1,500.00",
    imageUrl: img3, // Replace with actual image path
    linkTo: "/product/DKR303"
  },
  {
    id: 104,
    name: "DHOKRA TRIBAL NECKLACE - Evening Sun Rays Necklace, Antique Sun...",
    price: "Rs. 4,400.00",
    imageUrl: img4, // Replace with actual image path
    linkTo: "/product/DKR304"
  },
  {
    id: 105,
    name: "DHOKRA TRIBAL NECKLACE - Chariot Rays Necklace, Handcrafted Pendant",
    price: "Rs. 5,000.00",
    imageUrl: img5, // Replace with actual image path
    linkTo: "/product/DKR305"
  },
  {
    id: 106,
    name: "DHOKRA TRIBAL NECKLACE - Tribal Princess Necklace, Antique Princess Brass...",
    price: "Rs. 5,000.00",
    imageUrl: img6, // Replace with actual image path
    linkTo: "/product/DKR306"
  },
  {
    id: 107,
    name: "DHOKRA TRIBAL NECKLACE - Chariot On Wheels Necklace, Handcrafted Pendant...",
    price: "Rs. 4,120.00",
    imageUrl: img7, // Replace with actual image path
    linkTo: "/product/DKR307"
  },
  {
    id: 108,
    name: "DHOKRA TRIBAL NECKLACE - HandCrafted Pendant Necklace, Multicolor Square Artisans...",
    price: "Rs. 1,500.00",
    imageUrl: img8, // Replace with actual image path
    linkTo: "/product/DKR308"
  },
];

// --- Component Start ---
const BestsellingJewelryCarousel = () => {
  const scrollRef = useRef(null);

  // Function to scroll the carousel left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Function to scroll the carousel right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 tracking-wide mb-8">
        Best selling
      </h2>

      {/* Carousel Container */}
      <div className="relative">
        
        {/* Scrollable Content Area */}
        <div
          ref={scrollRef}
          // 'scrollbar-hide' class का उपयोग किया गया है
          className="flex overflow-x-scroll scrollbar-hide space-x-4 md:space-x-6 lg:space-x-8 pb-4 snap-x"
          style={{ scrollSnapType: 'x mandatory' }} 
        >
          {jewelryData.map((product) => (
            // Link component makes the entire product card clickable
            <Link 
              key={product.id} 
              to={product.linkTo} 
              className="flex-shrink-0 w-64 md:w-72 border border-gray-200 rounded-lg shadow-sm overflow-hidden group snap-center 
                         hover:shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {/* Product Image */}
              {/* Note: Jewelry image is often smaller than the Skirts one, adjusting height to h-64/h-72 for better aspect ratio */}
              <div className="w-full h-72 sm:h-80 overflow-hidden bg-gray-100">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="p-4 text-center">
                <p className="text-sm font-medium text-gray-700 h-10 overflow-hidden line-clamp-2">
                  {product.name}
                </p>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* --- Navigation Arrows (Same as previous component) --- */}
        
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -ml-2 p-2 bg-white rounded-full shadow-lg border border-gray-300 z-10 
                     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 hidden sm:flex items-center justify-center" 
          aria-label="Scroll left"
        >
          <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 -mr-2 p-2 bg-white rounded-full shadow-lg border border-gray-300 z-10 
                     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 hidden sm:flex items-center justify-center" 
          aria-label="Scroll right"
        >
          <ChevronRightIcon className="w-5 h-5 text-gray-600" />
        </button>

      </div>
    </div>
  );
};

export default BestsellingJewelryCarousel;