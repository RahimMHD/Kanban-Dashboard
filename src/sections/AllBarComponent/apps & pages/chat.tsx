// Chat.tsx
import React from 'react';

interface Contact {
  id: number;
  name: string;
  message: string;
  date: string;
}

const Chat: React.FC = () => {
  const contacts: Contact[] = [
    { id: 1, name: "Felecia Rower", message: "I will purchase it for sure. 🌤", date: "Aug 31" },
    { id: 2, name: "Adalberto Granzin", message: "If it takes long you can mail me ...", date: "Dec 13" },
    { id: 3, name: "Zenia Jacobs", message: "Thank you, looking forward to it.", date: "Dec 11" },
    { id: 4, name: "Miguel Gueriff", message: "Thank you, looking forward to it.", date: "Dec 13" },
    { id: 5, name: "Lauran Starner", message: "That sounds interesting. I'll hav...", date: "Dec 13" },
    { id: 6, name: "Ramonita Veras", message: "Sounds good. Let's do it.", date: "Dec 13" },
    { id: 7, name: "Verla Morgano", message: "Great work. Keep it up.", date: "Dec 13" }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">MATERIO</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Dashboards</h2>
          <ul className="text-gray-600 space-y-2">
            {["Front Pages", "Apps & Pages", "eCommerce", "Academy", "Logistics", 
              "Email", "Chat", "Calendar", "Kanban", "Invoice", "User", "Roles & Permissions", "Pages"]
              .map((item) => (
                <li key={item} className="hover:text-blue-600 cursor-pointer">{item}</li>
              ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Search OKK</h2>
            <input 
              type="text" 
              placeholder="Search Contacts"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-md font-semibold text-gray-700 mb-3">Search Contacts</h3>
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div key={contact.id} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <h4 className="font-medium text-gray-800">{contact.name}</h4>
                    <p className="text-sm text-gray-600">{contact.message}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-md font-semibold text-gray-700 mb-3">Search</h3>
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div key={contact.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-800">Search</h4>
                    <span className="text-sm text-gray-500">{contact.date}</span>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Buy Now
              </button>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
            <p className="text-gray-600">Select a contact to start a conversation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;