import React from "react";
import { motion } from "motion/react"
import bgImage from "../assets/bgOne.png";

const DigitalSection = () => {
  return (
    <div className="relative w-full h-screen">
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={bgImage}
          alt="Digital experiences background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-start pl-4 sm:pl-8 md:pl-12 lg:pl-16">
        <motion.div 
          className="max-w-xs sm:max-w-sm md:max-w-md bg-white text-black p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mx-4 sm:mx-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            Crafting digital experiences
          </motion.h1>

          <motion.p 
            className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-700"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          >
            Join the elite ranks of sustained value creators
          </motion.p>

          <motion.p 
            className="text-xs sm:text-sm mb-4 sm:mb-6 text-gray-500"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          >
            Image from Freepik
          </motion.p>

          <motion.button 
            className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded hover:bg-gray-800 transition-all duration-300 font-semibold tracking-wide uppercase text-sm sm:text-base w-full sm:w-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT US
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalSection;