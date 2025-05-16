'use client';
import { motion } from 'framer-motion';
import WhatsAppWidget from '../WhatsApp/WhatApp';

const GetinTouch = () => {
  return (
    <div className="bg-white px-4 py-8 md:px-8 lg:px-16" id="getintouch">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg rounded-xl p-4"
      >
        {/* Left - Contact Form */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Visit <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-xs text-gray-600 mb-6">
            Feel free to reach out—I'm always open to collaboration, questions, or just a friendly chat!
          </p>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name *"
              required
              className="w-full p-2 border border-gray-300 rounded-md text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full p-2 border border-gray-300 rounded-md text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone number *"
              required
              className="w-full p-2 border border-gray-300 text-black text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="w-full p-2 border border-gray-300 text-black text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>How did you find us?</option>
              <option>Google</option>
              <option>Social Media</option>
              <option>Referral</option>
            </select>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-all duration-300 text-sm"
            >
              SEND
            </button>
          </form>

          {/* Contact Details */}
          <div className="mt-6 text-xs text-gray-700 space-y-2">
            <div>
              📞 <a href="tel:+919022477293" className="text-blue-600 underline">+91 9022477293 / +91-9594402775</a>
            </div>
            <div>
              📧 <a href="mailto:sales@studentalliance.in" className="text-blue-600 underline">sales@studentalliance.in</a>
            </div>
            <div>
              📍 <a href="https://maps.google.com/?q=Student+Alliance+LLP" target="_blank" className="text-blue-600 underline">
                Office No. 1A & 2, Lower Ground Floor, Building No. 3 White House, New Buddha Colony, Kurla (west), Mumbai-400070, Maharashtra, India
              </a>
            </div>
          </div>
        </div>

        {/* Right - Google Map */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-[400px] rounded-lg overflow-hidden shadow-md"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30166.6275494296!2d72.876894!3d19.071279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c892197ad4a7%3A0x6f69acffd67753e2!2sStudent%20Alliance%20LLP!5e0!3m2!1sen!2sin!4v1745559611644!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "1rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.div>
      <WhatsAppWidget/>
    </div>
  );
};

export default GetinTouch;
