import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 fixed w-full z-20 top-0 border-b border-slate-700">
      <div className="max-w-7xl flex items-center justify-between mx-auto p-4">
        <Link to="/portfolio_website/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <div className="h-7 w-7 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
            <span className="text-sm font-bold text-slate-900">EJ</span>
          </div>
          <span className="text-xl font-semibold text-white">Portfolio</span>
        </Link>

        <ul className="flex flex-row space-x-8">
          <li>
            <Link 
              to="/portfolio_website/" 
              className="text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio_website/about" 
              className="text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio_website/projects" 
              className="text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio_website/resume" 
              className="text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio_website/contact" 
              className="text-slate-300 hover:text-blue-400 py-2 px-3 block transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;