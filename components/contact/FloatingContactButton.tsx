"use client"

import React, { useState, useEffect } from "react";
import ContactChatPopup from "./ContactChatPopup";

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if footer is visible in viewport
        const isVisible = footerRect.top < windowHeight;
        setIsFooterVisible(isVisible);
      }
    };

    const handleOpenContactForm = () => {
      setOpen(true);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('openContactForm', handleOpenContactForm);
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openContactForm', handleOpenContactForm);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Contact Us Button - Floating when footer not visible */}
      {!isFooterVisible && (
        <button
          className="fixed bottom-8 right-8 z-50 w-auto md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#FFC402] hover:bg-[#ffb300] text-[#0A0F17] font-semibold rounded-full shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFC402]/60 focus:ring-offset-2 focus:ring-offset-[#0A0F17] transform hover:scale-105"
          aria-label="Contact Us"
          onClick={() => setOpen(true)}
        >
          Contact Us
        </button>
      )}

      {/* Scroll to Top Button - Floating when footer is visible */}
      {isFooterVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#FFC402] hover:bg-[#e6b002] text-[#0A0F17] p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Chat Popup */}
      {open && <ContactChatPopup onClose={() => setOpen(false)} />}
    </>
  );
} 