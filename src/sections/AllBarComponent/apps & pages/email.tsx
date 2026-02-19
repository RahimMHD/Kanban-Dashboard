// Email.tsx
import React from 'react';

interface EmailItem {
  id: number;
  sender: string;
  subject: string;
  selected: boolean;
}

const Email: React.FC = () => {
  const emails: EmailItem[] = [
    { id: 1, sender: "Tommy Sicilia", subject: "How to Succeed with Your Shopify Store", selected: false },
    { id: 2, sender: "Tressa Gass", subject: "Please find attached the latest Company Report", selected: true },
    { id: 3, sender: "Louetta Esses", subject: "Update Can Change Your Personal Life", selected: false },
    { id: 4, sender: "Waldemar Mannering", subject: "Refer friends, Get rewards.", selected: false },
    { id: 5, sender: "Eb Begg", subject: "App Update", selected: true },
    { id: 6, sender: "Modestine Spat", subject: "Password Reset", selected: false }
  ];

  const folders = [
    { name: "Inbox", checked: true },
    { name: "Sent", checked: false },
    { name: "Draft", checked: false },
    { name: "Starred", checked: true },
    { name: "Spam", checked: false },
    { name: "Trash", checked: false }
  ];

  const labels = ["Private", "Company", "Important", "Personal"];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">MATERIO</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">Dashboards</h2>
          <ul className="text-gray-600 dark:text-white space-y-2 mb-6">
            {["Front Pages", "Apps & Pages", "eCommerce", "Academy", "Logistics", 
              "Email", "Chat", "Calendar", "Kanban", "Invoice", "User", "Roles & Permissions"]
              .map((item) => (
                <li key={item} className="hover:text-blue-600 cursor-pointer">{item}</li>
              ))}
          </ul>

          <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">Image</h2>
          <ul className="space-y-2 mb-6">
            {folders.map((folder) => (
              <li key={folder.name} className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={folder.checked} 
                  readOnly
                  className="mr-2 h-4 w-4 text-blue-600 rounded"
                />
                <span className="text-gray-600 dark:text-white">{folder.name}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">Labels</h2>
          <ul className="space-y-2">
            {labels.map((label) => (
              <li key={label} className="text-gray-600 dark:text-white hover:text-blue-600 cursor-pointer">
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">Search mail</h2>
            <input 
              type="text" 
              placeholder="Search mail"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-4">
            {emails.map((email) => (
              <div key={email.id} className={`p-4 rounded-lg border ${
                email.selected ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'
              }`}>
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    checked={email.selected} 
                    readOnly
                    className="mr-3 mt-1 h-4 w-4 text-blue-600 rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 dark:text-white">{email.sender}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{email.subject}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-gray-500 text-sm">Graphical Settings</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-300">
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

export default Email;