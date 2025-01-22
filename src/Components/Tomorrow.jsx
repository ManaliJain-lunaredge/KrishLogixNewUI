import React from "react";
import truck from "../assets/Tomorrow/truck.png";
import { FaChevronRight } from "react-icons/fa";
import HorizontalBorder from "../assets/bar/HorizontalBorder.png";
import carbon_storm_tracker from "../assets/Tomorrow/carbon_storm_tracker.png";
import image07 from "../assets/Tomorrow/image-07.png";
import image08 from "../assets/Tomorrow/image-08.png";
import image09 from "../assets/Tomorrow/image-09.png";
import solar_global from "../assets/Tomorrow/solar_global.png";
import bckgrd from "../assets/Tomorrow/bckgrd.png";
import map from "../assets/Tomorrow/map.png";

const Tomorrow = () => {
  return (
    <div>
      <div className="md:block hidden lg:pt-[6rem] md:pt-[5rem]" id="careers">
        <div className="grid md:grid-cols-5  grid-cols-1 pt-[10%] md:p-[0%] p-[5%] 2xl:pt-[7rem]  ">
          <div className="col-span-3  relative  ">
            <div
              className="bg-[#290068]  relative p-[5%] md:p-[7%] 2xl:p-[10%] 2xl:h-screen md:min-h-[60vh]  min-h-[85vh] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat "
              style={{ backgroundImage: `url(${map})` }}
            >
              <div
                className=" w-[100%] absolute left-[50%] md:left-[35%] top-[-10%] md:top-[-12%] 2xl:top-[-10%] xl:top-[-14%] flex justify-around p-[5%] items-center rounded-md z-10 border-4 border-white"
                style={{ backgroundImage: `url(${bckgrd})` }}
              >
                <div className="flex gap-4">
                  <div>
                    <img src={image07} className="w-10 h-10 xl:w-14 xl:h-14" />
                  </div>
                  <div>
                    <h3 className="text-[#290068]  font-bold text-3xl md:text-xl lg:text-3xl">250</h3>
                    <p className="text-[#666666] text-sm">
                      Distribution Center
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <img src={image08} className="w-10 h-10 xl:w-14 xl:h-14" />
                  </div>
                  <div>
                    <h3 className="text-[#290068] font-bold text-3xl md:text-xl lg:text-3xl">25</h3>
                    <p className="text-[#666666] text-sm">Years Of Exprience</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <img src={image09} className="w-10 h-10 xl:w-14 xl:h-14" />
                  </div>
                  <div>
                    <h3 className="text-[#290068] font-bold text-3xl md:text-xl lg:text-3xl">45</h3>
                    <p className="text-[#666666] text-sm">
                      Countries and Regions
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#290068] opacity-5 "></div>

              <div className="md:w-[95%] w-[90%] mx-auto pt-[5%] md:p-[4%] lg:p-[0%] ">
                <h5 className="text-[#FE6204] md:text-lg text-base font-medium ">
                  Trusted Path to Global Shipping!
                </h5>
                <img
                  src={HorizontalBorder}
                  className="absolute  left-[1rem] lg:left-[3rem] xl:left-[5rem] xl:top-[8rem]  lg:top-[6rem]  md:left-[3rem] md:top-[5.3rem] 2xl:top-[14.5rem] 2xl:w-[20rem] 2xl:left-[8rem] top-[5rem] md:w-[21rem] w-[80%]  "
                />
                <h3 className="text-white md:text-lg text-xl font-semibold font-poppins 2xl:w-[40%] leading-tight mt-[5%] lg:mt-[5%] xl:mt-[2%] 2xl:text-3xl 2xl:py-[2rem]  md:mt-[4%] py-[1rem] lg:py-[0rem]   md:py-0">
                  Logistics Redefined for
                  <span className="border-b-4 border-[#FE6204] ms-3">
                    Tomorrow!
                  </span>
                </h3>
                <p className="text-[#F8F5F1] text-base mt-[5%] xl:mt-[3%] 2xl:text-lg md:text-sm xl:text-md">
                  Logistics company specializes in managing the transportation,
                  storage, and distribution of goods. It offers services such as
                  freight forwarding, warehousing, inventory management, supply
                  chain transportation logistic solutions.
                </p>
                <div className=" mt-[6%] xl:mt-[3%] 2xl:mt-[5%] ">
                  <div className="flex gap-4 mb-[3%] ">
                    <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center lg:w-[4rem]  xl:h-[3rem] lg:h-[3rem] xl:w-[4rem] 2xl:h-[4rem] 2xl:w-[6rem]  md:w-[4rem] md:h-[3rem]   w-[6rem] h-[4rem]  mt-[1%] xl:mt-0 ">
                      <img src={carbon_storm_tracker} className="" />
                    </div>
                    <div>
                      <h3 className="text-[#FE6204] font-bold text-lg lg:text-lg xl:text-base 2xl:text-lg md:text-base">
                        Real-Time Tracking
                      </h3>
                      <p className="text-[#F8F5F1] text-base 2xl:w-[70%] lg:text-sm md:text-sm xl:text-md 2xl:text-lg">
                        Logistics company specializes in managing the
                        transportation.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 ">
                    <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center lg:w-[4rem]  xl:h-[3rem] lg:h-[3rem] xl:w-[4rem] 2xl:h-[4rem] 2xl:w-[6rem] md:w-[4rem] md:h-[3rem]  w-[6rem] h-[4rem]  mt-[1%] xl:mt-0">
                      <img src={solar_global} className="" />
                    </div>
                    <div>
                      <h3 className="text-[#FE6204] font-bold text-lg lg:text-lg md:text-base xl:text-xl 2xl:text-lg">
                        Global Leaders
                      </h3>
                      <p className="text-[#F8F5F1] text-base 2xl:w-[70%] lg:text-sm md:text-sm xl:text-md 2xl:text-lg">
                        Logistics company specializes in managing the
                        transportation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[4rem] md:left-[3.5rem] md:bottom-[1.5rem] lg:left-[3.5rem] lg:bottom-[2rem] xl:left-[5.5rem] 2xl:left-[8.5rem] 2xl:bottom-[5rem] left-[8.5rem] flex items-center bg-white text-[#FE6204] hover:bg-[#FE6204] hover:text-white 2xl:w-[18%] cursor-pointer  md:w-[30%]  lg:w-[25%] xl:w-[21%] w-[10rem] md:px-[3%] px-[2%] py-[1%] rounded-md mt-[8%] md:mt-[4%]">
              <a href="#about"
                className=" px-1 py-2 xl:py-0  2xl:py-2 rounded-lg text-xl md:text-sm xl:text-xl font-medium transition"
              >
                Know More
              </a>
              <FaChevronRight className=" text-sm ml-2 mt-1" />
            </div>
          </div>
          <div className="col-span-2 ">
            <img
              src={truck}
              className=" h-[50vh] 2xl:h-screen md:min-h-[60vh] w-full"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden block text-center mt-[3rem] relative">
        <div
          className="md:w-[70%] w-[93%] mx-auto flex justify-center  p-[5%] items-center rounded-md z-10 border-4 border-white"
          style={{ backgroundImage: `url(${bckgrd})` }}
        >
          <div className="md:flex inline-block gap-4">
            <div className="flex justify-center items-center">
              <img src={image07} className="w-10 h-10 text-center" />
            </div>
            <div>
              <h3 className="text-[#290068]  font-bold text-3xl mt-[1rem] md:mt-0">
                250
              </h3>
              <p className="text-[#666666] text-sm">Distribution Center</p>
            </div>
          </div>
          <div className="md:flex block gap-4">
            <div className="flex justify-center items-center">
              <img src={image08} className="w-10 h-10 text-center" />
            </div>
            <div>
              <h3 className="text-[#290068] font-bold text-3xl mt-[1rem] md:mt-0">
                25
              </h3>
              <p className="text-[#666666] text-sm">Years Of Exprience</p>
            </div>
          </div>
          <div className="md:flex block gap-4">
            <div className="flex justify-center items-center">
              <img src={image09} className="w-10 h-10 text-center" />
            </div>
            <div>
              <h3 className="text-[#290068] font-bold text-3xl mt-[1rem] md:mt-0">
                45
              </h3>
              <p className="text-[#666666] text-sm">Countries and Regions</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-5  grid-cols-1 pt-[10%] md:p-[0%] p-[5%] rounded-lg">
          <div className="col-span-2 md:col-span-4">
            <img
              src={truck}
              className="md:h-[85vh] h-[50vh]  w-full rounded-t-md"
            />
          </div>
          <div className="col-span-3  md:col-span-1 ">
            <div
              className="bg-[#290068]  relative md:p-[5%]  p-[1rem] pb-[6rem] h-[630px]  flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat "
              style={{ backgroundImage: `url(${map})` }}
            >
              <div className="absolute inset-0 bg-[#290068] opacity-5 "></div>

              <div className="md:w-[60%] w-[93%] md:mx-auto text-left   ">
                <h5 className="text-[#FE6204] md:text-lg text-base font-medium ">
                  Trusted Path to Global Shipping!
                </h5>
                <img
                  src={HorizontalBorder}
                  className="absolute md:left-[23%] left-[1rem] md:top-[20%] top-[5rem] md:w-[28%] w-[85%]  "
                />
                <h3 className="text-white md:text-3xl text-xl font-semibold font-poppins  leading-tight mt-[5%] py-[1rem]">
                  Logistics Redefined
                  <br /> for
                  <span className="border-b-4 border-[#FE6204]">
                    {" "}
                    Tomorrow!{" "}
                  </span>
                </h3>
                <p className="text-[#F8F5F1] text-sm mt-[5%]">
                  Logistics company specializes in managing the transportation,
                  storage, and distribution of goods. It offers services such as
                  freight forwarding, warehousing, inventory management, supply
                  chain transportation logistic solutions.
                </p>
                <div className=" mt-[8%] ">
                  <div className="flex gap-4 mb-[3%] ">
                    <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center  md:w-[11%] w-[6rem] h-[4rem]  mt-[1%] ">
                      <img src={carbon_storm_tracker} className="" />
                    </div>
                    <div>
                      <h3 className="text-[#FE6204] font-bold text-md">
                        Real-Time Tracking
                      </h3>
                      <p className="text-[#F8F5F1] text-sm ">
                        Logistics company specializes in managing the
                        transportation.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 ">
                    <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center   md:w-[11%] w-[6rem] h-[4rem]  mt-[1%]">
                      <img src={solar_global} className="" />
                    </div>
                    <div>
                      <h3 className="text-[#FE6204] font-bold text-md">
                        Global Leaders
                      </h3>
                      <p className="text-[#F8F5F1] text-sm">
                        Logistics company specializes in managing the
                        transportation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" absolute bottom-[5rem]  left-[3rem] flex items-center bg-white text-[#FE6204] hover:bg-[#FE6204] hover:text-white  md:w-[30%] w-[10rem] md:px-[3%] px-[2%] py-[1%] rounded-md mt-[8%]">
              <a href="#about"
                className=" px-3 py-2 rounded-lg text-lg  font-medium transition"
              >
                Know More
              </a>
              <FaChevronRight className=" text-sm ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tomorrow;
