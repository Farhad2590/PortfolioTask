import React from "react";
import imageOne from "../assets/bgFour.png"; // back tablet
import imageTwo from "../assets/picFive.png"; // front tablet

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#e8ddd4] flex relative items-center justify-center px-8">
      {/* White background block */}
      <div className="absolute w-4/5 h-8/12  left-0 top-72 ml-10 bg-white z-0 flex items-center shadow-md">
        <div className="w-1/4 pl-10 ">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We Create Websites
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-2">
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

      {/* Yellow background block */}
      <div className="absolute right-0 top-[0%] w-2/5 h-[700px] bg-yellow-500 z-10 mt-10 mr-10" />

      {/* Image layering section */}
      {/* <div className="absolute right-[10%] bottom-[55%] w-[320px] h-[450px] z-20">

        <img
          src={imageOne}
          alt="Tablet"
          className="absolute top-10 left-0 w-full shadow-xl"
        />

        <img
          src={imageTwo}
          alt="Tablet overlay"
          className="absolute top-0 left-6 w-full shadow-2xl"
        />
      </div> */}
      <div className="absolute right-[10%] top-[10%] w-[520px] h-[600px] z-20">
        {/* Back image (tablet) */}
        <img
          src={imageOne}
          alt="Back image"
          className="absolute top-16 right-12 w-full transform shadow-2xl"
        />

        {/* Front image (phone) */}
        <img
          src={imageTwo}
          alt="Front image"
          className="absolute top-0 left-12 w-full transform  shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
