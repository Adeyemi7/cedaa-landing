/* eslint-disable react/no-unescaped-entities */
import React from "react";
import OrIcons from "../assests/icons/OrIcons";
import TelephoneIcon from "../assests/icons/TelephoneIcon";
import EmailIcon from "../assests/icons/EmailIcon";
import LocationIcon from "../assests/icons/LocationIcon";
import LargeLocation from "../assests/icons/LargeLocation";
import DirectionIcon from "../assests/icons/DirectionIcon";
import RatingIcon from "../assests/icons/RatingIcon";

const ContactSection = () => {
  return (
    <div className="bg-[#F1EEE6] w-full">
      <div className="w-[90%] mx-auto flex flex-col gap-3 md:flex-row items-center mt-4 lg:mt-10 pt-6 lg:pt-14 pb-14">
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <div className="mt-4 flex flex-col">
            <p className="text-[#333333] font-bold text-[36px] leading-[54px] max-w-[550px]">
              Want to <span className="text-[#FF570E]">Reach</span> Us?
            </p>

            <p className="text-[16px] font-normal text-[#333333] mt-1">
              Have questions? We’d love to hear from you.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-4 bg-white rounded-2xl py-3 mb-4">
            <div className="flex items-center ml-14 gap-3 text-[#333333] text-[16px] font-semibold">
              <div className="flex items-center justify-center p-3 rounded-lg shadow-md w-fit">
                <TelephoneIcon className="w-5 h-5" />
              </div>
              <span>+234 704 018 1406</span>
              <OrIcons className="w-4 h-4" />
              <span>+234 909 747 8089</span>
            </div>

            <div className="flex items-center ml-14 gap-3 text-[#333333] text-[16px] font-semibold">
              <div className="flex items-center justify-center p-3 rounded-lg shadow-md w-fit">
                <EmailIcon className="w-5 h-5" />
              </div>
              <span>cedayogo@yahoo.com</span>
              <OrIcons className="w-4 h-4" />
              <span>info@cedaayogurt.com</span>
            </div>
          </div>

          <div className="flex bg-white rounded-2xl py-4 mb-4">
            <div className="flex flex-col ml-14 space-y-4 text-[#333333] text-[16px] font-semibold">
              <div className="flex items-center justify-center p-3 rounded-lg shadow-md w-fit">
                <LocationIcon className="w-6 h-6" />
              </div>

              <div className="space-y-3">
                <p className="max-w-[400px] text-[#101720] font-semibold">
                  <span className="font-bold">Ota Branch:</span>
                  &nbsp;Cedar D' Vine Nig. Ltd, Km 12 Idiroko Rd, Ota, Ogun
                  State
                </p>

                <p className="max-w-[400px] text-[#101720] font-semibold">
                  <span className="font-bold">Mowe Branch:</span>
                  &nbsp;Daiman Road, Iyana Redeem, Mowe, Ogun State
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex self-start rounded-2xl relative py-3 mt-10 md:mt-0">
          <div className="bg-white w-full rounded-2xl shadow-md py-6 px-4 gap-8">
            <div className=" w-[90%] mx-auto block space-y-6 pt-6">
              <LargeLocation />
              <div className="flex flex-row justify-between items-start space-y-2">
                <div className="text-[#333333] max-w-[300px]">
                  <p className="font-bold text-[24px] leading-tight max-w-[250px]">
                    Fresh Yoghurt Just Around the Corner
                  </p>

                  <p className="text-[16px] font-normal mt-2">
                    Locate a store near you and taste the goodness of Cedaa
                    today.
                  </p>
                </div>

                <button className="bg-[#EB4922] text-white text-[18px] px-4 py-2 rounded-[10px] font-bold hover:bg-[#d53c1c] transition duration-300">
                  Find a Store
                </button>
              </div>
            </div>
            <div className="bg-[#FFFFFF] shadow-2xl p-2 rounded-2xl mt-6">
              <div className=" w-[90%] mx-auto block  mt-3">
                <div className="flex flex-row justify-between items-start space-y-2">
                  <div className="text-[#333333] max-w-[280px]">
                    <p className="font-bold text-[24px] leading-tight">
                      Cedar D’ Vine Nig. Ltd.{" "}
                    </p>

                    <p className="text-[18px] font-normal mt-2 leading-[177%]">
                      Cedar D Vine Nig. Ltf, Km 12 Idiroko Rd, Ota 112104, Ogun
                      State
                    </p>
                  </div>
                  <DirectionIcon />
                </div>
                <div className=" mt-3 flex justify-betweenm items-center gap-4">
                  <RatingIcon />
                  <p className="text-[#333333] font-normal text-[18px]">
                    2 reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
