import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoreHorizontal, Plus, Users, FileText, DollarSign, AlertCircle, Copy, Eye, Search } from 'lucide-react';

interface Invoice {
  id: string;
  number: string;
  status: 'paid' | 'unpaid' | 'draft' | 'pending';
  client: {
    name: string;
    email: string;
    avatar?: string;
    initials: string;
  };
  total: number;
  balance: number;
  issuedDate: string;
}

const mockInvoices: Invoice[] = [
  {
    id: '4987',
    number: '#4987',
    status: 'unpaid',
    client: { name: 'Jordan Stevenson', email: 'don85@johnson.com', initials: 'JS' },
    total: 3428,
    balance: 724,
    issuedDate: '13 Sep 2025'
  },
  {
    id: '4988',
    number: '#4988',
    status: 'paid',
    client: { name: 'Stephanie Burns', email: 'brenda49@taylor.info', initials: 'SB' },
    total: 5219,
    balance: 0,
    issuedDate: '17 Sep 2025'
  },
  {
    id: '4989',
    number: '#4989',
    status: 'paid',
    client: { name: 'Tony Herrera', email: 'smithtiffany@powers.com', initials: 'TH' },
    total: 3719,
    balance: 0,
    issuedDate: '19 Sep 2025'
  },
  {
    id: '4990',
    number: '#4990',
    status: 'paid',
    client: { name: 'Kevin Patton', email: 'mejiaGeorge@lee-perez.com', initials: 'KP' },
    total: 4749,
    balance: 0,
    issuedDate: '06 Sep 2025'
  },
  {
    id: '4991',
    number: '#4991',
    status: 'unpaid',
    client: { name: 'Mrs. Julie Donovan MD', email: 'brandon07@pierce.com', initials: 'JD' },
    total: 4056,
    balance: 815,
    issuedDate: '08 Sep 2025'
  },
  {
    id: '4992',
    number: '#4992',
    status: 'paid',
    client: { name: 'Amanda Phillips', email: 'guerrerobrandy@beasley-harper.com', initials: 'AP' },
    total: 2771,
    balance: 0,
    issuedDate: '26 Sep 2025'
  },
  {
    id: '4993',
    number: '#4993',
    status: 'unpaid',
    client: { name: 'Christina Collier', email: 'williamshenry@moon-smith.com', initials: 'CC' },
    total: 2713,
    balance: 407,
    issuedDate: '17 Sep 2025'
  },
  {
    id: '4994',
    number: '#4994',
    status: 'paid',
    client: { name: 'David Flores', email: 'margaretharvey@russell-murray.com', initials: 'DF' },
    total: 4309,
    balance: -205,
    issuedDate: '11 Sep 2025'
  }
];

const InvoiceList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showDropdown, setShowDropdown] = useState('');

  const filteredInvoices = mockInvoices.filter(invoice => {
    const matchesSearch = invoice.client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          invoice.number.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid': return <span className="text-green-500 text-lg">✓</span>;
      case 'unpaid': return <span className="text-blue-400 text-lg">↓</span>;
      case 'draft': return <span className="text-gray-400 text-lg">▷</span>;
      case 'pending': return <span className="text-blue-400 text-lg">✉</span>;
      default: return <span className="text-gray-400 text-lg">•</span>;
    }
  };

  const totalClients = [...new Set(mockInvoices.map(inv => inv.client.name))].length;
  const totalInvoices = mockInvoices.length;
  const totalPaid = mockInvoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.total, 0);
  const totalUnpaid = mockInvoices.filter(inv => inv.status === 'unpaid').reduce((sum, inv) => sum + inv.balance, 0);


  return (
    <div className="min-h-screen bg-[#eee] flex">

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 bg-white dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground dark:text-white">{totalClients}</p>
                <p className="text-sm text-muted-foreground dark:text-white">Clients</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 bg-white dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground dark:text-white">{totalInvoices}</p>
                <p className="text-sm text-muted-foreground dark:text-white">Invoices</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 bg-white dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground dark:text-white">${(totalPaid / 1000).toFixed(1)}k</p>
                <p className="text-sm text-muted-foreground dark:text-white">Paid</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 bg-white dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground dark:text-white">${totalUnpaid}</p>
                <p className="text-sm text-muted-foreground dark:text-white">Unpaid</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6 p-4 bg-white dark:bg-gray-800">
          <Link
            to="/invoice/add"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#eee] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Invoice
          </Link>
          
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground dark:text-white" />
              <input
                placeholder="Search Invoice"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex h-10 w-64 rounded-md border border-input bg-[#eee] px-3 py-2 text-sm ring-offset-[#eee] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-9 dark:text-white"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="flex h-10 items-center justify-between rounded-md border border-input bg-[#eee] px-3 py-2 text-sm ring-offset-[#eee] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40"
            >
              <option value="all">All Status</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
              <option value="draft">Draft</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        {/* Invoice Table */}
        <div className="border bg-card m-0 text-card-foreground shadow-sm p-3 bg-white dark:bg-gray-800">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b border-border transition-colors hover:bg-muted/50">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground dark:text-white [&:has([role=checkbox])]:pr-0 w-12">
                  <input type="checkbox" className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-[#eee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground dark:text-white [&:has([role=checkbox])]:pr-0">#</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground dark:text-white [&:has([role=checkbox])]:pr-0">STATUS</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground dark:text-white [&:has([role=checkbox])]:pr-0">CLIENT</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground dark:text-white [&:has([role=checkbox])]:pr-0">TOTAL</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground dark:text-white [&:has([role=checkbox])]:pr-0">ISSUED DATE</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground dark:text-white [&:has([role=checkbox])]:pr-0">BALANCE</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground dark:text-white [&:has([role=checkbox])]:pr-0">ACTION</th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <input type="checkbox" className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-[#eee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <Link to={`/invoice/preview/${invoice.id}`} className="text-primary hover:underline font-medium">
                      {invoice.number}
                    </Link>
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(invoice.status)}
                      {invoice.status === 'paid' && (
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-100 text-green-700 border-transparent">
                          Paid
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                        {invoice.client.avatar ? (
                          <img src={invoice.client.avatar} alt="" className="aspect-square h-full w-full" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-muted text-xs text-muted-foreground">
                            {invoice.client.initials}
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-foreground dark:text-white">{invoice.client.name}</p>
                        <p className="text-sm text-muted-foreground dark:text-white">{invoice.client.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle ... font-medium dark:text-white">${invoice.total}</td>
                  <td className="p-4 align-middle ... text-muted-foreground dark:text-white">{invoice.issuedDate}</td>
                  <td className="p-4 align-middle ... font-medium dark:text-white">${invoice.balance}</td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <div className="flex items-center gap-2">
                      {invoice.status === 'unpaid' && (
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#eee] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md px-3 bg-pink-500 hover:bg-pink-600 text-white">
                          Buy Now
                        </button>
                      )}
                      <div className="relative">
                        <button 
                          onClick={() => setShowDropdown(showDropdown === invoice.id ? '' : invoice.id)}
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#eee] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                        {showDropdown === invoice.id && (
                          <div className="absolute right-0 mt-2 w-56 rounded-md border bg-popover p-1 text-popover-foreground shadow-md z-50">
                            <Link
                              to={`/invoice/preview/${invoice.id}`}
                              className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent"
                              onClick={() => setShowDropdown('')}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Link>
                            <Link
                              to={`/invoice/edit/${invoice.id}`}
                              className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent"
                              onClick={() => setShowDropdown('')}
                            >
                              <Copy className="h-4 w-4 mr-2" />
                              Edit
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between m-0 p-4 bg-white dark:bg-gray-800">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground dark:text-white">Rows per page:</span>
            <select className="flex h-10 items-center justify-between rounded-md border border-input bg-[#eee] px-3 py-2 text-sm ring-offset-[#eee] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-16">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground dark:text-white">1-10 of 50</span>
            <div className="flex gap-1">
              <button 
                disabled
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#eee] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
              >
                ←
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#eee] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceList;