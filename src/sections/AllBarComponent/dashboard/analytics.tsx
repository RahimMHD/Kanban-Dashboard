
import { ArrowUp, ArrowDown, TrendingUp, Users, CreditCard, ShoppingCart, DollarSign, Circle, Calendar, MessageSquare, Mail, Star, ChevronDown, Trophy, ArrowBigUp, ArrowUp01, Clock, EllipsisVertical, Projector, MoreHorizontal, TrendingDown } from "lucide-react";
import { useState } from "react";
import { AnalyticTool, MyBarAnalytic, RadicalOnAnalytics } from "./data & fun dash/barChartDah";
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { UserTable } from "./data & fun dash/Analytic component/usersRoll&Email";
import { SalesByCountries } from "./data & fun dash/Analytic component/salesByCountries";
import { DepositWithdraw } from "./data & fun dash/Analytic component/deposite&Withdrow";

export default function Analytics() {
  const [isModeChanged, setIsModeChanged] = useState<boolean>(false);

  const data = [
    { value: 10 },
    { value: 30 },
    { value: 20 },
    { value: 50 },
    { value: 40 },
    { value: 60 },
    { value: 65 },
  ];

  return (
    <div className="pt-4 pb-3">
      {/* first row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="col-span-1 bg-white p-4">
          <h3 className="text-xl font-semibold text-foreground mb-1">
            Congratulations John! 🎉
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            Best seller of the month
          </p>
          <div className="flex items-center gap-2 justify-between">
            <div>
              <div className={`${!isModeChanged ? "text-[#42b1fb]" : ""} text-2xl font-bold text-foreground`}>$42.8k</div>
              <div className="text-sm mt-0 font-semibold text-muted-foreground">78% of target 🚀</div>
              <button className="mt-3 p-2 rounded-md bg-[#0A6CD5] text-white font-bold transition-all duration-200 hover:bg-[#42b1fb]">
                View Sales
              </button>
            </div>
            <div className="text-6xl text-orange-accent">
              <img src="../../../../public/images/pages/trophy.png" alt="trophy image" className="w-28 h-32" />
            </div>
          </div>
        </div>

        {/* Transaction */}
        <div className="col-span-2 bg-white p-4 rounded-xl shadow-sm relative">
          <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
          <div className="mb-8">
            <h2 className="font-bold text-2xl my-3">Transactions</h2>
            <p className="text-gray-700 text-lg font-semibold">Total 48.5% Growth 😎this month</p>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#28dd22] p-3 rounded-lg">
                <ShoppingCart className="text-white" size={20} />
              </div>
              <div className="">
                <span className="text-success text-lg">
                  Sales
                </span>
                <h3 className="text-md font-bold mt-1">1,520</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-[#0A6CD5] p-3 rounded-lg">
                <Users className="text-white" size={20} />
              </div>
              <div className="">
                <span className="text-success text-lg">
                  Users
                </span>
                <h3 className="text-md font-bold mt-1">2,459</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-[#ee9004] p-3 rounded-lg">
                <CreditCard className="text-white" size={20} />
              </div>
              <div className="">
                <span className="text-success text-lg">
                  Products
                </span>
                <h3 className="text-md font-bold mt-1">1,520</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-[#5d36e7] p-3 rounded-lg">
                <DollarSign className="text-white" size={20} />
              </div>
              <div className="">
                <span className="text-success text-lg">
                  Revenue
                </span>
                <h3 className="text-md font-bold mt-1">$24,895</h3>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* second row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* chart */}
        <div className="bg-white p-4 rounded-xl shadow-sm relative">
          <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
          <h2 className="text-xl font-semibold">Weekly Overview</h2>
          <div className="w-full h-56 mt-1">
            <MyBarAnalytic />
          </div>
          <div className="flex items-center gap-4 my-2">
            <h3 className="font-bold text-2xl">45%</h3>
            <p className="text-sm font-semibold">Your sales performance is 45% 😎 better compared to last month</p>
          </div>
          <button className="bg-[#0A6CD5] text-xl rounded-xl font-bold w-full py-2 text-white hover:bg-[#42b1fb] transition-color duration-200">Details</button>
        </div>

        {/* total Earning */}
        <div className="bg-white p-6 rounded-xl shadow-sm relative">
          <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
          <h3 className="font-semibold text-2xl">Total Earning</h3>
          <div className="mb-5 mt-4">
            <h2 className="flex items-center gap-2 font-bold text-3xl">$24,895 <span className="flex items-center text-sm text-[#28dd22]"><ArrowUp01 size={16} className="text-[#28dd22]"/> 10%</span></h2>
            <p>Compared to $84,325 last year</p>
          </div>
          <div className="space-y-2">
            {[
              {
                icon: "../../../../public/images/cards/zipcar.png",
                title: "Zipcar",
                price: "$24,895.65",
                description: "Vue, React & HTML",
                width: "85%"
              },
              {
                icon: "../../../../public/images/cards/bitbank.png",
                title: "Email from client",
                price: "$8,650.20",
                description: "Sketch, Figma & XD",
                width: "60%"
              },
              {
                icon: "../../../../public/images/cards/aviato.png",
                title: "Aviato",
                price: "$1,245.80",
                description: "HTML & Angular",
                width: "35%"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between gap-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="mt-1 flex items-center gap-3 justify-between">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <img 
                      src={item.icon} 
                      className="rounded-full"
                      alt="image for cards bank" 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-gray-500 font-semibold text-md">{item.description}</p>
                  </div>  
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800 mb-1">{item.price}</p>
                  <div className={`w-full h-2 bg-gray-400 rounded-xl relative after:absolute after:w-[${item.width}] after:h-full after:rounded-xl after:bg-[#28dd22]`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-5 ">
          
          {/* Transactions */}
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-2xl font-bold">$86.4k</h3>
            <div className="w-22 h-16 flex items-center my-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#28dd22" 
                    strokeWidth={4}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-gray-500 text-md  my-2">Total Profit</p>
          </div>

          {/* Transactions */}
          <div className="bg-white p-6 rounded-xl shadow-sm relative">
            <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
            <div className="mb-3 bg-gray-500 w-10 h-10 rounded-full flex justify-center items-center">
              <Clock className="text-success text-white" size={25} />
            </div>
            <p className="text-gray-500 text-xl font-semibold">Total Profit</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold my-1">$25.6k</h3>
              <span className="font-bold text-[#28dd22]">+42%</span>
            </div>
            <p className="text-gray-400 font-semibold">Weekly Profit</p>
          </div>

          {/* Total Customers */}
          <div className="bg-white p-6 rounded-xl shadow-sm relative">
            <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
            <div className="flex justify-center items-center mb-2 bg-[#0A6CD5] w-10 h-10 rounded-full">
              <Projector className="text-white" size={20} />
            </div>
            <p className="text-gray-700 font-medium text-lg">New Project</p>
            <div className="flex items-baseline gap-2 my-2">
              <h3 className="text-2xl font-bold">862</h3>
              <span className="font-bold text-red-500">-18%</span>
            </div>
            <p className="text-gray-400">Yearly Project</p>
          </div>

          {/* Total Orders */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold">2,856</h2>
            <div className="w-full h-28">
              <AnalyticTool />
            </div>
            <p className="text-center font-semibold">Sessions</p>
          </div>
        </div>
      </div>


      {/* third Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Revenue Report */}
        <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-1 relative">
          <EllipsisVertical size={16} className="absolute top-6 right-4 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold">Performance</h3>
              <p className="text-gray-400">Your Performance Ballance</p>
            </div>
            <div className="hidden flex flex-col items-center gap-2 bg-gray-100 p-2">
              <span className="text-gray-700">Last 30 days</span>
              <span className="text-gray-700">Last 3 Month</span>
              <span className="text-gray-700">Last Year </span>
            </div>
          </div>
          {/* Chart Placeholder */}
          <div className="h-72 bg-white rounded-lg flex items-center justify-center">
            <RadicalOnAnalytics />
          </div>
        </div>

        {/* Sales Overview */}
        <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2">
          <DepositWithdraw />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {/* sales by countries */}
        <div className="bg-white p-5 rounded-xl shadow-sm lg:col-span-1">
          <SalesByCountries />
        </div>

        {/* Recent Transactions */}
        <div className="bg-white p-4 rounded-xl shadow-sm lg:col-span-2">
          <UserTable />
        </div>
      </div>
    </div>
  );
}