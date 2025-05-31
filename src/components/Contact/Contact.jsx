"use client";

import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaInstagram } from "react-icons/fa";
import WhatsAppWidget from "../WhatsApp/WhatApp";
import { useState } from "react";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/redux/slices/authSlice";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const hideAuthNav = ["/contact", "/sign_up"].includes(pathname);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/customers/login",
        {
          email: form.email,
          password: form.password,
        }
      );
      // Assuming your API returns { token, customer }
      dispatch(
        loginSuccess({
          token: res.data.token,
          user: res.data.customer,
        })
      );
      localStorage.setItem("userToken", res.data.token);
      localStorage.setItem("userInfo", JSON.stringify(res.data.customer));
      setMessage("Login successful!");
      router.push("/");
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
    setLoading(false);
  };

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

        <form className="space-y-4" onSubmit={handleSubmit}>
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
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
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
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </motion.button>
          {message && (
            <div className="text-center text-sm mt-2 text-red-500">
              {message}
            </div>
          )}

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
      <WhatsAppWidget />

      {/* Cart + Sign In/Profile (Desktop Only) */}
      {!hideAuthNav && (
        <div className="hidden md:flex items-center space-x-6">
          {/* ...your existing code for cart, sign in, and profile dropdown... */}
        </div>
      )}
    </div>
  );
}
