import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import logo from "../assets/logo.webp";

import img1 from "../assets/latestCollection/img1.webp";
import img2 from "../assets/latestCollection/img2.jpg";
import img3 from "../assets/latestCollection/img3.jpg";
import img4 from "../assets/latestCollection/img4.webp";
import img5 from "../assets/latestCollection/img5.webp";
import img6 from "../assets/latestCollection/img6.webp";
import img7 from "../assets/latestCollection/img7.webp";
import img8 from "../assets/latestCollection/img8.webp";


// --- Static Marketing Card Data (Same) ---
const marketingCardData = {
    id: 1,
    title: "Eco Embrace",
    subtitle: "Our Latest Collection",
    bgColor: "bg-blue-600",
    logoUrl: "/images/eco-embrace-logo.png",
};

// --- Sliding Product Data (Same) ---
const slidingProductsData = [
    {
        id: 2,
        type: "single",
        mainImageUrl: img1,
    },
    {
        id: 3,
        type: "single",
        mainImageUrl: img2,
    },
    {
        id: 4,
        type: "single",
        mainImageUrl: img3,
    },
    {
        id: 5,
        type: "collage",
        mainImageUrl: img4,
        secondaryImages: [
            img5,
            img7,
            img8,
        ],
    },
    {
        id: 6,
        type: "single",
        mainImageUrl: img6,
        linkTo: "/product/brass-statue"
    },
];

const LatestCollectionCollageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);
    const intervalRef = useRef(null);

    const ITEM_SCROLL_WIDTH = 336;
    const SLIDE_DURATION = 1000; // 1 second

    // --- Utility Functions ---
    // Default: Index INCREMENT (Visual movement: Left)
    const getNextIndex = (prevIndex) => {
        return (prevIndex + 1) % slidingProductsData.length;
    };

    // Manual Left Arrow: Index DECREMENT (Visual movement: Right)
    const getPrevIndex = (prevIndex) => {
        return (prevIndex - 1 + slidingProductsData.length) % slidingProductsData.length;
    };

    // --- Core Auto-Scroll Function ---
    const startAutoScroll = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        // New interval uses getNextIndex (Index INCREMENT)
        intervalRef.current = setInterval(() => {
            setCurrentIndex(getNextIndex);
        }, SLIDE_DURATION);
    };

    // Effect 1: Handles Auto-Scroll Start/Stop
    useEffect(() => {
        startAutoScroll();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    // Effect 2: Scrolls the view whenever currentIndex changes
    useEffect(() => {
        if (scrollRef.current) {
            const scrollOffset = currentIndex * ITEM_SCROLL_WIDTH;

            scrollRef.current.scrollTo({
                left: scrollOffset,
                behavior: 'smooth'
            });
        }
    }, [currentIndex]);

    // --- MANUAL INTERACTION LOGIC (Default behavior) ---
    const manualScrollLeft = () => {
        // Left arrow moves back (DECREMENT index)
        clearInterval(intervalRef.current);
        setCurrentIndex(getPrevIndex);
        startAutoScroll();
    };

    const manualScrollRight = () => {
        // Right arrow moves forward (INCREMENT index)
        clearInterval(intervalRef.current);
        setCurrentIndex(getNextIndex);
        startAutoScroll();
    };

    const handleMouseEnter = () => clearInterval(intervalRef.current);
    const handleMouseLeave = () => startAutoScroll();

    // --- RENDERING LOGIC FOR COLLAGE/SINGLE IMAGE (Same) ---
    const renderProductSlide = (product) => {
        const cardClasses = "flex-shrink-0 w-80 md:w-96 rounded-lg overflow-hidden group snap-center transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500";

        return (
            <Link
                key={product.id}
                className={cardClasses}
                style={{ minWidth: '320px' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="w-full h-80 sm:h-96 overflow-hidden bg-gray-100">

                    {product.type === "collage" ? (
                        // Collage rendering logic
                        <div className="grid grid-cols-2 grid-rows-3 w-full h-full">
                            <img src={product.mainImageUrl} alt="Collage Main" className="col-span-1 row-span-3 w-full h-full object-cover" />
                            <img src={product.secondaryImages[0]} alt="Collage Small 1" className="col-span-1 row-span-1 w-full h-full object-cover" />
                            <img src={product.secondaryImages[1]} alt="Collage Small 2" className="col-span-1 row-span-1 w-full h-full object-cover" />
                            <img src={product.secondaryImages[2]} alt="Collage Small 3" className="col-span-1 row-span-1 w-full h-full object-cover" />
                        </div>
                    ) : (
                        // Single image rendering logic
                        <img
                            src={product.mainImageUrl}
                            alt={`Product ${product.id}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    )}
                </div>
            </Link>
        );
    };

    return (
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 cursor-default">
            {/* Main Flex Container: Left Panel (Fixed) + Right Carousel (Sliding) */}
            <div className="flex overflow-hidden relative max-sm:flex-col max-sm:gap-2">

                {/* 1. STATIC LEFT MARKETING PANEL */}
                <div
                    className="flex-shrink-0 w-80 md:w-96 max-sm:w-full rounded-lg overflow-hidden mr-4 md:mr-6 lg:mr-8"
                    style={{ minWidth: '320px', height: '320px' }}
                >
                    <Link>
                        <div
                            className={`w-full h-full flex flex-col items-center justify-center p-6 text-white text-center ${marketingCardData.bgColor}`}
                        >
                            <img src={logo} alt={marketingCardData.title} className="mb-4 h-20 w-auto" />
                            {/* <h3 className="text-3xl sm:text-4xl font-bold">{marketingCardData.title}</h3> */}
                            <p className="mt-2 text-xl sm:text-2xl font-semibold">{marketingCardData.subtitle}</p>
                        </div>
                    </Link>
                </div>

                {/* 2. SLIDING PRODUCTS CAROUSEL WRAPPER */}
                <div className="flex-grow relative overflow-hidden">

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-hidden scrollbar-hide space-x-4 md:space-x-6 lg:space-x-8 pb-4 snap-x"
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        {slidingProductsData.map(renderProductSlide)}
                    </div>

                    {/* --- Navigation Arrows --- */}
                    <button
                        onClick={manualScrollLeft}
                        className="absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg border border-gray-300 z-10 
                         hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 hidden sm:flex items-center justify-center"
                        aria-label="Scroll left"
                    >
                        <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                        onClick={manualScrollRight}
                        className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg border border-gray-300 z-10 
                         hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 hidden sm:flex items-center justify-center"
                        aria-label="Scroll right"
                    >
                        <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LatestCollectionCollageCarousel;