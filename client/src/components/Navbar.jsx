import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [user, setUser] = useState(null);
    
  return (
    <nav className="flex justify-between items-center py-4">
      
      {/* Left section: Logo + Nav links */}
      <div className="flex items-center gap-16">
        <Link to="/">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-8 sm:w-10"
          />
        </Link>

        {user ? 
            <div className="hidden md:flex gap-12 text-sm text-gray-800 tracking-wide">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/history">HISTORY</Link>
                <Link to="/sale">SALE</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
        :
            <div className="hidden md:flex gap-12 text-sm text-gray-800 tracking-wide">
                <Link to="/">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        }

       
      </div>

      {/* Right side: Hamburger icon for mobile */}
      <div className="md:hidden">
        <img src={assets.bar} alt="Menu" className="w-6" />
      </div>
    </nav>
  );
};

export default Navbar;
