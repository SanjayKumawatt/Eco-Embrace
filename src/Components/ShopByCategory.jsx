import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../assets/productcategory/img1.webp";
import img2 from "../assets/productcategory/img2.webp";
import img3 from "../assets/productcategory/img3.webp";
import img4 from "../assets/productcategory/img4.webp";
import img5 from "../assets/productcategory/img5.webp";





// Placeholder data for the categories, based on the image provided
const categories = [
  {
    name: "Dokra Craft Jewelry",
    imageUrl: img1, // Replace with the actual path to your images
    linkTo: "/shop/dokra-craft-jewelry" // The route for this category
  },
  {
    name: "Clearance",
    imageUrl: img2, // Replace with the actual path to your images
    linkTo: "/shop/clearance" // The route for this category
  },
  {
    name: "Ready Made Saree Blouses",
    imageUrl: img3, // Replace with the actual path to your images
    linkTo: "/shop/ready-made-saree-blouses" // The route for this category
  },
  {
    name: "Best selling",
    imageUrl: img4, // Replace with the actual path to your images
    linkTo: "/shop/best-selling" // The route for this category
  },
  {
    name: "New Arrivals",
    imageUrl: img5, // Replace with the actual path to your images
    linkTo: "/shop/new-arrivals" // The route for this category
  },
];

const ShopByCategory = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 uppercase tracking-widest mb-10">
        SHOP BY CATEGORY
      </h2>

      {/* Categories Grid/Flex Container */}
      <div className="flex justify-center flex-wrap gap-8 md:gap-12 lg:gap-16">
        {categories.map((category) => (
          // Link component for navigation
          <Link
            key={category.name}
            to={category.linkTo}
            className="flex flex-col items-center group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {/* Image Wrapper for the Circular Shape */}
            <div
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg 
                       group-hover:shadow-xl transition duration-300 ease-in-out"
              // Optional: To match the look exactly, you might need a custom class for the black border/ring 
              // or adjust the image itself. I've used shadow for a softer effect.
              style={{ 
                // Using inline style to match the exact dimensions from the image preview if needed
                minWidth: '160px', 
                minHeight: '160px',
                // Optional: Adding a dark border as seen in the first image, but a shadow is generally better.
                // boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.7), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:opacity-90"
              />
            </div>

            {/* Category Name */}
            <p className="mt-3 text-sm font-medium text-gray-700 text-center whitespace-nowrap group-hover:text-indigo-600 transition duration-300">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;