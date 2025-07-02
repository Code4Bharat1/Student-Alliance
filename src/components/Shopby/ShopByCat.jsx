"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: 4, name: "IFPD Panel", image: "/shop/board.png", link: "/Prod" },
  { id: 5, name: "Camera", image: "/shop/camera.jpeg", link: "/shop1" },
  { id: 7, name: "OPS", image: "/shop/ops.png", link: "/shop1" },
  { id: 8, name: "3D Printers", image: "/images/printer.png", link:"/printer" },
  { id: 9, name: "Kits", image: "/images/K1.jpg", link: "/kits" },
];

const ShopByCat = () => {
  // Duplicate the categories for seamless looping
  const duplicatedCategories = [...categories, ...categories];
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          Shop By Category
        </h2>
        
        <div className="relative w-full overflow-hidden">
          {/* Marquee Container */}
          <div 
            className={`flex w-max whitespace-nowrap ${isHovering ? "" : "animate-marquee"}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {duplicatedCategories.map((category, index) => (
              <div 
                key={`${category.id}-${index}`} 
                className="inline-flex flex-col items-center mx-8 group transition-all duration-300 hover:scale-105"
              >
                <Link href={category.link}>
                  <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg border-4 border-white bg-white group-hover:border-purple-600 transition-all duration-300">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <p className="text-center text-black font-medium mt-3 text-lg">
                  {category.name}
                </p>
              </div>
            ))}
          </div>

          {/* Gradient Fade Effects */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ShopByCat;