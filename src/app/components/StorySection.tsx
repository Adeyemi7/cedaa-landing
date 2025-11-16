/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CeedarFrame from "../assests/images/CeedarFrame.png";
import Image from "next/image";

const StorySection = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-3 md:flex-row items-center mt-10 pt-14">
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <div className="flex">
          <button className="bg-[#EB4922] text-white text-[18px] px-10 py-5 rounded-[10px] font-bold hover:bg-[#d53c1c] uppercase hover:cursor-pointer transition duration-300">
            Our Story
          </button>
        </div>

        <div className="mt-6 max-w-[520px]">
          <p className="text-[#333333] font-bold text-2xl lg:text-[36px] leading-[54px] max-w-[600px]">
            Cedar D&#39; Vine Nigeria Limited
          </p>
          <div className="text-[#333333] font-normal text-[16px] mt-6">
            Cedar D' Vine Nigeria Limited is Nigeria's leading manufacturer of
            Sweetened and Unsweetened Yogurt made with high-quality ingredients.
            <p className="mt-6">
              Founded in 2005, we are committed to delivering nutritious dairy
              goodness across the African sub-region.
            </p>
            <p className="mt-6">
              Registered by
              <span className="font-bold uppercase"> NAFDAC </span>and certified
              by
              <span className="font-bold uppercase"> SON, </span>our products
              are available nationwide.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
        <Image
          src={CeedarFrame}
          alt="Cedar D' Vine Product Frame"
          className=" h-full w-full"
        />
      </div>
    </div>
  );
};

export default StorySection;
