"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import WhatsAppWidget from "@/components/WhatsApp/WhatApp";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export default function ProductDetail() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://student-alliance-api.code4bharat.com/api/products/${id}`);
        console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }
  }, [product]);

  if (loading)
    return <div className="text-center py-10 text-lg">Loading...</div>;
  if (!product)
    return (
      <div className="text-center py-10 text-red-500">Product not found.</div>
    );

  // Calculate prices
  const discountedPrice = product.price * (1 - (product.discount || 0) / 100);
  const totalPrice = discountedPrice * quantity;
  const totalSavings = (product.price - discountedPrice) * quantity;

  const handleAddToCart = async () => {
    if (!token) {
      toast.error("Please login first to add to cart.");
      router.replace("/contact");
      return;
    }
    try {
      const res = await axios.post(
        "https://student-alliance-api.code4bharat.com/api/cart/add",
        {
          customerId: user._id,
          productId: product._id,
          quantity,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Add to cart response:", res);
      if (res.status === 200) {
        toast.success("Product added to cart!");
        router.push("/mycart");
      } else {
        toast.error("Failed to add to cart.");
      }
    } catch (err) {
      toast.error("Error adding to cart.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div>
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={mainImage || product.image}
                alt={product.name}
                width={800}
                height={800}
                className="w-full h-auto object-cover transition duration-500 hover:scale-105"
              />
              {product.discount > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white font-bold px-3 py-1 rounded-full text-xs">
                  {product.discount}% OFF
                </div>
              )}
            </motion.div>
            {/* Additional Images (if any) */}
            {Array.isArray(product.additionalImages) &&
              product.additionalImages.filter(
                (img) => typeof img === "string" && img.trim() !== ""
              ).length > 0 && (
                <div className="flex gap-4 mt-4">
                  {product.additionalImages
                    .filter(
                      (img) => typeof img === "string" && img.trim() !== ""
                    )
                    .map((img, idx) => (
                      <Image
                        key={idx}
                        src={img}
                        alt={`${product.name} - ${idx + 1}`}
                        width={120}
                        height={120}
                        className={`rounded-lg border border-gray-200 object-cover cursor-pointer ${
                          mainImage === img ? "ring-2 ring-purple-500" : ""
                        }`}
                        onClick={() => setMainImage(img)}
                      />
                    ))}
                </div>
              )}
          </div>

          {/* Product Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400 text-lg">★★★★☆</div>
                <span className="text-sm text-gray-500">
                  (48 customer reviews)
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed border-l-4 border-purple-500 pl-4 py-2 bg-purple-50 rounded">
              {product.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {product.features &&
                product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
            </div>

            {/* Price Section */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold text-indigo-600">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
                {product.discount > 0 && (
                  <>
                    <span className="text-lg line-through text-gray-500">
                      ₹{(product.price * quantity).toLocaleString("en-IN")}
                    </span>
                    <span className="bg-green-100 text-green-800 font-medium px-2 py-1 rounded-full text-sm">
                      Save ₹{totalSavings.toLocaleString("en-IN")}
                    </span>
                  </>
                )}
              </div>
              <div className="mt-2 text-sm text-gray-500">
                {quantity} {quantity > 1 ? "items" : "item"} × ₹
                {discountedPrice.toLocaleString("en-IN")} each
              </div>
            </div>

            {/* Quantity & Buttons */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label htmlFor="quantity" className="text-gray-700 font-medium">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, e.target.value))}
                  className="w-20 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={"https://wa.me/9594402775"} target="_blank">
                  <motion.button
                    className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    disabled={product.stocks <= 0}
                  >
                    BUY NOW
                  </motion.button>
                </Link>
                {/* <Link href={"/mycart"}>
                  <motion.button
                    className="flex-1 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold py-3 px-6 rounded-lg shadow-sm transition duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    disabled={product.stocks <= 0}
                  >
                    ADD TO CART
                  </motion.button>
                </Link> */}
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>Need help? Call us at +91-9594402775</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <WhatsAppWidget />
    </div>
  );
}
