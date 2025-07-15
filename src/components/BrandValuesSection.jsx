import React from "react";
import { motion } from "motion/react"
import pic1 from "../assets/picOne.png";
import pic2 from "../assets/picTwo.png";
import pic3 from "../assets/picThree.png";

const BrandValuesSection = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#dccec4] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="flex flex-col gap-6 md:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="bg-black bg-opacity-60 flex items-center justify-center w-full max-w-[450px] mx-auto h-64 p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center text-white">
              <motion.h2 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Brand Values
              </motion.h2>
              <motion.p 
                className="text-sm mb-6 max-w-xs mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit nullam nunc justo sagittis suscipit ultrices.
              </motion.p>
              <motion.p 
                className="text-xs mb-4 opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Images from Freepik
              </motion.p>
              <motion.button 
                className="border border-white text-white px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LEARN MORE
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="flex justify-center"
            variants={imageVariants}
          >
            <img
              src={pic2}
              alt="Woman writing at desk"
              className="w-full max-w-[450px] rounded-lg"
            />
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            variants={imageVariants}
          >
            <img
              src={pic1}
              alt="Person working with laptop and coffee"
              className="w-full max-w-[450px] rounded-lg"
            />
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            variants={imageVariants}
          >
            <img
              src={pic3}
              alt="Modern workspace with mockups"
              className="w-full max-w-[450px] rounded-lg"
            />
          </motion.div>
        </motion.div>

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