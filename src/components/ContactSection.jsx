import React from "react";
import img from "../assets/lastPart.png";

const ContactSection = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#ddcfc6] px-4 sm:px-6 md:px-8 lg:px-10 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-4 sm:p-6 md:p-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">CONTACT US</h1>

        <p className="w-full sm:w-5/6 md:w-3/4 mb-6 sm:mb-8 text-base sm:text-lg px-2 sm:px-0">
          We are here to meet any business need and to promote your company
          online!
        </p>

        <div className="w-full sm:w-80 md:w-96 border-b-2 border-gray-300 my-3 sm:my-4"></div>

        <div className="my-4 sm:my-6 text-gray-700 space-y-2 sm:space-y-3">
          <p className="text-sm sm:text-base">
            <span className="font-semibold">Phone:</span> 1 (232) 252 55 22
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-semibold">Location:</span> 75 Street Sample,
            WI 63025
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-semibold">Mail:</span> template@sample.com
          </p>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8">Image from Freepik</p>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1 bg-[#ddcfc6] flex items-center justify-center min-h-64 sm:min-h-80 md:min-h-0">
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          <img
            src={img}
            alt="Contact visual"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;