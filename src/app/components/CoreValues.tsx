import React from "react";
import ValuesComponents from "./UI/ValuesComponents";

const CoreValues = () => {
  return (
    <div className="bg-white w-full mt-10 pb-10">
      <div className="text-[#333333] flex flex-col justify-center items-center py-6 px-4">
        <p className="text-[28px] sm:text-[34px] md:text-[38px] font-extrabold text-center leading-tight">
          CORE <span className="text-[#EB4922]">VALUES</span>
        </p>
        <p className="text-[15px] sm:text-[17px] md:text-[20px] font-normal text-center mt-2 max-w-[700px] leading-relaxed">
          Cedaa is built on a foundation of integrity, driven by quality,
          powered by innovation, strengthened by commitment, and united by team
          spirit.
        </p>
      </div>

      <div className="py-6 mx-auto px-4">
        <ValuesComponents />
        <div className="flex justify-center items-center gap-4 sm:gap-6 mt-10 text-[#767776] text-[13px] sm:text-[15px] md:text-[16px] font-medium italic">
          <div className="flex items-center gap-2 sm:gap-4 md:gap-4">
            <div className="h-px w-16 sm:w-24 md:w-32 border-t border-dotted border-[#767776]"></div>
            <p className="hidden sm:block">Pure Taste, Every Time</p>
            <div className="h-px w-16 sm:w-24 md:w-32 border-t border-dotted border-[#767776]"></div>
            <p className="hidden sm:block">Dedicated to You</p>
            <div className="h-px w-16 sm:w-24 md:w-32 border-t border-dotted border-[#767776]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
