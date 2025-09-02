import { Search, Filter, Download, Plus, ChevronDown } from 'lucide-react';

const CategoryPage = () => {
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">MATERIO</h1>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search Product" 
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold mb-4">Filters</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select className="w-full p-2 border rounded-lg">
                  <option>Website Sales</option>
                </select>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold">$74,347</p>
                <p className="text-sm text-gray-600">21k orders</p>
                <p className="text-sm text-green-600">12.4%</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold mb-4">Category</h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Status</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Category</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Stock</span>
              </label>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Products Table */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold">PRODUCT</h2>
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

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-3 font-medium">PRODUCT</th>
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
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.description}</div>
                      </td>
                      <td className="py-4">
                        <span className="bg-gray-100 px-2 py-1 rounded text-sm">{product.category}</span>
                      </td>
                      <td className="py-4">{product.stock}</td>
                      <td className="py-4 font-medium">{product.price}</td>
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
              <span className="text-gray-500">Rows per page: 10 ▼</span>
              <span className="text-gray-500">1-10 of 12</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CategoryPage;