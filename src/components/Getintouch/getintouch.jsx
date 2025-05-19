'use client';
import { motion } from 'framer-motion';
import WhatsAppWidget from '../WhatsApp/WhatApp';
import { useState } from 'react';

const GetinTouch = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = {
        access_key: "b7567a52-2cc8-4c24-ae1b-c62115053fa8",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
        phone: e.target.phone?.value, // optional field
        source: e.target.source?.value // optional field
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ success: true, message: "Message sent successfully!" });
        e.target.reset(); // Reset the form on success
      } else {
        setSubmitStatus({ success: false, message: result.message || "Failed to send message" });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({ success: false, message: "Network error. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  }

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

          <form className="space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name *"
              required
              className="w-full p-2 border border-gray-300 rounded-md text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className="w-full p-2 border border-gray-300 rounded-md text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              className="w-full p-2 border border-gray-300 text-black text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select 
              name="source"
              className="w-full p-2 border border-gray-300 text-black text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">How did you find us?</option>
              <option value="Google">Google</option>
              <option value="Social Media">Social Media</option>
              <option value="Referral">Referral</option>
            </select>
            <textarea
              name="message"
              placeholder="Message *"
              required
              rows="4"
              className="w-full p-2 border border-gray-300 text-black text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-all duration-300 text-sm ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'SENDING...' : 'SEND'}
            </button>

            {submitStatus && (
              <div className={`text-sm p-2 rounded-md ${
                submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}
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
              📍 <a href="https://maps.google.com/?q=Student+Alliance+LLP" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
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