import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const colors = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#E02424',
  '#0EA106',
  '#A020F0',
  '#FF69B4',
  '#20B2AA',
  '#FFD700',
  '#1E90FF',
  '#8B4513',
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    },${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    },${y + height}
    Z`;
};

const TriangleBar = ({ fill, x, y, width, height }) => (
  <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
);

const extractNumericFee = feeString => {
  if (!feeString && feeString !== 0) return 0;
  const num = feeString.toString().replace(/[^0-9.]/g, '');
  const parsed = parseFloat(num);
  return Number.isFinite(parsed) ? parsed : 0;
};

const RechartBarChart = () => {
  const [chartData, setChartData] = useState([]);
  const [chartHeight, setChartHeight] = useState(420); // default desktop height

  useEffect(() => {
    const loadChartData = () => {
      const existingBookings =
        JSON.parse(localStorage.getItem('bookings')) || [];
      const showChartData = existingBookings.map(booking => ({
        name: booking.lawyerName || 'Unknown',
        fee: extractNumericFee(booking.consultationFee),
      }));
      setChartData(showChartData);
    };

    loadChartData();
    window.addEventListener('storage', loadChartData);

    // Responsive height based on window width
    const handleResize = () => {
      if (window.innerWidth < 640)
        setChartHeight(300); // mobile
      else if (window.innerWidth < 1024)
        setChartHeight(360); // tablet
      else setChartHeight(420); // desktop
    };

    handleResize(); // set initial
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('storage', loadChartData);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!chartData || chartData.length === 0) return null;

  return (
    <div className="w-full bg-base-100 border border-base-300 p-4 sm:p-6 rounded-3xl shadow-sm mb-10">
      <h3 className="text-base-content text-xl font-bold mb-6 text-center">
        Consultation Fees Overview
      </h3>
      <div style={{ width: '100%', height: chartHeight }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="currentColor"
              className="text-base-300 opacity-50"
            />
            <XAxis
              dataKey="name"
              stroke="currentColor"
              tick={{ fill: 'currentColor' }}
              className="text-base-content/70 text-xs"
            />
            <YAxis
              stroke="currentColor"
              tick={{ fill: 'currentColor' }}
              className="text-base-content/70 text-xs"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'oklch(var(--b2))',
                borderColor: 'oklch(var(--b3))',
                borderRadius: '0.75rem',
                color: 'oklch(var(--bc))',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
              formatter={value =>
                typeof value === 'number' ? `$${value}` : value
              }
            />
            <Bar
              dataKey="fee"
              fill="#8884d8"
              shape={TriangleBar}
              label={{ position: 'top', fill: 'currentColor' }}
              animationBegin={0}
              animationDuration={900}
              animationEasing="ease-in-out"
            >
              {chartData.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RechartBarChart;
