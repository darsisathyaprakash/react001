import React from 'react';

const Navbar = ({ onNavigate, currentPage }) => {
  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm py-4 px-6 fixed top-0 w-full z-50 flex justify-between items-center border-b border-gray-100 transition-all">
      <div
        className="flex items-center cursor-pointer group"
        onClick={() => onNavigate('home')}
      >
        <div className="w-8 h-8 bg-teal-600 rounded-lg mr-3 flex items-center justify-center shadow-md group-hover:bg-teal-700 transition-colors">
          <span className="text-white font-bold text-lg">B</span>
        </div>
        <h1 className="text-xl font-bold text-gray-800 tracking-tight group-hover:text-teal-700 transition-colors">
          Biomedical Info Hub
        </h1>
      </div>
      <div>
        {/* Button removed, moved to FloatingAIButton */}
      </div>
    </nav>
  );
};

export default Navbar;
