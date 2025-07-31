
import { BriefcaseBusiness, Calendar, ChartPie, CheckCheck, Clock, DollarSign, Ellipsis, EllipsisVertical, File, FileBarChart, Laptop, Map, Star, Users } from "lucide-react";
import { MeetingSchedule } from "./data & fun dash/dashData";
import LineChartSales from "./data & fun dash/chartsDash";
import BarChartWeeklySales from "./data & fun dash/barChartDah";

export default function Crm() {

    return (
        <div className="grid grid-cols-12 gap-5 text-start">
            {/* First Row */}
            <div className="col-span-3 flex justify-between items-start p-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
                <div className="z-10">
                    <h3 className="text-sm font-medium">Ratings</h3>
                    <div className="flex gap-3 my-2 items-baseline">
                        <h3 className="text-2xl font-bold">13K</h3>
                        <p className="text-red-300 text-sm font-semibold">-15.6%</p>
                    </div>
                    <p className="text-blue-200 bg-blue-900/30 px-3 py-1 rounded-md text-xs">Year of 2025</p>
                </div>
                <img 
                    src="../../../../public/images/illustrations/characters/vecteezy_3d-male-character-thinking-and-working-on-a-laptop_24785804.png" 
                    className="absolute w-52 top-0 -right-8 bottom-0" 
                    alt="" 
                />
            </div>

            <div className="col-span-3 flex justify-between items-start p-6 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 text-white relative overflow-hidden">
                <div className="z-10">
                    <h3 className="text-sm font-medium">Sessions</h3>
                    <div className="flex gap-3 my-2 items-baseline">
                        <h3 className="text-2xl font-bold">24.5K</h3>
                        <p className="text-red-300 text-sm font-semibold">-20%</p>
                    </div>
                    <p className="text-purple-200 bg-purple-900/30 px-3 py-1 text-center rounded-md text-xs">Last Week</p>
                </div>
                <img 
                    src="../../../../public/images/illustrations/characters/vecteezy_stunning-artistic-businesswoman-silhouette-with-tablet-genuine_57897171.png" 
                    className="absolute w-52 top-2 -right-10 bottom-0" 
                    alt="" 
                />
            </div>

            <div className="col-span-6 bg-white p-6 rounded-lg shadow-sm relative">
                <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
                <h3 className="font-semibold text-lg mb-1">Transactions</h3>
                <p className="text-gray-500 text-sm mb-4">Total 48.5% Growth 😎 this month</p>
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                        <div className="bg-blue-100 p-2 rounded-lg">
                            <ChartPie size={20} className="text-blue-600" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Sales</p>
                            <p className="font-semibold text-lg">245K</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="bg-green-100 p-2 rounded-lg">
                            <Users size={20} className="text-green-600"/>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Users</p>
                            <p className="font-semibold text-lg">12.5K</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="bg-yellow-100 p-2 rounded-lg">
                            <Laptop size={20} className="text-yellow-600"/>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Product</p>
                            <p className="font-semibold text-lg">1.54K</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="col-span-3 bg-white p-5 rounded-lg shadow-sm relative">
                <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
                <h3 className="text-gray-500 text-sm mb-1">Total Sales</h3>
                <p className="font-normale text-md">$21,845</p>
                <div className="w-[100%] h-[100%]">
                    <LineChartSales />
                </div>
            </div>

            <div className="col-span-3 bg-white p-6 rounded-lg shadow-sm relative">
                <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
                <h3 className="font-semibold text-lg mb-4">Revenue Report</h3>
                <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">Jan Feb Mar Apr May Jun</p>
                </div>
            </div>

            <div className="col-span-6 bg-white p-6 rounded-lg shadow-sm relative">
                <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
                <h3 className="font-semibold text-lg mb-4">Sales Overview</h3>
                <div>
                    <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg mb-4">
                        <strong>100k</strong> Weekly Sales
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Number of Sales</span>
                            <strong className="font-semibold">$86,400</strong>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Apparel</span>
                            <strong className="font-semibold">$12,150</strong>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Electronics</span>
                            <strong className="font-semibold">$24,900</strong>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">FMCG</span>
                            <strong className="font-semibold">$12,750</strong>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Other Sales</span>
                            <strong className="font-semibold">$50,200</strong>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Row */}
            <div className="col-span-6 bg-white p-6 rounded-lg shadow-sm relative">
                <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
                {/* <div className="flex justify-between items-center mb-4"> */}
                <h3 className="font-semibold text-lg mb-4">Activity Timeline</h3>
                {/* </div> */}
                <ul className="space-y-6">
                    <li className="relative pl-6 border-l-2 border-gray-200">
                        <div className="absolute -left-2.5 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                        <div className="flex justify-between items-center">
                            <h4 className="font-medium">12 invoices have been paid</h4>
                            <p className="text-gray-400 text-xs mt-1">12 Min Ago</p>
                        </div>
                        <p className="text-gray-500 text-sm mb-2">invoices have been paid to the company</p>
                        <button className="flex gap-2 items-center px-3 py-1.5 bg-gray-100 rounded-lg text-sm">
                            <File size={16} className="text-gray-500" />
                            <span>invoices.pdf</span>
                        </button>
                    </li>
                    <li className="relative pl-6 border-l-2 border-gray-200">
                        <div className="absolute -left-2.5 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                        <div className="flex justify-between items-center">
                            <h4 className="font-medium">Client Meeting</h4>
                            <p className="text-gray-400 text-xs mt-2">45 Min Ago</p>
                        </div>
                        <p className="text-gray-500 text-sm mb-2">Project meeting with john @10:15am</p>
                        <div className="flex gap-3 items-center">
                            <img 
                                src="../../../../public/images/avatars/1.png" 
                                alt="" 
                                className="w-8 h-8 rounded-full"
                            />
                            <div>
                                <p className="font-medium text-sm">Lester McCarthy (Client)</p>
                                <p className="text-gray-500 text-xs">CEO of themeSelection</p>
                            </div>
                        </div>
                    </li>
                    <li className="relative pl-6 border-l-2 border-gray-200">
                        <div className="absolute -left-2.5 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                        <div className="flex justify-between items-center">
                            <h4 className="font-medium">Create a new project for client</h4>
                            <p className="text-gray-400 text-xs mt-2">2 Days Ago</p>
                        </div>
                        <p className="text-gray-500 text-sm">6 team members in a project</p>
                    </li>
                </ul>
            </div>

            <div className="col-span-4 bg-white p-6 rounded-lg shadow-sm relative">
                <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
                <h3 className="font-semibold text-lg mb-1">Weekly Sales</h3>
                <p className="text-gray-500 text-sm mb-4">Total 85.4k Sales</p>
                <div className="h-[70%] mb-1 flex items-center justify-center">
                    <BarChartWeeklySales />
                </div>
                <div className="flex justify-around">
                    <div className="flex gap-3 items-center">
                        <div className="bg-blue-100 p-3 rounded-lg">
                            <ChartPie size={22} className="text-blue-600" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Sales</p>
                            <p className="font-semibold">$34.6k</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="bg-green-100 p-3 rounded-lg">
                            <DollarSign size={22} className="text-green-600" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Total Profit</p>
                            <p className="font-semibold">$482k</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-2 space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-2xl mb-1">42.5k</h3>
                    <div className="mb-1">
                        <LineChartSales />
                    </div>
                    <p className="text-gray-500 text-sm">Total Growth</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm relative">
                    <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
                    <div className="flex flex-col justify-between items-start mb-4">
                        <div className="bg-purple-300 p-2 mb-3 rounded-full">
                            <FileBarChart size={28} className="text-purple-700" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-md font-bold">New Project</p>
                            <div className="flex items-baseline gap-2">
                                <h3 className="font-bold text-xl">862</h3>
                                <p className="text-red-500 text-md">-18%</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm">Yearly Project</p>
                </div>
            </div>

            {/* Fourth Row */}
            <div className="col-span-4 bg-white p-6 rounded-lg shadow-sm relative">
                <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
                <h3 className="font-semibold text-lg mb-2">Upgrade Plan</h3>
                <p className="text-gray-500 text-sm mb-3">Please make the payment to start enjoying all the features of our premium plan as soon as possible.</p>
                <div className="bg-blue-100 p-3 rounded-lg mb-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-300 p-3 rounded-lg">
                                <BriefcaseBusiness size={25} className="text-blue-600" />
                            </div>
                            <div>
                                <p className="font-medium">Platinum</p>
                                <p className="text-blue-600 text-xs">Upgrade Plan</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-2xl">$5,250<span className="text-gray-500 text-sm font-normal">/Year</span></p>
                        </div>
                    </div>
                </div>
                <h4 className="font-medium text-sm mb-2">Payment details</h4>
                <div className="space-y-3 py-1 mb-3">
                    <div className="">
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-6 bg-gray-200 rounded-sm flex justify-center items-center">
                                    <img 
                                        src="../../../../public/images/cards/mastercard.png" 
                                        className="w-8" 
                                        alt="" 
                                    />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Credit Card</p>
                                    <p className="text-sm">2566 xxxx xxxx 8908</p>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500 border p-2"><p>CVV</p></div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-6 bg-gray-200 rounded-sm flex justify-center items-center">
                                    <img 
                                        src="../../../../public/images/cards/dinersClubCard.png" 
                                        alt="" 
                                        className="w-8"    
                                    />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Credit Card</p>
                                    <p className="text-sm">8980 xxxx xxxx 8852</p>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500 border p-2">
                                <p>CVV</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="text-blue-600 text-sm font-medium mb-2">Add Payment Method</button>
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-3 border bg-white rounded-lg mb-4 text-sm"
                />
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium">Contact Now</button>
            </div>

            <div className="col-span-4 overflow-auto bg-white p-6 pt-3 rounded-lg shadow-sm relative">
                <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
                <h3 className="bg-white p-3 font-semibold text-lg mb-2">Meeting Schedule</h3>
                
                <div className="space-y-4">
                    {MeetingSchedule && MeetingSchedule.map((item, index) => (
                        <div className="flex justify-between items-center p-1">
                            <div className="flex gap-3 items-center">
                                <img 
                                    src={item.image} 
                                    alt="" 
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h4 className="font-medium">{item.name}</h4>
                                    <p className="text-gray-500 text-xs flex items-center gap-1">
                                        <Calendar size={12} />
                                        <span>{item.description}</span>
                                    </p>
                                </div>
                            </div>
                            <span className={`${item.color} text-xs ${item.background} px-2 py-1 rounded`}>{item.badge}</span>
                        </div>
                    ))}
                    {/* Add more meeting items similarly */}
                </div>
            </div>

            <div className="col-span-4 bg-white rounded-lg shadow-sm">
                <div>
                    <img 
                        src="../../../../public/images/cards/workspace.jpg" 
                        className="w-[100%] h-48"
                        alt="" 
                    />
                </div>
                <div className="flex gap-4 mb-4 p-4">
                    <div className="w-28 h-18 bg-purple-100 text-purple-800 text-center px-4 py-4 rounded-lg">
                        <p className="text-xL">Jan</p>
                        <p className="font-bold text-2xl">24</p>
                    </div>
                    <div className="text-start">
                        <h5 className="font-medium">Developer Meetup</h5>
                        <p className="text-gray-500 text-sm">The WordPress open source/free software project is the community behind the...</p>
                    </div>
                </div>
                <div className="flex justify-between mb-6 px-6">
                    <button className="flex flex-col items-center text-xs text-gray-500 transition-all duration-200 hover:scale-[1.1] hover:text-blue-500">
                        <Star size={18} className="mb-1" />
                        <span>Interested</span>
                    </button>
                    <button className="flex flex-col items-center text-xs text-gray-500 transition-all duration-200 hover:scale-[1.1] hover:text-blue-500">
                        <CheckCheck size={18} className="mb-1" />
                        <span>Joined</span>
                    </button>
                    <button className="flex flex-col items-center text-xs text-gray-500 transition-all duration-200 hover:scale-[1.1] hover:text-blue-500">
                        <Users size={18} className="mb-1" />
                        <span>Invited</span>
                    </button>
                    <button className="flex flex-col items-center text-xs text-gray-500 transition-all duration-200 hover:scale-[1.1] hover:text-blue-500">
                        <Ellipsis size={18} className="mb-1" />
                        <span>More</span>
                    </button>
                </div>
                <div className="flex gap-3 items-center mb-3 px-4">
                    <Clock size={16} className="text-gray-400" />
                    <div className="text-start">
                        <p className="text-sm">Tuesday, 24 January, 10:20 - 12:30</p>
                        <p className="text-gray-500 text-xs">After 1 week</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center px-4">
                    <Map size={16} className="text-gray-400" />
                    <div className="text-start">
                        <p className="text-sm">The Rochard NYC</p>
                        <p className="text-gray-500 text-xs">1305 Lexington Ave, New York</p>
                    </div>
                </div>
            </div>
        </div>
    )
}