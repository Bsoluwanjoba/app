'use client'
import Link from 'next/link';
import UserStatistics from './stats/Statistics';

export default function page() {
    // const { totalRevenue, loading, error } = useRevenueData();
  return (
    <div classname="mt-5">
         <UserStatistics />
    </div>
  )
}
