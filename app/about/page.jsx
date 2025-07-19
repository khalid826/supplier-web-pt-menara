"use client"

import AboutPage from '../../components/AboutPage';
import FloatingContactButton from '../../components/contact/FloatingContactButton';
import AutoBreadcrumb from '../../components/common/AutoBreadcrumb';
import Navbar from '../../components/common/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Page Content */}
      <main className="transition-all duration-500 ease-in-out">
        <AboutPage breadcrumb={<AutoBreadcrumb />} />
      </main>

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
} 