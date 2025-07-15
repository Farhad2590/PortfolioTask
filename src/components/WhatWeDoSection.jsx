import React from "react";
import { motion } from "motion/react"
const WhatWeDoSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const columnVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="bg-black py-10 sm:py-16 lg:py-20">
      <motion.h1 
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#feb800] mb-8 sm:mb-12 lg:mb-16 text-center px-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        What We Do
      </motion.h1>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-8 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="group"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.h2 
            className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#feb800] mb-4 sm:mb-5 lg:mb-6 pb-2 sm:pb-3 lg:pb-4 border-b border-[#feb800]/20"
            whileHover={{ color: "#ffcc33" }}
            transition={{ duration: 0.2 }}
          >
            Strategy.
          </motion.h2>
          <motion.ul 
            className="space-y-2 sm:space-y-3 lg:space-y-4"
            variants={columnVariants}
          >
            {[
              "Analytics and Research",
              "Interactive Workshops", 
              "Brand Strategy",
              "Content Strategy",
              "Digital Strategy",
              "Conversion Rate Optimization"
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                variants={listItemVariants}
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.span 
                  className="text-white text-sm sm:text-base hover:text-[#feb800] transition-colors duration-200 cursor-pointer"
                  whileHover={{ color: "#feb800" }}
                >
                  {item}
                </motion.span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div 
          className="group"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.h2 
            className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#feb800] mb-4 sm:mb-5 lg:mb-6 pb-2 sm:pb-3 lg:pb-4 border-b border-[#feb800]/20"
            whileHover={{ color: "#ffcc33" }}
            transition={{ duration: 0.2 }}
          >
            Design.
          </motion.h2>
          <motion.ul 
            className="space-y-2 sm:space-y-3 lg:space-y-4"
            variants={columnVariants}
          >
            {[
              "Creative Direction",
              "Brand Guides",
              "Prototypes", 
              "UI/UX & Web Design",
              "Visual Asset Creation",
              "Motion Design"
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                variants={listItemVariants}
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.span 
                  className="text-white text-sm sm:text-base hover:text-[#feb800] transition-colors duration-200 cursor-pointer"
                  whileHover={{ color: "#feb800" }}
                >
                  {item}
                </motion.span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div 
          className="group"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.h2 
            className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#feb800] mb-4 sm:mb-5 lg:mb-6 pb-2 sm:pb-3 lg:pb-4 border-b border-[#feb800]/20"
            whileHover={{ color: "#ffcc33" }}
            transition={{ duration: 0.2 }}
          >
            Development.
          </motion.h2>
          <motion.ul 
            className="space-y-2 sm:space-y-3 lg:space-y-4"
            variants={columnVariants}
          >
            {[
              "System Architecture Design",
              "Full-Stack Development",
              "3rd Party Integrations",
              "Performance Optimization", 
              "WordPress Development",
              "Shopify Development"
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                variants={listItemVariants}
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.span 
                  className="text-white text-sm sm:text-base hover:text-[#feb800] transition-colors duration-200 cursor-pointer"
                  whileHover={{ color: "#feb800" }}
                >
                  {item}
                </motion.span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhatWeDoSection;