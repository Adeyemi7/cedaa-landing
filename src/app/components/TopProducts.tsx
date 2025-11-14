import React from "react";
import CardComponent from "./UI/CardComponent";

const TopProducts = () => {
  return (
    <div className="w-[90%] mx-auto -mt-7  relative z-20 block bg-[#ffffff]">
      <div className="bg-[rgba(255,87,14,1)] rounded-[20px] p-10 text-center text-white">
        <div className="mb-4">
          <h2 className=" text-[38px] font-black ">Top Products</h2>
        </div>
        <div className="text-[18px] font-normal">
          <p className="font-normal text-[20px] ">
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

// import React from "react";
// import CardComponent from "./UI/CardComponent";

// const TopProducts = () => {
//   return (
//     <div className="w-[90%] mx-auto -mt-7 relative z-20 block bg-white">
//       {/* Header */}
//       <div className="bg-[#FF570E] rounded-[20px] p-6 sm:p-10 text-center text-white">
//         <div className="mb-2 sm:mb-4">
//           <h2 className="text-3xl sm:text-4xl md:text-[38px] font-black">
//             Top Products
//           </h2>
//         </div>
//         <div className="text-[14px] sm:text-[18px] md:text-[20px] font-normal">
//           <p>Our customer favourites, freshly re-branded.</p>
//         </div>
//       </div>

//       {/* Cards */}
//       <div>
//         <CardComponent />
//       </div>
//     </div>
//   );
// };

// export default TopProducts;
