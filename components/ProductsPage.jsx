import FadeInOnScroll from "./FadeInOnScroll";

export default function ProductsPage() {
  const categories = [
    {
      name: "Diesel Engine Spare Part",
      description: "High-quality spare parts for diesel engines from leading manufacturers",
      brands: [
        { name: "Clarke", logo: "/images/product-logo-clarke.png" },
        { name: "Cummins", logo: "/images/product-logo-cummins.png" },
      ],
    },
    {
      name: "Electrical Spare Part",
      description: "Premium electrical components and spare parts for industrial applications",
      brands: [
        { name: "Fluke", logo: "/images/product-logo-fluke.png" },
        { name: "Rittal", logo: "/images/product-logo-rittal.png" },
        { name: "Schneider", logo: "/images/product-logo-schneider.png" },
        { name: "SIKA", logo: "/images/product-logo-sika.jpg" },
      ],
    },
  ]

  return (
    <FadeInOnScroll variant="up">
      <div className="py-16 md:py-20 animate-fade-in min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A0F17] mb-4 md:mb-6">Our Products</h1>
            <p className="text-lg md:text-xl text-gray-600">Premium electrical and instrumentation solutions from leading brands</p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="text-center mb-8 md:mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0A0F17] mb-3 md:mb-4">{category.name}</h2>
                  <p className="text-gray-600 text-sm md:text-base">{category.description}</p>
                </div>

                <div className="overflow-x-auto">
                  <div className="flex space-x-4 md:space-x-6 lg:space-x-8 min-w-max pb-4">
                    {category.brands.map((brand, brandIndex) => (
                      <div
                        key={brandIndex}
                        className="bg-gray-50 rounded-xl p-4 md:p-6 hover:bg-[#FFC402]/10 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group min-w-[200px] md:min-w-[220px] lg:min-w-[240px] flex-shrink-0 min-h-[120px] md:min-h-[140px] flex flex-col justify-center"
                      >
                        <div className="flex-1 flex items-center justify-center mb-3 md:mb-4">
                          <img
                            src={brand.logo}
                            alt={brand.name}
                            className="w-full h-16 md:h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              e.target.src = "/placeholder-logo.png";
                              e.target.alt = `${brand.name} logo not available`;
                            }}
                          />
                        </div>
                        <p className="text-xs md:text-sm font-medium text-[#0A0F17] text-center group-hover:text-[#FFC402] transition-colors duration-300">
                          {brand.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  )
} 