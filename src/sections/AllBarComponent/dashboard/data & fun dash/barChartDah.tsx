
import React, { PureComponent } from 'react';
import {XAxis,YAxis,  RadialBarChart, RadialBar, Pie, PieChart, BarChart, Bar, ResponsiveContainer, Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, Tooltip, CartesianGrid, LineChart, Line, } from 'recharts';

const dataBar: any[] = [
    { name: 'S',uv: 1400, pv: 2200, amt: 2400, },
    { name: 'M',uv: 2000, pv: 1398, amt: 2210, },
    { name: 'T',uv: 1700, pv: 9800, amt: 2290, },
    { name: 'W',uv: 2180, pv: 3908, amt: 2000, },
    { name: 'T',uv: 3890, pv: 4800, amt: 2181, },
    { name: 'F',uv: 1790, pv: 3800, amt: 2500, },
    { name: 'S',uv: 2490, pv: 4300, amt: 2100, },
];

function BarChartWeeklySales() {

    const checkTheBig = dataBar.filter(a => {
        return [a.uv] 
    })

    return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart width={100} height={300} data={dataBar}>
            <Bar dataKey="uv" fill="#42B1FB" strokeWidth={5} />
            <XAxis dataKey="name" strokeOpacity={0} stroke='#999' />
        </BarChart>
    </ResponsiveContainer>
    );
}


// circle chart 

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];


function CircleChartSales() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
        </ResponsiveContainer>
    );
}






const dataRadar = [
    { subject: 'Sunday', A: 120, B: 110, fullMark: 150, },
    { subject: 'Monday', A: 98, B: 130, fullMark: 150, },
    { subject: 'Tuesday', A: 86, B: 130, fullMark: 150, },
    { subject: 'Wednesday', A: 99, B: 100, fullMark: 150, },
    { subject: 'Thursday', A: 85, B: 90, fullMark: 150, },
    { subject: 'Friday', A: 65, B: 85, fullMark: 150, },
];

function RadarChartSales () {


    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRadar}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Mike" dataKey="A" stroke="#42B1FB" fill="#42B1FB" fillOpacity={0.6} />
                <Radar name="Lily" dataKey="B" stroke="#71c91e" fill="#71c91e" fillOpacity={0.6} />
                <Legend  />
            </RadarChart>
        </ResponsiveContainer>
    );
    
}


// nivo bar chart


const dataNivo: {
    country: string; hot_dog: number; burger: number; sandwich: number; kebab: number; fries: number; donut: number;
}[] = [
    { country: "AD", hot_dog: 6, burger: 121, sandwich: 28, kebab: 176, fries: 155, donut: 1 },
    { country: "AE", hot_dog: 71, burger: 109, sandwich: 10, kebab: 158, fries: 184, donut: 117 },
    { country: "AF", hot_dog: 119, burger: 54, sandwich: 5, kebab: 106, fries: 62, donut: 139 },
    { country: "AG", hot_dog: 164, burger: 48, sandwich: 176, kebab: 15, fries: 170, donut: 91 },
    { country: "AI", hot_dog: 30, burger: 147, sandwich: 66, kebab: 158, fries: 135, donut: 145 },
    { country: "AL", hot_dog: 76, burger: 183, sandwich: 29, kebab: 158, fries: 7, donut: 90 },
    { country: "AM", hot_dog: 83, burger: 170, sandwich: 37, kebab: 12, fries: 9, donut: 120 }
]


import { ResponsiveBar } from '@nivo/bar'
import { p } from 'framer-motion/m';

const MyBarAnalytic = () => (
    <div className="w-full h-56 mt-4">
        <ResponsiveBar
        data={dataNivo}
        keys={['hot_dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
        indexBy="country"
        margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'blues' }} // Simple color scheme
        borderRadius={6}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Food Count',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        enableLabel={true} // Disable labels inside bars for cleaner look
        legends={[
            {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            translateX: 120,
            itemWidth: 100,
            itemHeight: 20,
            }
        ]}
        />
    </div>
)



// analytics tool


const dataAnalytic = [
    { name: 'Page A', uv: 2700, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 2000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 4000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
];

const AnalyticTool = () => {
    // Custom colors for each bar
    const colors = ['#433bd3ff', '#4969aaff', '#8dd1e1', '#31c76bff', '#2a5006ff'];
    
    // Find maximum value for the background bars
    const maxValue = Math.max(...dataAnalytic.map(item => item.uv));

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart 
                width={150} height={40} data={dataAnalytic}
                margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
            >
                <Bar 
                    dataKey="uv" 
                    fill="#28dd22" 
                    barSize={15} 
                    radius={[7, 7, 7, 7]} 
                    stackId="background" 
                    isAnimationActive={false}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};



// radial bar chart Analytics
const data = [
    { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8', },
    { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed', },
    { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1', },
    { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d', },
    { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c', },
    { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57', },
    { name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658', },
];

const style = {
    top: '50%',
    left: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

const RadicalOnAnalytics = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="100%" barSize={12} data={data}>
            <RadialBar
                background
                dataKey="uv"
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
        </ResponsiveContainer>
    );
};



// chart Bar eCommerce


const dataEcom = [
    { name: '2018', uv: 4000, pv: 2400, amt: 2400, },
    { name: '2019', uv: 3000, pv: 1398, amt: 2210, },
    { name: '2020', uv: 2000, pv: 9800, amt: 2290, },
    { name: '2021', uv: 2780, pv: 3908, amt: 2000, },
    { name: '2022', uv: 1890, pv: 4800, amt: 2181, },
    { name: '2023', uv: 2390, pv: 3800, amt: 2500, },
    { name: '2024', uv: 3490, pv: 4300, amt: 2100, },
];

const BarEcomProfit = () => {
    return (
        <ResponsiveContainer width="100%" height="80%">
            <BarChart
            width={500}
            height={300}
            data={dataEcom}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 0,
            }}
            >
            <XAxis dataKey="name" />
            {/* <YAxis /> */}
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#0A6CD5"  />
            <Bar dataKey="amt" stackId="a" fill="#07c500" />
            <Bar dataKey="uv" fill="#557899" />
            </BarChart>
        </ResponsiveContainer>
        );
};


const dataRevenue = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, },
];

const RevenueChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={dataRevenue}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
        </ResponsiveContainer>
    );
}




const dataVisitor = [
    { name: 'Page A', uv: 2000, pv: 2400, amt: 2400, },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, },
    { name: 'Page D', uv: 3780, pv: 3908, amt: 2000, },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, },
    { name: 'Page G', uv: 2490, pv: 4300, amt: 2100, },
];

const VisitorsBar = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={120} height={40} data={dataVisitor}>
                <Bar dataKey="uv" fill="#0A6CD5" radius={[6, 6, 0, 0]} barSize={7} />
            </BarChart>
        </ResponsiveContainer>
    );
};




const dataCostemVisit = [
  { name: 'Jan', revenue: 4000, pv: 2400, },
  { name: 'Feb', revenue: 3000, pv: 2400, },
  { name: 'Mar', revenue: 6000, pv: 2400, },
  { name: 'Apr', revenue: 2780, pv: 2400, },
  { name: 'May', revenue: 5890, pv: 2400, },
  { name: 'Jun', revenue: 4390, pv: 2400, },
  { name: 'Jul', revenue: 7490, pv: 2400, },
];


const EcommerceBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={dataCostemVisit}
                margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 10,
                }}
            >
                <Tooltip />
                <Bar dataKey="revenue" stackId="a" fill="#0A6CD5" radius={[7,7,0,0]} barSize={8}/>
                <Bar dataKey="pv" stackId="a" fill="#07c500" radius={[7,7,0,0]} barSize={8}/>
            </BarChart>
        </ResponsiveContainer>
    );
};



export {
    // crm
    BarChartWeeklySales, 
    CircleChartSales, 
    RadarChartSales,

    //analytics
    MyBarAnalytic, 
    AnalyticTool, 
    RadicalOnAnalytics,

    // eCommerce
    BarEcomProfit,
    RevenueChart,
    VisitorsBar,
    EcommerceBarChart
}