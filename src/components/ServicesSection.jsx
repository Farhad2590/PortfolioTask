import React from "react";
import { Target, Zap, Code, Lightbulb } from "lucide-react";

export default function ServicesSection() {
  return (
    <div className="min-h-screen bg-[#e8ddd4] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Epic design and engineering
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Strategy Card */}
          <div className="rounded-xs p-8 text-center">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-gray-700 text-center" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              STRATEGY
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Branding Card */}
          <div className="bg-white rounded-xs p-8 text-center">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-[#f0a901] rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              BRANDING
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Development Card */}
          <div className="rounded-xs p-8 text-center">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-gray-700" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              DEVELOPMENT
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Web Design Card */}
          <div className="bg-[#f0a901] rounded-xs p-8 text-center">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-[#f0a901]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              WEB DESIGN
            </h3>
            <p className="text-white text-sm leading-relaxed opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
