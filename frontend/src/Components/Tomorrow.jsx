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
import Heading from "./Heading";

const Tomorrow = () => {
  return (
    <div>
      <div className="lg:block hidden lg:pt-[8rem] md:pt-[7rem]" id="careers">
        <div className="grid lg:grid-cols-5  grid-cols-1 pt-[10%] md:p-[0%] p-[5%] xl:pt-[5%] 2xl:pt-[7rem]  ">
          <div className="col-span-3  relative  ">
            <div
              className="bg-[#290068]  relative p-[5%] md:p-[7%] 2xl:p-[10%] 2xl:h-screen md:min-h-[60vh] lg:min-h-[80vh] xl:h-[700px]  sm-912:min-h-[50vh] min-h-[85vh] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat "
              style={{ backgroundImage: `url(${map})` }}
            >
              <div
                className=" w-[100%] absolute left-[50%] md:left-[35%] top-[-10%] md:top-[-13%] 2xl:top-[-10%] xl:top-[-14%] flex justify-around p-[5%] items-center rounded-md z-10 border-4 border-white"
                style={{ backgroundImage: `url(${bckgrd})` }}
              >
                <div className="flex gap-4">
                  <div>
                    <img src={image07} className="w-10 h-10 xl:w-14 xl:h-14" />
                  </div>
                  <div>
                    <h3 className="text-[#290068]  font-bold text-3xl md:text-xl lg:text-3xl">
                      250
                    </h3>
                    <p className="text-[#666666] text-sm 2xl:text-lg">
                      Distribution Center
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <img src={image08} className="w-10 h-10 xl:w-14 xl:h-14" />
                  </div>
                  <div>
                    <h3 className="text-[#290068] font-bold text-3xl md:text-xl lg:text-3xl">
                      25
                    </h3>
                    <p className="text-[#666666] text-sm 2xl:text-lg">
                      Years Of Exprience
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <img src={image09} className="w-10 h-10 xl:w-14 xl:h-14" />
                  </div>
                  <div>
                    <h3 className="text-[#290068] font-bold text-3xl md:text-xl lg:text-3xl">
                      45
                    </h3>
                    <p className="text-[#666666] text-sm 2xl:text-lg">
                      Countries and Regions
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#14193E] opacity-5 "></div>

              <div className="md:w-[82%] xl:w-[75%] w-[90%] 2xl:w-[83%] mx-auto pt-[5%] md:p-[4%] sm-820:p-0 lg:p-[0%] "  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500">
                {/* <h5 className="text-[#FE6204] md:text-lg text-base font-medium xl:pb-[3%] ">
                  Trusted Path to Global Shipping!
                </h5>
                <img
                  src={HorizontalBorder}
                  className="absolute  left-[1rem] lg:left-[7rem] xl:left-[9rem] xl:top-[6.5rem] md-1024:top-[4.5rem]    lg-1440:top-[7.5rem] sm-912:top-[10.3rem]  md:left-[3rem] md:top-[5.8rem] 2xl:top-[10.5rem] sm-820:top-[9rem] sm-820:left-[2rem] 2xl:w-[20rem] 2xl:left-[12rem] top-[5rem] md:w-[21rem] w-[80%]  "
                /> */}
                <Heading
                  heading_text="Trusted Path to Global Shipping!"
                  align="left"
                />
                

                <h3 className="text-white md:text-lg text-xl font-semibold lg:text-3xl font-poppins  sm-820:text-2xl leading-tight mt-[5%] lg:mt-[5%] xl:mt-[2%] 2xl:text-3xl 2xl:py-[2rem]  md:mt-[4%] py-[1rem] lg:py-[0rem]   md:py-0">
                  Logistics Redefined
                  <br /> for
                  <span className="border-b-4 border-[#FE6204] ms-3">
                    Tomorrow!
                  </span>
                </h3>
                <p className="text-[#F8F5F1] text-base mt-[5%] xl:mt-[3%] 2xl:text-lg md:text-sm xl:text-md sm-820:text-base">
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
                      <h3 className="text-[#FE6204] font-bold text-lg lg:text-xl xl:text-base 2xl:text-lg md:text-base sm-820:text-lg">
                        Real-Time Tracking
                      </h3>
                      <p className="text-[#F8F5F1] text-base 2xl:w-[70%] lg:text-base md:text-sm xl:text-md 2xl:text-lg sm-820:text-base">
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
                      <h3 className="text-[#FE6204] font-bold text-lg lg:text-xl md:text-base xl:text-xl 2xl:text-lg sm-820:text-lg">
                        Global Leaders
                      </h3>
                      <p className="text-[#F8F5F1] text-base 2xl:w-[70%] lg:text-base md:text-sm xl:text-md 2xl:text-lg sm-820:base">
                        Logistics company specializes in managing the
                        transportation.
                      </p>
                    </div>
                  </div>
                  <div className="  flex items-center bg-white text-[#FE6204] hover:bg-[#FE6204] hover:text-white  cursor-pointer  w-fit md:px-[3%] px-[2%] py-[1%] rounded-md mt-[8%] md:mt-[4rem]">
                    <a
                      href="/about"
                      className=" px-1 py-2 xl:py-2  2xl:py-2 rounded-lg text-xl md:text-sm xl:text-xl sm-820:text-base font-medium transition"
                    >
                      Know More
                    </a>
                    <FaChevronRight className=" text-sm ml-2 mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 "  data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="500">
            <img
              src={truck}
              className=" h-[50vh] 2xl:h-screen md:min-h-[60vh] md-1024:min-h-[45vh] lg:h-[80vh] sm-912:min-h-[43vh] xl:h-[700px] w-full"
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden block text-center mt-[3rem] relative">
        <div
          className="lg:w-[70%] w-[93%] mx-auto flex justify-center  p-[5%] items-center rounded-xl z-10 border-4 border-white"
          style={{ backgroundImage: `url(${bckgrd})` }}
        >
          <div className="lg:flex inline-block gap-4">
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
        <div className="grid lg:grid-cols-5  grid-cols-1 md:pt-[5%] pt-[10%] lg:p-[0%] p-[5%] rounded-lg">
          <div className="col-span-2 lg:col-span-4">
            <img
              src={truck}
              className="lg:h-[85vh] h-[50vh] md:h-[700px]  w-full rounded-t-md"
            />
          </div>
          <div className="col-span-3  lg:col-span-1 ">
            <div
              className="bg-[#290068]  relative md:px-[5%]  p-[1rem] pb-[6rem] h-[630px] md:h-[700px]  flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat "
              style={{ backgroundImage: `url(${map})` }}
            >
              <div className="absolute inset-0 bg-[#290068] opacity-5 "></div>

              <div className="md:w-[100%] w-[93%] md:mx-auto text-left   ">
                <h5 className="text-[#FE6204] md:text-lg text-base font-medium md:mt-[3rem]">
                  Trusted Path to Global Shipping!
                </h5>
                <img
                  src={HorizontalBorder}
                  className="absolute md:left-[5%] left-[1rem] md:top-[9%] top-[3rem] md:w-[45%] w-[85%]  "
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
                  <div className="  flex items-center bg-white text-[#FE6204] hover:bg-[#FE6204] hover:text-white  w-fit md:px-[3%] px-[2%] py-[1%] rounded-md mt-[8%]">
                    <a
                      href="#about"
                      className=" px-2 py-2 rounded-lg text-lg  font-medium transition"
                    >
                      Know More
                    </a>
                    <FaChevronRight className=" text-sm ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tomorrow;
