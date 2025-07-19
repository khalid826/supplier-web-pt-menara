import type { Metadata } from 'next'
import './globals.css'
import Footer from '../components/common/Footer'
import FooterWrapper from '../components/common/FooterWrapper'

export const metadata: Metadata = {
  title: 'PT Menara Adhi Sitara',
  description: 'Your Premier Partner for Electrical & Instrumentation Solutions',
  generator: 'Next.js',
  icons: {
    icon: '/icon2.png',
    shortcut: '/icon2.png',
    apple: '/icon2.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Footer with blacklist */}
        <FooterWrapper />
      </body>
    </html>
  )
}
