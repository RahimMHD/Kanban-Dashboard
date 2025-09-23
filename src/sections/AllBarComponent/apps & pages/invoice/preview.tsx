import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Send, Download, Printer, Edit, Plus, ChevronDown } from 'lucide-react';

interface InvoiceItem {
  item: string;
  description: string;
  hours: number;
  qty: number;
  total: number;
}

interface InvoiceData {
  id: string;
  number: string;
  dateIssued: string;
  dateDue: string;
  client: {
    name: string;
    company: string;
    address: string;
    phone: string;
    email: string;
  };
  billTo: {
    totalDue: number;
    bankName: string;
    country: string;
    iban: string;
    swiftCode: string;
  };
  items: InvoiceItem[];
  salesperson: string;
  note: string;
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
}

const mockInvoiceData: InvoiceData = {
  id: '4987',
  number: '#4987',
  dateIssued: '13 Sep 2025',
  dateDue: '23 Sep 2025',
  client: {
    name: 'Jordan Stevenson',
    company: 'Hall-Robbins PLC',
    address: '7777 Mendez Plains\n(616) 865-4180',
    phone: '(616) 865-4180',
    email: 'don85@johnson.com'
  },
  billTo: {
    totalDue: 12110.55,
    bankName: 'American Bank',
    country: 'United States',
    iban: 'ETD95476213874685',
    swiftCode: 'BR91905'
  },
  items: [
    {
      item: 'Premium Branding Package',
      description: 'Branding & Promotion',
      hours: 48,
      qty: 1,
      total: 32
    },
    {
      item: 'Social Media',
      description: 'Social media templates',
      hours: 42,
      qty: 1,
      total: 28
    },
    {
      item: 'Web Design',
      description: 'Web designing package',
      hours: 46,
      qty: 1,
      total: 24
    },
    {
      item: 'SEO',
      description: 'Search engine optimization',
      hours: 40,
      qty: 1,
      total: 22
    }
  ],
  salesperson: 'Tommy Shelby',
  note: 'It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!',
  subtotal: 1800,
  discount: 28,
  tax: 21,
  total: 1690
};

const InvoicePreview = () => {
  const { id } = useParams();
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState('internet-banking');
  const [paymentTerms, setPaymentTerms] = useState(false);
  const [clientNotes, setClientNotes] = useState(false);
  const [paymentStub, setPaymentStub] = useState(false);
  const [showPaymentDropdown, setShowPaymentDropdown] = useState(false);

  const sidebarItems = [
    { label: 'List', href: '/invoice', active: location.pathname === '/invoice' },
    { label: 'Preview', href: '/invoice/preview/4987', active: location.pathname.includes('/preview') },
    { label: 'Edit', href: '/invoice/edit/4987', active: location.pathname.includes('/edit') },
    { label: 'Add', href: '/invoice/add', active: location.pathname.includes('/add') }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-sidebar-background border-r border-sidebar-border p-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white text-sm font-bold">
              M
            </div>
            <span className="font-bold text-lg">MATERIO</span>
          </div>
          
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  item.active 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="mt-8 space-y-2">
          <div className="text-sm font-medium mb-4">User</div>
          <div className="text-sm font-medium mb-4">Roles & Permissions</div>
          <div className="text-sm font-medium mb-4">Pages</div>
          <div className="text-sm font-medium mb-4">Auth Pages</div>
          <div className="text-sm font-medium mb-4">Wizard Examples</div>
          <div className="text-sm font-medium mb-4">Dialog Examples</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        <div className="flex-1 p-6">
          <div className="p-8 bg-card border rounded-lg shadow-sm">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <span className="text-xl font-bold">MATERIO</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Office 149, 450 South Brand Brooklyn</p>
                  <p>San Diego County, CA 91905, USA</p>
                  <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
                </div>
              </div>
              <div className="text-right">
                <h1 className="text-2xl font-bold mb-2">Invoice {mockInvoiceData.number}</h1>
                <div className="text-sm text-muted-foreground">
                  <p>Date Issued: {mockInvoiceData.dateIssued}</p>
                  <p>Date Due: {mockInvoiceData.dateDue}</p>
                </div>
              </div>
            </div>

            {/* Client Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-2">Invoice To:</h3>
                <div className="text-sm">
                  <p className="font-medium">{mockInvoiceData.client.name}</p>
                  <p>{mockInvoiceData.client.company}</p>
                  <p className="whitespace-pre-line">{mockInvoiceData.client.address}</p>
                  <p>{mockInvoiceData.client.email}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Bill To:</h3>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Total Due:</span>
                    <span>${mockInvoiceData.billTo.totalDue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bank name:</span>
                    <span>{mockInvoiceData.billTo.bankName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Country:</span>
                    <span>{mockInvoiceData.billTo.country}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IBAN:</span>
                    <span>{mockInvoiceData.billTo.iban}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SWIFT code:</span>
                    <span>{mockInvoiceData.billTo.swiftCode}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Items Table */}
            <div className="mb-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted/50 border-b">
                      <th className="text-left p-4 font-medium text-sm">ITEM</th>
                      <th className="text-left p-4 font-medium text-sm">DESCRIPTION</th>
                      <th className="text-left p-4 font-medium text-sm">HOURS</th>
                      <th className="text-left p-4 font-medium text-sm">QTY</th>
                      <th className="text-right p-4 font-medium text-sm">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockInvoiceData.items.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-muted/20">
                        <td className="p-4 font-medium">{item.item}</td>
                        <td className="p-4 text-muted-foreground">{item.description}</td>
                        <td className="p-4">{item.hours}</td>
                        <td className="p-4">{item.qty}</td>
                        <td className="p-4 text-right">${item.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm">
                  <span className="font-medium">Salesperson:</span> {mockInvoiceData.salesperson}
                </p>
                <p className="text-sm mt-2">Thanks for your business</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>${mockInvoiceData.subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Discount:</span>
                  <span>${mockInvoiceData.discount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax:</span>
                  <span>{mockInvoiceData.tax}%</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span>Total:</span>
                  <span>${mockInvoiceData.total}</span>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-8 p-4 bg-muted/50 rounded">
              <p className="text-sm">
                <span className="font-medium">Note:</span> {mockInvoiceData.note}
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 p-6 space-y-4 bg-sidebar-background border-l border-sidebar-border">
          <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors">
            <Send className="h-4 w-4 mr-2" />
            Send Invoice
          </button>
          
          <button className="w-full border border-border hover:bg-accent hover:text-accent-foreground py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors">
            <Download className="h-4 w-4 mr-2" />
            Download
          </button>
          
          <button className="w-full border border-border hover:bg-accent hover:text-accent-foreground py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors">
            <Printer className="h-4 w-4 mr-2" />
            Print
          </button>
          
          <Link 
            to={`/invoice/edit/${id}`}
            className="w-full border border-border hover:bg-accent hover:text-accent-foreground py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors"
          >
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Link>
          
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors">
            <Plus className="h-4 w-4 mr-2" />
            Add Payment
          </button>
          
          <div className="p-4 border rounded bg-card">
            <p className="text-sm text-muted-foreground mb-2">Accept payments via</p>
            <div className="relative">
              <button
                onClick={() => setShowPaymentDropdown(!showPaymentDropdown)}
                className="w-full flex items-center justify-between px-3 py-2 border rounded-md bg-background hover:bg-accent transition-colors"
              >
                <span className="text-sm">
                  {paymentMethod === 'internet-banking' && 'Internet Banking'}
                  {paymentMethod === 'credit-card' && 'Credit Card'}
                  {paymentMethod === 'paypal' && 'PayPal'}
                </span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {showPaymentDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-popover border rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setPaymentMethod('internet-banking');
                        setShowPaymentDropdown(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-accent transition-colors"
                    >
                      Internet Banking
                    </button>
                    <button
                      onClick={() => {
                        setPaymentMethod('credit-card');
                        setShowPaymentDropdown(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-accent transition-colors"
                    >
                      Credit Card
                    </button>
                    <button
                      onClick={() => {
                        setPaymentMethod('paypal');
                        setShowPaymentDropdown(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-accent transition-colors"
                    >
                      PayPal
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Payment Terms</label>
              <button
                onClick={() => setPaymentTerms(!paymentTerms)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  paymentTerms ? 'bg-primary' : 'bg-input'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-background transition ${
                    paymentTerms ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Client Notes</label>
              <button
                onClick={() => setClientNotes(!clientNotes)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  clientNotes ? 'bg-primary' : 'bg-input'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-background transition ${
                    clientNotes ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Payment Stub</label>
              <button
                onClick={() => setPaymentStub(!paymentStub)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  paymentStub ? 'bg-primary' : 'bg-input'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-background transition ${
                    paymentStub ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
          
          <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoicePreview;