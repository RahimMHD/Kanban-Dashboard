
import { ArrowUp, ArrowDown, ShoppingCart, Users, DollarSign, CreditCard, Package, TrendingUp, Calendar, ChevronDown, Circle, EllipsisVertical, Clock, CircleDollarSign, FolderCheck, BanknoteXIcon, Wallet, ChevronUp, Warehouse, FileBarChart, MessageSquare, Check, X } from 'lucide-react';
import { BarEcomProfit, EcommerceBarChart, RevenueChart, VisitorsBar } from './data & fun dash/barChartDah';
import { percent } from 'framer-motion';
import { div } from 'framer-motion/m';

export const EcommerceDashboard = () => {
    
    return (
        <div className="grid pt-6 gap-6">

        {/* Stats Cards */}
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className='lg:col-span-4 rounded-lg flex shadow-sm relative'>
                <div className='w-full h-[85%] bg-white p-4 absolute z-0 bottom-0 rounded-lg'>
                    <div className='w-[50%] h-[80%]'>
                        <h2 className='text-2xl font-bold mb-4'>Congratulations John! 🎉</h2>
                        <p>You have done 72% 😎 more sales today. Check your new raising badge in your profile.</p>
                    </div>
                </div>
                <img 
                    src="../../../../public/images/illustrations/characters/3.png" 
                    className='absolute  w-58 h-40 mt-6 right-10 bottom-0 z-4' 
                    alt="" 
                />
            </div>
            
            {/* Total Sales */}
            <div className="lg:col-span-1 bg-white p-4 rounded-xl shadow-sm relative">
                <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
                <div className="mb-2 bg-[#07c500] w-10 h-10 flex justify-center items-center rounded-full">
                    <DollarSign className="text-white bg-[#07c500]" size={20} />
                </div>
                <p className="text-gray-500">Revenue</p>
                <h3 className="text-2xl font-semibold my-1">
                    $95k 
                    <span className='text-[#07c500] text-sm'>+12%</span>
                </h3>
                <span className="text-gray-500 text-sm">Revenue Increase</span>
                
            </div>
            

            {/* Total Revenue */}
            <div className="lg:col-span-1 bg-white p-4 rounded-xl shadow-sm relative">
                <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
                <div className="mb-2 bg-[#0A6CD5] w-10 h-10 flex justify-center items-center rounded-lg">
                    <CreditCard className="text-white" size={20} />
                </div>
                <p className="text-gray-500">Transaction</p>
                <h3 className="flex text-2xl items-baseline font-semibold my-1">48,2k
                    <span className="text-[#f3341b] text-sm"> -18%</span>
                </h3>
                <span className="text-gray-500 text-sm">Daily Transaction</span> 
            </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sales Overview */}
            <div className="bg-white p-5 rounded-xl shadow-sm lg:col-span-2 flex gap-3">
                <div className="w-full">
                    <div>
                        <h3 className="font-semibold">Total Profit</h3>
                        <p className="text-gray-500">Yearly overview</p>
                    </div>
                    <div className='w-full h-full mt-4'>
                        <BarEcomProfit />
                    </div>
                </div>

                <br className='w-2 h-full' />

                <div className='w-full h-full flex flex-col'>
                    <div className='mb-4'>
                        <h2 className='text-xl font-semibold'>$482.85k</h2>
                        <p className='text-gray-500'>Last month balance $234.40k</p>
                    </div>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 bg-[#07c50065] rounded-lg flex justify-center items-center'>
                                <Clock size={21} className="text-[#07c500] font-bold " />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold'>$48,568.20</h3>
                                <p>Total Profit</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 bg-[#f3341b65] rounded-lg flex justify-center items-center'>
                                <CircleDollarSign size={21} className="text-[#f3341b] font-bold " />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold'>$12,568.20</h3>
                                <p>Total Loss</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 bg-[#0A6CD565] rounded-lg flex justify-center items-center'>
                                <FolderCheck size={21} className="text-[#0A6CD5] font-bold " />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold'>$36,000.00</h3>
                                <p>Total Revenue</p>
                            </div>
                        </div>
                    </div>
                    <button className='bg-[#0A6CD5] mt-2 text-white text-center text-lg font-semibold w-full py-2 rounded-lg hover:bg-[#42b1fb] transition-colors'>
                        View Report
                    </button>
                </div>
            </div>

            {/* Revenue Report */}
            <div className='lg:col-span-1 rounded-xl shadow-sm flex flex-col gap-5'>
                <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center">
                    <div className=''>
                        <h3 className="font-semibold text-xl">Total Sales</h3>
                        <p className="text-gray-500 my-2">Calculated in Last 7 days</p>
                        <div className="flex items-baseline gap-2">
                            <h2 className='text-2xl font-bold'>$25,980</h2>
                            <span className="flex items-baseline text-sm font-medium text-[#07c500]"><ArrowUp size={14}/> 12.6%</span>
                        </div>
                    </div>
                    <div>
                        <div>chart here</div>
                    </div>
                </div>

                <div className='lg:col-span-1 rounded-xl shadow-sm flex justify-between items-center gap-4'>
                    <div className="w-[47%] h-full bg-white p-4 space-y-3 rounded-xl shadow-sm">
                        <h2 className='text-xl font-semibold'>$35.4k</h2>
                        <div className='w-full h-20'>
                            <RevenueChart />
                        </div>
                        <p className='text-center text-lg '>Total Revenue</p>
                    </div>
                    
                    <div className="w-[47%] h-full bg-white p-4 space-y-3 rounded-xl shadow-sm">
                        <h2 className='text-xl text-center font-semibold'>135k</h2>
                        <div className='w-full h-20 flex items-center justify-center bg-[#42b1fb40] rounded-full'>
                            <p className='text-3xl font-bold'>75%</p>
                        </div>
                        <p className='text-center text-lg '>Total Sales</p>
                    </div>
                </div>
            </div>
        </div>

        {/* third row */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4 relative'>
                <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
                <div>
                    <h2 className='text-xl font-semibold'>Transactions</h2>
                </div>
                <div className='flex flex-col'>
                    {[
                        { icon: <img src='../../../../public/images/logos/paypal.com (16).png' alt='paypal logo' className="w-16" />,bg: "bg-[#07c50065]", title: "Paypal", description: "Received Money", amount: "+$24.820", change: <ChevronUp size={18} className='text-[#07c500]' /> },
                        { icon: <BanknoteXIcon size={21} className="text-[#0A6CD5] font-bold" />,bg: "bg-[#0A6CD565]", title: "Credit Card", description: "Received Money", amount: "+$15.320", change: <ChevronUp size={18} className='text-[#0A6CD5]' /> },
                        { icon: <Wallet size={21} className="text-[#f3341b] font-bold" />,bg: "bg-[#f3341b65]", title: "Wallet", description: "Sent Money", amount: "-$8.450", change: <ChevronDown size={18} className='text-[#f3341b]' /> },
                        { icon: <CreditCard size={21} className="text-[#0A6CD5] font-bold" />,bg: "bg-[#0A6CD565]", title: "MasterCard", description: "Received Money", amount: "+$15.320", change: <ChevronUp size={18} className='text-[#0A6CD5]' /> },
                        { icon: <TrendingUp size={21} className="text-[#f3341b] font-bold" />,bg: "bg-[#f3341b65]", title: "Transfer", description: "Sent Money", amount: "-$8.450", change: <ChevronDown size={18} className='text-[#f3341b]' /> }
                    ].map((transaction, index) => (
                        <div className='flex items-center justify-between mt-4'>
                            <div className='flex items-center gap-3'>
                                <div className={`w-10 h-10 ${transaction.bg} rounded-lg flex justify-center items-center`}>
                                    {transaction.icon}
                                </div>
                                <div className='flex flex-col'>
                                    <h3>{transaction.title}</h3>
                                    <p>{transaction.description}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-1'>
                                <h4 className={`text-lg font-semibold`}>{transaction.amount}</h4>
                                {transaction.change}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* second column */}
            <div className='flex flex-col gap-5'>
                <div className='flex gap-4'>
                    <div className='bg-white p-4 rounded-xl shadow-sm flex flex-col relative w-full'>
                        <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
                        <div className='flex items-center justify-center my-2 w-12 h-12 bg-[#07c500] rounded-full'>
                            <Warehouse size={22} className="text-white font-bold" />
                        </div>
                        <h3 className='text-lg font-semibold '>Logistics</h3>
                        <div className='flex items-center gap-1'>
                            <h2 className='text-2xl font-bold my-2'>$44k </h2>
                            <p className='text-[#07c500] font-semibold text-md'>+42%</p>
                        </div>
                        <p className='mb-2'>Revenue Increase</p>
                    </div>

                    <div className='bg-white p-4 rounded-xl shadow-sm flex flex-col relative w-full'>
                        <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
                        <div className='flex items-center justify-center my-2 w-12 h-12 bg-[#ee9004] rounded-full'>
                            <FileBarChart size={22} className="text-white font-bold" />
                        </div>
                        <h3 className='text-lg font-semibold '>Reports</h3>
                        <div className='flex items-center gap-1'>
                            <h2 className='text-2xl font-bold my-2'>268</h2>
                            <p className='text-[#f3341b] font-semibold text-md'>-28%</p>
                        </div>
                        <p className='mb-2'>System Bugs</p>
                    </div>
                </div>

                <div className='bg-white p-4 rounded-xl shadow-sm flex gap-4 h-full'>
                    <div className=''>
                        <h2 className='text-xl font-bold mb-4'>New Visitors</h2>
                        <p className='text-lg font-semibold text-gray-500 my-3'>48% new visitors this week.</p>
                        <div className='flex items-center gap-1'>
                            <h1 className='text-2xl font-bold'>12.480</h1>
                            <ChevronUp size={18} className='text-[#07c500]' />
                            <p className='text-[#07c500]'>28</p>
                        </div>
                    </div>
                    <div className='w-[50%] h-full'>
                        <EcommerceBarChart />
                    </div>
                </div>
            </div>

            {/* third column */}
            <div className='bg-white p-6 rounded-xl shadow-sm flex flex-col relative'>
                <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
                <h2 className='text-xl font-semibold mb-4'>Website Statistics</h2>
                <div className='flex items-center justify-between h-[35%] gap-4 mb-3'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-6xl font-semibold'>4,590</h1>
                        <p>Total Traffic</p>
                    </div>
                    <div className='w-full h-full'>
                        <VisitorsBar />
                    </div>
                </div>
                <div className='flex flex-col gap-3 mt-2'>
                    {[
                        { icon: <div className="bg-[#07c500] w-3 h-3 rounded-full" />, label: "Direct", value: "86,450", status: false, percent: "15%" },
                        { icon: <div className="bg-[#0A6CD5] w-3 h-3 rounded-full" />, label: "Organic", value: "57,200", status: true, percent: "85%" },
                        { icon: <div className="bg-[#f3341b] w-3 h-3 rounded-full" />, label: "Referral", value: "2,940", status: true, percent: "48%" },
                        { icon: <div className="bg-[#5d36e7] w-3 h-3 rounded-full" />, label: "Mail", value: "900", status: false, percent: "36%" }
                    ].map((stat, index) => (
                        <div key={index} className='flex justify-between items-center mt-3'>
                            <div className='flex items-center gap-2'>
                                {stat.icon}
                                <span>{stat.label}</span>
                            </div>
                            <p>{stat.value}</p>
                            <div className='flex items-center gap-2'>
                                <span className='ml-auto'>{stat.percent}</span>
                                {stat.status ? <ChevronUp size={18} className='text-[#07c500] font-bold' /> : <ChevronDown size={18} className='text-[#f3341b]' />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Orders */}
            <div className="bg-white p-6 rounded-xl shadow-sm col-span-2">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-gray-500 text-sm border-b">
                            <th className="text-md font-semibold pb-3">#ID</th>
                            <th className="text-md font-semibold pb-3">STATUS</th>
                            <th className="text-md font-semibold pb-3">CLIENT</th>
                            <th className="text-md font-semibold pb-3 text-right">TOTAL</th>
                            <th className="text-md font-semibold pb-3 text-right">BALANCE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                            { id: "#4458", date: "Jordan Stevenson",img: "../../../../public/images/avatars/1.png" , status: "Completed", amount: "Paid", balance: "$1037", email: "don85@johnson.com" },
                            { id: "#1737", date: "Stephanie Burns",img: "../../../../public/images/avatars/2.png" , status: "Processing", amount: "$85.00", balance: "$1237", email: "brenda49@taylor.info" },
                            { id: "#2456", date: "Tony Herrera",img: "../../../../public/images/avatars/3.png" , status: "Completed", amount: "Paid", balance: "$1437", email: "smithtiffany@powers.com" },
                            { id: "#1658", date: "Kevin Patton",img: "../../../../public/images/avatars/4.png" , status: "Processing", amount: "$65.00", balance: "$2137", email: "mejiageorge@lee-perez.com" },
                            { id: "#2659", date: "Mrs. Julie Donovan MD",img: "../../../../public/images/avatars/5.png" , status: "Completed", amount: "Paid", balance: "$5537", email: "brandon07@pierce.com" },
                            { id: "#4455", date: "Amanda Phillips",img: "../../../../public/images/avatars/6.png" , status: "Cancelled", amount: "$65.00", balance: "$1537", email: "guerrerobrandy@beasley-harper.com" },
                            { id: "#7547", date: "Christina Collier",img: "../../../../public/images/avatars/2.png" , status: "Completed", amount: "Paid", balance: "$937", email: "williamshenry@moon-smith.com" },
                            ].map((order, index) => (
                            <tr key={index} className="border-b last:border-0">
                                <td className="py-4 font-medium">{order.id}</td>
                                <td className="p-4 text-center">
                                    {order.status === "Completed" ? 
                                        <div className='flex items-center justify-center rounded-3xl w-8 h-8 bg-[#07c50050] gap-2'>
                                            <Check size={16} className="text-[#07c500] font-bold" />
                                        </div> 
                                        : order.status === "Processing" ? 
                                        <div className='flex items-center justify-center rounded-3xl w-8 h-8 bg-[#0A6CD550] gap-2'>
                                            <MessageSquare size={16} className="text-[#0A6CD5] font-bold" />
                                        </div>
                                        : order.status === "Cancelled" ? 
                                        <div className='flex items-center justify-center rounded-3xl w-8 h-8 bg-[#f3341b50] gap-2'>
                                            <X size={16} className="text-[#f3341b] font-bold" />
                                        </div>
                                        : ""
                                    }
                                </td>
                                <td className='flex items-center gap-3'>
                                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                                        <img src={order.img} alt="client User" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <td className="text-lg font-semibold">{order.date}</td>
                                        <td className='text-gray-500 font-semibold'>{order.email}</td>
                                    </div>
                                </td>
                                <td className="py-4 text-center font-medium">{order.amount === "Paid" ? <div className='w-full rounded-full text-center bg-[#07c50034]'><p className='text-[#07c500]'>Paid</p></div> : order.amount}</td>
                                <td className="py-4 text-right font-medium">{order.balance}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Top Products */}
            <div className="bg-white p-6 rounded-xl shadow-sm relative">
                <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold">Top Products</h3>
                </div>
                <div className="space-y-4">
                    {[
                    { name: "Wireless Headphones", sales: 245, revenue: "$12,250" , logo: "WH", status: "Up"},
                    { name: "Smart Watch", sales: 189, revenue: "$2,450" , logo: "SM", status: "Same"},
                    { name: "Bluetooth Speaker", sales: 156, revenue: "$1,800" , logo: "BS", status: "Down"},
                    { name: "Laptop Backpack", sales: 132, revenue: "$2,960" , logo: "LB", status: "Up"},
                    { name: "Bluetooth Speaker", sales: 156, revenue: "$2,800" , logo: "BS", status: "Up"},
                    { name: "Laptop Backpack", sales: 132, revenue: "$8,960" , logo: "LB", status: "Down"},
                    { name: "Wireless Headphones", sales: 245, revenue: "$5,250" , logo: "WH", status: "Same"},
                    ].map((product, index) => (
                    <div key={index} className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg flex justify-center items-center
                                ${product.status === 'Up' 
                                ? "bg-[#07c50045]" : product.status === 'Down' 
                                ? "bg-[#f3341b45]" : "bg-gray-300" }`}>
                                <p className='font-bold'>{product.logo}</p>
                            </div>
                            <div>
                                <p className="font-medium">{product.name}</p>
                                <p className="text-gray-500 text-sm">{product.sales} sales</p>
                            </div>
                        </div>
                        <p className="font-medium">{product.revenue}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}