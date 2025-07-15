import React from "react";
import { motion } from "motion/react"
import img from "../assets/lastPart.png";

const ContactSection = () => {
  // Animation variants
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

  const leftSectionVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightSectionVariants = {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
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

  const contactInfoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const contactItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col md:flex-row bg-[#ddcfc6] px-4 sm:px-6 md:px-8 lg:px-10 pt-8 sm:pt-12 md:pt-16 lg:pt-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Left Section - Contact Info */}
      <motion.div 
        className="flex-1 flex flex-col justify-center items-center bg-white p-4 sm:p-6 md:p-8 text-center"
        variants={leftSectionVariants}
        whileHover={{ 
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          transition: { duration: 0.3 }
        }}
      >
        <motion.h1 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-800"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            color: "#4a5568",
            transition: { duration: 0.2 }
          }}
        >
          CONTACT US
        </motion.h1>

        <motion.p 
          className="w-full sm:w-5/6 md:w-3/4 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg px-2 sm:px-0 text-gray-600 leading-relaxed"
          variants={itemVariants}
          whileHover={{ 
            color: "#2d3748",
            transition: { duration: 0.2 }
          }}
        >
          We are here to meet any business need and to promote your company
          online!
        </motion.p>

        <motion.div 
          className="w-full sm:w-80 md:w-96 border-b-2 border-gray-300 my-3 sm:my-4"
          variants={itemVariants}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        <motion.div 
          className="my-4 sm:my-6 text-gray-700 space-y-2 sm:space-y-3"
          variants={contactInfoVariants}
        >
          <motion.p 
            className="text-sm sm:text-base lg:text-lg"
            variants={contactItemVariants}
            whileHover={{ 
              x: 5,
              color: "#2d3748",
              transition: { duration: 0.2 }
            }}
          >
            <span className="font-semibold">Phone:</span> 1 (232) 252 55 22
          </motion.p>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg"
            variants={contactItemVariants}
            whileHover={{ 
              x: 5,
              color: "#2d3748",
              transition: { duration: 0.2 }
            }}
          >
            <span className="font-semibold">Location:</span> 75 Street Sample,
            WI 63025
          </motion.p>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg"
            variants={contactItemVariants}
            whileHover={{ 
              x: 5,
              color: "#2d3748",
              transition: { duration: 0.2 }
            }}
          >
            <span className="font-semibold">Mail:</span> template@sample.com
          </motion.p>
        </motion.div>

        <motion.p 
          className="text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8"
          variants={itemVariants}
          whileHover={{ 
            color: "#4a5568",
            transition: { duration: 0.2 }
          }}
        >
          Image from Freepik
        </motion.p>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div 
        className="flex-1 bg-[#ddcfc6] flex items-center justify-center min-h-64 sm:min-h-80 md:min-h-0"
        variants={rightSectionVariants}
      >
        <motion.div 
          className="w-full h-full flex items-center justify-center bg-gray-200 overflow-hidden"
          whileHover={{ 
            backgroundColor: "#e2e8f0",
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            className="w-full h-full flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-lg flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <img
                src={img}
                alt="Contact visual"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;