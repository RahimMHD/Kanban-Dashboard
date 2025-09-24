import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Send, X, Plus } from 'lucide-react';

interface InvoiceItem {
  id: string;
  item: string;
  description: string;
  cost: number;
  hours: number;
  price: number;
  discount: string;
}

const InvoiceAdd = () => {
  const [invoiceNumber] = useState('4997');
  const [dateIssued, setDateIssued] = useState('YYYY-MM-DD');
  const [dateDue, setDateDue] = useState('YYYY-MM-DD');
  const [selectedClient, setSelectedClient] = useState('');
  const [salesperson, setSalesperson] = useState('Tommy Shelby');
  const [thanks, setThanks] = useState('Thanks for your business');
  const [note, setNote] = useState('It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!');
  
  const [items, setItems] = useState<InvoiceItem[]>([
    {
      id: '1',
      item: 'App Design',
      description: 'Customization & Bug Fixes',
      cost: 24,
      hours: 1,
      price: 24.00,
      discount: '0% 0% 0%'
    }
  ]);

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Math.random().toString(),
      item: '',
      description: '',
      cost: 0,
      hours: 1,
      price: 0,
      discount: '0% 0% 0%'
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: any) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const subtotal = 1800;
  const discount = 28;
  const tax = 21;
  const total = 1690;

  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Form Content */}
          <div className="lg:col-span-3 bg-white">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold">MATERIO</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Office 149, 450 South Brand Brooklyn</p>
                    <p>San Diego County, CA 91905, USA</p>
                    <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
                  </div>
                </div>
                <div className="text-right space-y-4">
                  <div>
                    <h1 className="text-2xl font-bold">Invoice</h1>
                    <p className="text-muted-foreground">#{invoiceNumber}</p>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <label className="text-sm text-muted-foreground">Date Issued:</label>
                      <input 
                        placeholder="YYYY-MM-DD"
                        value={dateIssued} 
                        onChange={(e) => setDateIssued(e.target.value)}
                        className="mt-1 flex h-10 w-full rounded-md border border-input bg-[#eee] px-3 py-2 text-sm ring-offset-[#eee] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Date Due:</label>
                      <input 
                        placeholder="YYYY-MM-DD"
                        value={dateDue} 
                        onChange={(e) => setDateDue(e.target.value)}
                        className="mt-1 flex h-10 w-full rounded-md border border-input bg-[#eee] px-3 py-2 text-sm ring-offset-[#eee] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold mb-4">Invoice To:</h3>
                  <select 
                    value={selectedClient} 
                    onChange={(e) => setSelectedClient(e.target.value)}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-[#eee] px-3 py-2 text-sm ring-offset-[#eee] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a client</option>
                    <option value="Jordan Stevenson">Jordan Stevenson</option>
                    <option value="Stephanie Burns">Stephanie Burns</option>
                    <option value="Tony Herrera">Tony Herrera</option>
                  </select>
                  
                  {selectedClient && (
                    <div className="mt-4 p-4 bg-muted/50 rounded text-sm">
                      <p className="font-medium">Jordan Stevenson</p>
                      <p>Hall-Robbins PLC</p>
                      <p>7777 Mendez Plains</p>
                      <p>(616) 865-4180</p>
                      <p>don85@johnson.com</p>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Bill To:</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span>Total Due:</span>
                      <span>$12,110.55</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Bank name:</span>
                      <span>American Bank</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Country:</span>
                      <span>United States</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>IBAN:</span>
                      <span>ETD95476213874685</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>SWIFT code:</span>
                      <span>BR91905</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <div className="mb-8">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Item</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Cost</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Hours</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Price</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"></th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    {items.map((item) => (
                      <tr key={item.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 space-y-2">
                          <select 
                            value={item.item} 
                            onChange={(e) => updateItem(item.id, 'item', e.target.value)}
                            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-[#eee] px-3 py-2 text-sm ring-offset-[#eee] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="">Select item</option>
                            <option value="App Design">App Design</option>
                            <option value="Web Design">Web Design</option>
                            <option value="SEO">SEO</option>
                            <option value="Social Media">Social Media</option>
                          </select>
                          <input 
                            placeholder="Description"
                            value={item.description}
                            onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                            className="text-sm flex h-10 w-full rounded-md border border-input bg-[#eee] px-3 py-2 ring-offset-[#eee] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          <input 
                            type="number"
                            value={item.cost}
                            onChange={(e) => updateItem(item.id, 'cost', Number(e.target.value))}
                            className="flex h-10 w-full rounded-md border border-input bg-[#eee] px-3 py-2 text-sm ring-offset-[#eee] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          <input 
                            type="number"
                            value={item.hours}
                            onChange={(e) => updateItem(item.id, 'hours', Number(e.target.value))}
                            className="flex h-10 w-full rounded-md border border-input bg-[#eee] px-3 py-2 text-sm ring-offset-[#eee] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          <div className="space-y-2">
                            <span className="font-medium">${item.price.toFixed(2)}</span>
                            <div className="text-xs text-muted-foreground">
                              Discount: {item.discount}
                            </div>
                          </div>
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          <button 
                            onClick={() => removeItem(item.id)}
                            disabled={items.length === 1}
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#eee] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <button 
                  onClick={addItem}
                  className="mt-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#eee] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-[#eee] hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </button>
              </div>

              {/* Footer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Salesperson:</label>
                    <input 
                      value={salesperson}
                      onChange={(e) => setSalesperson(e.target.value)}
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-[#eee] px-3 py-2 text-sm ring-offset-[#eee] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Thanks:</label>
                    <input 
                      value={thanks}
                      onChange={(e) => setThanks(e.target.value)}
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-[#eee] px-3 py-2 text-sm ring-offset-[#eee] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Discount:</span>
                    <span>${discount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax:</span>
                    <span>{tax}%</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Total:</span>
                    <span>${total}</span>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-8">
                <label className="text-sm font-medium">Note:</label>
                <textarea 
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={4}
                  className="mt-2 flex min-h-[80px] w-full rounded-md border border-input bg-[#eee] px-3 py-2 text-sm ring-offset-[#eee] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Sidebar Actions */}
          <div className="space-y-4 bg-white p-5">
            <button className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#eee] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
              <Send className="h-4 w-4 mr-2" />
              Send Invoice
            </button>
            
            <button className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#eee] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-[#eee] hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Preview
            </button>
            
            <button className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#eee] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-[#eee] hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Save
            </button>
            
            <div className="p-4 border rounded">
              <p className="text-sm text-muted-foreground mb-2">Accept payments via</p>
              <select className="w-full p-2 border rounded text-sm">
                <option>Internet Banking</option>
                <option>Credit Card</option>
                <option>PayPal</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="payment-terms" defaultChecked className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-[#eee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
                <label htmlFor="payment-terms" className="text-sm">Payment Terms</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="client-notes" className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-[#eee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
                <label htmlFor="client-notes" className="text-sm">Client Notes</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="payment-stub" className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-[#eee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
                <label htmlFor="payment-stub" className="text-sm">Payment Stub</label>
              </div>
            </div>
            
            <button className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#eee] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-green-600 hover:bg-green-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Payment
            </button>
            
            <button className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#eee] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceAdd;