"use client";

import DottedLine from "../assests/icons/DottedLine";

const Footer = () => {
  return (
    <footer className="bg-[#111111] pt-12 text-white">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="space-y-3 mb-6 text-center md:text-left">
            <p className="   text-2xl font-semibold ">Stay Updated</p>
            <p className="text-lg opacity-80">
              Get the latest updates in your inbox.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row  items-center sm:items-stretch p-2 gap-2 sm:gap-0 border border-[#BCBCBC] rounded-xl">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-3 bg-transparent text-white placeholder:text-gray-400 outline-none"
              onPaste={(e) => {
                e.preventDefault();
                const text = e.clipboardData?.getData("text/plain") ?? "";
                (e.target as HTMLInputElement).value = text;
              }}
            />

            <button className="w-full sm:w-auto bg-[#BCBCBC] text-white text-[16px] sm:text-[18px] px-6 sm:px-8 py-3 rounded-md font-bold hover:bg-[#cfcfcf] transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-start">
          <div className="grid grid-cols-2 md:flex md:justify-between gap-8 md:gap-12">
            <div>
              <h3 className="font-semibold text-lg mb-3 uppercase">Company</h3>
              <ul className="space-y-2 opacity-80 hover:opacity-100 transition">
                <li>Our Story</li>
                <li>Our Vision</li>
                <li>Our Mission</li>
                <li>Core Values</li>
                <li>Contact Us</li>
                <li>Products</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 uppercase">Legal</h3>
              <ul className="space-y-2 opacity-80 hover:opacity-100 transition">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Cookies Policy</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 uppercase">Socials</h3>
              <ul className="space-y-2 opacity-80 hover:opacity-100 transition">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[90%] mx-auto flex flex-col mt-20 ">
        <DottedLine />

        <div className="bg-[rgba(67,67,67,0.4)] rounded-xl shadow-md text-center my-10 py-3">
          <p className="text-[12px] md:text-[14px] lg:text-[16px] font-bold text-white p-3">
            Cedaa Yogurt © All Rights Reserved – 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
