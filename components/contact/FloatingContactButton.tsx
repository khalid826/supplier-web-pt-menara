/**
 * FloatingContactButton.tsx
 *
 * Floating button that opens a slide-over contact form modal with WhatsApp and Email options.
 * Used in: All pages (typically in layout or root component).
 * Data source: /data/contact.json
 */
'use client';
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

      {/* Chat Popup */}
      {open && <ContactChatPopup onClose={() => setOpen(false)} />}
    </>
  );
} 