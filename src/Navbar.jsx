import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">MyApp</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/profile" className="text-white hover:text-gray-300">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
