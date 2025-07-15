import React from "react";
import bgImage from "../assets/bgTwo.png";

const MockupSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Full Background */}
      <img
        src={bgImage}
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-end py-8 px-4 sm:px-8 md:px-12 lg:pr-16">
        {/* Mobile Grid Layout */}
        <div className="w-full max-w-sm md:max-w-md">
          {/* Mobile: 2x2 Grid, Desktop: Vertical Stack */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2 sm:gap-3 md:gap-4">
            {/* First Row - 2 Cards */}
            <div className="bg-white/95 backdrop-blur-sm p-2 sm:p-3 md:p-6 rounded-sm shadow-lg">
              <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-800 mb-1 sm:mb-2 md:mb-3">
                Branding strategy
              </h3>
              <p className="text-gray-600 text-xs sm:text-xs md:text-sm leading-relaxed mb-1 sm:mb-2 md:mb-3">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </p>
              <p className="text-xs text-gray-400 hidden sm:block">
                Image from Freepik
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-2 sm:p-3 md:p-6 rounded-sm shadow-lg">
              <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-800 mb-1 sm:mb-2 md:mb-3">
                Designing logos
              </h3>
              <p className="text-gray-600 text-xs sm:text-xs md:text-sm leading-relaxed">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </p>
            </div>

            {/* Second Row - 1 Centered Card */}
            <div className="col-span-2 md:col-span-1">
              <div className="bg-white/95 backdrop-blur-sm p-2 sm:p-3 md:p-6 rounded-sm shadow-lg max-w-xs mx-auto md:max-w-none">
                <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-800 mb-1 sm:mb-2 md:mb-3">
                  Brand identity
                </h3>
                <p className="text-gray-600 text-xs sm:text-xs md:text-sm leading-relaxed">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupSection;
