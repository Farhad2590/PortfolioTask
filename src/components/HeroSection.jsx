import React from "react";
import imageOne from "../assets/bgFour.png"; 
import imageTwo from "../assets/picFive.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#e8ddd4] flex relative items-center justify-center px-4 sm:px-8 overflow-x-hidden">
      <div className="absolute right-0 top-0 w-full h-[400px] sm:h-[500px] md:w-2/5 md:h-[700px] bg-yellow-500 z-10 md:mt-10 md:mr-10" />

      <div className="absolute right-0 top-[10%] w-[320px] h-[400px] sm:w-[400px] sm:h-[500px] md:w-[520px] md:h-[600px] z-20 md:right-[10%] md:top-[20%]">
        <img
          src={imageOne}
          alt="Back image"
          className="absolute top-8 right-4 sm:right-12 md:right-24 w-full transform shadow-2xl"
        />

        <img
          src={imageTwo}
          alt="Front image"
          className="absolute -top-4 left-0 sm:left-4 md:-top-10 w-full transform shadow-2xl"
        />
      </div>

      <div className="absolute w-full md:w-4/5 h-auto md:h-8/12 left-0 top-[450px] sm:top-[550px] md:top-96 md:ml-24 bg-white z-0 flex items-center shadow-md mt-8 md:mt-0 px-4 py-8 md:px-0 md:py-0">
        <div className="w-full md:w-2/5 pl-4 sm:pl-8 md:pl-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            We Create Websites
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt.
          </p>
          <p className="text-xs text-gray-400 mb-6">
            Image from{" "}
            <a href="#" className="underline">
              Freepik
            </a>
          </p>
          <button className="bg-black text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-gray-800 transition">
            VIEW PORTFOLIO
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;