import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

const ErrorPage = () => {
  return (
    // Main container: full screen, centered content
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      
      {/* Content box */}
      <div className="text-center max-w-lg mx-auto">
        
        {/* Large Error Code */}
        <p className="text-9xl font-extrabold text-[#5D3C49] opacity-90 tracking-widest">
          404
        </p>

        {/* Separator line */}
        <div className="bg-gray-400 h-1 w-24 mx-auto my-6 rounded-full"></div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h1>
        
        {/* Description */}
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        {/* Action Buttons/Links */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          
          {/* Home Button (Primary Action) */}
          {/* Note: If you're not using React Router, replace <Link to="/"> with <a href="/"> */}
          <Link 
            to="/" 
            className="px-8 py-3 bg-[#5D3C49] text-white font-medium rounded-lg shadow-md hover:bg-[#86705D] transition duration-300 transform hover:scale-105"
          >
            Go to Homepage
          </Link>
          
          {/* Contact Link (Secondary Action) */}
          <Link 
            to="/contact" 
            className="px-8 py-3 border border-gray-400 text-gray-700 font-medium rounded-lg shadow-sm hover:bg-gray-200 transition duration-300"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;