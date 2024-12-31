import React from "react";
import truck from "../assets/truck.png";
import { FaChevronRight } from "react-icons/fa";
import HorizontalBorder from "../assets/HorizontalBorder.png";
import carbon_storm_tracker from "../assets/carbon_storm_tracker.png";
import image07 from "../assets/image-07.png";
import image08 from "../assets/image-08.png";
import image09 from "../assets/image-09.png";
import solar_global from "../assets/solar_global.png";
import bckgrd from "../assets/bckgrd.png"
import map from "../assets/map.png";

const Careers = () => {
  return (
    <div>
      <div className="grid grid-cols-5 pt-[10%]">
        <div className="col-span-3  ">
          <div
            className="bg-[#290068] relative p-[5%] h-[85vh] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${map})` }}
          >
            <div className="w-[70%] absolute left-[50%] top-[-10%] flex justify-around p-[5%] items-center rounded-md z-10 border-4 border-white"  style={{ backgroundImage: `url(${bckgrd})` }}>
              <div className="flex gap-4">
                <div>
                  <img src={image07} className="w-10 h-10"/>
                </div>
                <div >
                  <h3 className="text-[#290068]  font-bold text-3xl">250</h3>
                  <p className="text-[#666666] text-sm">Distribution Center</p>
                </div>
              </div>
              <div className="flex gap-4">
              <div>
                  <img src={image08} className="w-10 h-10"/>
                </div>
                <div>
                  <h3 className="text-[#290068] font-bold text-3xl">25</h3>
                  <p className="text-[#666666] text-sm">Years Of Exprience</p>
                </div>
              </div>
              <div className="flex gap-4">
              <div>
                  <img src={image09} className="w-10 h-10"/>
                </div>
                <div>
                  <h3 className="text-[#290068] font-bold text-3xl">45</h3>
                  <p className="text-[#666666] text-sm">Countries and Regions</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-[#290068] opacity-5"></div>

            <div className="w-[60%] mx-auto pt-[5%]">
              <h5 className="text-[#FE6204] md:text-lg text-base font-medium ">
                Trusted Path to Global Shipping!
              </h5>
              <img
                src={HorizontalBorder}
                className="absolute left-[23%] top-[20%] md:w-[28%] w-[80%]  "
              />
              <h3 className="text-white md:text-3xl text-xl font-semibold font-poppins  leading-tight mt-[5%]">
                Logistics Redefined
                <br /> for
                <span className="border-b-4 border-[#FE6204]"> Tomorrow! </span>
              </h3>
              <p className="text-[#F8F5F1] text-base mt-[5%]">
                Logistics company specializes in managing the transportation,
                storage, and distribution of goods. It offers services such as
                freight forwarding, warehousing, inventory management, supply
                chain transportation logistic solutions.
              </p>
              <div className=" mt-[8%] ">
                <div className="flex gap-4 mb-[3%] ">
                  <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center  w-[11%]  mt-[1%] ">
                    <img src={carbon_storm_tracker} className="" />
                  </div>
                  <div>
                    <h3 className="text-[#FE6204] font-bold text-lg">
                      Real-Time Tracking
                    </h3>
                    <p className="text-[#F8F5F1] text-base ">
                      Logistics company specializes in
                      <br />
                      managing the transportation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center   w-[11%]  mt-[1%]">
                    <img src={solar_global} className="" />
                  </div>
                  <div>
                    <h3 className="text-[#FE6204] font-bold text-lg">
                      Global Leaders
                    </h3>
                    <p className="text-[#F8F5F1] text-base">
                      Logistics company specializes in
                      <br />
                      managing the transportation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center bg-white text-[#FE6204]   w-[30%] px-[3%] py-[1%] rounded-md mt-[8%]">
                <button
                  type="button"
                  className=" px-3 py-2 rounded-lg text-lg hover:bg-[#FE6204] hover:text-white font-medium transition"
                >
                  Know More
                </button>
                <FaChevronRight className=" text-sm ml-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 ">
          <img src={truck} className="h-[85vh] w-full" />
        </div>
      </div>
    </div>
  );
};
export default Careers;
