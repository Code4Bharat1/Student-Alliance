"use client";
import { useEffect } from "react";
import Link from "next/link";
import React, { useState } from "react";

export default function MyCart() {
  const [cartItems, setCartItems] = useState([
    //Add Something 😉
  ]);
useEffect(() => {
    // Load cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const shippingFee = 199; // Shipping fee in INR

  
  const handleQuantityChange = (id, amount) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart
  };

 
 const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart
  };
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="p-4 text-black md:p-8 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        <h1 className="text-2xl font-bold px-6 py-4 bg-orange-500 text-white">
          Your Shopping Cart 🛒
        </h1>

        <div className="p-4 md:p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4 animate-bounce">😕</div>
              <h2 className="text-xl font-semibold">Your cart is empty</h2>
              <p className="text-gray-500 mt-2">
                Let's find something for your pet!
              </p>
              <Link href={"/shop1"}>
                <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors hover:scale-105 transform transition-transform duration-300">
                  Continue Shopping
                </button>
              </Link>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center justify-between p-4 mb-4 border-b hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  <div className="flex items-center w-full md:w-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h2 className="font-bold text-lg">{item.name}</h2>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                      <div className="flex items-center mt-1">
                        <span className="text-orange-500 font-bold">
                          {formatCurrency(item.price)}
                        </span>
                        {item.originalPrice && (
                          <span className="line-through text-gray-400 ml-2 text-sm">
                            {formatCurrency(item.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0">
                    <div className="flex items-center mr-6 md:mr-8">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="px-3 py-1 bg-gray-200 rounded-l-full hover:bg-gray-300 transition-colors active:scale-95"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-t border-b bg-gray-50">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="px-3 py-1 bg-gray-200 rounded-r-full hover:bg-gray-300 transition-colors active:scale-95"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center">
                      <span className="font-bold mr-4">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="px-6 py-4 bg-gray-50 border-t">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping Fees</span>
                <span className="font-medium">
                  {formatCurrency(shippingFee)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Coupon / Discount</span>
                <button className="text-blue-500 hover:text-blue-600 underline transition-colors">
                  Apply coupon code
                </button>
              </div>
              <div className="border-t pt-3 mt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-orange-500">
                    {formatCurrency(subtotal + shippingFee)}
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 active:scale-95">
              Proceed to Checkout (
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)
            </button>

            <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Delivery expected in 2-4 business days
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
