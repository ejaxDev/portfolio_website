import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 fixed w-full z-20 top-0 border-b border-slate-700">
      <div className="max-w-7xl flex items-center justify-between mx-auto px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity" onClick={closeMenu}>
          <div className="h-7 w-7 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-slate-900">EJ</span>
          </div>
          <span className="text-lg sm:text-xl font-semibold text-white hidden sm:inline">Portfolio</span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-row space-x-8">
          <li>
            <Link 
              to="/" 
              className="text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className="text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/resume" 
              className="text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <ul className="flex flex-col space-y-0">
            <li>
              <Link 
                to="/" 
                className="text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className="text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200"
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/trading" 
                className="text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200"
                onClick={closeMenu}
              >
                Trading
              </Link>
            </li>
            <li>
              <Link 
                to="/resume" 
                className="text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200"
                onClick={closeMenu}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-slate-300 hover:text-blue-400 hover:bg-slate-700 py-3 px-4 block transition-colors duration-200"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;