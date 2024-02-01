import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4 font-bold">Welcome!</h2>
        <div className="mb-4">
          <Link to="/login" className="text-blue-500 hover:underline mr-4">
            Login
          </Link>
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </div>
        <div>
          <Link to="/profile" className="text-green-500 hover:underline">
            Edit Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
