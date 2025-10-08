import React from 'react';
// Context से कार्ट आइटम्स को इम्पोर्ट करें
import { useCart } from '../context/CartContext'; 
import { Link } from 'react-router-dom';
import { ShoppingBagIcon, TrashIcon } from '@heroicons/react/24/outline';

const CheckoutPage = () => {
  // Context से ज़रूरी डेटा और फ़ंक्शन लें
  const { cartItems, getTotalAmount, removeFromCart, updateQuantity } = useCart();
  const totalAmount = getTotalAmount();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-20 text-center">
        <ShoppingBagIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-gray-700">Your Shopping Bag is Empty</h1>
        <p className="text-gray-500 mt-2">Time to find some beautiful items!</p>
        <Link to="/" className="mt-5 inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">
          Start Shopping
        </Link>
      </div>
    );
  }

  // Helper function to format price for display
  const formatPrice = (amount) => `Rs. ${amount.toFixed(2)}`;

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-3">Shopping Cart ({cartItems.length} Items)</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: Cart Items List */}
        <div className="w-full lg:w-8/12 space-y-6">
          {cartItems.map((item) => (
            <div key={item.uniqueId} className="flex items-start border p-4 rounded-lg bg-white shadow-sm">
              
              {/* Image */}
              <img src={item.imageUrl} alt={item.name} className="w-24 h-28 object-cover rounded-md mr-6" />
              
              {/* Item Details */}
              <div className="flex-grow">
                <p className="text-lg font-semibold text-gray-900">{item.name.split(' | ')[0]}</p>
                {item.selectedOption && (
                  <p className="text-sm text-gray-600 mt-1">Size/Option: {item.selectedOption}</p>
                )}
                <p className="text-md font-medium text-gray-700 mt-1">Price: {item.price}</p>
              </div>

              {/* Quantity and Actions */}
              <div className="flex flex-col items-end space-y-3">
                <div className="flex border border-gray-300 rounded-sm overflow-hidden">
                  <button onClick={() => updateQuantity(item.uniqueId, item.quantity - 1)} className="px-3 py-1 text-base hover:bg-gray-100" disabled={item.quantity <= 1}>-</button>
                  <input type="text" readOnly value={item.quantity} className="w-10 text-center text-base border-x focus:outline-none" />
                  <button onClick={() => updateQuantity(item.uniqueId, item.quantity + 1)} className="px-3 py-1 text-base hover:bg-gray-100">+</button>
                </div>
                
                <button onClick={() => removeFromCart(item.uniqueId)} className="text-red-500 hover:text-red-700 transition flex items-center text-sm">
                  <TrashIcon className="w-4 h-4 mr-1" /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Summary and Checkout */}
        <div className="w-full lg:w-4/12 sticky top-4">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Summary</h2>
            
            <div className="space-y-2 border-b pb-4 mb-4">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>{formatPrice(totalAmount)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>

            <div className="flex justify-between text-xl font-bold text-gray-900 mb-6">
              <span>Total</span>
              <span>{formatPrice(totalAmount)}</span>
            </div>

            {/* This button stays as a visual indicator for the next step */}
            <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 font-semibold transition">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;