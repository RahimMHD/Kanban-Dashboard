// Logistics.tsx
import React from 'react';

interface Delivery {
  id: number;
  name: string;
  time: string;
  status: string;
  location: string;
  trackingNumber: string;
}

const FleetLogistics: React.FC = () => {
  const deliveries: Delivery[] = [
    {
      id: 1,
      name: "Vetonica Herman",
      time: "Sep 01, 753 AM",
      status: "OUT FOR DELIVERY",
      location: "Lincoln Harbor, NY, USA",
      trackingNumber: "VOL-954784"
    },
    {
      id: 2,
      name: "Veronica Herman",
      time: "Sep 03, 802 AM",
      status: "ARRIVED",
      location: "Midtown East, NY, USA",
      trackingNumber: "VOL-342808"
    },
    {
      id: 3,
      name: "Helen Jacobs",
      time: "Sep 03, 802 AM",
      location: "Hoboken, NY, USA",
      status: "ARRIVED",
      trackingNumber: "VOL-343908"
    }
  ];

  const watermarks = [
    "Quadro Piano", "Quadro Ferry", "Yankers", "New Rockets", "Wester Bay",
    "Huntington", "Wellsbury", "Hornpsfeed", "West Babylon", "Jal",
    "Woodbridge", "Sylen Island", "New York", "Elizabeth", "Sydney Island",
    "Victoria Beach", "Busy Now"
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">MATERIO</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Apple & Pages</h2>
          <ul className="text-gray-600 space-y-2">
            {["eCommerce", "Academy", "Logistics", "Dashboard", "Fleet", "Email", 
              "Chat", "Calendar", "Kanban", "Invoice", "User", "Roles & Permissions", "Pages"]
              .map((item) => (
                <li key={item} className="hover:text-blue-600 cursor-pointer">{item}</li>
              ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Fleet</h2>
          <div className="space-y-6">
            {deliveries.map((delivery) => (
              <div key={delivery.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-800">{delivery.name}</h3>
                    <p className="text-sm text-gray-500">{delivery.time}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    delivery.status === "ARRIVED" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {delivery.status}
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-700">{delivery.trackingNumber}</p>
                  <p className="text-sm text-gray-600">{delivery.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-1">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Watermark</h2>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">Watermark</h3>
            <ul className="space-y-2">
              {watermarks.map((watermark) => (
                <li key={watermark} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                  {watermark}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500">
        <p>© 2025, Made with by ThemeSelection</p>
      </footer>
    </div>
  );
};

export default FleetLogistics;