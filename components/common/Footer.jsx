"use client"

import React from "react";
import { MapPin } from "lucide-react";
import { ASSET_PATHS, handleImageError } from "../../lib/assets";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col items-start">
            <img 
              src="/logo-inverse.png" 
              alt="PT Menara Adhi Sitara Logo" 
              className="h-32 w-auto mb-4"
              onError={(e) => handleImageError(e, ASSET_PATHS.LOGO)}
            />
            <p className="text-gray-300 text-lg font-medium mb-8">Your Premier Partner for Electrical & Instrumentation Solutions</p>
          </div>
          <div className="flex flex-col items-start space-y-6">
            <div className="flex items-start space-x-3">
              <MapPin className="h-6 w-6 text-[#FFC402] mt-1 flex-shrink-0" />
              <div className="text-gray-300">
                <p className="font-medium text-base">Address</p>
                <p className="text-base leading-relaxed">
                  Jln RS Fatmawati, Blok A/18, RT 004/ RW 004,<br />
                  Cilandak Barat, Cilandak,<br />
                  Jakarta Selatan, 12430
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('openContactForm'));
              }}
              className="bg-[#FFC402] hover:bg-[#e6b002] text-[#0A0F17] font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-[#FFC402] to-transparent"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 PT Menara Adhi Sitara. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-[#FFC402] transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-[#FFC402] transition-colors duration-300 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 