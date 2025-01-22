"use client"
import React, { useState, useEffect } from 'react';

const PasswordCheck = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (isAuth === 'true') {
      window.location.href = '/admin/upload';
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'ivan1234') {
      localStorage.setItem('isAuthenticated', 'true');
      window.location.href = '/admin/upload';
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordCheck;