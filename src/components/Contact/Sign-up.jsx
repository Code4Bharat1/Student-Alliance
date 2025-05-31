"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaInstagram } from "react-icons/fa";
import WhatsAppWidget from "../WhatsApp/WhatApp";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Sign Up handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.post("http://localhost:5000/api/customers", {
        name: form.name,
        email: form.email,
        password: form.password,
        contact: form.contact,
      });
      setMessage("Account created successfully! Please sign in.");
      setForm({ name: "", contact: "", email: "", password: "" });
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Sign up failed. Please try again."
      );
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-10 pb-10 text-black bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold  text-gray-900 mb-2 text-center">
          Create Account
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Please fill in the details below
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Your Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
          </div>

          {/* Contact No */}
          <div>
            <label className="block text-sm pt-0 font-medium text-gray-900 mb-1">
              Contact No.
            </label>
            <input
              type="tel"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              placeholder="Enter Your Contact Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow transition duration-200"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </motion.button>

          {message && (
            <div className="text-center text-sm mt-2 text-red-500">
              {message}
            </div>
          )}

          {/* Divider */}
          <div className="relative text-center text-gray-900 my-4">
            <span className="bg-white px-2">or</span>
            <div className="absolute left-0 top-1/2 w-full border-t border-gray-200 transform -translate-y-1/2"></div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4">
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

          {/* Switch to Sign In */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/contact" className="text-purple-600 hover:underline">
              Sign In
            </a>
          </p>
        </form>
      </motion.div>

      <WhatsAppWidget />
    </div>
  );
}
