"use client"

import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Mail, MessageCircle } from "lucide-react";

// EmailJS config with specific IDs
const EMAILJS_SERVICE_ID = "service_qh8kkn8";
const EMAILJS_TEMPLATE_ID = "template_evqpv9c";
const EMAILJS_USER_ID = "VAG2jxLJf1oqUysL4";

const WHATSAPP_NUMBER = "6282211259687"; // Replace with your WhatsApp number
const EMAIL_ADDRESS = "sitara.mail@menarasolusi.com"; // Replace with your email address

interface ContactChatPopupProps {
  onClose?: () => void;
}

export default function ContactChatPopup({ onClose }: ContactChatPopupProps) {
  const [stage, setStage] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [closing, setClosing] = useState(false);
  const [animatingStage, setAnimatingStage] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // WhatsApp redirect
  function handleWhatsApp() {
    const url = `https://wa.me/${WHATSAPP_NUMBER}`;
    window.open(url, "_blank");
    handleClose();
  }

  // Email form handlers
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_USER_ID
      );
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  // Animate stage transitions
  function goToStage(newStage: 1 | 2) {
    setAnimatingStage(true);
    setTimeout(() => {
      setStage(newStage);
      setAnimatingStage(false);
    }, 250);
  }

  // Animate close
  function handleClose() {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      if (onClose) onClose();
    }, 350);
  }

  // Click outside to close
  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity duration-300 ${closing ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleOverlayClick}
        aria-label="Close contact popup"
      />
      {/* Popup */}
      <div className={`fixed z-50 bottom-24 right-8 flex flex-col items-end w-auto contact-popup-container`}
        style={{ pointerEvents: closing ? 'none' : 'auto' }}
      >
        <div
          ref={popupRef}
          className={`relative shadow-xl rounded-2xl px-0 py-0 transition-all duration-350 bg-white flex flex-col contact-popup
            ${stage === 2 ? "min-h-[320px] w-96" : "min-h-[120px] w-64"}
            ${closing || animatingStage ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}
            animate-fade-in-up
          `}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-3 rounded-t-2xl contact-popup-header">
            <span className="font-bold text-lg contact-popup-title">
              {stage === 2 ? 'Email Us' : 'Contact Us'}
            </span>
            {onClose && (
              <button
                className="text-[#0A0F17] hover:text-black text-xl font-bold focus:outline-none ml-2"
                onClick={handleClose}
                aria-label="Close"
                type="button"
              >
                ×
              </button>
            )}
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col px-6 py-4">
            {stage === 1 && !animatingStage && (
              <div className="flex flex-col items-center justify-center flex-1 gap-3 pt-2 pb-1 transition-all duration-300">
                <div className="font-semibold text-[#0A0F17] mb-2">Contact us via:</div>
                <button
                  className="w-full py-2 mb-2 rounded-lg font-bold shadow transition-all bg-[#25D366] hover:bg-[#1ebe57] text-white flex items-center justify-center gap-2 border-0"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  WhatsApp
                </button>
                <button
                  className="w-full py-2 rounded-lg font-bold shadow transition-all bg-[#FFC402] hover:brightness-95 text-black flex items-center justify-center gap-2 border-0"
                  onClick={() => goToStage(2)}
                >
                  <Mail className="w-5 h-5 text-black" />
                  Email
                </button>
              </div>
            )}
            {stage === 2 && !success && !animatingStage && (
              <form className="flex flex-col gap-4 mt-4 transition-all duration-300" onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFC402] focus:border-transparent transition-all duration-300"
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFC402] focus:border-transparent transition-all duration-300"
                  value={form.email}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFC402] focus:border-transparent transition-all duration-300 resize-none"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                />
                {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-bold shadow transition-all bg-[#FFC402] hover:bg-[#e6b002] text-[#0A0F17] disabled:opacity-60 mt-2"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Email"}
                </button>
                <button
                  type="button"
                  className="w-full py-2 rounded-lg bg-gray-100 text-gray-600 font-medium mt-2 hover:bg-gray-200 transition-colors duration-300"
                  onClick={() => goToStage(1)}
                  disabled={loading}
                >
                  Back
                </button>
              </form>
            )}
            {stage === 2 && success && !animatingStage && (
              <div className="flex flex-col items-center justify-center h-full gap-3 transition-all duration-300">
                <div className="text-green-600 font-bold text-lg">Email sent!</div>
                <button
                  className="w-full py-2 rounded-lg bg-[#FFC402] hover:bg-[#e6b002] text-[#0A0F17] font-bold shadow transition-all"
                  onClick={() => { goToStage(1); setSuccess(false); setError(null); handleClose(); }}
                >
                  Send another
                </button>
              </div>
            )}
          </div>
          {/* Contact Info Section */}
          <div className="px-6 pb-4 pt-2 border-t border-gray-100 text-xs text-gray-500 flex flex-col gap-1">
            <div>
              <span className="font-semibold text-[#0A0F17]">WhatsApp: </span>
              <span className="text-[#0A0F17]">+{WHATSAPP_NUMBER} (Alit)</span>
            </div>
            <div><span className="font-semibold text-[#0A0F17]">Email:</span> <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:underline text-[#0A0F17]">{EMAIL_ADDRESS}</a></div>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * EmailJS Configuration:
 * Service ID: service_qh8kkn8
 * Template ID: template_evqpv9c  
 * User ID: VAG2jxLJf1oqUysL4
 * 
 * The contact form is now fully configured with EmailJS integration.
 * Users can send emails through the floating contact button.
 */ 