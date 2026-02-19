// Kanban.tsx
import React from 'react';

interface Task {
  id: number;
  category: string;
  title: string;
  completed: number;
  total: number;
}

const Kanban: React.FC = () => {
  const tasks: Task[] = [
    { id: 1, category: "UX", title: "Research FAQ page UX", completed: 4, total: 12 },
    { id: 2, category: "Dashboard", title: "Review completed Apps", completed: 8, total: 17 },
    { id: 3, category: "App", title: "Forms & tables section", completed: 5, total: 14 },
    { id: 4, category: "Charts & Map", title: "Complete charts & maps", completed: 6, total: 21 }
  ];

  const newItems = [
    "Find new images for pages"
  ];

  const appPages = [
    "eCommerce", "Academy", "Logistics", "Email", "Chat", 
    "Calendar", "Kanban", "Invoice", "User", "Roles & Permissions", "Pages"
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">MATERIO</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-1">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">App: 8 Pages</h2>
          <ul className="text-gray-600 dark:text-white space-y-2">
            {appPages.map((page) => (
              <li key={page} className="hover:text-blue-600 cursor-pointer">{page}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">In Progress</h3>
            {tasks.filter(task => task.category === "UX").map((task) => (
              <div key={task.id} className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm mb-3">
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded mb-2">
                  {task.category}
                </span>
                <p className="text-gray-700 dark:text-white mb-2">{task.title}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-300">
                  <span>{task.completed}/{task.total}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">In Review</h3>
            {tasks.filter(task => task.category === "Dashboard").map((task) => (
              <div key={task.id} className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm mb-3">
                <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded mb-2">
                  {task.category}
                </span>
                <p className="text-gray-700 dark:text-white mb-2">{task.title}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-300">
                  <span>{task.completed}/{task.total}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Done</h3>
            {tasks.filter(task => task.category === "App").map((task) => (
              <div key={task.id} className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm mb-3">
                <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded mb-2">
                  {task.category}
                </span>
                <p className="text-gray-700 dark:text-white mb-2">{task.title}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-300">
                  <span>{task.completed}/{task.total}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Add New</h3>
            {tasks.filter(task => task.category === "Charts & Map").map((task) => (
              <div key={task.id} className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm mb-3">
                <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded mb-2">
                  {task.category}
                </span>
                <p className="text-gray-700 dark:text-white mb-2">{task.title}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-300">
                  <span>{task.completed}/{task.total}</span>
                </div>
              </div>
            ))}
            
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-6 mb-4">Add New Item</h3>
            {newItems.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
                <p className="text-gray-700 dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;