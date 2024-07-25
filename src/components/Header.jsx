import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="pb-6 bg-white lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-3">
            <Link to="/" title="" className="flex items-center space-x-3">
              <img className="w-auto h-20" src="public/logoo.jpg" alt="Logo" />
              <button type="button" className="text-2xl font-semibold text-black focus:bg-gray-100 transition-all duration-200 hover:text-teal-600">
                Personal_Finance
              </button>
            </Link>
          </div>

          <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>

            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link to="/" className="text-lg font-medium text-black transition-all duration-200 hover:text-teal-600 focus:text-teal-600"> Home </Link>
            <Link to="/About" className="text-lg font-medium text-black transition-all duration-200 hover:text-teal-600 focus:text-teal-600"> About </Link>
            <Link to="/Finance" className="text-lg font-medium text-black transition-all duration-200 hover:text-teal-600 focus:text-teal-600"> Finance </Link>
            <Link to="/Contact" className="text-lg font-medium text-black transition-all duration-200 hover:text-teal-600 focus:text-teal-600"> Contact </Link>
          </div>
        </nav>

        <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              <Link to="/" className="inline-flex py-2 text-lg font-medium text-black transition-all duration-200 hover:text-teal-600 focus:text-teal-600"> Home </Link>
              <Link to="/About" className="inline-flex py-2 text-lg font-medium text-black transition-all duration-200 hover:text-teal-600 focus:text-teal-600"> About </Link>
              <Link to="/Finance" className="inline-flex py-2 text-lg font-medium text-black transition-all duration-200 hover:text-teal-600 focus:text-teal-600"> Finance </Link>
              <Link to="/Contact" className="inline-flex py-2 text-lg font-medium text-black transition-all duration-200 hover:text-teal-600 focus:text-teal-600"> Contact </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
