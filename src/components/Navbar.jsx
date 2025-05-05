"use client";

import React, { useState, useEffect, useRef } from "react";
import { ShoppingCartIcon, ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { motion } from "framer-motion";


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md">
  <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
    {/* Logo */}
    <motion.div
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src="/images/logo.png" alt="Logo" className="h-14" />
    </motion.div>

    {/* Nav Links */}
    <nav className="hidden md:flex items-center space-x-5">
      {[
        { href: "/home", label: "Home" },
        { href: "/about", label: "About us" },
        { href: "/product", label: "Products" },
        { href: "/kits", label: "STEM & Robotics" },
        { href: "/gallery", label: "Gallery" },
        { href: "/franchise", label: "Franchise" },
        { href: "/blog", label: "Blog" },
        { href: "/resources", label: "Resources" },
        { href: "/getintouch", label: "Contact us" },
      ].map(({ href, label }) =>
        label === "Products" ? (
          <div className="relative" key={label} ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center text-black hover:text-blue-600 focus:outline-none"
            >
              {label}
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-1 z-10 w-30">
                <Link
                  href="/Prod"
                  className="block px-4 py-2 text-sm text-black hover:bg-blue-100"
                >
                  IFPD
                </Link>
                <Link
                  href="/printer"
                  className="block px-4 py-2 text-sm text-black hover:bg-blue-100"
                >
                  3D Printers
                </Link>
              </div>
            )}
          </div>
        ) : (
          <motion.div
            key={href}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={href} className="text-black hover:text-blue-600">
              {label}
            </Link>
          </motion.div>
        )
      )}
    </nav>

    {/* Cart + Sign In */}
    <div className="flex items-center space-x-4">
      <motion.button
        className="relative hover:text-blue-600 focus:outline-none"
        aria-label="Shopping Cart"
        whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.6 }}
      >
        <ShoppingCartIcon className="h-6 w-6 text-red-500" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
          3
        </span>
      </motion.button>
      <motion.a
        href="/contact"
        target="_blank"
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-500"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Sign in
      </motion.a>
    </div>
  </div>
</header>

  );
};

export default Navbar;