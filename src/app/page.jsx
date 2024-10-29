// // app/signup/page.js
// 'use client'

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// export default function SignupPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     email: '',
//     user_type: 'customer', // default value
//     first_name: '',
//     last_name: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [apiError, setApiError] = useState('');

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.username.trim()) {
//       newErrors.username = 'Username is required';
//     } else if (formData.username.length < 3) {
//       newErrors.username = 'Username must be at least 3 characters';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }

//     if (!formData.first_name.trim()) {
//       newErrors.first_name = 'First name is required';
//     }

//     if (!formData.last_name.trim()) {
//       newErrors.last_name = 'Last name is required';
//     }

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setApiError('');
    
//     // Validate form
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await fetch('https://macronics.onrender.com/api/customers/signup/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Signup failed');
//       }

//       // Successful signup
//       router.push('/login'); // Redirect to login page
//     } catch (error) {
//       setApiError(error.message || 'An error occurred during signup');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="text-center text-3xl font-extrabold text-gray-900">
//           Create your account
//         </h2>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           {apiError && (
//             <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
//               {apiError}
//             </div>
//           )}

//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                 Username
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="username"
//                   name="username"
//                   type="text"
//                   required
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   value={formData.username}
//                   onChange={handleChange}
//                 />
//                 {errors.username && (
//                   <p className="mt-1 text-sm text-red-600">{errors.username}</p>
//                 )}
//               </div>
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                 )}
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 {errors.password && (
//                   <p className="mt-1 text-sm text-red-600">{errors.password}</p>
//                 )}
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
//                   First name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="first_name"
//                     name="first_name"
//                     type="text"
//                     required
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     value={formData.first_name}
//                     onChange={handleChange}
//                   />
//                   {errors.first_name && (
//                     <p className="mt-1 text-sm text-red-600">{errors.first_name}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
//                   Last name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="last_name"
//                     name="last_name"
//                     type="text"
//                     required
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     value={formData.last_name}
//                     onChange={handleChange}
//                   />
//                   {errors.last_name && (
//                     <p className="mt-1 text-sm text-red-600">{errors.last_name}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label htmlFor="user_type" className="block text-sm font-medium text-gray-700">
//                 Account type
//               </label>
//               <div className="mt-1">
//                 <select
//                   id="user_type"
//                   name="user_type"
//                   className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   value={formData.user_type}
//                   onChange={handleChange}
//                 >
//                   <option value="customer">Customer</option>
//                   <option value="vendor">Vendor</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
//               >
//                 {isLoading ? 'Creating account...' : 'Sign up'}
//               </button>
//             </div>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   Already have an account?{' '}
//                   <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
//                     Log in
//                   </Link>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/pages/dashboard" className="text-white bg-[#0ac] p-2 rounded-md items-center justify-center">Go to Dashboard</Link>
      <Link href="/pages/vendor" className="text-white bg-[#0ac] p-2 rounded-md items-center justify-center">Go to Vendor</Link>
    </div>
  );
}
