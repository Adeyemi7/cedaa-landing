// import React from "react";
// import AfricaMap from "../assests/icons/AfricaMap";
// import BottleIcon from "../assests/icons/BottleIcon";
// import CeedarCombine from "../assests/images/CeedarCombine.png";
// import Image from "next/image";

// const WhyChoose = () => {
//   return (
//     <div className="bg-[#F1EEE6] w-full mt-20 pb-10">
//       <div className=" text-[#333333] flex flex-col justify-center items-center py-6 ">
//         <p className=" text-[38px] font-extrabold">
//           Why Choose {""}
//           <span className="text-[#EB4922] ">
//             {""}
//             Cedaa
//           </span>
//           <span className="text-[#333333]">
//             {""} ? {""}
//           </span>
//         </p>
//         <p className="text-[20px] font-normal line-clamp-2 mt-2">
//           Delicious & Nutritious — Try Cedaa Yoghurt Today!
//         </p>
//       </div>

//       <div className="  items-start w-[90%] py-6 mx-auto">
//         <div className=" p-3 ">
//           <AfricaMap />
//         </div>

//         <div className="flex flex-col my-2 ">
//           <p className="text-[26px] font-bold text-[#333333]">VISION</p>
//           <p className="text-[18px] text-[#333333] font-medium max-w-[300px]">
//             {" "}
//             To become a household name in Nigeria and the African sub-region
//             through quality dairy and beverage products.
//           </p>
//         </div>
//       </div>
//       <div className="">
//         <div className="">
//           <Image
//             src={CeedarCombine}
//             alt="Cedar D' Vine Products Combine"
//             className=" h-full w-full"
//           />
//         </div>
//       </div>

//       <div className="   flex items-end  w-[90%] py-6 mx-auto  flex-col  relative">
//         <div className=" ">
//           <div className=" p-3">
//             <BottleIcon />
//           </div>

//           <div className=" flex flex-col my-2 ">
//             <p className="text-[26px] font-bold text-[#333333]">MISSION</p>
//             <p className="text-[18px] text-[#333333] font-medium max-w-[300px]">
//               {" "}
//               We provide nutritional value to our customers through the
//               production of quality beverage products, delivering reward to
//               staff and investors sustainably.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChoose;

import React from "react";
import AfricaMap from "../assests/icons/AfricaMap";
import BottleIcon from "../assests/icons/BottleIcon";
import CeedarCombine from "../assests/images/CeedarCombine.png";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <div className="bg-[#F1EEE6] w-full mt-10 pb-10">
      <div className="text-[#333333] flex flex-col justify-center items-center py-6 text-center px-4">
        <p className="text-2xl sm:text-3xl md:text-[38px] font-extrabold leading-tight">
          Why Choose <span className="text-[#EB4922]">Cedaa</span>
          <span className="text-[#333333]"> ?</span>
        </p>

        <p className="text-base sm:text-lg md:text-[20px] font-normal mt-2 max-w-[320px] sm:max-w-none">
          Delicious & Nutritious — Try Cedaa Yoghurt Today!
        </p>
      </div>

      <div className="w-full md:w-[90%] py-6 mx-auto px-4">
        <div className="p-3">
          <AfricaMap />
        </div>

        <div className="flex flex-col my-2">
          <p className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#333333]">
            VISION
          </p>
          <p className="text-sm sm:text-base md:text-[18px] text-[#333333] font-medium max-w-[300px]">
            To become a household name in Nigeria and the African sub-region
            through quality dairy and beverage products.
          </p>
        </div>
      </div>

      <div className="w-full">
        <Image
          src={CeedarCombine}
          alt="Cedar D' Vine Products Combine"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex items-end w-full md:w-[90%] py-6 mx-auto flex-col px-4 relative">
        <div>
          <div className="p-3">
            <BottleIcon />
          </div>
          <div className="flex flex-col my-2">
            <p className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#333333]">
              MISSION
            </p>
            <p className="text-sm sm:text-base md:text-[18px] text-[#333333] font-medium max-w-[300px]">
              We provide nutritional value to our customers through the
              production of quality beverage products, delivering reward to
              staff and investors sustainably.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
