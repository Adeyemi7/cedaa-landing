import React from "react";
import CeedarBottle from "../assests/icons/CeedarBottle";
import StarRating from "../assests/icons/StarRating";
import HorizontalLines from "../assests/icons/HorizontalLines";
import VerticalLines from "../assests/icons/VerticalLines";

const HeroSection = () => {
  return (
    <div className="w-[90%] relative mx-auto flex flex-col md:flex-row items-center mt-20 pt-24">
      <HorizontalLines className="absolute inset-0 w-full h-full opacity-10" />
      <VerticalLines className="absolute inset-0 w-full h-full opacity-10" />

      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <p className="text-[#333333] font-bold text-[34px] sm:text-[40px] md:text-[46px] leading-[1.2] md:leading-[69px] max-w-[550px] mx-auto md:mx-0">
          Deliciously Nutritious. Made for Every Moment.
        </p>

        <p className="text-[#333333] font-normal text-[18px] sm:text-[20px] md:text-[22px] mt-4 max-w-[450px] mx-auto md:mx-0">
          Fresh. Creamy. Loved by everyone. Explore Our Flavors
        </p>

        <div className="mt-6">
          <button className="bg-[#EB4922] text-white text-[16px] sm:text-[18px] px-8 sm:px-10 py-4 sm:py-5 rounded-[10px] font-bold hover:bg-[#d53c1c] transition duration-300">
            Taste the Goodness
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
        <CeedarBottle />

        <div className="absolute bg-white bg-opacity-90 px-16 py-12 rounded-[20px] shadow-lg flex flex-col justify-center items-center mb-[-435px] mx-auto z-10 left-4.5">
          <div className="flex gap-4 mb-4">
            {[...Array(5)].map((_, i) => (
              <StarRating key={i} />
            ))}
          </div>

          <div className="flex flex-row justify-center items-center gap-3">
            <p className="text-[#FF570E] font-bold text-[56px] leading-[100%]">
              14+
            </p>
            <p className="text-[#333333] font-bold text-[16px] leading-snug max-w-[200px]">
              years of quality, integrity, and innovation in every sip.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
