import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import footerimg1 from "../assets/footerimg/footerimg1.webp";

import visa from "../assets/paymentappsimages/visa.avif";
import mastercard from "../assets/paymentappsimages/mastercard.avif";
import applepay from "../assets/paymentappsimages/applepay.webp";
import gpay from "../assets/paymentappsimages/gpay.avif";
import paypal from "../assets/paymentappsimages/paypal.avif";
import amex from "../assets/paymentappsimages/ames.avif";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // --- SCROLL TO TOP LOGIC ---
  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="mt-12">

      {/* 1. Guarantee Bar */}
      <div className="bg-gray-100 border-b border-gray-200 py-8">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { title: 'Quality Guaranteed',  img: footerimg1 },
            { title: 'Beat Any Price',  img:footerimg1 },
            { title: 'Fast & Reliable', img: footerimg1 },
            { title: 'Ships Next Day', img: footerimg1 },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={item.img} alt={item.title} className="h-20 mb-2" />
              <h4 className="font-semibold text-gray-800">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Main Footer */}
      <div className="bg-neutral-800 text-gray-300 py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Stay in the Loop */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Stay In The Loop</h3>
            <form className="mb-4 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-3 w-full sm:flex-1 text-sm text-gray-800 border bg-white focus:outline-none rounded "
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded text-sm transition duration-150"
              >
                SUBMIT
              </button>
            </form>
            <label className="flex items-start text-xs text-gray-400">
              <input type="checkbox" className="mt-1 mr-2 accent-blue-600" />
              I agree to subscribe to updates from ShopRoxx™{' '}
              <Link to="/privacy" className="text-white hover:underline">Privacy Policy</Link>
            </label>
            <p className="text-xs text-gray-400 mt-2">
              Become a ShopRoxx™ insider and get 10% off today. We'll keep you updated with the latest news.
            </p>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Policies</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link to="/refund" className="text-gray-400 hover:text-white">Refund Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
            </nav>
          </div>

          {/* Secure Checkout */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Secure Checkout</h3>
            <p className="text-sm text-gray-400 mb-4">
              We use encrypted SSL security to protect your credit card information.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[visa, mastercard, amex, applepay, gpay, paypal].map((img, idx) => (
                <img key={idx} src={img} alt={img} className="h-6" />
              ))}
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2V7a3 3 0 00-6 0v2h6z" clipRule="evenodd" />
              </svg>
              Secured by SSL
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="bg-neutral-900 text-gray-500 py-4 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-1 md:space-y-0">
            <p>© 2025 EcoEmbrace. All rights reserved.</p>
            <p className="text-gray-400">Powered by Eco Embrace</p>
          </div>
          <div className="flex space-x-3 mt-3 md:mt-0">
            {['T','F','P','I','G+','T','Y'].map((icon, idx) => (
              <a key={idx} href="#" className="hover:text-white">{icon}</a>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 p-3 bg-white text-neutral-800 rounded-full shadow-lg transition-transform transition-opacity duration-300 z-50
          hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-neutral-800
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
