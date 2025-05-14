"use client";

import React, { useState, useEffect, useRef } from "react";
import { ShoppingCartIcon, ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Check if current path matches any product submenu
  const isProductActive = ["/Prod", "/printer", "/kits"].includes(pathname);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            className="h-14 hover:rotate-[-5deg] transition-transform duration-300" 
          />
        </motion.div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { href: "/home", label: "Home" },
            { href: "/about", label: "About us" },
            { href: "/product", label: "Products" },
            { href: "/shop1", label: "Shop" },
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
                  className={`flex items-center text-gray-800 hover:text-blue-600 focus:outline-none transition-colors duration-300 relative group ${
                    isProductActive ? "text-blue-600 font-medium" : ""
                  }`}
                >
                  {label}
                  <motion.div
                    animate={{
                      rotate: isDropdownOpen ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDownIcon className="h-4 w-7 ml-1" />
                  </motion.div>
                  
                  {/* Animated border */}
                  {isProductActive && (
                    <motion.div
                      className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-600"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3, type: "spring" }}
                    />
                  )}
                </button>
                
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-white shadow-xl rounded-md mt-1 z-10 w-48 border border-gray-100 overflow-hidden"
                    >
                      <Link
                        href="/Prod"
                        className={`block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200 ${
                          pathname === "/Prod" ? "bg-blue-50 font-medium text-blue-600" : ""
                        }`}
                      >
                        IFPD
                      </Link>
                      <Link
                        href="/printer"
                        className={`block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200 ${
                          pathname === "/printer" ? "bg-blue-50 font-medium text-blue-600" : ""
                        }`}
                      >
                        3D Printers
                      </Link>
                      <Link
                        href="/kits"
                        className={`block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-200 ${
                          pathname === "/kits" ? "bg-blue-50 font-medium text-blue-600" : ""
                        }`}
                      >
                        STEM & Robotics
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                key={href}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={href}
                  className={`relative text-gray-800 hover:text-blue-600 transition-colors duration-300 ${
                    pathname === href ? "text-blue-600 font-medium" : ""
                  }`}
                >
                  {label}
                  {pathname === href && (
                    <motion.div
                      className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-600"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3, type: "spring" }}
                    />
                  )}
                </Link>
              </motion.div>
            )
          )}
        </nav>

        {/* Cart + Sign In */}
        <div className="flex items-center space-x-6">
          <motion.button
            className="relative hover:text-blue-600 focus:outline-none group"
            aria-label="Shopping Cart"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={'/mycart'}>
            <div className="relative p-2 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
              <ShoppingCartIcon className="h-6 w-6 text-blue-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                !
              </span>
            </div>
            </Link>
          </motion.button>
          <motion.a
            href="/contact"
            target="_blank"
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(37, 99, 235, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Sign in
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;