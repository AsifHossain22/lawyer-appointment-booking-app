import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#E02424",
  "#0EA106",
  "#A020F0",
  "#FF69B4",
  "#20B2AA",
  "#FFD700",
  "#1E90FF",
  "#8B4513",
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

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const extractNumericFee = (feeString) => {
  if (!feeString && feeString !== 0) return 0;
  // Remove non-numeric characters except dot
  const num = feeString.toString().replace(/[^0-9.]/g, "");
  const parsed = parseFloat(num);
  return Number.isFinite(parsed) ? parsed : 0;
};

const RechartBarChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadChartData = () => {
      const existingBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];
      const showChartData = existingBookings.map((booking) => ({
        name: booking.lawyerName || "Unknown",
        fee: extractNumericFee(booking.consultationFee),
      }));
      setChartData(showChartData);
    };

    loadChartData();

    // Listen for changes from localStorage or cancel button
    window.addEventListener("storage", loadChartData);

    return () => {
      window.removeEventListener("storage", loadChartData);
    };
  }, []);

  // IfNoLawyerDataHideChart
  if (!chartData || chartData.length === 0) return null;

  return (
    <div className="mb-10 w-full flex justify-center">
      <div style={{ width: "100%", height: 420 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              formatter={(value) => {
                // TooltipValueWithDollarSign
                return typeof value === "number" ? `$${value}` : value;
              }}
            />
            <Bar
              dataKey="fee"
              fill="#8884d8"
              shape={TriangleBar} // pass function component
              label={{ position: "top" }}
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
