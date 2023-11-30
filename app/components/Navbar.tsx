// Navbar.tsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-4 left-0 right-0 bg-transparent z-50 px-6 lg:px-0">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Navbar and Nav Links on the left */}
        <div className="flex items-center space-x-4">
          <div className="text-white bg-gray-600 py-1 px-4 rounded-full">Your Navbar</div>
          <div className="bg-gray-600 py-1 px-4 rounded-full hidden xs:block lg:block ">
            <a href="#" className="text-white">
              Link 1
            </a>
            <a href="#" className="text-white">
              Link 2
            </a>
          </div>
        </div>

        {/* Login and Cart Links on the right */}
        <div className="flex items-center space-x-4 bg-gray-600 py-1 px-4 rounded-full">
          <a href="#" className="text-white">
            Login
          </a>
          <a href="#" className="text-white">
            Cart
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
