'use client'
import React, { useState, useEffect } from 'react';
import { Card, Badge, Button } from 'flowbite-react';
import Image from 'next/image';
import axios from 'axios';

// Define the Product interface based on the API response
// interface Product {
//   id: number;
//   name: string;
//   slug: string;
//   description: string;
//   price: string;
//   category: string;
//   stock: number;
//   created_at: string;
//   updated_at: string;
//   image: string;
//   status: string;
//   vendor: number;
// }

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // JWT token for authentication
  const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzYxNjAxNTcwLCJpYXQiOjE3MzAwNjU1NzAsImp0aSI6ImQ0NzA3YzQwYzg2OTQ0ZGI5ODYwMGJkODJiNTgyZmFhIiwidXNlcl9pZCI6N30.2aDEVXf4w2rxQH-Ht4dFSt0o5TtZHY173pjVh7mOcQ4';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://macronics.onrender.com/api/products/products', {
          headers: {
            'Authorization': `Bearer ${JWT_TOKEN}`,
            'Content-Type': 'application/json'
          }
        });

        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
        <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0ac]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="max-w-[280px]">
            <div className="relative h-32 w-32">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                style={{ objectFit: 'cover' }} 
                className="rounded-t-lg"
              />
            </div>
            <div className="p-5">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between mb-3">
                <Badge color="success">{product.category}</Badge>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <Badge color={product.stock > 0 ? 'success' : 'failure'}>
                  {product.status}
                </Badge>
                <span className="text-sm text-gray-500">
                  Stock: {product.stock}
                </span>
              </div>
              
              <Button 
                className="mt-4 w-full bg-[#0ac]"
                disabled={product.stock === 0}
              >
                {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;