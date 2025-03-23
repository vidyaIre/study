import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">My Botique</Link>
            
            <div className="flex space-x-6">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/products" className="hover:text-gray-300">Products</Link>
              <Link to="/about" className="hover:text-gray-300">Login</Link>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </div>
    
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="flex items-center">
                
              </Link>
              <Link to="/profile">
              </Link>
            </div>
          </div>
        </nav>

  )
}

export default Navbar;
