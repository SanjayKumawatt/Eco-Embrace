import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// Heroicons for the navigation arrows
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import img1 from "../assets/womengirlsskirts/img1.webp";
import img2 from "../assets/womengirlsskirts/img2.webp";
import img3 from "../assets/womengirlsskirts/img3.webp";
import img4 from "../assets/womengirlsskirts/img4.webp";
import img5 from "../assets/womengirlsskirts/img5.webp";
import img6 from "../assets/womengirlsskirts/img6.webp";
import img7 from "../assets/womengirlsskirts/img7.webp";



// --- Placeholder Data ---
const skirtsData = [
    {
        id: 1,
        name: "5 meter Super Flair Indigo Skirts HandBlock Printed leg...",
        price: "Rs. 7,700.00",
        imageUrl: img1, // Replace with actual image path
        linkTo: "/product/LGS1801"
    },
    {
        id: 2,
        name: "Women's Bandini sequins work Bollywood Skirts, with soft les Waist...",
        price: "Rs. 2,800.00",
        imageUrl: img2, // Replace with actual image path
        linkTo: "/product/LGS1802"
    },
    {
        id: 3,
        name: "Ethnic Skirt with necklace set/Women's Long Indian Festive Dance Skirts...",
        price: "Rs. 4,100.00",
        imageUrl: img3, // Replace with actual image path
        linkTo: "/product/LGS1803"
    },
    {
        id: 4,
        name: "Pink Yellow Ethnic Skirt with necklace set /Women's Long Indian...",
        price: "Rs. 4,100.00",
        imageUrl: img4, // Replace with actual image path
        linkTo: "/product/LGS1804"
    },
    {
        id: 5,
        name: "Patch print vibrant Mid calf length Print women skirts (...",
        price: "Rs. 2,300.00",
        imageUrl: img6, // Replace with actual image path
        linkTo: "/product/LGS1805"
    },

    {
        id: 6,
        name: "Unique Rainbow Skirts for Women | Super Flair Skirts |...",
        price: "Rs. 4,600.00",
        imageUrl: img7, // Replace with actual image path
        linkTo: "/product/patch-print-skirt"
    },

    {
        id: 7,
        name: "Patch print vibrant Mid calf length Print women skirts (...",
        price: "Rs. 3,500.00",
        imageUrl: img5, // Replace with actual image path
        linkTo: "/product/LGS1805"
    },


];

// --- Component Start ---
const SkirtsProductCarousel = () => {
    const scrollRef = useRef(null);

    // Function to scroll the carousel left
    const scrollLeft = () => {
        if (scrollRef.current) {
            // Scrolls 300px to the left
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    // Function to scroll the carousel right
    const scrollRight = () => {
        if (scrollRef.current) {
            // Scrolls 300px to the right
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 tracking-wide mb-8">
                Women & Girl's Skirts
            </h2>

            {/* Carousel Container */}
            <div className="relative">

                {/* Scrollable Content Area */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-scroll scrollbar-hide space-x-4 md:space-x-6 lg:space-x-8 pb-4 snap-x"
                    style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Optional: Improves snapping on some browsers
                >
                    {skirtsData.map((product) => (
                        // Link component makes the entire product card clickable
                        <Link
                            key={product.id}
                            to={product.linkTo}
                            className="flex-shrink-0 w-64 md:w-72 border border-gray-200 rounded-lg shadow-sm overflow-hidden group snap-center 
                         hover:shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            {/* Product Image */}
                            <div className="w-full h-80 overflow-hidden bg-gray-100">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
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

                {/* --- Navigation Arrows --- */}

                {/* Left Arrow */}
                <button
                    onClick={scrollLeft}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 -ml-2 p-2 bg-white rounded-full shadow-lg border border-gray-300 z-10 
                     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 hidden sm:flex items-center justify-center" // Hide on small screens
                    aria-label="Scroll left"
                >
                    <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={scrollRight}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 -mr-2 p-2 bg-white rounded-full shadow-lg border border-gray-300 z-10 
                     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 hidden sm:flex items-center justify-center" // Hide on small screens
                    aria-label="Scroll right"
                >
                    <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                </button>

            </div>
            {/* Tailwind Note: I've used `overflow-x-scroll` and `scrollbar-hide` (you might need a custom utility for this 
        or use a library like `tailwind-scrollbar-hide`) for native scrolling on mobile, 
        and `hidden sm:flex` on the arrows to only show them on desktop/larger screens.
      */}
        </div>
    );
};

export default SkirtsProductCarousel;