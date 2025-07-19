"use client"

import { usePathname } from 'next/navigation'
import Footer from './Footer'

// Pages where footer should NOT appear (blacklist)
const FOOTER_BLACKLIST = [
  '/privacy', // Example: exclude footer from contact page
  '/terms', // Add more paths here as needed
  // '/admin',
  // '/dashboard',
  // '/login',
]

export default function FooterWrapper() {
  const pathname = usePathname()
  
  // Check if current path is in the blacklist
  const shouldShowFooter = !FOOTER_BLACKLIST.includes(pathname)
  
  // Don't render footer if path is blacklisted
  if (!shouldShowFooter) {
    return null
  }
  
  // Render footer for all other pages
  return <Footer />
} 