import React from "react";
import ValuesComponents from "./UI/ValuesComponents";

const CoreValues = () => {
  return (
    <div className="bg-[#FFFFFF] w-full mt-10 pb-10">
      <div className=" text-[#333333] flex flex-col justify-center items-center py-6 ">
        <p className=" text-[38px] font-extrabold">
          CORE {""}
          <span className="text-[#EB4922] ">
            {""}
            VALUES
          </span>
          <span className="text-[#333333]">
            {""} {""}
          </span>
        </p>
        <p className="text-[20px] font-normal text-center line-clamp-2 mt-2 max-w-[700px]">
          Cedaa is built on a foundation of integrity, driven by quality,
          powered by innovation, strengthened by commitment, and united by team
          spirit.{" "}
        </p>
      </div>
      <div className="py-6 mx-auto">
        <ValuesComponents />
        <div className="flex justify-center items-center gap-6 mt-10 text-[#767776] text-[16px] font-medium italic">
          <div className="flex items-center gap-6">
            <div className="h-px w-32 border-t border-dotted border-[#767776]"></div>
            <p>Pure Taste, Every Time</p>
            <div className="h-px w-32 border-t border-dotted border-[#767776]"></div>
            <p>Dedicated to You</p>
            <div className="h-px w-32 border-t border-dotted border-[#767776]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
