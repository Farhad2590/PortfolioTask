import React from "react";

const WhatWeDoSection = () => {
  return (
    <div className=" bg-black py-20">
      <h1 className="text-4xl font-bold text-[#feb800] mb-16 text-center">
        What We Do
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-20">
        {/* Strategy Column */}
        <div className="">
          <h2 className="text-2xl font-semibold text-[#feb800] mb-6 pb-4">
            Strategy.
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-white">Analytics and Research</span>
            </li>
            <li className="flex items-start">
              <span className="text-white">Interactive Workshops</span>
            </li>
            <li className="flex items-start">
              <span className="text-white">Brand Strategy</span>
            </li>
            <li className="flex items-start">
              <span className="text-white">Content Strategy</span>
            </li>
            <li className="flex items-start">
              <span className="text-white">Digital Strategy</span>
            </li>
            <li className="flex items-start">
              <span className="text-white">Conversion Rate Optimization</span>
            </li>
          </ul>
        </div>

        {/* Design Column */}
        <div className="">
          <h2 className="text-2xl font-semibold text-[#feb800] mb-6 pb-4">
            Design.
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-white">Creative Direction</span>
            </li>
            <li className="flex items-start">
              <span className="text-white">Brand Guides</span>
            </li>
            <li className="flex items-start">
              <span className="text-white">Prototypes</span>
            </li>
            <li className="flex items-start">
              <span className="text-white">UI/UX & Web Design</span>
            </li>
            <li className="flex items-start">
              <span className="text-white">Visual Asset Creation</span>
            </li>
            <li className="flex items-start">
              <span className="text-white">Motion Design</span>
            </li>
          </ul>
        </div>

        {/* Development Column */}
        <div className="">
          <h2 className="text-2xl font-semibold text-[#feb800] mb-6 pb-4">
            Development.
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-white">System Architecture Design</span>
            </li>
            <li className="flex items-start">
              <span className="text-white">Full-Stack Development</span>
            </li>
            <li className="flex items-start">
              <span className="text-white">3rd Party Integrations</span>
            </li>
            <li className="flex items-start">
              <span className="text-white">Performance Optimization</span>
            </li>
            <li className="flex items-start">
              <span className="text-white">WordPress Development</span>
            </li>
            <li className="flex items-start">
              <span className="text-white">Shopify Development</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
