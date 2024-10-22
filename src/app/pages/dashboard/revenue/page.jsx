'use client'
import React from 'react';
import { useRevenueData } from '../../hooks/useRevenueData';

const RevenueDashboard = () => {
  const { revenueData, recentTransactions, totalRevenue, avgRevenue, loading, error } = useRevenueData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Revenue Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Total Revenue</h2>
          <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Average Monthly Revenue</h2>
          <p className="text-2xl font-bold">${avgRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Current Month Revenue</h2>
          <p className="text-2xl font-bold">${revenueData[revenueData.length - 1].revenue.toLocaleString()}</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Revenue Trend</h2>
       
      </div>

      {/* Recent Transactions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Description</th>
                <th className="py-2 px-4 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="py-2 px-4">{transaction.date}</td>
                  <td className="py-2 px-4">{transaction.description}</td>
                  <td className="py-2 px-4">${transaction.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RevenueDashboard;