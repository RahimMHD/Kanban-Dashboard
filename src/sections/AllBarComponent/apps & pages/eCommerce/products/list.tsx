import { Search, Filter, Download, Plus } from 'lucide-react';

const ProductsListPage = () => {
  const categories = [
    'Smart Phone',
    'Clothing, Shoes, and jewellery',
    'Home and Kitchen',
    'Beauty and Personal Care',
    'Books',
    'Games',
    'Baby Products',
    'Growsari',
    'Computer Accessories',
    'Fitness Tracker'
  ];

  const products = [
    { id: 1, name: 'iPhone 14 Pro', description: 'Super Retina XDR display footnote Pro Motion technology', category: 'Electronics', stock: 'SKU', price: '$19,472' },
    { id: 2, name: 'Echo Dot (4th Gen)', description: 'Echo Dot Smart speaker with Alexa', category: 'Electronics', stock: 'SKU', price: '$39.99' },
    { id: 3, name: 'Dohloue Wall Clock', description: 'Modern 10 Inch Battery Operated Wall Clocks', category: 'Accessories', stock: 'SKU', price: '$25.50' },
    { id: 4, name: 'INZCOU Running Shoes', description: 'Lightweight Tennis Shoes Non Slip Gym Workout Shoes', category: 'Shoes', stock: 'SKU', price: '$16.34' },
    { id: 5, name: 'Apple Watch Series 7', description: 'Starlight Aluminum Case with Starlight Sport Band.', category: 'Electronics', stock: 'SKU', price: '$36.98' },
    { id: 6, name: 'Meta Quest 2', description: 'Advanced All-in-One Virtual Reality Headset', category: 'Electronics', stock: 'SKU', price: '$79.9' },
    { id: 7, name: 'MacBook Pro 16', description: 'Laptop M2 Pro chip with 12-core CPU and 18-core GPU', category: 'Electronics', stock: 'SKU', price: '$29.9' },
    { id: 8, name: 'SAMSUNG Galaxy S22 Ultra', description: 'Android Smartphone, 256GB, 8K Camera', category: 'Phone Decor', stock: 'SKU', price: '$264.8' },
    { id: 9, name: 'Air Jordan', description: 'Air Jordan is a line of basketball shoes produced by Nike', category: 'Shoes', stock: 'SKU', price: '$89.9' },
    { id: 10, name: 'VISKABACKA', description: 'Armchair, Skarichia black/light grey', category: 'Office', stock: 'SKU', price: '$125' }
  ];

  return (
    <div className="space-y-6 mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Categories */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold mb-4 dark:text-white">CATEGORIES</h2>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <div key={index} className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
                  <p className="font-medium dark:text-white">{category}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">Choose from wide range of products online at best prices.</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Filters and Actions */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <button className="flex items-center px-4 py-2 border rounded-lg">
                  <Filter size={16} className="mr-2" />
                  Filters
                </button>
                <select className="px-4 py-2 bg-[#eee] border rounded-lg">
                  <option>Status</option>
                </select>
                <select className="px-4 py-2 bg-[#eee] border rounded-lg">
                  <option>Category</option>
                </select>
                <select className="px-4 py-2 bg-[#eee] border rounded-lg">
                  <option>Stock</option>
                </select>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg">
                  <Download size={16} className="mr-2" />
                  Export
                </button>
                <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg">
                  <Plus size={16} className="mr-2" />
                  Add Product
                </button>
              </div>
            </div>

            {/* Products Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 dark:text-gray-300 border-b">
                    <th className="pb-3 font-medium dark:text-white">PRODUCT</th>
                    <th className="pb-3 font-medium">CATEGORY</th>
                    <th className="pb-3 font-medium">STOCK</th>
                    <th className="pb-3 font-medium">PRICE</th>
                    <th className="pb-3 font-medium">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b last:border-0">
                      <td className="py-4">
                        <div className="font-medium dark:text-white">{product.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-300">{product.description}</div>
                      </td>
                      <td className="py-4">{product.category}</td>
                      <td className="py-4">{product.stock}</td>
                      <td className="py-4 font-medium">{product.price}</td>
                      <td className="py-4">
                        <button className="text-primary text-sm">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6">
              <span className="text-gray-500">Rows per page: 10 ▼</span>
              <span className="text-gray-500">1-10 of 12</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500 dark:text-gray-300">Total products</p>
              <p className="font-semibold dark:text-white">12,548</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500 dark:text-gray-300">Total Earnings</p>
              <p className="font-semibold dark:text-white">$98,784.00</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500 dark:text-gray-300">Actions</p>
              <p className="font-semibold dark:text-white">4,689 | $45,627.00</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500 dark:text-gray-300">Total products</p>
              <p className="font-semibold dark:text-white">11,297 | $51,097.00</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500 dark:text-gray-300">Total Earnings</p>
              <p className="font-semibold dark:text-white">9,474 | $74,829.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsListPage;