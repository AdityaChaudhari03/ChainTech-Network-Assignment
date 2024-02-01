// src/components/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { setUser } from '../redux/userSlice';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    // Simulate registration logic
    // After successful registration, dispatch login to set isAuthenticated to true
    dispatch(login());
    dispatch(setUser({ username, email, password }));
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-28 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <label className="block mb-4">
        <span className="text-gray-700">Username:</span>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Email:</span>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </label>
      <button onClick={handleRegister} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Register
      </button>
    </div>
  );
};

export default Register;
