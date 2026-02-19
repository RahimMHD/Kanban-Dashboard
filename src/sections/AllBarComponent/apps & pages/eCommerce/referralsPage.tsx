// Referrals.jsx
import React from 'react';

const Referrals = () => {
  const referredUsers = [
    { name: "Korossa Leyfield", id: "3398", status: "Unpaid", value: "$6655.92", amount: "$380.17" },
    { name: "Tania Brotherhood", id: "6740", status: "Unpaid", value: "$2113.04", amount: "$716.72" },
    { name: "Clermnie Montgomery", id: "2749", status: "Unpaid", value: "$6777.09", amount: "$699.02" },
    { name: "Job Jope", id: "1413", status: "Paid", value: "$9465.13", amount: "$98.23" },
    { name: "Christoffer Derell", id: "9176", status: "Paid", value: "$6202.81", amount: "$882.51" },
    { name: "Herminia Eyree", id: "6975", status: "Unpaid", value: "$9802.40", amount: "$219.52" },
    { name: "Dela Lathwell", id: "4552", status: "Paid", value: "$6470.46", amount: "$831.45" },
    { name: "Kirbie Greenhow", id: "4131", status: "Unpaid", value: "$6199.28", amount: "$856.00" },
    { name: "Adrienne Tourne", id: "4072", status: "Unpaid", value: "$6774.33", amount: "$821.78" },
    { name: "Vanya Hearons", id: "3070", status: "Unpaid", value: "$1067.14", amount: "$804.91", email: "vhearons@glogspot.com" }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">MATERIO</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search #K"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">eCommerce</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            "Dashboard", "Products", "Orders", "Customers", "Manage Reviews", "Referrals",
            "Settings", "Academy", "Logistics", "Email", "Chat", "Calendar"
          ].map((item) => (
            <div key={item} className="text-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer">
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 text-sm">Total Earning</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">$24,983</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 text-sm">Unpaid Earning</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">$8,647</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 text-sm">Signups</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">2,367</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 text-sm">Conversion Rate</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">4.5%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">How to use</h3>
          <p className="text-gray-600 mb-4">Integrate your referral code in 3 easy steps.</p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
              <span className="text-gray-700">Create & validate your referral link and get <strong>$50</strong></span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
              <span className="text-gray-700">For every new signup you get <strong>10%</strong></span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
              <span className="text-gray-700">Get other friends to generate link and get <strong>$100</strong></span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">Invite your friends</h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email addresses"
            />
          </div>
          <p className="text-gray-600 text-sm mb-2">Share the referral link</p>
          <div className="flex items-center">
            <div className="flex-grow bg-gray-100 p-2 rounded-l-md border border-gray-300 border-r-0 truncate">
              pixinvent.com/?ref=6479
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md text-sm font-medium">
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">Referred users</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">USERS</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">REFERRED ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">STATUS</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">VALUE</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Buy Now</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
              {referredUsers.map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900 dark:text-white">{user.name}</div>
                    {user.email && <div className="text-sm text-gray-500 dark:text-gray-300">{user.email}</div>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${user.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.value}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-medium">
                      Buy Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-500">
            Rows per page: 
            <select className="ml-1 bg-transparent border-none">
              <option>10</option>
            </select>
          </div>
          <div className="text-sm text-gray-500">
            1-10 of 45
          </div>
        </div>
      </div>

    </div>
  );
};

export default Referrals;