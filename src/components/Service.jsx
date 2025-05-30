import React from 'react';
import { motion } from 'framer-motion';


const Service = () => {
  const services = [
    {
      title: "3D Printers",
      description: "Unlock the power of precision and creativity with our expert 3D printer services. we bring your ideas to life!",
      buttonText: "See More",
      imgSrc: "/images/3DP2.jpg",
      link: "/printer",
    },
    {
      title: "IFPD Panel Services",
      description: "Discover precision and reliability with IFPD Panel Services — your trusted partner for custom-built electrical panels.",
      buttonText: "See More",
      imgSrc: "/images/65_inch.png",
      link: "/Prod",
    },
    {
      title: "Stem & Robotics",
      description: "Unlock young minds with our STEM & Robotics. interactive sessions in coding, robotics, AI, and more!",
      buttonText: "See More",
      imgSrc: "/images/k5.jpg",
      link: "/kits",
    },
  ];

  return (
    <div className="bg-white text-black py-12 text-center">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3 sm:w-fit px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white sm:w-fit shadow-gray-300 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
         <div className="p-4">
               <img
                src={service.imgSrc}
                alt={service.title}
                className="h-60 w-full object-center"
              />
               </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-all"
              >
                {service.buttonText}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
