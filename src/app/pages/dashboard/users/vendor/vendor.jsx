'use client'

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { User, Building2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

const UsersList = () => {
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
        // Separate vendors and customers
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

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

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
          Error loading users: {error}
        </AlertDescription>
      </Alert>
    );
  }

  const UserTable = ({ users, title, icon: Icon }) => (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon className="h-6 w-6" />
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-gray-500">
                  No {title.toLowerCase()} found
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    {capitalizeFirstLetter(user.first_name)} {user.last_name}
                  </TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-4 space-y-4">
      <UserTable 
        users={users.vendors} 
        title="Vendors" 
        icon={Building2} 
      />
      <UserTable 
        users={users.customers} 
        title="Customers" 
        icon={User} 
      />
    </div>
  );
};

export default UsersList;