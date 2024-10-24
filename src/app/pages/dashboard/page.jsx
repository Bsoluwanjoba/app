'use client'
import { useRevenueData } from '../../hooks/useRevenueData';
import Link from 'next/link';

export default function page() {
    // const { totalRevenue, loading, error } = useRevenueData();
  return (
    <div classname="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-100 p-8 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Total Revenue</h2>
          {/* {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
          )} */}
          <Link href="/pages/dashboard/revenue" className="text-blue-500 hover:underline mt-2 inline-block">
            View Details
          </Link>
        </div>
    </div>
    </div>
  )
}
