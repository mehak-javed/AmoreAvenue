"use client";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // integrate with EmailJS or backend later
  };

  const primaryColor = "#482008"; // Deep brown
  const accentColor = "#d4a574"; // Warm beige

  return (
    <section
      className="flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 py-16 min-h-screen relative overflow-hidden"
     
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 opacity-20 bg-linear-to-br from-[#d4a574]/30 via-transparent to-[#482008]" />

      {/* Title */}
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 text-center text-[#482008] drop-shadow-lg">
        Get In Touch
      </h2>

      {/* Form container */}
      <div className="relative w-full max-w-2xl backdrop-blur-md bg-white/10 rounded-2xl shadow-2xl p-8 sm:p-10 border border-[#d4a574]/30 text-white">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold mb-2 text-[#d4a574]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#d4a574]/50 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a574] transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-2 text-[#d4a574]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#d4a574]/50 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a574] transition-all"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold mb-2 text-[#d4a574]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#d4a574]/50 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a574] transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2 text-[#d4a574]"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#d4a574]/50 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a574] transition-all"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="relative bg-[#d4a574] text-white font-semibold text-lg px-10 py-3 rounded-full shadow-lg hover:bg-[#c38e4a] hover:scale-105 transform transition-all duration-300"
            >
              Send Message
              <span className="absolute inset-0 rounded-full bg-[#d4a574]/30 blur-lg opacity-40 group-hover:opacity-60 transition"></span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
