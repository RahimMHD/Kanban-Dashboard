import React from 'react';
import { MoreHorizontal, TrendingUp, TrendingDown, EllipsisVertical, Minus } from 'lucide-react';

interface CountryData {
    code: string;
    country: string;
    amount: string;
    change: string;
    sales: string;
    positive: boolean | string;
    status: string;
}

const countries: CountryData[] = [
    { code: 'US', country: 'United States of America', amount: '$8,656k', change: '25.8%', sales: '894k', positive: true, status: "Up" },
    { code: 'UK', country: 'United Kingdom', amount: '$2,415k', change: '6.2%', sales: '645k', positive: false, status: "Down" },
    { code: 'IN', country: 'India', amount: '$865k', change: '12.4%', sales: '148k', positive: false, status: "Same" },
    { code: 'JA', country: 'Japan', amount: '$745k', change: '0%', sales: '86k', positive: "same", status: "CrazyDown" },
    { code: 'KO', country: 'Korea', amount: '$45k', change: '16.2%', sales: '42k', positive: false, status: "Down" },
    { code: 'CH', country: 'China', amount: '$12k', change: '14.8%', sales: '8k', positive: true, status: "SuperUp" },
];


const getStatusColor = (status: string) => {
    switch (status) {
        case 'Up': return 'bg-[#28dd2265] text-[#06b300] w-10 h-10 rounded-full flex items-center justify-center';
        case 'Same': return 'bg-[#ffb40065] text-[#ffb400] w-10 h-10 rounded-full flex items-center justify-center';
        case 'Down': return 'bg-[#f3341b65] text-[#b41500] w-10 h-10 rounded-full flex items-center justify-center';
        case 'SuperUp': return 'bg-[#5d36e765] text-[#5d36e7] w-10 h-10 rounded-full flex items-center justify-center';
        case 'CrazyDown': return 'bg-gray-300 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center';
        default: return 'w-10 h-10 text-white rounded-full flex items-center justify-center';
    }
};

const getSalesIcon = (role: string|boolean) => {
    switch (role) {
        case true : return 'flex items-center gap-1 text-xs text-[#07c500]';
        case false : return 'flex items-center gap-1 text-xs text-[#f3341b]';
        case "same" : return 'flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300';
        default: return 'flex items-center gap-1 text-xs ';
    }
}


export const SalesByCountries: React.FC = () => {
    return (
        <div className="relative">
            <EllipsisVertical size={16} className="absolute top-2 right-2 text-gray-800 cursor-pointer hover:scale-[1.1]"/>
            <h2 className="text-xl font-semibold mb-6">Sales by Countries</h2>
            
            <div className="">
                {countries.map((country, index) => (
                    <div key={index} className="flex items-center justify-between gap-3 my-4">
                        <div className='flex items-center gap-3'>
                            <div className={getStatusColor(country.status)}>
                                <span className="text-base font-semibold">{country.code}</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <div className="font-medium text-lg">{country.amount}</div>
                                    <div className={getSalesIcon(country.positive)}>
                                        {country.positive === "same" ? <Minus className='w-3 h-3' /> : country.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                        {country.change}
                                    </div>
                                </div>
                                <h3 className="text-md text-muted-foreground">{country.country}</h3>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="">
                                <h3 className='text-md font-semibold'>{country.sales}</h3> 
                                <span className='font-normal'>Sales</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};