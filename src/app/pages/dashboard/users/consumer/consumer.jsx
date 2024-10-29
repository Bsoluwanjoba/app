'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

function CustomersList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get('http://macronics.onrender.com/api/customers/customers/');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchVendors();
  }, []);

  return (
    <section className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">All Customers</h1>
      
      {customers.length > 0 ? (
        <ul className="space-y-4">
          {customers.map((customer) => (
            <li key={customer.id} className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{customer.name}</h2>
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No customers available.</p>
      )}
    </section>
  );
}

export default CustomersList;
