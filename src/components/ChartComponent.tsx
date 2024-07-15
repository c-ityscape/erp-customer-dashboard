import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import './ChartComponent.scss';

const data = [
  { name: 'Jan', Orders: 120 },
  { name: 'Feb', Orders: 90 },
  { name: 'Mar', Orders: 25 },
  { name: 'Apr', Orders: 58 },
  { name: 'May', Orders: 120 },
  { name: 'Jun', Orders: 120 },
  { name: 'Jul', Orders: 34 },
  { name: 'Aug', Orders: 50 },
  { name: 'Sep', Orders: 120 },
  { name: 'Oct', Orders: 56 },
  { name: 'Nov', Orders: 35 },
  { name: 'Dec', Orders: 0 },
];

const getColor = (value: number) => {
  if (value > 60) return '#76c7c0';
  if (value > 40) return '#f6d743';
  return '#f67280';
};

const ChartComponent: React.FC = () => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h2>Order History</h2>
        <a href="#details">View Details</a>
      </div>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Orders" fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.Orders)} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default ChartComponent;
