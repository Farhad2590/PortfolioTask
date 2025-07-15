import React from 'react';
import {  Menu } from 'lucide-react';

export default function NavbarSection() {


  return (
    <div className="bg-white text-gray-500 px-10 py-2 flex items-center justify-between">
      {/* Left side - Logo and filename */}
      <div className="flex items-center space-x-3">
        <div className="text-gray-500 font-medium">logo</div>
      </div>

     

      {/* Right side - Menu button */}
      <button className="text-gray-500 hover:text-gray-500 transition-colors">
        <Menu size={20} />
      </button>
    </div>
  );
}