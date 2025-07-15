import React from "react";
import bgImage from "../assets/bgOne.png";

const DigitalSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Digital experiences background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-start pl-4 sm:pl-8 md:pl-12 lg:pl-16">
        <div className="max-w-xs sm:max-w-sm md:max-w-md bg-white text-black p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mx-4 sm:mx-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
            Crafting digital experiences
          </h1>

          <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-700">
            Join the elite ranks of sustained value creators
          </p>

          <p className="text-xs sm:text-sm mb-4 sm:mb-6 text-gray-500">
            Image from Freepik
          </p>

          <button className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded hover:bg-gray-800 transition-all duration-300 font-semibold tracking-wide uppercase text-sm sm:text-base w-full sm:w-auto">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalSection;