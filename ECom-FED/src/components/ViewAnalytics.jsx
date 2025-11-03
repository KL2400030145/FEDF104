import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const ViewAnalytics = () => {
  const [analytics, setAnalytics] = useState({
    totalProducts: 0,
    totalUsers: 0,
    totalOrders: 0,
  });

  // Load data from localStorage
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    setAnalytics({
      totalProducts: products.length,
      totalUsers: users.length,
      totalOrders: orders.length,
    });
  }, []);

  // Prepare chart data
  const data = [
    { name: "Products", value: analytics.totalProducts },
    { name: "Users", value: analytics.totalUsers },
    { name: "Orders", value: analytics.totalOrders },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-6">📊 Analytics Dashboard</h2>

      {/* Summary Table */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mb-8">
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 p-2">Category</th>
              <th className="border border-gray-300 p-2">Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Total Products</td>
              <td className="border border-gray-300 p-2">
                {analytics.totalProducts}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Total Users</td>
              <td className="border border-gray-300 p-2">
                {analytics.totalUsers}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Total Orders</td>
              <td className="border border-gray-300 p-2">
                {analytics.totalOrders}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Bar Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">Bar Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">Pie Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#82ca9d"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ViewAnalytics;
