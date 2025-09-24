import { Search, Filter, ChevronDown, MoreVertical } from 'lucide-react';

const OrdersListPage = () => {
  const stats = [
    { title: 'Pending Payment', value: '56' },
    { title: 'Completed', value: '12,689' },
    { title: 'Refunded', value: '124' },
    { title: 'Failed', value: '32' }
  ];

  const orders = [
    {
      id: '#5434',
      date: 'Mon May 18 2022, 2:11 AM',
      customer: 'Gabrielle Feyer',
      email: 'gfeyer0@nyu.edu',
      status: 'Paid',
      delivery: 'Delivered',
      method: '@gmail.com'
    },
    {
      id: '#6745',
      date: 'Wed May 03 2023, 7:26 PM',
      customer: 'Jackson Deignan',
      email: 'jdeignan1@dell.com',
      status: 'Cancelled',
      delivery: 'Delivered',
      method: '@gmail.com'
    },
    {
      id: '#6746',
      date: 'Tue May 02 2023, 1:45 PM',
      customer: 'Tanya Crum',
      email: 'tcrum2@yandex.ru',
      status: 'Fuller',
      delivery: 'Ready to Pickup',
      method: '...5170'
    },
    {
      id: '#6747',
      date: 'Mon May 01 2023, 9:30 AM',
      customer: 'Dallis Dillestone',
      email: 'ddillestone@email.com',
      status: 'Canceled',
      delivery: 'Ready to Pickup',
      method: '@gmail.com'
    },
    {
      id: '#6748',
      date: 'Sun Apr 30 2023, 4:15 PM',
      customer: 'Conan Kennham',
      email: 'ckennham@email.com',
      status: 'Canceled',
      delivery: 'Delivered',
      method: '...6'
    },
    {
      id: '#6749',
      date: 'Sat Apr 29 2023, 11:20 AM',
      customer: 'Daven Brocket',
      email: 'dbrocket@email.com',
      status: 'Canceled',
      delivery: 'Out for Delivery',
      method: '@gmail.com'
    },
    {
      id: '#6750',
      date: 'Fri Apr 28 2023, 8:45 AM',
      customer: 'Rex Farbrace',
      email: 'rfarbrace@email.com',
      status: 'Pending',
      delivery: 'Out for Delivery',
      method: '...1883'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid': return 'text-green-600 bg-green-100';
      case 'delivered': return 'text-green-600 bg-green-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      case 'canceled': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'fuller': return 'text-blue-600 bg-blue-100';
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
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search Order" 
              className="pl-10 pr-4 py-2 bg-[#eee] border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
            />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-center">
              <h3 className="text-2xl font-semibold">{stat.value}</h3>
              <p className="text-gray-500 mt-1">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Orders Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold">Orders</h2>
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 border rounded-lg">
              <Filter size={16} className="mr-2" />
              Filters
            </button>
            <button className="p-2 border rounded-lg">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-3 font-medium">ORDER DATE</th>
                <th className="pb-3 font-medium">CUSTOMERS</th>
                <th className="pb-3 font-medium">PAYMENT STATUS</th>
                <th className="pb-3 font-medium">DELIVERY STATUS</th>
                <th className="pb-3 font-medium">METHOD</th>
                <th className="pb-3 font-medium">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="py-4">
                    <div className="font-medium">{order.id}</div>
                    <div className="text-sm text-gray-500">{order.date}</div>
                  </td>
                  <td className="py-4">
                    <div className="font-medium">{order.customer}</div>
                    <div className="text-sm text-gray-500">{order.email}</div>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.delivery)}`}>
                      {order.delivery}
                    </span>
                  </td>
                  <td className="py-4 text-gray-500">{order.method}</td>
                  <td className="py-4">
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <ChevronDown size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-gray-500">Showing 1-7 of {orders.length} orders</span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-lg">Previous</button>
            <button className="px-3 py-1 bg-primary text-white rounded-lg">1</button>
            <button className="px-3 py-1 border rounded-lg">2</button>
            <button className="px-3 py-1 border rounded-lg">3</button>
            <button className="px-3 py-1 border rounded-lg">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OrdersListPage;