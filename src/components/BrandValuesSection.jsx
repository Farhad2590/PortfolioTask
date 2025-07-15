import React from "react";
import pic1 from "../assets/picOne.png";
import pic2 from "../assets/picTwo.png";
import pic3 from "../assets/picThree.png";

const BrandValuesSection = () => {
  return (
    <div className="min-h-screen bg-[#dccec4] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 md:hidden">
          <div className="flex justify-center">
            <img
              src={pic2}
              alt="Woman writing at desk"
              className="w-full max-w-[450px]"
            />
          </div>
          
          <div className="flex justify-center">
            <img
              src={pic1}
              alt="Person working with laptop and coffee"
              className="w-full max-w-[450px]"
            />
          </div>
          
          <div className="flex justify-center">
            <img
              src={pic3}
              alt="Modern workspace with mockups"
              className="w-full max-w-[450px]"
            />
          </div>
          
          <div className="bg-black bg-opacity-60 flex items-center justify-center w-full max-w-[450px] mx-auto h-64 p-6">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Brand Values</h2>
              <p className="text-sm mb-6 max-w-xs mx-auto leading-relaxed">
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit nullam nunc justo sagittis suscipit ultrices.
              </p>
              <p className="text-xs mb-4 opacity-80">Images from Freepik</p>
              <button className="border border-white text-white px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="flex gap-8 items-center">
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex justify-end">
                <img
                  src={pic2}
                  alt="Woman writing at desk"
                  className="w-[450px]"
                />
              </div>

              <div className="">
                <img
                  src={pic1}
                  alt="Person working with laptop and coffee"
                  className=""
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="">
                <img
                  src={pic3}
                  alt="Modern workspace with mockups"
                  className=""
                />
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 flex items-center justify-center w-72 h-64">
              <div className="text-center text-white p-6">
                <h2 className="text-3xl font-bold mb-4">Brand Values</h2>
                <p className="text-sm mb-6 max-w-xs mx-auto leading-relaxed">
                  Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit nullam nunc justo sagittis suscipit ultrices.
                </p>
                <p className="text-xs mb-4 opacity-80">Images from Freepik</p>
                <button className="border border-white text-white px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-300">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandValuesSection;