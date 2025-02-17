import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <div className="bg-white p-2 rounded-full shadow-lg w-10 h-10 flex items-center justify-center">
              <FontAwesomeIcon 
                icon={faLocationDot} 
                className="text-blue-600 text-xl"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold">iosdigitalzonesodho</h1>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`hover:text-blue-200 transition-colors ${location.pathname === '/' ? 'text-white font-semibold' : 'text-blue-100'}`}
            >
              Delhi Location
            </Link>
            <Link 
              to="/pune" 
              className={`hover:text-blue-200 transition-colors ${location.pathname === '/pune' ? 'text-white font-semibold' : 'text-blue-100'}`}
            >
              Pune Location
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;