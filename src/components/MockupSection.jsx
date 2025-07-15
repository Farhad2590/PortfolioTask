import React from "react";
import { motion } from "motion/react"
import bgImage from "../assets/bgTwo.png";

const MockupSection = () => {

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  return (
    <div className="relative w-full h-screen">

      <motion.img
        src={bgImage}
        alt="Background"
        className="w-full h-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />


      <div className="absolute inset-0 flex items-center justify-center md:justify-end py-8 px-4 sm:px-8 md:px-12 lg:pr-16">

        <motion.div 
          className="w-full max-w-sm md:max-w-md"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4 md:gap-4">
            <motion.div 
              className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-lg shadow-lg"
              variants={cardVariants}
              custom={0}
              whileHover={{ 
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.h3 
                className="text-sm sm:text-base md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Branding strategy
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-xs sm:text-sm md:text-sm leading-relaxed mb-2 sm:mb-3 md:mb-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </motion.p>
              <motion.p 
                className="text-xs text-gray-400 hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                Image from Freepik
              </motion.p>
            </motion.div>

            <motion.div 
              className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-lg shadow-lg"
              variants={cardVariants}
              custom={1}
              whileHover={{ 
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.h3 
                className="text-sm sm:text-base md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                Designing logos
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-xs sm:text-sm md:text-sm leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </motion.p>
            </motion.div>

            <div className="col-span-2 md:col-span-1">
              <motion.div 
                className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-lg shadow-lg max-w-xs mx-auto md:max-w-none"
                variants={cardVariants}
                custom={2}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.h3 
                  className="text-sm sm:text-base md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  Brand identity
                </motion.h3>
                <motion.p 
                  className="text-gray-600 text-xs sm:text-sm md:text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                >
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MockupSection;