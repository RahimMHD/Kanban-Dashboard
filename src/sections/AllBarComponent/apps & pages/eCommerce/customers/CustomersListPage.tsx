import { Search, Plus } from 'lucide-react';

const CustomersListPage = () => {
  const customers = [
    {
      name: 'Stenfield Baser',
      email: 'sbaser0@boston.com',
      customerId: '#879861',
      country: 'Australia',
      orders: 157,
      totalSpent: '$2,074.22'
    },
    {
      name: 'Laurie Dax',
      email: 'ldax1@lycos.com',
      customerId: '#178408',
      country: 'Australia',
      orders: 663,
      totalSpent: '$2,404.19'
    },
    {
      name: 'Maxine Kenrick',
      email: 'mkenrick2@eepurl.com',
      customerId: '#221092',
      country: 'Australia',
      orders: 64,
      totalSpent: '$8,821.4'
    },
    {
      name: 'Harman Burkill',
      email: 'hburkill3@tripall.org',
      customerId: '#645579',
      country: 'United States',
      orders: 640,
      totalSpent: '$5,294.35'
    },
    {
      name: 'Aubrey Borrow',
      email: 'aborrow4@jiahils.com',
      customerId: '#288765',
      country: 'France',
      orders: 184,
      totalSpent: '$1,003.3'
    },
    {
      name: 'Nester Fridd',
      email: 'nfridd6@cababy.com',
      customerId: '#321942',
      country: 'China',
      orders: 965,
      totalSpent: '$3,878.92'
    },
    {
      name: 'Lizzie Nicholas',
      email: 'lnicholes6@rediff.com',
      customerId: '#516109',
      country: 'Brazil',
      orders: 514,
      totalSpent: 'Buy Now'
    },
    {
      name: 'Amabel Scullion',
      email: 'ascullion7@wiley.com',
      customerId: '#403666',
      country: 'Australia',
      orders: 584,
      totalSpent: '$4,150.97'
    },
    {
      name: 'Zeke Arton',
      email: 'zarton8@weibo.com',
      customerId: '#895280',
      country: 'Australia',
      orders: 539,
      totalSpent: '$3,430.05'
    },
    {
      name: 'Rosy Medlicott',
      email: 'rmedlicott8@amazon.com',
      customerId: '#199195',
      country: 'Australia',
      orders: 4,
      totalSpent: '$8,646.75'
    }
  ];

  return (
    <div className="p-6 space-y-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">MATERIO</h1>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search #K" 
              className="pl-10 pr-4 py-2 bg-[#eee] border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
            />
          </div>
        </div>
      </div>

      {/* Search Header */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="font-semibold mb-4">Search</h2>
      </div>

      {/* Customers Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-3 font-medium"></th>
                <th className="pb-3 font-medium">CUSTOMERS</th>
                <th className="pb-3 font-medium">CUSTOMER ID</th>
                <th className="pb-3 font-medium">COUNTRY</th>
                <th className="pb-3 font-medium">ORDERS</th>
                <th className="pb-3 font-medium">TOTAL SPENT</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="py-4">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="py-4">
                    <div className="font-medium">{customer.name}</div>
                    <div className="text-sm text-gray-500">{customer.email}</div>
                  </td>
                  <td className="py-4">{customer.customerId}</td>
                  <td className="py-4">{customer.country}</td>
                  <td className="py-4">{customer.orders}</td>
                  <td className="py-4">
                    {customer.totalSpent === 'Buy Now' ? (
                      <button className="px-3 py-1 bg-[#eee] rounded-lg text-sm">
                        Buy Now
                      </button>
                    ) : (
                      <span className="font-medium">{customer.totalSpent}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 mt-6">
          <button className="flex items-center px-4 py-2 bg-[#eee] rounded-lg">
            <Plus size={16} className="mr-2" />
            Add Customer
          </button>
          <button className="flex items-center px-4 py-2 bg-[#eee] rounded-lg">
            <Plus size={16} className="mr-2" />
            Add Customer
          </button>
        </div>

      </div>
    </div>
  );
};

export default CustomersListPage;