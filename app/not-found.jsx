"use client"

import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      {/* 404 Content */}
      <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-[#0A0F17] opacity-10">404</h1>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0F17] mb-4">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <p className="text-base text-gray-500">
            Please check the URL or navigate back to our homepage.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[#FFC402] hover:bg-[#e6b002] text-[#0A0F17] font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <Home className="h-5 w-5 mr-2" />
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
} 