"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center py-10 text-lg">Loading...</div>;
  if (!product)
    return <div className="text-center py-10 text-red-500">Product not found.</div>;

  return (
    <motion.div
      className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-lg mt-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Product Image */}
        <motion.div
          className="flex-1 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={350}
            className="rounded-xl object-contain border shadow-md"
          />
          {product.additionalImages && product.additionalImages.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {product.additionalImages.filter(Boolean).map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`Additional ${idx + 1}`}
                  width={80}
                  height={60}
                  className="rounded border hover:scale-105 transition-transform duration-200"
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Product Info */}
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="space-y-1 text-gray-700">
            <div>
              <span className="font-semibold">Category:</span> {product.category}
            </div>
            <div>
              <span className="font-semibold">In Stock:</span> {product.stocks}
            </div>
            <div>
              <span className="font-semibold">Quantity:</span> {product.quantity}
            </div>
            <div>
              <span className="font-semibold">Price:</span>{" "}
              <span className="text-blue-600 font-bold text-lg">
                ₹{product.price.toLocaleString()}
              </span>
              {product.discount > 0 && (
                <span className="ml-2 text-green-600 font-semibold">
                  ({product.discount}% OFF)
                </span>
              )}
            </div>
          </div>

          <a
            href={product.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-all"
            >
              BUY NOW
            </motion.button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
