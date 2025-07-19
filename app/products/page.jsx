"use client"

import ProductsPage from '../../components/ProductsPage';
import FloatingContactButton from '../../components/contact/FloatingContactButton';
import AutoBreadcrumb from '../../components/common/AutoBreadcrumb';
import Navbar from '../../components/common/Navbar.jsx';

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Page Content */}
      <main className="transition-all duration-500 ease-in-out">
        <ProductsPage breadcrumb={<AutoBreadcrumb />} />
      </main>

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
} 