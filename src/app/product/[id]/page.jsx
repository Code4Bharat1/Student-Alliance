"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";

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

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!product)
    return <div className="text-center py-10">Product not found.</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow mt-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 flex flex-col items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="object-contain mb-4 rounded"
          />
          {product.additionalImages && product.additionalImages.length > 0 && (
            <div className="flex gap-2 mt-2">
              {product.additionalImages.filter(Boolean).map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`Additional ${idx + 1}`}
                  width={80}
                  height={60}
                  className="object-contain rounded border"
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="mb-4 text-gray-700">{product.description}</p>
          <div className="mb-2">
            <span className="font-semibold">Category:</span> {product.category}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Price:</span>{" "}
            <span className="text-blue-600 font-bold">
              ₹{product.price.toLocaleString()}
            </span>
            {product.discount > 0 && (
              <span className="ml-2 text-green-600 font-semibold">
                ({product.discount}% OFF)
              </span>
            )}
          </div>
          <div className="mb-2">
            <span className="font-semibold">In Stock:</span> {product.stocks}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Quantity:</span> {product.quantity}
          </div>
          <a
            href={product.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
              BUY NOW
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
