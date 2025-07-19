"use client"

import HomePage from "../components/HomePage"
import FloatingContactButton from "../components/contact/FloatingContactButton"
import AutoBreadcrumb from "../components/common/AutoBreadcrumb"
import Navbar from "../components/common/Navbar.jsx"

// Main App Component
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Page Content - Only HomePage for root route */}
      <main className="transition-all duration-500 ease-in-out">
        <HomePage breadcrumb={<AutoBreadcrumb />} />
      </main>

      {/* Floating Contact Button */}
      <FloatingContactButton />

      {/* Footer */}
    </div>
  )
}
