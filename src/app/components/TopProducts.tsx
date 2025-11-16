import React from "react";
import CardComponent from "./UI/CardComponent";

const TopProducts = () => {
  return (
    <div className="w-[90%] mx-auto -mt-7  relative z-20 block bg-[#ffffff]">
      <div className="bg-[rgba(255,87,14,1)] rounded-[20px] p-4 md:p-6  lg:p-10 text-center text-white">
        <div className="mb-4">
          <h2 className=" text-2xl  lg:text-[38px] font-black ">
            Top Products
          </h2>
        </div>
        <div className=" font-normal">
          <p className="font-normal text-[13px] md:text-[17px] lg:text-[20px] ">
            Our customer favourites, freshly re-branded.
          </p>
        </div>
      </div>

      <div>
        <CardComponent />
      </div>
    </div>
  );
};

export default TopProducts;
