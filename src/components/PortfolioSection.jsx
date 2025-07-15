import React from "react";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Website Design",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      category: "web",
    },
    {
      id: 2,
      title: "Mobile Application",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      category: "mobile",
    },
    {
      id: 3,
      title: "Corporate Design",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
      category: "corporate",
    },
    {
      id: 4,
      title: "Mobile Application",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      category: "mobile",
    },
    {
      id: 5,
      title: "Responsive Design",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      category: "responsive",
    },
    {
      id: 6,
      title: "Digital Product",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "digital",
    },
  ];

  return (
    <div className="min-h-screen bg-[#272c32] py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white">
            Portfolio
          </h1>
          <p className="text-white max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Quam adipisci ut diam sed quam elementum. Vestibulum lectus mauris
            ultrices eros in cursus turpis massa tincidunt. Pellentesque
            habitant morbi tristique senectus et netus.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-sm sm:rounded-xs shadow-md hover:shadow-xs transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="py-3 px-2 sm:py-4 sm:px-3">
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-[#272c32] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <div className="mx-auto w-10 sm:w-12 h-0.5 sm:h-1 bg-[#272c32] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;