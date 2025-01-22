"use client"
import React, { useEffect } from 'react';

const Protected = () => {
  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (isAuth !== 'true') {
      window.location.href = '/admin'; // Redirect to home/login Protected if not authenticated
    }
  }, []);

  // Show nothing while checking authentication
  if (typeof window !== 'undefined' && localStorage.getItem('isAuthenticated') !== 'true') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Protected Protected</h1>
        <p className="text-gray-600">This is your protected content. Only authenticated users can see this.</p>
      </div>
    </div>
  );
};

export default Protected;