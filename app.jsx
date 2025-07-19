"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, MapPin, Menu, X, Clock, Zap, Truck, Award, Users, ChevronRight, Home, ArrowUp } from "lucide-react"
import HomePage from "./components/HomePage"
import ProductsPage from "./components/ProductsPage"
import AboutPage from "./components/AboutPage"
import FloatingContactButton from "./components/contact/FloatingContactButton"
import ContactModal from "./components/ContactModal"

// Main App Component
function App() {
  const [currentPage, setCurrentPageState] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    
    // Listen for navigation events from HomePage
    const handleNavigateToProducts = () => {
      setCurrentPageState("products")
    }
    window.addEventListener("navigateToProducts", handleNavigateToProducts)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("navigateToProducts", handleNavigateToProducts)
    }
  }, [])

  const navigation = [
    { name: "Home", id: "home" },
    { name: "Products", id: "products" },
    { name: "About", id: "about" },
  ]

  const getPageTitle = () => {
    switch (currentPage) {
      case "home":
        return "Home"
      case "products":
        return "Products"
      case "about":
        return "About"
      default:
        return "Home"
    }
  }

  const isAtTop = scrollY < 24;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`sticky top-0 z-40 transition-all duration-500 flex flex-col items-center ${isAtTop ? "bg-white" : "bg-transparent"}`} style={{ minHeight: 0 }}>
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Desktop Navigation (md and up) */}
          <nav className={`hidden md:flex w-full justify-center items-center transition-all duration-500 ${isAtTop ? "mt-0" : "mt-4"}`}>
            <div className={`flex items-center mx-auto transition-all duration-500
              ${isAtTop
                ? "rounded-2xl bg-white px-4 py-4 max-w-2xl min-w-[220px]"
                : "rounded-full bg-white/90 shadow-2xl border border-gray-100 px-2 py-2 max-w-2xl min-w-[180px] backdrop-blur-md"}
              w-full sm:w-auto flex-wrap gap-2`}
            >
              {/* Logo at left end */}
              <div className={`flex-shrink-0 flex items-center ${isAtTop ? "mr-4 pl-0" : "mr-2 pl-2"} transition-all duration-500`}>
                <img 
                  src="/icon.png" 
                  alt="PT Menara Adhi Sitara Logo" 
                  className="h-12 w-12 mr-2 object-contain"
                />
                {/* <h1 className="text-lg sm:text-2xl font-bold text-[#0A0F17] hover:text-[#FFC402] transition-colors duration-300 text-left whitespace-nowrap">
                  PT Menara Adhi Sitara
                </h1> */}
              </div>
              {/* Nav buttons */}
              <div className={`flex flex-1 items-center space-x-1 sm:space-x-2 justify-center transition-all duration-500 flex-wrap`}>
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPageState(item.id)}
                    className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFC402]/40 focus:ring-offset-2
                      ${currentPage === item.id
                        ? "bg-[#FFC402] text-[#0A0F17] shadow"
                        : "text-[#0A0F17] hover:text-[#FFC402] hover:bg-gray-50"}
                    `}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </nav>
          {/* Mobile Navigation (below md) */}
          <nav className={`flex md:hidden w-full justify-center items-center transition-all duration-500 ${isAtTop ? "mt-0" : "mt-4"}`}>
            <div className={`flex items-center mx-auto transition-all duration-500
              ${isAtTop
                ? "rounded-2xl bg-white px-4 py-4 max-w-2xl min-w-[180px]"
                : "rounded-full bg-white/90 shadow-2xl border border-gray-100 px-2 py-2 max-w-2xl min-w-[140px] backdrop-blur-md"}
              w-full flex-nowrap gap-2`}
            >
              {/* Logo at left end */}
              <div className={`flex-shrink-0 flex items-center ${isAtTop ? "mr-2 pl-0" : "mr-2 pl-2"} transition-all duration-500`}>
                <img 
                  src="/icon.png" 
                  alt="PT Menara Adhi Sitara Logo" 
                  className="h-6 w-6 object-contain"
                />
              </div>
              {/* Hamburger */}
              <div className="flex flex-1 justify-end">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-[#0A0F17] hover:text-[#FFC402] hover:bg-gray-50 transition-all duration-300"
                  aria-label="Open navigation menu"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </nav>
        </div>
        {/* Mobile Dropdown */}
        <div className="relative w-full">
          {isMenuOpen && (
            <div className="md:hidden absolute left-1/2 z-50 top-full flex justify-center w-full -translate-x-1/2 transition-all duration-300">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 px-3 py-2 min-w-[180px] max-w-xs w-full flex flex-col items-stretch space-y-2 opacity-100 scale-100 pointer-events-auto transform origin-top animate-in slide-in-from-top-2 duration-300">
                {navigation.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPageState(item.id)
                      setIsMenuOpen(false)
                    }}
                    className={`w-full px-4 py-3 rounded-full text-base font-medium transition-all duration-200 text-center transform hover:scale-105
                      ${currentPage === item.id
                        ? "bg-[#FFC402] text-[#0A0F17] shadow-lg"
                        : "text-[#0A0F17] hover:text-[#FFC402] hover:bg-gray-50/80"}
                    `}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Breadcrumb */}
      {currentPage !== "home" && <Breadcrumb currentPage={getPageTitle()} />}

      {/* Page Content */}
      <main className="transition-all duration-500 ease-in-out">
        {currentPage === "home" && <HomePage scrollY={scrollY} />}
        {currentPage === "products" && <ProductsPage />}
        {currentPage === "about" && <AboutPage />}
      </main>

      {/* Floating Contact Button */}
      <FloatingContactButton />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/* Footer */}
      <footer className="bg-[#0A0F17] text-white">
        {/* First Section - Logo, Tagline, and Address */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Side - Logo and Tagline */}
            <div className="flex flex-col items-start">
              <img 
                src="/logo-inverse.png" 
                alt="PT Menara Adhi Sitara Logo" 
                className="h-32 w-auto mb-4"
              />
              <p className="text-gray-300 text-lg font-medium mb-8">
                Your Premier Partner for Electrical & Instrumentation Solutions
              </p>
            </div>
            
            {/* Right Side - Address and Contact Button */}
            <div className="flex flex-col items-start space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-[#FFC402] mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium text-white mb-2">Address:</p>
                  <p className="leading-relaxed">
                    Jln RS Fatmawati, Blok A/18, RT 004/ RW 004,<br />
                    Cilandak Barat, Cilandak,<br />
                    Jakarta Selatan, 12430
                  </p>
                </div>
              </div>
              
              {/* Contact Button - Always visible in footer */}
              <div className="w-full md:w-auto">
                <button
                  className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#FFC402] hover:bg-[#ffb300] text-[#0A0F17] font-semibold rounded-full shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFC402]/60 focus:ring-offset-2 focus:ring-offset-[#0A0F17] transform hover:scale-105"
                  aria-label="Contact Us"
                  onClick={() => {
                    // Trigger contact modal or floating contact
                    const event = new CustomEvent('openContactForm');
                    window.dispatchEvent(event);
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Minimalist Separator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#FFC402] to-transparent mt-px"></div>
        </div>

        {/* Second Section - Copyright */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-2">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 PT Menara Adhi Sitara. All rights reserved.</p>
          </div>
        </div>

        {/* Third Section - Scroll to Top Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 bg-[#FFC402] hover:bg-[#e6b002] text-[#0A0F17] font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFC402]/40 focus:ring-offset-2 focus:ring-offset-[#0A0F17]"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
              {/* <span>Back to Top</span> */}
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Breadcrumb Component
function Breadcrumb({ currentPage }) {
  return (
    <div className="bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center space-x-2 text-sm">
          <Home className="h-4 w-4 text-[#0A0F17]" />
          <span className="text-[#0A0F17]">Home</span>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-[#FFC402] font-medium">{currentPage}</span>
        </div>
      </div>
    </div>
  )
}

export default App
