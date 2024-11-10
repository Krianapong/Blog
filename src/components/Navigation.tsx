import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="w-full sm:w-1/5 min-w-[150px] bg-white p-6 sticky top-0 h-screen shadow-lg">
      <Header />
      <ul className="space-y-6 text-sm sm:text-base text-center font-semibold text-gray-600">
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/resume">RESUME</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/project">PROJECT</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/donate">DONATE</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
