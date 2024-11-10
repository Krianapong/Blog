import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center items-center py-6 bg-white ">
      <div className="text-4xl">
        <Link to="/">
          <img
            src="src/assets/Profile.png"
            alt="Logo"
            className="h-24 w-24 sm:h-32 sm:w-32 rounded-full  "
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
