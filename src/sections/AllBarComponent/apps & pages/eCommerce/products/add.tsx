import { useState } from 'react';
import { Upload, X, Plus, Minus } from 'lucide-react';

const AddProductPage = () => {
  const [variants, setVariants] = useState([{ id: 1, type: '', value: '' }]);
  const [mediaType, setMediaType] = useState<'upload' | 'url'>('upload');

  const addVariant = () => {
    setVariants([...variants, { id: Date.now(), type: '', value: '' }]);
  };

  const removeVariant = (id: number) => {
    setVariants(variants.filter(v => v.id !== id));
  };

  return (
    <div className="space-y-6 ">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold dark:text-white">Add a new product</h1>
          <p className="text-gray-500 dark:text-gray-300">Orders placed across your store</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Product Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Product Information */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold mb-4 dark:text-white">Product Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Product Name</label>
                <input type="text" className="bg-[#eee] w-full p-2 border rounded-lg dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">SKU</label>
                <input type="text" className="bg-[#eee] w-full p-2 border rounded-lg dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Barcode</label>
                <input type="text" className="bg-[#eee] w-full p-2 border rounded-lg dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Description (Optional)</label>
                <textarea className="w-full p-2 bg-[#eee] border rounded-lg h-20 dark:text-white" />
              </div>
              <div className="flex space-x-2">
                {['B', 'U', 'T', 'E', 'F', 'G', 'H', 'I', 'J'].map((btn) => (
                  <button key={btn} className="px-3 py-1 border rounded-lg text-sm">
                    {btn}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">Keep your account secure with authentication step.</p>
          </div>

          {/* Product Image */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold mb-4 dark:text-white">Product Image</h2>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <button 
                  className={`px-4 py-2 rounded-lg ${mediaType === 'upload' ? 'bg-primary text-white' : 'bg-gray-100'}`}
                  onClick={() => setMediaType('upload')}
                >
                  Product Image
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg ${mediaType === 'url' ? 'bg-primary text-white' : 'bg-gray-100'}`}
                  onClick={() => setMediaType('url')}
                >
                  Add media from URL
                </button>
              </div>
              
              {mediaType === 'upload' ? (
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                  <Upload className="mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500 dark:text-gray-300">Drag and Drop Your Image Here.</p>
                  <p className="text-gray-500">or</p>
                  <button className="text-primary font-medium">Browse image</button>
                </div>
              ) : (
                <input type="url" placeholder="Enter image URL" className="w-full p-2 border rounded-lg dark:text-white" />
              )}
            </div>
          </div>

          {/* Product Variants */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold mb-4 dark:text-white">Product Variants</h2>
            <div className="space-y-4">
              {variants.map((variant) => (
                <div key={variant.id} className="flex space-x-4 items-start">
                  <select className="flex-1 p-2 bg-[#eee] border rounded-lg dark:text-white">
                    <option>Select Variant</option>
                    <option>Size</option>
                    <option>Color</option>
                    <option>Material</option>
                  </select>
                  <input 
                    type="text" 
                    placeholder="Variant Value" 
                    className="flex-1 p-2 border bg-[#eee] rounded-lg dark:text-white" 
                  />
                  <button 
                    onClick={() => removeVariant(variant.id)}
                    className="p-2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                </div>
              ))}
              <button 
                onClick={addVariant}
                className="flex items-center text-primary font-medium"
              >
                <Plus size={16} className="mr-1" />
                Add Variant
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Inventory */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold mb-4 dark:text-white">Inventory</h2>
            <div className="space-y-3">
              <button className="w-full text-left p-2 bg-gray-100 rounded-lg">+ Restock</button>
              <button className="w-full text-left p-2 bg-gray-100 rounded-lg">Shipping</button>
              <button className="w-full text-left p-2 bg-gray-100 rounded-lg">Global Delivery</button>
              <button className="w-full text-left p-2 bg-gray-100 rounded-lg">Attributes</button>
              <button className="w-full text-left p-2 bg-gray-100 rounded-lg">Advanced</button>
            </div>
          </div>

          {/* Options */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold mb-4 dark:text-white">Options</h2>
            <div className="space-y-3">
              <button className="w-full text-left p-2 bg-primary text-white rounded-lg">Add to stock</button>
              <div className="text-sm">
                <p>Product in stock now: <span className="font-semibold">54</span></p>
                <p>Product in transit: <span className="font-semibold">390</span></p>
                <p>Last time restocked: <span className="font-semibold">24th June, 2022</span></p>
                <p>Total stock over lifetime: <span className="font-semibold">2,430</span></p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold mb-4 dark:text-white">Pricing</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-gray-700 dark:text-white mb-1">Base Price</label>
                <input type="number" className="bg-[#eee] w-full p-2 border rounded-lg dark:text-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 dark:text-white mb-1">Discounted Price</label>
                <input type="number" className="bg-[#eee] w-full p-2 border rounded-lg dark:text-white" />
              </div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm dark:text-white">Charge tax on this product</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm dark:text-white">In stock</span>
              </label>
            </div>
          </div>

          {/* Organize */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold mb-4 dark:text-white">Organize</h2>
            <div className="space-y-3">
              <select className="w-full p-2 bg-[#eee] border rounded-lg dark:text-white">
                <option>Select Vendor</option>
              </select>
              <select className="w-full p-2 bg-[#eee] border rounded-lg dark:text-white">
                <option>Select Category</option>
              </select>
              <select className="w-full p-2 bg-[#eee] border rounded-lg dark:text-white">
                <option>Select Collection</option>
              </select>
              <select className="w-full p-2 bg-[#eee] border rounded-lg dark:text-white">
                <option>Select Status</option>
              </select>
              <input type="text" placeholder="Enter Tags" className="w-full p-2 border rounded-lg dark:text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;