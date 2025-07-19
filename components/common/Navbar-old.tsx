"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ASSET_PATHS, handleImageError } from "../../lib/assets"

interface NavItem {
  name: string
  id: string
  href: string
}

interface NavbarProps {
  navigation?: NavItem[]
}

export default function Navbar({ navigation = [
  { name: "Home", id: "home", href: "/" },
  { name: "Products", id: "products", href: "/products" },
  { name: "About", id: "about", href: "/about" },
] }: NavbarProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  const isAtTop = scrollY < 24;

  return (
    <header className={`sticky top-0 z-40 transition-all duration-500 flex flex-col items-center ${isAtTop ? "bg-white" : "bg-transparent"}`} style={{ minHeight: 0 }}>
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Desktop Navigation (md and up) */}
        <nav className={`hidden md:flex w-full justify-center items-center transition-all duration-500 ${isAtTop ? "mt-0" : "mt-4"}`}>
          <div className={`flex items-center mx-auto transition-all duration-500
            ${isAtTop
              ? "rounded-2xl bg-white px-8 py-4 max-w-2xl min-w-[220px]"
              : "rounded-full bg-white/90 shadow-2xl border border-gray-100 px-6 py-2 max-w-2xl min-w-[180px] backdrop-blur-md"}
            w-full sm:w-auto flex-wrap gap-2`}
          >
            {/* Logo at left end */}
            <div className={`flex-shrink-0 flex items-center ${isAtTop ? "mr-4 pl-0" : "mr-2 pl-2"} transition-all duration-500`}>
              <Link href="/">
                <img 
                  src="/icon.png" 
                  alt="PT Menara Adhi Sitara Logo" 
                  className="h-12 w-12 mr-2 object-contain"
                  onError={(e) => handleImageError(e, ASSET_PATHS.LOGO)}
                />
              </Link>
            </div>
            {/* Nav buttons */}
            <div className={`flex flex-1 items-center space-x-1 sm:space-x-2 justify-center transition-all duration-500 flex-wrap`}>
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFC402]/40 focus:ring-offset-2
                    ${pathname === item.href
                      ? "bg-[#FFC402] text-[#0A0F17] shadow"
                      : "text-[#0A0F17] hover:text-[#FFC402] hover:bg-gray-50"}
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        {/* Mobile Navigation (below md) */}
        <nav className={`flex md:hidden w-full justify-center items-center transition-all duration-500 ${isAtTop ? "mt-0" : "mt-4"}`}>
          <div className={`flex items-center mx-auto transition-all duration-500
            ${isAtTop
              ? "rounded-2xl bg-white px-6 py-4 max-w-2xl min-w-[180px]"
              : "rounded-full bg-white/90 shadow-2xl border border-gray-100 px-4 py-2 max-w-2xl min-w-[140px] backdrop-blur-md"}
            w-full flex-nowrap gap-2`}
          >
            {/* Logo at left end */}
            <div className={`flex-shrink-0 flex items-center ${isAtTop ? "mr-2 pl-0" : "mr-2 pl-2"} transition-all duration-500`}>
              <Link href="/">
                <img 
                  src="/icon.png" 
                  alt="PT Menara Adhi Sitara Logo" 
                  className="h-6 w-6 object-contain"
                  onError={(e) => handleImageError(e, ASSET_PATHS.LOGO)}
                />
              </Link>
            </div>
            {/* Hamburger */}
            <div className="flex flex-1 justify-end">
              <button
                ref={buttonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 text-[#0A0F17] hover:text-[#FFC402] hover:bg-gray-50 transition-all duration-300"
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
          <div 
            ref={dropdownRef}
            className="md:hidden absolute left-1/2 z-50 top-full flex justify-center w-full -translate-x-1/2 transition-all duration-300"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 px-3 py-2 min-w-[180px] max-w-xs w-full flex flex-col items-stretch space-y-2 opacity-100 scale-100 pointer-events-auto transform origin-top animate-in slide-in-from-top-2 duration-300">
              {navigation.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full px-4 py-3 rounded-full text-base font-medium transition-all duration-200 text-center transform hover:scale-105
                    ${pathname === item.href
                      ? "bg-[#FFC402] text-[#0A0F17] shadow-lg"
                      : "text-[#0A0F17] hover:text-[#FFC402] hover:bg-gray-50/80"}
                  `}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 