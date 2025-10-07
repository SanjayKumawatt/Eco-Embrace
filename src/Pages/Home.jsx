import React from "react";
import banner from "../assets/banner.jpg";
import ShopByCategory from "../Components/ShopByCategory";
import SkirtsProductCarousel from "../Components/SkirtsProductCarousel";
import BestsellingJewelryCarousel from "../Components/BestsellingJewelryCarousel";
import LatestCollectionCarousel from "../Components/LatestCollectionCarousel";

function Home() {
    return (
        <div>
            <div>
                {/* Center: Search Bar (Hidden on Mobile, Visible on MD and up) */}
                <div className="hidden max-sm:flex flex-grow max-w-xl mx-8 mb-4">
                    <div className="flex border border-gray-400 rounded-sm overflow-hidden w-full">
                        <input
                            type="text"
                            placeholder="Search Here"
                            className="w-full p-3 text-base focus:outline-none"
                        />
                        <button
                            className="bg-[#99816B] w-16 flex items-center justify-center hover:bg-[#86705D] transition duration-150"
                            aria-label="Search"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <img src={banner} alt="" />
            </div>
            <ShopByCategory/>
            <SkirtsProductCarousel/>
            <BestsellingJewelryCarousel/>
            <LatestCollectionCarousel/>
        </div>
    );
}

export default Home;