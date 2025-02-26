/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Image from "../assets/images/logo.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Colors } from "./Colors";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: Colors.headerBackground }}
      className="w-full shadow-md px-4 sm:px-6 md:px-10 py-4 flex justify-between items-center sticky top-0 z-50"
    >
      {/* Logo and Branding */}
      <div className="flex items-center space-x-4">
        <img src={Image} alt="Logo" className="h-12 w-12 object-contain" />
        <div className="text-left relative right-7 top-4 md:text-left">
          <h4
            className="text-base font-bold"
            style={{ color: Colors.primaryText }}
          >
            FASHIONISTA
          </h4>
          <p className="text-xs" style={{ color: Colors.primaryText }}>
            Where style meets swiftness.
          </p>
        </div>
      </div>

      {/* Icons and Mobile Menu Toggle */}
      <div className="flex items-center space-x-4 md:hidden">
        <Link>
          <MdOutlineShoppingCart
            className="text-xl cursor-pointer hover:text-red-500"
            style={{ color: Colors.primaryText }}
          />
        </Link>
        <Link to="/signup">
          <FaRegUser
            className="text-xl cursor-pointer hover:text-red-500"
            style={{ color: Colors.primaryText }}
          />
        </Link>
        {menuOpen ? (
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Navigation Menu */}
      <nav
        className={`md:flex md:space-x-6 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-5 md:p-0 transition-transform ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 font-medium"
          style={{ color: Colors.primaryText }}
        >
          <li>
            <Link
              to="/"
              className="hover:text-red-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="hover:text-red-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/vendors"
              className="hover:text-red-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Vendors
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-red-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-red-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Search Input inside Mobile Menu */}
        <div className="relative mt-4 md:hidden">
          <input
            type="search"
            placeholder="Search..."
            className="border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
      </nav>

      {/* Search and Icons for Larger Screens */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            className="border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-red-400 w-36 sm:w-48"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
        <div
          className="flex space-x-4 text-xl"
          style={{ color: Colors.primaryText }}
        >
          <Link>
            <MdOutlineShoppingCart className="cursor-pointer hover:text-red-500" />
          </Link>
          <Link to="/signup">
            <FaRegUser className="cursor-pointer hover:text-red-500" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
