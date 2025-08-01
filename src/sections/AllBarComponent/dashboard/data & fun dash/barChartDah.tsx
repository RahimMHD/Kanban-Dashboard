
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar } from 'recharts';

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

export default function BarChartWeeklySales() {

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