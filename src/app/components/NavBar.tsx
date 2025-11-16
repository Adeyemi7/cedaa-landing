"use client";
import React, { useState } from "react";
import CeedarLogo from "../assests/icons/CeedarLogo";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-6 bg-[rgba(255,255,255,0.75)] w-[90%] mx-auto rounded-[20px] shadow-md backdrop-blur-lg z-50 px-6 py-3">
      <div className="flex justify-between items-center w-full p-2">
        <CeedarLogo />

        <ul className="hidden md:flex md:gap-6 text-[18px] font-semibold text-[#333] lg:gap-12">
          <li className="hover:text-[#EB4922] transition duration-200 cursor-pointer">
            Home
          </li>
          <li className="hover:text-[#EB4922] transition duration-200 cursor-pointer">
            Products
          </li>
          <li className="hover:text-[#EB4922] transition duration-200 cursor-pointer">
            Our Story
          </li>
          <li className="hover:text-[#EB4922] transition duration-200 cursor-pointer">
            Contact
          </li>
        </ul>

        <button className="hidden md:block bg-[#EB4922] text-white text-[18px] px-5 py-2 rounded-[10px] font-bold hover:bg-[#d53c1c] transition duration-300">
          Shop Now
        </button>

        <button
          className="md:hidden text-3xl text-[#333]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[300px] mt-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col text-[18px] font-semibold text-[#333] gap-6 py-4 pl-2 animate-fadeIn">
          <li className="hover:text-[#EB4922] transition duration-200 cursor-pointer">
            Home
          </li>
          <li className="hover:text-[#EB4922] transition duration-200 cursor-pointer">
            Products
          </li>
          <li className="hover:text-[#EB4922] transition duration-200 cursor-pointer">
            Our Story
          </li>
          <li className="hover:text-[#EB4922] transition duration-200 cursor-pointer">
            Contact
          </li>
        </ul>

        <button className="w-full bg-[#EB4922] text-white text-[18px] py-2 rounded-[10px] font-bold hover:bg-[#d53c1c] transition duration-300 mt-2">
          Shop Now
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
