import { Calendar, Phone, Mail, MapPin, CreditCard, Star, Package, Truck } from 'lucide-react';

const CustomerDetailsPage = () => {
  const orders = [
    { id: '#5434', date: 'Mon May 16 2022', status: 'Delivered', spent: '$73.98' },
    { id: '#6745', date: 'Wed May 03 2023', status: 'Delivered', spent: '$100.39' },
    { id: '#6087', date: 'Thu Dec 15 2022', status: 'Ready to Pickup', spent: '$609.26' },
    { id: '#7825', date: 'Fri Aug 05 2022', status: 'Ready to Pickup', spent: '$617.64' },
    { id: '#5604', date: 'Sat Jun 18 2022', status: 'Delivered', spent: '$384.41' },
    { id: '#5390', date: 'Fri Oct 14 2022', status: 'Out for Delivery', spent: '$162.85' },
    { id: '#7279', date: 'Mon Aug 08 2022', status: 'Out for Delivery', spent: '$591.47' },
    { id: '#7003', date: 'Fri Jun 10 2022', status: 'Delivered', spent: '$664.51' },
    { id: '#8632', date: 'Tue Oct 25 2022', status: 'Dispatched', spent: '$717.72' },
    { id: '#8501', date: 'Wed Nov 02 2022', status: 'Ready to Pickup', spent: '$477.42' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'text-green-600 bg-green-100';
      case 'Ready to Pickup': return 'text-blue-600 bg-blue-100';
      case 'Out for Delivery': return 'text-yellow-600 bg-yellow-100';
      case 'Dispatched': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">MATERIO</h1>
          <div className="relative mt-2">
            <input 
              type="text" 
              placeholder="Search #K" 
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
            />
          </div>
        </div>
      </div>

      {/* Customer Header */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold">Customer ID #879861</h2>
            <div className="flex items-center mt-2 text-gray-500">
              <Calendar size={16} className="mr-2" />
              <span>Aug 17, 2020, 5:48 (ET)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Customer Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Customer Details */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">Stenfield Baser</h3>
            <p className="text-gray-500 mb-4">Customer ID #879861</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-600">Username:</p>
                <p className="font-medium">Stanfield Baser</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Billing Email:</p>
                <p className="font-medium">sbaser0@boston.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status:</p>
                <p className="font-medium text-green-600">Active</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Contact:</p>
                <p className="font-medium">+1 (234) 464-0600</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Country:</p>
                <p className="font-medium">Australia</p>
              </div>
            </div>

            <button className="w-full bg-primary text-white py-2 rounded-lg">
              Edit Details
            </button>
          </div>

          {/* Orders Table */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">Orders Placed</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-3 font-medium">ORDER DATE</th>
                    <th className="pb-3 font-medium">STATUS</th>
                    <th className="pb-3 font-medium">SPENT</th>
                    <th className="pb-3 font-medium">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="py-4">
                        <div className="font-medium">{order.id}</div>
                        <div className="text-sm text-gray-500">{order.date}</div>
                      </td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 font-medium">{order.spent}</td>
                      <td className="py-4">
                        <button className="text-primary text-sm">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-6">
              <span className="text-gray-500">Rows per page: 10 ▼</span>
              <span className="text-gray-500">1-10 of 100</span>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Upgrade Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">Upgrade to premium</h3>
            <p className="text-gray-500 mb-4">
              Upgrade customer to premium membership to access pro features.
            </p>
            <button className="w-full bg-primary text-white py-2 rounded-lg">
              Upgrade To Premium
            </button>
          </div>

          {/* Account Balance */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">Account Balance</h3>
            <p className="text-2xl font-bold text-primary mb-2">$7480</p>
            <p className="text-gray-500">Credit Left</p>
            <p className="text-sm text-gray-500 mt-2">Account balance for next purchase</p>
          </div>

          {/* Wishlist */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">Wishlist</h3>
            <p className="text-2xl font-bold mb-2">15</p>
            <p className="text-gray-500">Items in wishlist</p>
            <p className="text-sm text-gray-500 mt-2">Receive notifications on price drops</p>
          </div>

          {/* Overview */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">Overview</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Security</p>
              <p className="text-sm text-gray-600">Address & Billing</p>
              <p className="text-sm text-gray-600">Notifications</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CustomerDetailsPage;