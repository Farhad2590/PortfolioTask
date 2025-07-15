import React from "react";
import { Target, Zap, Code, Lightbulb } from "lucide-react";
import { motion } from "motion/react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    scale: 1.03,
    transition: { duration: 0.2 }
  }
};
const ServicesSection = () => {
  return (
    <div className="min-h-screen bg-[#e8ddd4] pt-16 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-60 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
            Epic design and engineering
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="rounded-lg sm:rounded-xl p-6 sm:p-8 text-center bg-transparent"
          >
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-700" />
              </motion.div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 tracking-wide">
              STRATEGY
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 text-center shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#f0a901] rounded-full flex items-center justify-center"
              >
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </motion.div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 tracking-wide">
              BRANDING
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="rounded-lg sm:rounded-xl p-6 sm:p-8 text-center bg-transparent"
          >
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <Code className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-700" />
              </motion.div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 tracking-wide">
              DEVELOPMENT
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#f0a901] rounded-lg sm:rounded-xl p-6 sm:p-8 text-center shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -10 }}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center"
              >
                <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#f0a901]" />
              </motion.div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 tracking-wide">
              WEB DESIGN
            </h3>
            <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default ServicesSection;