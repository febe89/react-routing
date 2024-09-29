import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md min-h-screen">
      <div className="container mx-auto flex flex-col  justify-between">
        <div className="flex flex-col space-y-4 space-x-4">
          <h2 className='text-gray-200 text-3xl mt-4'>Sidebar</h2>
          <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
          <Link to="products" className="text-white hover:text-gray-300">Products</Link>
          <Link to="orders" className="text-white hover:text-gray-300">Orders</Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
 