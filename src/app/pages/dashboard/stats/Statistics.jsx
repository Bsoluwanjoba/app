'use client'

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { User, Building2, Users } from 'lucide-react';

const UserStatistics = () => {
  const [users, setUsers] = useState({ vendors: [], customers: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzYxNjAxNTcwLCJpYXQiOjE3MzAwNjU1NzAsImp0aSI6ImQ0NzA3YzQwYzg2OTQ0ZGI5ODYwMGJkODJiNTgyZmFhIiwidXNlcl9pZCI6N30.2aDEVXf4w2rxQH-Ht4dFSt0o5TtZHY173pjVh7mOcQ4';

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://macronics.onrender.com/api/customers/customers', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        const vendors = data.filter(user => user.user_type === 'vendor');
        const customers = data.filter(user => user.user_type === 'customer');
        setUsers({ vendors, customers });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const StatCard = ({ title, count, icon: Icon, bgColor }) => (
    <Card className={`${bgColor} text-white`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Total {title}</p>
            <h3 className="text-2xl font-bold mt-2">{count}</h3>
          </div>
          <Icon className="h-8 w-8 opacity-75" />
        </div>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0ac]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="m-4">
        <AlertDescription>
          Error loading statistics: {error}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="md:py-14 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          title="Vendors" 
          count={users.vendors.length}
          icon={Building2}
          bgColor="bg-blue-600"
        />
        <StatCard 
          title="Customers" 
          count={users.customers.length}
          icon={User}
          bgColor="bg-green-600"
        />
        <StatCard 
          title="Users" 
          count={users.vendors.length + users.customers.length}
          icon={Users}
          bgColor="bg-purple-600"
        />
      </div>
    </div>
  );
};

export default UserStatistics;