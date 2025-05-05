"use client";

import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaInstagram } from "react-icons/fa";
import WhatsAppWidget from "../WhatsApp/WhatApp";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center text-black bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Welcome back
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Welcome back please enter your details
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-700">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password
            </a>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow transition duration-200"
          >
            Sign In
          </motion.button>

          <div className="relative text-center text-gray-900 my-4">
            <span className="bg-white px-2">or</span>
            <div className="absolute left-0 top-1/2 w-full border-t border-gray-200 transform -translate-y-1/2"></div>
          </div>

          {/* Social Icons Side by Side */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              type="button"
              className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
              <FaGoogle className="text-red-500 text-xl" />
            </button>
            <button
              type="button"
              className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
              <FaFacebookF className="text-blue-600 text-xl" />
            </button>
            <button
              type="button"
              className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
              <FaInstagram className="text-pink-500 text-xl" />
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a href="/sign_up" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </motion.div>
      <WhatsAppWidget/>
    </div>
  );
}
