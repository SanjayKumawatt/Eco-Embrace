import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
// 👈 Cart Context और Hook को इम्पोर्ट करें (पाथ एडजस्ट करें)
import { useCart } from '../../context/CartContext';

// NOTE: Placeholder URL for the logo image. (Update this path)
import logo from "../../assets/logo.webp";
import img1 from "../../assets/sacred-seeds-jewelry/img1.webp"; // Example image
import img2 from "../../assets/sacred-seeds-jewelry/img2.webp"; // Example image


// --- Helper Function: Price Parser (Used in Cart Drawer) ---
const parsePrice = (priceString) => {
  // Converts "Rs. 4,500.00" to 4500.00
  return parseFloat(priceString.replace('Rs.', '').replace(',', '').trim());
};


// --- 1. CartDrawer Component (Slides in from the right) ---
const CartDrawer = () => {
  // Context से सभी ज़रूरी डेटा और फ़ंक्शंस लें
  const {
    cartItems,
    toggleCartDrawer,
    isDrawerOpen,
    removeFromCart,
    updateQuantity,
    getTotalAmount
  } = useCart();

  const drawerWidthClass = "w-full max-w-sm sm:max-w-md md:max-w-md";
  const totalAmount = getTotalAmount();

  return (
    <>
      {/* 1. Backdrop Overlay */}
      {isDrawerOpen && (
        <div
          onClick={toggleCartDrawer} // Context function
          className="fixed inset-0 bg-transparent bg-opacity-50 z-40 transition-opacity duration-300"
        ></div>
      )}

      {/* 2. Cart Drawer Panel */}
      <div
        className={`
                    fixed top-0 right-0 h-full bg-white z-50 shadow-2xl flex flex-col
                    transition-transform duration-300 ease-in-out
                    ${drawerWidthClass}
                    ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
      >
        {/* Cart Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Your Cart ({cartItems.length})</h2>
          <button onClick={toggleCartDrawer} className="text-gray-500 hover:text-gray-900" aria-label="Close Cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Content (Body) */}
        <div className="flex-grow p-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-10">
              {/* Empty Cart SVG and message */}
              <div className="p-4 bg-gray-100 rounded-full mb-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-gray-500">Your cart is currently empty.</p>
            </div>
          ) : (
            // Cart Items List
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.uniqueId} className="flex border-b pb-4">
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-20 object-cover mr-4 rounded" />
                  <div className="flex-grow flex flex-col justify-between">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium leading-tight pr-4">{item.name.split(' | ')[0]}</p>
                      <button onClick={() => removeFromCart(item.uniqueId)} className="text-gray-400 hover:text-red-600 transition" aria-label="Remove Item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10H8" /></svg>
                      </button>
                    </div>

                    {item.selectedOption && (
                      <p className="text-xs text-gray-500 mt-0">Option: {item.selectedOption}</p>
                    )}

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex border border-gray-300 rounded-sm overflow-hidden">
                        <button onClick={() => updateQuantity(item.uniqueId, item.quantity - 1)} className="px-2 py-0 text-sm hover:bg-gray-100" disabled={item.quantity <= 1}>-</button>
                        <input type="text" readOnly value={item.quantity} className="w-8 text-center text-sm border-x focus:outline-none" />
                        <button onClick={() => updateQuantity(item.uniqueId, item.quantity + 1)} className="px-2 py-0 text-sm hover:bg-gray-100">+</button>
                      </div>
                      <span className="text-base font-semibold">Rs. {(parsePrice(item.price) * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer / Checkout */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t border-gray-200">
            <div className="flex justify-between font-bold text-xl mb-4">
              <span>Total</span>
              <span>Rs. {totalAmount.toFixed(2)}</span>
            </div>
            <Link to="/checkout">
              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-semibold flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>

                Checkout

              </button>
            </Link>
            <p className="text-center text-sm text-gray-500 mt-2">View My Cart</p>
          </div>
        )}
      </div>
    </>
  );
};


// --- 2. MobileDrawer Component (The sliding sidebar for the navigation menu) ---
const MobileDrawer = ({ isMenuOpen, toggleMenu }) => {
  // Mobile links are simplified
  const mobileLinks = [
    { name: 'Handmade Jewelry', href: '/jewelry/hidden-potential-seed-jewelry' },
    { name: 'Handcrafted Sarees', href: '/sarees/tussar-silk-sarees' },
    { name: 'Readymade Blouses', href: '/blouses/readymade-saree-blouses' },
    { name: 'Tops & Tunics', href: '/tops/summer-tops' },
    { name: 'Skirts & Pants', href: '/skirts/long-skirts' },
    { name: 'Upscaled Vintage Apparel', href: '/vintage/kaftans' },
    { name: 'Accessories', href: '/accessories/bookmarks' },
    { name: 'SALE', href: '/sale', isSale: true },
    { name: 'My Account', href: '/account', isSpecial: true },
  ];

  const drawerWidthClass = "w-64 sm:w-80";

  return (
    <>
      {/* Backdrop Overlay */}
      {isMenuOpen && (
        <div onClick={toggleMenu} className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"></div>
      )}

      {/* Drawer Panel */}
      <div
        className={`
                    fixed top-0 right-0 h-full bg-white z-50 shadow-2xl 
                    transition-transform duration-300 ease-in-out md:hidden
                    ${drawerWidthClass}
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-900" aria-label="Close Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-2 space-y-1 overflow-y-auto h-[calc(100%-60px)]">
          {mobileLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={toggleMenu}
              className={`
                                flex justify-between items-center py-3 px-4 text-sm font-medium 
                                text-gray-700 hover:bg-gray-50 transition duration-150 rounded-lg
                                ${link.isSale ? 'text-red-600 font-bold' : ''}
                            `}
            >
              {link.name}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};


// --- 3. DropdownLink Component (Handles simple hover dropdowns) ---
const DropdownLink = ({ link, subOptions }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative h-full flex items-center px-3 transition-colors duration-150"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link
        to={link.href || "#"}
        className="text-white hover:text-gray-300 transition duration-150 flex items-center p-2 text-sm font-medium whitespace-nowrap"
      >
        {link.name}
        {link.isDropdown && <span className="ml-1 text-xs">&#9662;</span>}
      </Link>

      {/* Dropdown Menu */}
      {link.isDropdown && (
        <div
          className={`
                        absolute top-full left-0 mt-0 w-64 bg-white shadow-xl rounded-b-lg overflow-hidden z-20 
                        transition-opacity duration-200
                        ${isHovering ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
                    `}
        >
          {subOptions.map((option, index) => (
            <Link
              key={index}
              to={`/${link.href.replace('#', '')}/${option.toLowerCase().replace(/\s/g, '-')}`}
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-50 last:border-b-0"
            >
              {option}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};


// --- 4. MegaDropdownLink Component (Handles the wide multi-column 'Shop' menu) ---
const MegaDropdownLink = ({ link }) => {
  const [isMegaHovering, setIsMegaHovering] = useState(false);

  return (
    <div
      className="relative h-full flex items-center px-3 transition-colors duration-150"
      onMouseEnter={() => setIsMegaHovering(true)}
      onMouseLeave={() => setIsMegaHovering(false)}
    >
      <Link
        to={link.linkTo || "/shop"}
        className="text-white hover:text-gray-300 transition duration-150 flex items-center text-sm font-medium whitespace-nowrap"
      >
        {link.name}
        <ChevronDownIcon className={`w-3 h-3 ml-1 transition-transform ${isMegaHovering ? 'transform rotate-180' : ''}`} />
      </Link>

      {/* --- MEGA DROPDOWN PANEL --- */}
      {isMegaHovering && link.columns && (
        <div
          // FIX: Mega Menu Alignment - left: 0 makes it align under the parent link
          className="absolute left-0 top-full mt-0 w-full md:w-[1000px] bg-white border border-t-2 border-indigo-600 shadow-2xl p-6 rounded-b-lg"
        >
          <div className="grid grid-cols-5 gap-8">

            {/* Column 1-3: Links */}
            {link.columns.slice(0, 3).map((column, colIndex) => (
              <div key={colIndex} className="col-span-1">
                <p className="text-sm font-bold text-gray-900 uppercase mb-3 border-b pb-1">
                  {column.heading}
                </p>
                <nav className="space-y-1">
                  {column.items.map((item) => (
                    <Link key={item.name} to={item.linkTo} className="block text-sm text-gray-700 hover:text-indigo-600 py-1 transition duration-100">
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {colIndex === 0 && (
                  <>
                    {/* Top & Tunics section */}
                    <div className="mt-4 pt-2 border-t border-gray-100">
                      <p className="text-sm font-bold text-gray-900 uppercase mb-3">Top & Tunics</p>
                      <Link to="/tops/tank-&-tops" className="block text-sm text-gray-700 hover:text-indigo-600 py-1">Tank & Tops</Link>
                      <Link to="/tops/short-tops-&-tunics" className="block text-sm text-gray-700 hover:text-indigo-600 py-1">Tunics & Kurtis</Link>
                    </div>
                    {/* Bottom House section */}
                    <div className="mt-4 pt-2 border-t border-gray-100">
                      <p className="text-sm font-bold text-gray-900 uppercase mb-3">Bottom House</p>
                      <Link to="/skirts/palazzo-pants" className="block text-sm text-gray-700 hover:text-indigo-600 py-1">Palazzo Pants</Link>
                      <Link to="/skirts/long-skirts" className="block text-sm text-gray-700 hover:text-indigo-600 py-1">Handblock Printed Lounge Pants</Link>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Column 4-5: Product Previews */}
            <div className="col-span-2 grid grid-cols-2 gap-4 border-l pl-4">
              {/* Product Preview 1 */}
              <div className="bg-gray-50 rounded-lg p-2 text-center">
                <img src={img1} alt="Featured Necklace" className="w-full h-auto object-cover mb-2 rounded" />
                <p className="text-sm font-bold text-gray-900">HANDMADE SEEDS NECKLACE</p>
                <p className="text-xs text-red-600">Rs. 3,200.00</p>
              </div>
              {/* Product Preview 2 */}
              <div className="bg-gray-50 rounded-lg p-2 text-center">
                <img src={img2} alt="Featured Necklace 2" className="w-full h-auto object-cover mb-2 rounded" />
                <p className="text-sm font-bold text-gray-900">Olive Strings Beaded Necklace</p>
                <p className="text-xs text-red-600">Rs. 3,700.00</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


// --- 5. Header Component (The main header structure) ---
const Header = () => {
  // 👈 Context से states और functions लें
  const {
    isDrawerOpen,
    toggleCartDrawer,
    cartItems,
    getTotalAmount
  } = useCart();

  // Local state for Mobile Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- EFFECT TO PREVENT BODY SCROLL WHEN DRAWER IS OPEN ---
  useEffect(() => {
    const isAnyDrawerOpen = isMenuOpen || isDrawerOpen;
    document.body.style.overflow = isAnyDrawerOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, isDrawerOpen]);


  // Handlers to toggle drawers
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDrawerOpen) toggleCartDrawer();
  }
  const handleCartToggle = () => {
    toggleCartDrawer();
    if (isMenuOpen) setIsMenuOpen(false);
  }


  // --- DESKTOP LINKS DATA STRUCTURE (Mega Menu Link at start) ---
  const desktopLinks = [
    {
      name: 'Shop',
      isMegaDropdown: true,
      columns: [
        {
          heading: 'Handmade Jewelry',
          items: [
            { name: 'HiddenPotential Seed Jewelry', linkTo: '/jewelry/hidden-potential-seed-jewelry' },
            { name: 'EarthTones Terracotta Jewelry', linkTo: '/jewelry/earth-tones-terracotta-jewelry' },
            { name: 'DaringDokra Tribal Jewelry', linkTo: '/jewelry/daring-dokra-tribal-jewelry' },
            { name: 'LightHeart Paper Jewelry', linkTo: '/jewelry/lightheart-paper-jewelry' },
          ],
        },
        {
          heading: 'Handcrafted Saree House',
          items: [
            { name: 'Tussar Silk Sarees', linkTo: '/sarees/tussar-silk-sarees' },
            { name: 'Odisha Handloom Sarees', linkTo: '/sarees/odisha-handloom-sarees' },
            { name: 'Maheshwari Sarees', linkTo: '/sarees/maheshwari-sarees' },
            { name: 'Chanderi Sarees', linkTo: '/sarees/chanderi-sarees' },
            { name: 'Chettinad South Cotton Sarees', linkTo: '/sarees/chettinad-south-cotton-sarees' },
            { name: 'Bagru Cotton Sarees', linkTo: '/sarees/bagru-cotton-sarees' },
            { name: 'Kota Doria Sarees', linkTo: '/sarees/kota-doria-sarees' },
            { name: 'Batik Mulmul Sarees', linkTo: '/sarees/batik-mulmul-sarees' },
          ],
        },
        {
          heading: 'Readymade saree blouse',
          items: [
            { name: 'Sleeveless Blouses', linkTo: '/blouses/sleeveless-blouses' },
            { name: 'Benarsi Brocade Blouses', linkTo: 'blouses/benarsi-brocade-blouses' },
            { name: 'Chiffon Organza Blouses', linkTo: '/blouses/chiffon-organza-blouses' },
            { name: 'Plain Silk Blouses', linkTo: '/blouses/plain-silk-blouses' },
            { name: 'Kantha Stitch Blouses', linkTo: '/blouses/kantha-stitch-blouses' },
            { name: 'Ajrakh Blouses', linkTo: '/blouses/ajrakh-blouses' },
            { name: 'Batik Blouses', linkTo: '/blouses/batik-blouses' },
            { name: 'Handloom Blouses', linkTo: '/blouses/handloom-blouses' },
          ],
        },
      ],
    },
    // 👈 2. REST OF THE LINKS 
    { name: 'Handmade Jewelry', href: '#jewelry', isDropdown: true, subOptions: ['Hidden Potential Seed Jewelry', 'Earth Tones Terracotta Jewelry', 'Daring Dokra Tribal Jewelry', "LightHeart Paper Jewelry"], },
    { name: 'Handcrafted Sarees', href: '#sarees', isDropdown: true, subOptions: ['Tussar Silk Sarees', 'Maheshwari Sarees', 'Chanderi Sarees', 'Odisha Handloom Sarees', "Chettinad South Cotton Sarees", "Bagru Cotton Sarees", "Kota Doria Sarees", "Batik Mulmul Sarees"], },
    { name: 'Readymade Blouses', href: '#blouses', isDropdown: true, subOptions: ['Sleeveless Blouses', 'Benarsi Brocade Blouses', "Chiffon Organza Blouses", "Plain Silk Blouses", "Kantha Stitch Blouses", "Ajrakh Blouses", "Batik Blouses", "Handloom Blouses"], },
    { name: 'Tops & Tunics', href: '#tops', isDropdown: true, subOptions: ['Tank & Tops', 'Short Tops & Tunics', 'Kurtis'], },
    { name: 'Skirts & Pants', href: '#skirts', isDropdown: true, subOptions: ['Long Skirts', 'Palazzo Pants'], },
    { name: 'Upscaled Vintage Apparel', href: '#vintage', isDropdown: true, subOptions: ['Kaftans', 'Ruffled Tops', "Halter Tops", "TubeDress Pants", "Butterfly Pants", "Seinoritta Pants"], },
    { name: 'Accessories', href: '#accessories', isDropdown: true, subOptions: ["Scarves", "Duppattas", "Bags", 'Bookmarks', 'Headbands', 'Diaries'], },
    { name: 'SALE', href: '/sale', isDropdown: false },
  ];


  return (
    <header className="w-full sticky top-0 bg-white z-30 shadow-md">

      {/* 1. Top Section: Logo, Search, Cart, and Mobile Menu Button */}
      <div className="p-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between md:px-15">
          {/* Left: Logo & Text */}
          <Link to="/" className="flex items-center">
            <img src={logo} className='h-18' alt="Eco Embrace Logo" />
          </Link>

          {/* Center: Search Bar (Same) */}
          <div className="hidden md:flex flex-grow max-w-xl mx-8">
            <div className="flex border border-gray-400 rounded-sm overflow-hidden w-full">
              <input type="text" placeholder="Search Here" className="w-full p-3 text-base focus:outline-none" />
              <button className="bg-[#99816B] w-16 flex items-center justify-center hover:bg-[#86705D] transition duration-150" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>

          {/* Right: Cart Icon & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <button onClick={handleCartToggle} className="text-3xl text-gray-800 hover:text-black transition duration-150 relative" aria-label="Shopping Cart">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">{cartItems.length}</span>
              )}
            </button>

            {/* Mobile Menu Button (Same) */}
            <button onClick={toggleMenu} className="md:hidden text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition duration-150" aria-label="Open Navigation Menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Bottom Section: Desktop Navigation Links (Mega Menu is handled here) */}
      <div className="bg-[#5D3C49] w-full shadow-lg hidden md:block h-12">
        <div className="max-w-7xl mx-auto h-full px-4">
          <nav className="flex justify-center items-center h-full">
            <div className="flex items-center">
              {desktopLinks.map((link) => {
                if (link.isMegaDropdown) {
                  return <MegaDropdownLink key={link.name} link={link} />;
                }
                return (
                  <DropdownLink key={link.name} link={link} subOptions={link.subOptions || []} />
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer (Menu) */}
      <MobileDrawer isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* 4. Cart Drawer */}
      <CartDrawer />

    </header>
  );
};

export default Header;