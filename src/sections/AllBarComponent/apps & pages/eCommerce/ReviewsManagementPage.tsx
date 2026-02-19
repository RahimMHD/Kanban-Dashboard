import { Search, Filter, Star } from 'lucide-react';

const ReviewsManagementPage = () => {
  const reviews = [
    {
      product: 'iPhone 14 Pro',
      description: 'Super Retina XDR display footnote Pro Motion technology',
      reviewer: 'Zane Scraggs',
      email: 'zscraggs06@flavors.me',
      review: 'Lorem ipsum dolor. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
      date: 'May 28, 2020',
      status: 'Published'
    },
    {
      product: 'Echo Dot (4th Gen)',
      description: 'Echo Dot Smart speaker with Alexa',
      reviewer: 'Stacey Haligalley',
      email: 'shaligalleyf@google.nl',
      review: 'Great product with amazing features',
      date: 'Mar 15, 2021',
      status: 'Published'
    },
    {
      product: 'Dohloue Wall Clock',
      description: 'Modern 10 Inch Battery Operated Wall Clocks',
      reviewer: 'Francyne Couthurst',
      email: 'fcouthurst2@upenn.edu',
      review: 'Beautiful design and accurate timekeeping',
      date: 'Aug 10, 2020',
      status: 'Pending'
    },
    {
      product: 'INZCOU Running Shoes',
      description: 'Lightweight Tennis Shoes Non Slip Gym Workout Shoes',
      reviewer: 'Nate De Mitris',
      email: 'nde3@intel.com',
      review: 'Very comfortable for daily workouts',
      date: 'Dec 18, 2021',
      status: 'Published'
    },
    {
      product: 'Apple Watch Series 7',
      description: 'Starlight Aluminum Case with Starlight Sport Band',
      reviewer: 'Elhel Zanardi',
      email: 'ezanardi14@magy.cz',
      review: 'Excellent smartwatch with great battery life',
      date: 'Jun 12, 2020',
      status: 'Published'
    },
    {
      product: 'Meta Quest 2',
      description: 'Advanced All-In-One Virtual Reality Headset',
      reviewer: 'Fancy Tweedell',
      email: 'ftweedell5@telegraph.co.uk',
      review: 'Immersive VR experience',
      date: 'Nov 23, 2020',
      status: 'Rejected'
    },
    {
      product: 'MacBook Pro 16',
      description: 'Laptop M2 Pro chip with 12-core CPU and 18-core GPU',
      reviewer: 'Abeu Gregorace',
      email: 'agregorace6@godaddy.com',
      review: 'Powerful machine for professional work',
      date: 'Sep 08, 2020',
      status: 'Published'
    },
    {
      product: 'SAMSUNG Galaxy S22 Ultra',
      description: 'Android Smartphone, 256GB, 8K Camera',
      reviewer: 'Shlylle Goodacre',
      email: 'sgoodacre7@washingtonpost.com',
      review: 'Amazing camera quality',
      date: 'Jun 10, 2021',
      status: 'Published'
    },
    {
      product: 'Air Jordan',
      description: 'Air Jordan is a line of basketball shoes produced by Nike',
      reviewer: 'Gisela Leppard',
      email: 'gleppard8@yandex.ru',
      review: 'Comfortable and stylish',
      date: 'Apr 20, 2020',
      status: 'Published'
    },
    {
      product: 'VISKABACKA',
      description: 'Armchair, Skartofta black/light grey',
      reviewer: 'Hilario Wheldon',
      email: 'hwheldon9@apple.com',
      review: 'Very comfortable chair',
      date: 'Aug 21, 2020',
      status: 'Pending'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'text-green-600 bg-green-100';
      case 'Pending': return 'text-yellow-600 bg-yellow-100';
      case 'Rejected': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold dark:text-white">MATERIO</h1>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search #K" 
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
            />
          </div>
        </div>
      </div>

      {/* Stats Header */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center">
              <span className="text-3xl font-bold dark:text-white">4.89</span>
              <Star className="text-yellow-400 ml-2" size={20} />
            </div>
            <p className="text-gray-500 dark:text-gray-300">Total 187 reviews</p>
            <p className="text-sm text-gray-500">All reviews are from genuine customers</p>
            <p className="text-green-600 text-sm mt-1">+5 This week</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search Product" 
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Reviews Table */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold">Reviews</h2>
              <div className="flex items-center space-x-4">
                <button className="flex items-center px-4 py-2 border rounded-lg">
                  <Filter size={16} className="mr-2" />
                  Filters
                </button>
                <select className="px-4 py-2 border rounded-lg">
                  <option>All</option>
                  <option>Expert</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 dark:text-gray-300 border-b">
                    <th className="pb-3 font-medium dark:text-white">PRODUCT</th>
                    <th className="pb-3 font-medium">REVIEWER</th>
                    <th className="pb-3 font-medium">REVIEW</th>
                    <th className="pb-3 font-medium">DATE</th>
                    <th className="pb-3 font-medium">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review, index) => (
                    <tr key={index} className="border-b last:border-0 hover:bg-gray-50">
                      <td className="py-4">
                        <div className="font-medium dark:text-white">{review.product}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-300">{review.description}</div>
                      </td>
                      <td className="py-4">
                        <div className="font-medium">{review.reviewer}</div>
                        <div className="text-sm text-gray-500">{review.email}</div>
                      </td>
                      <td className="py-4 max-w-xs">
                        <p className="text-sm line-clamp-2">{review.review}</p>
                      </td>
                      <td className="py-4 text-gray-500">{review.date}</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(review.status)}`}>
                          {review.status}
                        </span>
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

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Reviews Statistics */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-4">Reviews statistics</h3>
            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-primary">12</div>
              <p className="text-gray-500">New reviews</p>
            </div>
            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-green-600">87%</div>
              <p className="text-gray-500">Positive reviews</p>
            </div>
            <p className="text-sm text-gray-500 text-center">Weekly Report</p>
          </div>

          {/* Buy Now Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <button className="w-full bg-primary text-white py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReviewsManagementPage;