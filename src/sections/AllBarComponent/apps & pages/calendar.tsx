// Calendar.tsx
import React from 'react';

const Calendar: React.FC = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calendarDays = [
    [31, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 1, 2, 3, 4]
  ];

  const eventFilters = [
    { name: "View All", checked: true },
    { name: "Personal", checked: false },
    { name: "Business", checked: false },
    { name: "Family", checked: false },
    { name: "Holiday", checked: false },
    { name: "ETC", checked: false }
  ];

  const viewOptions = ["Month", "Week", "Day", "List"];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">2025</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Dashboards</h2>
          <ul className="text-gray-600 space-y-2">
            {["Academy", "Logistics", "Email", "Chat", "Calendar", "Kanban", "Invoice", 
              "User", "Roles & Permissions", "Pages"].map((item) => (
              <li key={item} className="hover:text-blue-600 cursor-pointer">{item}</li>
            ))}
          </ul>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Event Filters</h2>
            <ul className="space-y-2">
              {eventFilters.map((filter) => (
                <li key={filter.name} className="flex items-center">
                  <input 
                    type="checkbox" 
                    checked={filter.checked} 
                    readOnly
                    className="mr-2 h-4 w-4 text-blue-600 rounded"
                  />
                  <span className="text-gray-600">{filter.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Month</h2>
            <ul className="space-y-2">
              {viewOptions.map((option) => (
                <li key={option} className="text-gray-600 hover:text-blue-600 cursor-pointer">
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">September 2025</h2>
          
          <div className="mb-6 grid grid-cols-7 gap-2 text-center font-medium text-gray-700">
            {daysOfWeek.map((day) => (
              <div key={day} className="py-2">{day}</div>
            ))}
          </div>

          <div className="space-y-2">
            {calendarDays.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 gap-2">
                {week.map((day, dayIndex) => (
                  <div 
                    key={dayIndex} 
                    className={`p-2 h-20 border rounded-md ${
                      day === 1 ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="text-right text-sm font-medium text-gray-700">{day}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Month Week</h2>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="p-3 bg-gray-50 rounded-lg text-center">
                  <h3 className="font-medium text-gray-800">Month</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500">
        <p>© 2025, Made with by ThemeSelection</p>
        <div className="flex justify-center space-x-4 mt-2 text-sm">
          <a href="#" className="text-gray-500 hover:text-gray-700">License</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">More Themes</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Documentation</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Support</a>
        </div>
      </footer>
    </div>
  );
};

export default Calendar;