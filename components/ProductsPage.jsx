"use client"

import React from "react";
import { getProductCategories } from "../lib/data";
import { ASSET_PATHS, handleImageError } from "../lib/assets";
import FadeInOnScroll from "./common/FadeInOnScroll";

export default function ProductsPage({ breadcrumb }) {
  const categories = getProductCategories();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <FadeInOnScroll variant="up">
        <section className="bg-gradient-to-br from-[#0A0F17] via-[#1a1f2e] to-[#0A0F17] text-white relative overflow-hidden w-full px-0 min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F17]/90 to-transparent"></div>
          <div className="w-full py-32 relative z-10 flex justify-center min-h-screen items-center">
            <div className="text-center max-w-5xl w-full px-4 sm:px-6 lg:px-8 mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-10 animate-fade-in-up">Our Products</h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-fade-in-up-delay">
                Discover our comprehensive range of electrical and instrumentation solutions
              </p>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Breadcrumb below hero section */}
      {breadcrumb}

      {/* Products Grid Section */}
      <FadeInOnScroll variant="fade">
        <section className="relative bg-gray-50 overflow-hidden w-full px-0 py-16 md:py-20">
          <div className="w-full flex justify-center items-center">
            <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 mx-auto">
              {/* <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A0F17] mb-4 md:mb-6">Our Products</h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6">Premium electrical and instrumentation solutions from leading brands</p>
                <div className="mx-auto w-12 h-0.5 bg-[#FFC402] rounded-full mb-4" />
              </div> */}
              
              <div className="space-y-12 md:space-y-16">
                {categories && categories.length > 0 ? (
                  categories.map((category) => (
                    <div
                      key={category.id}
                      className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition-all duration-300"
                    >
                      <div className="text-center mb-8 md:mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0A0F17] mb-3 md:mb-4">{category.name}</h3>
                        <p className="text-gray-600 text-sm md:text-base">{category.description}</p>
                      </div>

                      <div className="overflow-x-auto">
                        <div className="flex space-x-4 md:space-x-6 lg:space-x-8 min-w-max pb-4">
                          {category.products && category.products.map((product) => (
                            <div
                              key={product.id}
                              className="bg-gray-50 rounded-xl p-4 md:p-6 hover:bg-[#FFC402]/10 hover:shadow-lg transition-all duration-300 transform hover:scale-102 group min-w-[200px] md:min-w-[220px] lg:min-w-[240px] flex-shrink-0 min-h-[120px] md:min-h-[140px] flex flex-col justify-center"
                            >
                              <div className="flex-1 flex items-center justify-center mb-3 md:mb-4">
                                <img
                                  src={product.logo}
                                  alt={`${product.name} logo`}
                                  className="w-full h-16 md:h-20 object-contain group-hover:scale-105 transition-transform duration-300"
                                  onError={(e) => handleImageError(e, ASSET_PATHS.PLACEHOLDER_LOGO)}
                                />
                              </div>
                              <p className="text-xs md:text-sm font-bold text-[#0A0F17] text-center group-hover:text-[#FFC402] transition-colors duration-300">
                                {product.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-500 text-lg">No product categories found</p>
                    <p className="text-gray-400 text-sm">Categories count: {categories ? categories.length : 'undefined'}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
    </div>
  );
} 