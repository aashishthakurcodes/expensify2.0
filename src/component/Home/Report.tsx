"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { FiBarChart2, FiPieChart, FiTrendingUp, FiDownload, FiFilter } from "react-icons/fi";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Report = () => {
  const [timeRange, setTimeRange] = useState("monthly");
  const [chartType, setChartType] = useState("bar");
  const [isExportOpen, setIsExportOpen] = useState(false);

  const transactionData = {
    labels: ["Food", "Transport", "Shopping", "Bills", "Entertainment", "Others"],
    datasets: [
      {
        label: "Amount Spent ($)",
        data: [450, 200, 300, 150, 100, 50],
        backgroundColor: [
          "rgba(99, 102, 241, 0.8)",
          "rgba(59, 130, 246, 0.8)",
          "rgba(16, 185, 129, 0.8)",
          "rgba(245, 158, 11, 0.8)",
          "rgba(244, 63, 94, 0.8)",
          "rgba(139, 92, 246, 0.8)",
        ],
        borderColor: [
          "rgba(99, 102, 241, 1)",
          "rgba(59, 130, 246, 1)",
          "rgba(16, 185, 129, 1)",
          "rgba(245, 158, 11, 1)",
          "rgba(244, 63, 94, 1)",
          "rgba(139, 92, 246, 1)",
        ],
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const trendData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Spending ($)",
        data: [1200, 1900, 1500, 2000, 1800, 2200],
        borderColor: "rgba(99, 102, 241, 1)",
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const renderChart = () => {
    const commonOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            boxWidth: 12,
            padding: 20,
            font: {
              family: "Inter, sans-serif",
            },
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          titleFont: { size: 14 },
          bodyFont: { size: 12 },
          padding: 12,
          cornerRadius: 8,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
      },
    };

    switch (chartType) {
      case "bar":
        return (
          <Bar
            data={transactionData}
            options={{
              ...commonOptions,
              animation: {
                duration: 1000,
                easing: "easeOutQuart",
              },
            }}
          />
        );
      case "pie":
        return (
          <Pie
            data={transactionData}
            options={{
              ...commonOptions,
              plugins: {
                ...commonOptions.plugins,
                legend: {
                  position: "right",
                },
              },
            }}
          />
        );
      case "line":
        return (
          <Line
            data={trendData}
            options={{
              ...commonOptions,
              elements: {
                point: {
                  radius: 4,
                  hoverRadius: 6,
                },
              },
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
    >
      {/* Header */}
      <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Expense Reports</h2>
            <p className="text-gray-500 text-sm">Analyze your spending patterns</p>
          </div>
          
          <div className="flex items-center space-x-3 mt-3 md:mt-0">
            <div className="relative">
              <button 
                onClick={() => setIsExportOpen(!isExportOpen)}
                className="flex items-center space-x-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm hover:bg-gray-50 transition-colors"
              >
                <FiDownload className="text-gray-500" />
                <span>Export</span>
              </button>
              {isExportOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-10"
                >
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                    PDF
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                    CSV
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                    Image
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <FiFilter className="text-gray-400" />
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100"
          >
            <option value="weekly">This Week</option>
            <option value="monthly">This Month</option>
            <option value="yearly">This Year</option>
          </select>
        </div>

        <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
          {[
            { type: "bar", icon: <FiBarChart2 />, label: "Bar" },
            { type: "pie", icon: <FiPieChart />, label: "Pie" },
            { type: "line", icon: <FiTrendingUp />, label: "Line" },
          ].map((chart) => (
            <button
              key={chart.type}
              onClick={() => setChartType(chart.type)}
              className={`p-2 rounded-md flex items-center space-x-1 text-sm ${chartType === chart.type ? "bg-white shadow-sm" : "hover:bg-gray-50"}`}
            >
              <span className={`${chartType === chart.type ? "text-indigo-600" : "text-gray-500"}`}>
                {chart.icon}
              </span>
              <span className={`${chartType === chart.type ? "text-indigo-600" : "text-gray-600"}`}>
                {chart.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Chart Area */}
      <div className="px-6 py-4">
        <div className="h-80 md:h-96 relative">
          {renderChart()}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { 
            title: "Total Spent", 
            value: "$1,250", 
            change: "+5.2%", 
            isPositive: false,
            icon: <FiTrendingUp />,
            bg: "bg-indigo-50",
            text: "text-indigo-600"
          },
          { 
            title: "Savings", 
            value: "$350", 
            change: "+12.1%", 
            isPositive: true,
            icon: <FiTrendingUp />,
            bg: "bg-green-50",
            text: "text-green-600"
          },
          { 
            title: "Top Category", 
            value: "Food", 
            subvalue: "$450 spent",
            icon: <FiBarChart2 />,
            bg: "bg-purple-50",
            text: "text-purple-600"
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -3 }}
            className={`${card.bg} p-4 rounded-lg border border-transparent hover:border-gray-200 transition-all`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{card.title}</p>
                <p className={`text-2xl font-semibold mt-1 ${card.text}`}>{card.value}</p>
              </div>
              <div className={`p-2 rounded-lg ${card.bg} ${card.text} bg-opacity-50`}>
                {card.icon}
              </div>
            </div>
            {card.change ? (
              <p className={`text-xs mt-2 ${card.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {card.change} from last {timeRange.replace('ly', '')}
              </p>
            ) : (
              <p className="text-xs mt-2 text-gray-500">{card.subvalue}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Report;