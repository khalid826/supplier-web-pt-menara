"use client"

import React from "react";
import { useRouter } from "next/navigation";
import FadeInOnScroll from "./common/FadeInOnScroll";
import ServiceItem from "./features/home/ServiceItem";
import ClientMarquee from "./clients/ClientMarquee";
import { Clock, Zap, Truck, Award } from "lucide-react";

export default function HomePage({ breadcrumb }) {
  const router = useRouter();

  const handleExploreProducts = () => {
    router.push('/products');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <FadeInOnScroll variant="up">
        <section className="bg-gradient-to-br from-[#0A0F17] via-[#1a1f2e] to-[#0A0F17] text-white relative overflow-hidden w-full px-0 min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F17]/90 to-transparent"></div>
          <div className="w-full py-32 relative z-10 flex justify-center min-h-screen items-center">
            <div className="text-center max-w-5xl w-full px-4 sm:px-6 lg:px-8 mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-10 animate-fade-in-up">PT Menara Adhi Sitara</h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-fade-in-up-delay">
                Your Premier Partner for Electrical & Instrumentation Solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up-delay-2">
                <button
                  onClick={handleExploreProducts}
                  className="bg-[#FFC402] hover:bg-[#e6b002] text-[#0A0F17] font-semibold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Explore Products
                </button>
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Breadcrumb below hero section */}
      {breadcrumb}

      {/* Our Clients Section */}
      <FadeInOnScroll variant="fade">
        <section className="relative bg-gray-50 overflow-hidden w-full px-0 min-h-screen md:min-h-screen flex items-center py-16 md:py-0">
          <div className="w-full flex justify-center items-center">
            <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 mx-auto">
              <div className="text-center mb-8 md:mb-16 animate-fade-in-up">
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#0A0F17] mb-4 tracking-tight">Our Clients</h2>
                <p className="text-base md:text-lg text-gray-600 mb-6">Serving industry across various sectors</p>
                <div className="mx-auto w-12 h-0.5 bg-[#0A0F17] rounded-full mb-4" />
              </div>
              <div className="bg-white/80 rounded-3xl p-8 md:p-16 lg:p-20 backdrop-blur-md">
                <ClientMarquee />
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Service Highlights - Why Choose Us */}
      <FadeInOnScroll variant="fade">
        <section className="relative bg-white overflow-hidden w-full px-0 min-h-screen md:min-h-screen flex items-center py-16 md:py-0">
          <div className="w-full flex justify-center items-center">
            <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 mx-auto">
              <div className="text-center mb-8 md:mb-16 animate-fade-in-up">
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#0A0F17] mb-4 tracking-tight">Why Choose Us</h2>
                <p className="text-base md:text-lg text-gray-600 mb-6">Comprehensive solutions backed by excellence</p>
                <div className="mx-auto w-12 h-0.5 bg-[#0A0F17] rounded-full mb-4" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mt-8 justify-items-center">
                <ServiceItem
                  icon={<Clock className="h-8 w-8 md:h-10 md:w-10 text-[#FFC402]" />}
                  title="Available 24/7"
                  description="Round-the-clock support and emergency services to keep your operations running smoothly."
                  className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg p-6 md:p-8 hover:scale-110 hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:scale-110"
                />
                <ServiceItem
                  icon={<Zap className="h-8 w-8 md:h-10 md:w-10 text-[#FFC402]" />}
                  title="Fast Response"
                  description="Quick turnaround times and rapid deployment of solutions to meet urgent requirements."
                  className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg p-6 md:p-8 hover:scale-110 hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:scale-110"
                />
                <ServiceItem
                  icon={<Truck className="h-8 w-8 md:h-10 md:w-10 text-[#FFC402]" />}
                  title="Nationwide Delivery"
                  description="Comprehensive logistics network ensuring timely delivery across the country."
                  className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg p-6 md:p-8 hover:scale-110 hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:scale-110"
                />
                <ServiceItem
                  icon={<Award className="h-8 w-8 md:h-10 md:w-10 text-[#FFC402]" />}
                  title="Certified Products"
                  description="All products meet international standards and come with proper certifications."
                  className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg p-6 md:p-8 hover:scale-110 hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
    </div>
  );
} 