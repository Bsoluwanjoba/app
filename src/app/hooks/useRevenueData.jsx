'use client'
import { useState, useEffect } from 'react';

// Mock data - replace with actual API calls in a real application
const mockRevenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 },
];

const mockTransactions = [
  { id: 1, date: '2023-06-15', description: 'Product A Sale', amount: 1500 },
  { id: 2, date: '2023-06-14', description: 'Service B Subscription', amount: 299 },
  { id: 3, date: '2023-06-13', description: 'Product C Sale', amount: 750 },
  { id: 4, date: '2023-06-12', description: 'Service D Renewal', amount: 499 },
  { id: 5, date: '2023-06-11', description: 'Product E Sale', amount: 1200 },
];

export const useRevenueData = () => {
  const [revenueData, setRevenueData] = useState([]);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [avgRevenue, setAvgRevenue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real application, replace these with actual API calls
        setRevenueData(mockRevenueData);
        setRecentTransactions(mockTransactions);
        
        const total = mockRevenueData.reduce((sum, item) => sum + item.revenue, 0);
        setTotalRevenue(total);
        setAvgRevenue(total / mockRevenueData.length);
        
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { revenueData, recentTransactions, totalRevenue, avgRevenue, loading, error };
};