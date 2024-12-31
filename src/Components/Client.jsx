import React from "react";
import clientback from "../assets/clientback.png";
import HorizontalBorder from "../assets/HorizontalBorder.png";
import team from "../assets/team.png";
import { TiStarOutline } from "react-icons/ti";
import { PiQuotesBold } from "react-icons/pi";
import { FiArrowRight } from "react-icons/fi";

const Client = () => {
  return (
    <div>
      <div
        className="w-[70%] mx-auto mt-[5%] bg-cover p-[3%] bg-center bg-no-repeat h-[70vh] relative"
        style={{ backgroundImage: `url(${clientback})` }}
      >
        <div className="relative text-center">
          <h5 className="text-[#FE6204] md:text-lg text-base font-medium ">
            Clients Testimonials
          </h5>
          <img
            src={HorizontalBorder}
            className="absolute left-[43%] top-[23%] md:w-[16%] w-[80%]  mt-[-2%]"
          />
          <h3 className="text-[#290068] md:text-3xl text-xl font-semibold font-poppins  leading-tight mt-[2%]">
            Customer
            <span className="border-b-4 border-[#FE6204]"> Reviews!</span>
          </h3>
          <p className="text-[#666666] mx-auto text-base w-[40%] mt-[2%]">
            Logistics company specializes in managing the transportation storage
            and distribution of goods.
          </p>
        </div>
        <div>
          <div className=" ">
            <div className="flex gap-5 w-full">
              <div className="bg-[#F8F5F1] px-[2%] py-[1%] mt-[2%] relative rounded-md ">
                <div className="absolute top-[15%] left-0 h-[70%] border-l-4 border-[#FE6204]"></div>
                <div className="flex gap-3">
                  <div className="bg-white border-white rounded-md border-4 p-1">
                    <img src={team} className="w-20 h-20 rounded-md" />
                  </div>
                  <div className="mt-[3%]">
                    <h3 className="text-[#FE6204] font-bold text-2xl">
                      Devansh Kumar
                    </h3>
                    <h5 className="text-[#666666] text-lg capitalize">
                      SUPERVISOR
                    </h5>
                  </div>
                </div>
                <p className="pt-[2%] text-[#666666] text-lg font-normal">
                  The delivery was incredibly fast and efficient! My package
                  arrived a day earlier than expected, and the tracking updates.
                  Highly recommended!
                </p>
                <div className="flex justify-between mt-[3%]">
                  <div className="flex text-[#FE6204] font-bold text-xl">
                    <TiStarOutline />
                    <TiStarOutline />
                    <TiStarOutline />
                    <TiStarOutline />
                    <TiStarOutline />
                  </div>
                  <div>
                    <div className="bg-[#FE6204] text-white rounded-sm flex justify-center items-center p-3 font-bold text-xl">
                      <PiQuotesBold />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#F8F5F1] px-[2%] py-[1%]  mt-[2%] relative rounded-md">
                <div className="absolute top-[15%] left-0 h-[70%] border-l-4 border-[#FE6204]"></div>
                <div className="flex gap-3">
                  <div className="bg-white border-white rounded-md border-4 p-1">
                    <img src={team} className="w-20 h-20 rounded-md" />
                  </div>
                  <div className="mt-[3%]">
                    <h3 className="text-[#FE6204] font-bold text-2xl">
                      Shubham kumar
                    </h3>
                    <h5 className="text-[#666666] text-lg capitalize">
                      SUPERVISOR
                    </h5>
                  </div>
                </div>
                <p className="pt-[2%] text-[#666666] text-lg font-normal">
                  The delivery was incredibly fast and efficient! My package
                  arrived a day earlier than expected, and the tracking updates.
                  Highly recommended!
                </p>
                <div className="flex justify-between mt-[3%]">
                  <div className="flex text-[#FE6204] font-bold text-xl">
                    <TiStarOutline />
                    <TiStarOutline />
                    <TiStarOutline />
                    <TiStarOutline />
                    <TiStarOutline />
                  </div>
                  <div>
                    <div className="bg-[#FE6204] text-white rounded-sm flex justify-center items-center p-3 font-bold text-xl">
                      <PiQuotesBold />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-12 h-12 absolute right-0 top-[50%] rounded-full bg-[#290068] text-white border-2 border-white flex justify-center items-center">
            <FiArrowRight className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
