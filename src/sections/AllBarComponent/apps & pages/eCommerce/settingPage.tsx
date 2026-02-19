// Settings.jsx
import React from 'react';

const Settings = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Getting Started</h1>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">Store Details</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
          <li>Payments</li>
          <li>Checkout</li>
          <li>Shipping & Delivery</li>
          <li>Locations</li>
          <li>Notifications</li>
        </ul>
      </div>

      <hr className="my-6 border-gray-200" />

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 dark:text-gray-300">Store name</p>
            <p className="text-gray-800 dark:text-white font-medium">- Phone</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300">Store contact email</p>
            <p className="text-gray-800 dark:text-white font-medium">- Sender email</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-md mb-8">
        <p className="text-blue-700 dark:text-blue-200">
          Confirm that you have access to <a href="#" className="text-blue-600 dark:text-blue-300 underline">johndoe@gmail.com</a> in sender email settings.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">Billing Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 dark:text-gray-300">Legal business name</p>
            <p className="text-gray-800 dark:text-white font-medium">- Country*</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300">Address</p>
            <p className="text-gray-800 dark:text-white font-medium">- Apartment, suit, etc.</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Buy Now
            </button>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300">City</p>
            <p className="text-gray-800 dark:text-white font-medium">- State</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300">PIN Code</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">Time zone and units of measurement</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Used to calculate product prices, shipping weights, and order times.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-gray-600 dark:text-gray-300">Time zone</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300">Unit system</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300">Default weight unit</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">Store currency</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">The currency your products are sold in.</p>
        <div>
          <p className="text-gray-600 dark:text-gray-300">Store currency</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">Order id format</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Shown on the Orders page, customer pages, and customer order notifications to identify orders.
        </p>
        <div className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-gray-300">Prefix</span>
          <span className="text-gray-800 dark:text-white font-medium">- #</span>
          <span className="text-gray-600 dark:text-gray-300">Suffix</span>
          <span className="text-gray-800 dark:text-white font-medium">- #</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Your order ID will appear as #1001, #1002, #1003 ...
        </p>
      </div>

    </div>
  );
};

export default Settings;