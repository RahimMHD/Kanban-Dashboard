import { Calendar, MapPin, CreditCard, Truck, Package, CheckCircle } from 'lucide-react';

const OrderDetailsPage = () => {
  const orderItems = [
    {
      product: 'OnePlus 7 Pro',
      brand: 'OnePlus',
      price: '$799',
      quantity: 1,
      total: '$799'
    },
    {
      product: 'Magic Mouse',
      brand: 'Google',
      price: '$89',
      quantity: 1,
      total: '$89'
    },
    {
      product: 'Wooden Chair',
      brand: 'Insofar',
      price: '$289',
      quantity: 2,
      total: '$578'
    },
    {
      product: 'Air Jordan',
      brand: 'Nike',
      price: '$299',
      quantity: 2,
      total: '$598'
    }
  ];

  const shippingActivities = [
    {
      status: 'Order was placed (Order ID: #5434)',
      description: 'Your order has been placed successfully',
      completed: true
    },
    {
      status: 'Pick-up',
      description: 'Pick-up scheduled with courier',
      completed: true
    },
    {
      status: 'Dispatched',
      description: 'Item has been picked up by courier.',
      completed: true
    },
    {
      status: 'Package arrived',
      description: 'Package arrived at an Amazon facility, NY',
      completed: true
    },
    {
      status: 'Dispatched for delivery',
      description: 'Package has left an Amazon facility, NY',
      completed: true
    },
    {
      status: 'Delivery',
      description: 'Package will be delivered by tomorrow',
      completed: false
    }
  ];

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

      {/* Order Header */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold">Order #5434</h2>
            <div className="flex items-center space-x-4 mt-2">
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Delivered</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Paid</span>
            </div>
            <div className="flex items-center mt-2 text-gray-500">
              <Calendar size={16} className="mr-2" />
              <span>Mon May 16 2022, 2:11 AM (ET)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Order Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Items */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">Order Details</h3>
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-3 font-medium">PRODUCT</th>
                  <th className="pb-3 font-medium">PRICE</th>
                  <th className="pb-3 font-medium">QTY</th>
                  <th className="pb-3 font-medium text-right">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {orderItems.map((item, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-4">
                      <div className="font-medium">{item.product}</div>
                      <div className="text-sm text-gray-500">{item.brand}</div>
                    </td>
                    <td className="py-4">{item.price}</td>
                    <td className="py-4">{item.quantity}</td>
                    <td className="py-4 text-right font-medium">{item.total}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3} className="py-2 text-right text-gray-500">Subtotal:</td>
                  <td className="py-2 text-right font-medium">$2,093</td>
                </tr>
                <tr>
                  <td colSpan={3} className="py-2 text-right text-gray-500">Shipping Fee:</td>
                  <td className="py-2 text-right font-medium">$2</td>
                </tr>
                <tr>
                  <td colSpan={3} className="py-2 text-right text-gray-500">Tax:</td>
                  <td className="py-2 text-right font-medium">$28</td>
                </tr>
                <tr>
                  <td colSpan={3} className="py-2 text-right font-semibold">Total:</td>
                  <td className="py-2 text-right font-semibold">$2,113</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Shipping Activity */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">Shipping Activity</h3>
            <div className="space-y-4">
              {shippingActivities.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 ${
                    activity.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {activity.completed ? <CheckCircle size={14} /> : <div className="w-2 h-2 bg-gray-400 rounded-full" />}
                  </div>
                  <div>
                    <p className="font-medium">{activity.status}</p>
                    <p className="text-sm text-gray-500">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Customer Details */}
        <div className="space-y-6">
          {/* Customer Details */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">Customer details</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Gabrielle Feyer</p>
                <p className="text-sm text-gray-500">Customer ID: #47389</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Contact Info</p>
                <p className="text-sm text-gray-500">Email: gfeyer0@nyu.edu</p>
                <p className="text-sm text-gray-500">Mobile: +1 (609) 972-22-22</p>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">Shipping Address</h3>
            <div className="flex items-start">
              <MapPin size={16} className="text-gray-400 mr-2 mt-0.5" />
              <div>
                <p className="text-sm">45 Roker Terrace</p>
                <p className="text-sm">Latheronwheel</p>
                <p className="text-sm">KWS BNW, London</p>
                <p className="text-sm">UK</p>
              </div>
            </div>
          </div>

          {/* Billing Address */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">Billing Address</h3>
            <div className="flex items-start">
              <MapPin size={16} className="text-gray-400 mr-2 mt-0.5" />
              <div>
                <p className="text-sm">45 Roker Terrace</p>
                <p className="text-sm">Latheronwheel</p>
                <p className="text-sm">KWS BNW, London</p>
                <p className="text-sm">UK</p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <CreditCard size={16} className="text-gray-400 mr-2" />
              <span className="text-sm">Mastercard</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Card Number: *****4291</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OrderDetailsPage;