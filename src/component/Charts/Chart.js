import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, BarChart } from 'recharts';
import "./Chart.css"
const Chart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data);
    return (
        <div className='row'>
            <div className='col-lg-6'>
                <LineChart width={600} height={300} data={data}>
                    <Line name="Sell" dataKey={"sell"} stroke="#8884d8"></Line>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey={"month"} />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                </LineChart>
            </div>
            <div className='col-lg-6'>
                <h4 className='text-center chart-title'>Investment vs Revenue</h4>
                <BarChart width={600} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"month"} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#8884d8" />
                    <Bar dataKey="investment" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Chart;
