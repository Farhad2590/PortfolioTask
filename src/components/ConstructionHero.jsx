import React from "react";
import bgImage from "../assets/bg.png";

export default function ConstructionHero() {
  return (
    <div className="relative w-full h-screen">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Construction background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay - Responsive Positioning */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end px-4 sm:px-8 md:px-12 lg:pr-16">
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-white bg-black bg-opacity-60 sm:bg-opacity-50 lg:bg-transparent p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
            Construction and renovation projects
          </h1>

          <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8 leading-relaxed opacity-90">
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            nullam nunc justo sagittis suscipit ullricies. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>

          <p className="text-xs sm:text-sm mb-4 sm:mb-6 lg:mb-8 opacity-75">Image from Freepik</p>

          <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-2 lg:px-8 lg:py-3 rounded hover:bg-white hover:text-black transition-all duration-300 font-semibold tracking-wide text-sm sm:text-base">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
}

