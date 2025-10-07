import React from 'react';
import { Link } from 'react-router-dom';
import { TagIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'; // TagIcon for Sale/Discount theme

const NoSalePage = () => {
  return (
    // 'min-h-[60vh]' ensures it looks good inside the AppLayout
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 bg-gray-50">
      
      {/* Icon */}
      <div className="p-4 rounded-full bg-red-100 mb-6">
        <TagIcon className="w-16 h-16 text-red-500" />
      </div>

      {/* Main Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-3">
        Sorry! The Sale Has Ended
      </h1>

      {/* Subtitle / Message */}
      <p className="text-lg text-gray-600 text-center mb-8 max-w-md">
        It looks like the massive savings have all been snatched up! 
        Check out our New Arrivals for fresh inventory.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        
        {/* Explore New Arrivals Button */}
        <Link 
          to="/shop/new-arrivals"
          className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md 
                     text-white bg-red-600 hover:bg-red-700 transition duration-150 shadow-md"
        >
          Explore New Arrivals
        </Link>
        
        {/* Back to Home Button */}
        <Link 
          to="/"
          className="flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md 
                     text-gray-700 bg-white hover:bg-gray-100 transition duration-150"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NoSalePage;