import React from 'react';
import { Link } from 'react-router-dom';
import { ArchiveBoxXMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const NoProductsPage = () => {
  return (
    // 'flex-grow' ensures this page takes up the maximum vertical space within the AppLayout
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 bg-gray-50">
      
      {/* Icon */}
      <ArchiveBoxXMarkIcon className="w-20 h-20 text-gray-400 mb-6" />

      {/* Main Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-3">
        Oops! No Products Found
      </h1>

      {/* Subtitle / Message */}
      <p className="text-lg text-gray-600 text-center mb-8 max-w-md">
        We couldn't find any items matching your request in this category right now.
        Please check back later or explore other sections.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        
        {/* Go Back Button */}
        <Link 
          to="/" // Change this to the main shop page if needed
          className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md 
                     text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition duration-150"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        {/* Explore Other Categories Button (Placeholder) */}
        <Link 
          to="/shop/all"
          className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md 
                     text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition duration-150"
        >
          Explore All Categories
        </Link>
      </div>
    </div>
  );
};

export default NoProductsPage;