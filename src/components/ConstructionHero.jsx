import React from "react";
import { motion } from "motion/react"
import bgImage from "../assets/bg.png";

  const ConstructionHero = () => {
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
          alt="Construction background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center lg:justify-end px-4 sm:px-8 md:px-12 lg:pr-16">
        <motion.div 
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-white  p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            Construction and renovation projects
          </motion.h1>

          <motion.p 
            className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8 leading-relaxed opacity-90"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.9 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          >
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            nullam nunc justo sagittis suscipit ullricies. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </motion.p>

          <motion.p 
            className="text-xs sm:text-sm mb-4 sm:mb-6 lg:mb-8 opacity-75"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.75 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          >
            Image from Freepik
          </motion.p>

          <motion.button 
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-2 lg:px-8 lg:py-3 rounded hover:bg-white hover:text-black transition-all duration-300 font-semibold tracking-wide text-sm sm:text-base"
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
export default ConstructionHero;