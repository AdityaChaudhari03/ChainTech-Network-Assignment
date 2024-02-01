// src/components/Account.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import EditAccountModal from './EditAccountModal';

const Account = () => {
  const user = useSelector(selectUser);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-2xl mb-4 font-bold">Account Information</h2>
      <div className="mb-4">
        <p className="text-gray-700">
          <span className="font-semibold">Username:</span> {user?.username}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> {user?.email}
        </p>
      </div>
      <button
        onClick={openEditModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Edit Account
      </button>

      <EditAccountModal isOpen={isEditModalOpen} onClose={closeEditModal} />
    </div>
  );
};

export default Account;
