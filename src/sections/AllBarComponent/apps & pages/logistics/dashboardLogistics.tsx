import { useState } from 'react';
import { Search, Truck, Package, Clock, MapPin, AlertCircle, ChevronDown, Download, CarFront } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const LogisticsDashboard = () => {
  const [activeTab, setActiveTab] = useState('on-the-way');

  // Vehicle Overview Data
  const vehicleData = [
    { status: 'On the way', value: 39.7, time: '2hr 10min', color: '#7367F0' },
    { status: 'Unloading', value: 28.3, time: '3hr 15min', color: '#00CFE8' },
    { status: 'Loading', value: 17.4, time: '1hr 24min', color: '#A8AAAE' },
    { status: 'Waiting', value: 14.6, time: '5hr 19min', color: '#EA5455' }
  ];

  // Shipment Statistics Data
  const shipmentData = [
    { day: '1 Jan', shipments: 45, deliveries: 38 },
    { day: '2 Jan', shipments: 52, deliveries: 42 },
    { day: '3 Jan', shipments: 48, deliveries: 40 },
    { day: '4 Jan', shipments: 60, deliveries: 52 },
    { day: '5 Jan', shipments: 55, deliveries: 48 },
    { day: '6 Jan', shipments: 65, deliveries: 58 },
    { day: '7 Jan', shipments: 70, deliveries: 63 },
    { day: '8 Jan', shipments: 62, deliveries: 55 },
    { day: '9 Jan', shipments: 58, deliveries: 50 },
    { day: '10 Jan', shipments: 72, deliveries: 65 }
  ];

  // Delivery Performance Data
  const performanceData = [
    { metric: 'Packages in transit', value: '10k' },
    { metric: 'Packages out for delivery', value: '5k' },
    { metric: 'Packages delivered', value: '15k' },
    { metric: 'Delivery success rate', value: '95%' },
    { metric: 'Average delivery time', value: '2.5 Days' },
    { metric: 'Customer satisfaction', value: '4.5/5' }
  ];

  // Delivery Exceptions Data
  const exceptionData = [
    { reason: 'Incorrect address', color: '#7367F0' },
    { reason: 'Weather conditions', color: '#00CFE8' },
    { reason: 'Federal Holidays', color: '#A8AAAE' },
    { reason: 'Damage during transit', color: '#EA5455' }
  ];

  // Orders by Countries Data
  const ordersData = [
    { sender: 'Michael Hughes', receiver: 'Daisy Coleman', address: '101 Boulder, California (CA), 933180' },
    { sender: 'Glenn Todd', receiver: 'Arthur West', address: '1713 Garnet, California (CA), 939573' }
  ];

  // On Route Vehicles Data
  const vehiclesData = [
    { id: 'VOL-468031', start: 'Cagnes-sur-Mer, France', end: 'Catania, Italy', warnings: 'No Warnings', progress: 49 },
    { id: 'VOL-302781', start: 'Köln, Germany', end: 'Laspazia, Italy', warnings: 'Ecu Not Responding', progress: 24 },
    { id: 'VOL-75822', start: 'Chambray-lès-Tours, France', end: 'Hamm, Germany', warnings: 'Oil Leakage', progress: 7 },
    { id: 'VOL-451430', start: 'Berlin, Germany', end: 'Gelsenkirchen, Germany', warnings: 'No Warnings', progress: 95 },
    { id: 'VOL-921577', start: 'Cergy-Pontoise, France', end: 'Berlin, Germany', warnings: 'No Warnings', progress: 65 }
  ];

  return (
    <div className="space-y-6">

      {/* First Row - Vehicle Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {vehicleData.map((item, index) => (
          <div 
            key={index}
            className={`bg-white p-6 rounded-xl shadow-sm border-b-4 cursor-pointer transition-all duration-200 ${
              activeTab === item.status.toLowerCase().replace(' ', '-') 
                ? 'border-primary' 
                : 'border-transparent hover:border-gray-300'
            }`}
            onClick={() => setActiveTab(item.status.toLowerCase().replace(' ', '-'))}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">{item.status}</p>
                <h3 className="text-2xl font-semibold mt-1">{item.value}%</h3>
                <p className="text-gray-500 text-sm mt-1">{item.time}</p>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                <Truck size={24} style={{ color: item.color }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row - Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Shipment Statistics */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-semibold">Shipment Statistics</h3>
              <p className="text-gray-500">Total number of deliveries 23.8k</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-primary text-white rounded-lg text-sm">Shipment</button>
              <button className="px-3 py-1 bg-gray-100 rounded-lg text-sm">Delivery</button>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={shipmentData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="shipments" fill="#7367F0" radius={[4, 4, 0, 0]} />
                <Bar dataKey="deliveries" fill="#00CFE8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Delivery Performance */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-semibold">Delivery Performance</h3>
              <p className="text-gray-500">12% increase in this month</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {performanceData.map((item, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-500 text-sm">{item.metric}</p>
                <p className="font-semibold mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Row - 3 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Delivery Exceptions */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">Delivery exceptions</h3>
          </div>
          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-primary">30%</div>
            <p className="text-gray-500">AVG. Exceptions</p>
          </div>
          <div className="space-y-3">
            {exceptionData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
                <span className="text-sm">{item.reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Orders by Countries */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-semibold">Orders by Countries</h3>
              <p className="text-gray-500">62 deliveries in progress</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-gray-100 rounded-lg text-sm">New</button>
              <button className="px-3 py-1 bg-gray-100 rounded-lg text-sm">Preparing</button>
              <button className="px-3 py-1 bg-primary text-white rounded-lg text-sm">Shipping</button>
            </div>
          </div>
          <div className="space-y-4">
            {ordersData.map((order, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium text-gray-500">SENDER</span>
                  <span className="text-sm font-medium">{order.sender}</span>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium text-gray-500">RECEVER</span>
                  <span className="text-sm font-medium">{order.receiver}</span>
                </div>
                <p className="text-xs text-gray-500">{order.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Empty Column for spacing */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-4">Additional Info</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Total Vehicles</span>
              <span className="font-semibold">42</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Active Routes</span>
              <span className="font-semibold">18</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Pending Orders</span>
              <span className="font-semibold">27</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Row - On Route Vehicles Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold">On route vehicles</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-3 font-medium">LOCATION</th>
                <th className="pb-3 font-medium">STARTING ROUTE</th>
                <th className="pb-3 font-medium">ENDING ROUTE</th>
                <th className="pb-3 font-medium">WARNINGS</th>
                <th className="pb-3 font-medium">PROGRESS</th>
              </tr>
            </thead>
            <tbody>
              {vehiclesData.map((vehicle, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-2 font-medium flex items-center gap-x-2"><CarFront size={29} className='bg-gray-300 rounded-full' />{vehicle.id}</td>
                  <td className="py-2">{vehicle.start}</td>
                  <td className="py-2">{vehicle.end}</td>
                  <td className="py-2">
                    <div className="flex items-center">
                      <AlertCircle size={16} className="text-warning mr-2" />
                      {vehicle.warnings}
                    </div>
                  </td>
                  <td className="flex items-center w-full py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-28 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-[#0A6CD5]`} 
                            style={{ width: `${vehicle.progress}%` }}
                        />
                      </div>
                      <span>{vehicle.progress}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-500">Rows per page: 5</span>
            <span className="text-gray-500 flex items-center gap-2">
                <button className='text-gray-500 font-semibold text-lg hover:scale-150 hover:text-[#0A6CD5] transition-all duration-200'>{"<"}</button>
                1-5 of 25
                <button className='text-gray-500 font-semibold text-lg hover:scale-150 hover:text-[#0A6CD5] transition-all duration-200'>{">"}</button>
            </span>
          <button className="bg-primary text-white px-4 py-2 rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogisticsDashboard;