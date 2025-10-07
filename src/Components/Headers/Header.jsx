import React, { useState, useEffect } from 'react';

// NOTE: Placeholder URL for the logo image.
import logo from "../../assets/logo.webp";

// --- CartDrawer Component (The sliding sidebar for the shopping cart) ---
const CartDrawer = ({ isCartOpen, toggleCart }) => {
  const cartItems = [];
  // w-full on small screens, fixed width on larger screens
  const drawerWidthClass = "w-full max-w-sm sm:max-w-md md:max-w-md";

  return (
    <>
      {/* 1. Backdrop Overlay (Darkens background when cart is open) */}
      {isCartOpen && (
        <div
          onClick={toggleCart}
          // z-40 is lower than drawer (z-50)
          className="fixed inset-0 bg-transparent bg-opacity-50 z-40 transition-opacity duration-300"
        ></div>
      )}

      {/* 2. Cart Drawer Panel (Slides in from the right) */}
      <div
        className={`
          fixed top-0 right-0 h-full bg-white z-50 shadow-2xl flex flex-col
          transition-transform duration-300 ease-in-out
          ${drawerWidthClass}
          ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >

        {/* Cart Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Your Cart ({cartItems.length})</h2>
          <button onClick={toggleCart} className="text-gray-500 hover:text-gray-900" aria-label="Close Cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Content (Body) */}
        <div className="flex-grow p-6 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-10">
              <div className="p-4 bg-gray-100 rounded-full mb-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">0</span>
              </div>
              <p className="text-gray-500">Your cart is currently empty.</p>
            </div>
          ) : (
            <div>{/* Cart items list */}</div>
          )}
        </div>
      </div>
    </>
  );
};


// --- MobileDrawer Component (The sliding sidebar for the navigation menu) ---
const MobileDrawer = ({ isMenuOpen, toggleMenu }) => {
  const links = [
    { name: 'Handmade Jewelry', href: '/jewelry/hidden-potential-seed-jewelry' },
    { name: 'Handcrafted Sarees', href: '/sarees/tussar-silk-sarees' },
    { name: 'Readymade Blouses', href: '/blouses/sleeveless-blouses' },
    { name: 'Tops & Tunics', href: '/tops/tanks-&-tops' },
    { name: 'Skirts & Pants', href: '/skirts/skirts' },
    { name: 'Upscaled Vintage Apparel', href: '/vintage/halter-tops' },
    { name: 'Accessories', href: '/accessories/scarves' },
    { name: 'SALE', href: '/sale', isSale: true },
    // { name: 'My Account', href: '/account', isSpecial: true, noArrow: true },
  ];

  // w-full on small screens, fixed width on larger screens
  const drawerWidthClass = "w-64 sm:w-80";

  return (
    <>
      {/* 1. Backdrop Overlay (Darkens background when menu is open) */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-transparent bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
        ></div>
      )}

      {/* 2. Drawer Panel (Slides in from the right) */}
      <div
        className={`
          fixed top-0 right-0 h-full bg-white z-50 shadow-2xl 
          transition-transform duration-300 ease-in-out md:hidden
          ${drawerWidthClass}
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >

        {/* Drawer Header: "Menu" and Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-900" aria-label="Close Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col p-2 space-y-1 overflow-y-auto h-[calc(100%-60px)]">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={link.isSpecial ? null : toggleMenu}
              className={`
                flex justify-between items-center py-3 px-4 text-sm font-medium 
                text-gray-700 hover:bg-gray-50 transition duration-150 rounded-lg
                ${link.isSpecial ? 'mt-3 border-t border-gray-100' : ''}
              `}
            >
              {link.name}
              {!link.noArrow && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};


// --- DropdownLink Component (For hover functionality on desktop) ---
const DropdownLink = ({ link, subOptions }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <a
        href={link.href}
        className="text-white hover:text-gray-300 transition duration-150 flex items-center p-2 text-sm font-medium whitespace-nowrap"
      >
        {link.name}
        {link.isDropdown && <span className="ml-1 text-xs">&#9662;</span>}
      </a>

      {/* Dropdown Menu (Only visible on hover) */}
      {link.isDropdown && (
        <div
          className={`
            absolute top-full left-0 mt-0 w-64 bg-white shadow-xl rounded-b-lg overflow-hidden z-20 
            transition-opacity duration-200
            ${isHovering ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
        >
          {subOptions.map((option, index) => (
            <a
              key={index}
              href={`/${link.href.replace('#', '')}/${option.toLowerCase().replace(/\s/g, '-')}`}
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-50 last:border-b-0"
            >
              {option}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};


// --- Header Component (The main header structure) ---
const Header = () => {
  // States for managing the two drawers
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- EFFECT TO PREVENT BODY SCROLL WHEN DRAWER IS OPEN ---
  useEffect(() => {
    // Apply or remove overflow-hidden to the body when either drawer is open
    const isDrawerOpen = isMenuOpen || isCartOpen;
    document.body.style.overflow = isDrawerOpen ? 'hidden' : 'auto';

    // Cleanup function to ensure overflow is restored when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, isCartOpen]);


  // Handlers to toggle drawers, ensuring only one is open at a time
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isCartOpen) setIsCartOpen(false);
  }
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  }

  // --- DESKTOP LINKS DATA STRUCTURE ---
  const desktopLinks = [
    { name: 'Handmade Jewelry', href: '#jewelry', isDropdown: true, subOptions: ['Hidden Potential Seed Jewelry', 'Earth Tones Terracotta Jewelry', 'Daring Dokra Tribal Jewelry', 'LightHeart Paper Jewelry'], },
    {
      name: 'Handcrafted Sarees',
      href: '#sarees',
      isDropdown: true,
      subOptions: [
        'Tussar Silk Sarees',
        'Odisha Handloom Sarees',
        'Maheshwari Sarees',
        'Chanderi Sarees',
        'Chettinad South Cotton Sarees',
        'Bagru Cotton Sarees',
        'Kota Doria Sarees',
      ],
    },
    {
      name: 'Readymade Blouses',
      href: '#blouses',
      isDropdown: true,
      subOptions: [
        'Sleeveless Blouses',
        'Benarsi Brocade Blouses',
      ],
    },
    {
      name: 'Tops & Tunics',
      href: '#tops',
      isDropdown: true,
      subOptions: [
        'Tanks & Tops',
        'Short Tops & Tunics',
        'Kurtis'
      ],
    },
    {
      name: 'Skirts & Pants',
      href: '#skirts',
      isDropdown: true,
      subOptions: [
        'Skirts',
        'Palazzo Pants',
      ],
    },
    {
      name: 'Upscaled Vintage Apparel',
      href: '#vintage',
      isDropdown: true,
      subOptions: [
        'Kaftans',
        'Ruffled Tops',
        'Halter Tops',
        'Tube Dress Pants',
      ],
    },
    {
      name: 'Accessories',
      href: '#accessories',
      isDropdown: true,
      subOptions: [
        'Scarves',
        'Duppattas',
        'Headbands',
        'Gratitude Journals',
        'Bookmarks',
        'Bags'
      ],
    },
    { name: 'SALE', href: '/sale', isDropdown: false },
    // { name: 'My Account', href: '/account', isSpecial: true, noArrow: true },
  ];

  return (
    // The main header wrapper is not causing overflow, but children might
    <header className="w-full sticky top-0 bg-white z-30 shadow-md">

      {/* 1. Top Section: Logo, Search, Cart, and Mobile Menu Button */}
      {/* Added max-w-full and mx-auto to ensure it stays within bounds */}
      <div className="p-4  max-w-7xl mx-auto max-w-full">
        <div className="flex items-center justify-between md:px-15">

          {/* Left: Logo & Text */}
          <a href="/" className="flex items-center">
            <img src={logo} className='h-18' alt="Eco Embrace Logo" />
          </a>

          {/* Center: Search Bar (Hidden on Mobile, Visible on MD and up) */}
          <div className="hidden md:flex flex-grow max-w-xl mx-8">
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

          {/* Right: Cart Icon & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <button
              onClick={toggleCart}
              className="text-3xl text-gray-800 hover:text-black transition duration-150 relative"
              aria-label="Shopping Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">0</span>
            </button>

            {/* Mobile Menu Button (Hamburger) */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition duration-150"
              aria-label="Open Navigation Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Bottom Section: Desktop Navigation Links (Hidden on mobile) */}
      <div className="bg-[#5D3C49] w-full shadow-lg hidden md:block h-12">
        <div className="max-w-7xl mx-auto h-full px-4"> {/* Added px-4 for safety */}
          <nav className="flex justify-center items-center h-full">
            {/* Removed fixed space-x-4 to allow better wrapping/spacing on wide desktops */}
            <div className="flex">
              {desktopLinks.map((link) => (
                <DropdownLink
                  key={link.name}
                  link={link}
                  subOptions={link.subOptions || []}
                />
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer (Menu) */}
      <MobileDrawer isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* 4. Cart Drawer */}
      <CartDrawer isCartOpen={isCartOpen} toggleCart={toggleCart} />

    </header>
  );
};

export default Header;