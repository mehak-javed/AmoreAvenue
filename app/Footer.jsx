import Image from "next/image";
import React from "react";
import amorelogo from "@/public/amorelogo.png"; // adjust the path if needed

export default function Footer() {
  return (
    <footer className="bg-[#482008] text-white py-10 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-[#d4a574]/30 pb-10">
        
        {/* Logo + Description */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
          <Image
            src={amorelogo}
            alt="Amore Avenue Logo"
            width={150}
            height={150}
            className="object-contain"
          />
          <p className="text-[#d4a574] font-medium text-lg tracking-wide">
            Amore Avenue
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Bringing people together through the love of food.  
            Every dish, every flavor — made with passion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#d4a574] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#d4a574] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#d4a574] transition">Menu</a></li>
            <li><a href="#" className="hover:text-[#d4a574] transition">About</a></li>
            <li><a href="#" className="hover:text-[#d4a574] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#d4a574] mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📍 123 Amore Street, Food City</li>
            <li>📞 +1 (234) 567-8901</li>
            <li>✉️ info@amoreavenue.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-[#d4a574] mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#d4a574] transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-[#d4a574] transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-[#d4a574] transition"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()} Amore Avenue. All Rights Reserved.
      </div>
    </footer>
  );
}
