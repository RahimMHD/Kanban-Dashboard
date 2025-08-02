
import React, { PureComponent } from 'react';
import {XAxis,YAxis, Pie, PieChart, BarChart, Bar, ResponsiveContainer, Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, } from 'recharts';

const dataBar: any[] = [
    {
        name: 'S',
        uv: 1400,
        pv: 2200,
        amt: 2400,
    },
    {
        name: 'M',
        uv: 2000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'T',
        uv: 1700,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'W',
        uv: 2180,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'T',
        uv: 3890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'F',
        uv: 1790,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'S',
        uv: 2490,
        pv: 4300,
        amt: 2100,
    },
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


function CircleChartSales() {
    return (
        <ResponsiveContainer width="80%" height="80%">
            <PieChart width={200} height={200}>
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" innerRadius={20} outerRadius={50} fill="#42B1FB" label />
            </PieChart>
        </ResponsiveContainer>
    );
}






const dataRadar = [
    {
        subject: 'Sunday',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Monday',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Tuesday',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Wednesday',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Thursday',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'Friday',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];

function RadarChartSales () {


    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRadar}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend  />
            </RadarChart>
        </ResponsiveContainer>
    );
    
}






export {BarChartWeeklySales, CircleChartSales, RadarChartSales}