import React from "react";
import about from "../assets/About/about.png";
import HorizontalBorder from "../assets/bar/HorizontalBorder.png";
import solar_global from "../assets/Tomorrow/solar_global.png";
import carbon_storm_tracker from "../assets/Tomorrow/carbon_storm_tracker.png";
import { FaCheck } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import "../Components/Style/Style.css"

const About = () => {
  return (
    <div className="md:w-[80%] 2xl:w-[75%] lg:w-[90%] w-[100%] mx-auto text-center lg:flex lg:pt-[7rem]  pt-[5rem] pb-[1%] 2xl:pt-[12%]  " id="about"> 
      <div className="2xl:p-0 p-3 flex justify-center items-center">
        {/* <img src={about} className="w-full  h-full" /> */}
        <img
          src={about}
          className="md:w-[70%] lg:w-[100%] 2xl:w-[80%] lg:ms-[7rem]  xl:w-[82%] flex w-[90%] h-auto ms-[4%] object-cover"
        />
      </div>
      <div className=" text-left   relative 2xl:p-0 p-[7%]">
        <h5 className="text-[#FE6204] md:text-lg text-base font-medium ms-1 ">
          Trusted Path to Global Shipping!
        </h5>
        <img
          src={HorizontalBorder}
          className="md:w-[55%] 2xl:w-[60%] w-[80%] lg:top-[5rem] xl:top-[7rem] xl:w-[50%] lg:w-[75%] absolute top-[2.5rem] md:top-[3rem] 2xl:top-[1rem]   2xl:left-[0rem] "
        />
        <h3 className="text-[#290068] md:text-3xl 2xl:text-3xl text-xl font-bold font-poppins lg:text-xl  2xl:mt-[3rem] leading-tight mt-[2rem]">
          Leading Global Logistics & <br />
          Transportation
          <span className="border-b-4 border-[#FE6204]"> Agency!</span>
        </h3>
        <p className="mt-[6%] ">
          Logistics company specializes in managing the transportation, storage,
          and distribution of goods. It offers services such as freight
          forwarding, warehousing, inventory management, supply chain
          transportation logistic solutions.
        </p>
        <div>
          <div className="  mt-[8%] gap-5">
            <div className="flex space-x-3 2xl:mb-[2rem] ">
              <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center md:w-[5rem] md:h-[4rem]  w-[7rem] h-[4rem] mt-[1%] ">
                <img src={carbon_storm_tracker} className="" />
              </div>
              <div>
                <h3 className="text-[#290068] font-bold text-lg">
                  Real-Time Tracking
                </h3>
                <p className="text-[#666666] text-base 2xl:w-[60%]">
                  Logistics company specializes in
                
                  managing the transportation.
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center   md:w-[5rem] md:h-[4rem] w-[7rem] h-[4rem] mt-[1%]">
                <img src={solar_global} className="" />
              </div>
              <div>
                <h3 className="text-[#290068] font-bold text-lg">
                  Global Leaders
                </h3>
                <p className="text-[#666666] text-base 2xl:w-[60%]">
                  Logistics company specializes in
                 
                  managing the transportation.
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-[10%]">
            <div className="flex space-x-3">
              <p className="text-[#FE6204] mt-1">
                <FaCheck />
              </p>
              <p className="font-[500]  ">
                Efficient management of freight transportation
              </p>
            </div>
            <div className="flex space-x-3">
              <p className="text-[#FE6204] mt-1">
                <FaCheck />
              </p>
              <p className="font-[500]">
                Specialized transport for fragile perishable
              </p>
            </div>
            <div className="flex space-x-3">
              <p className="text-[#FE6204] mt-1">
                <FaCheck />
              </p>
              <p className="font-[500]">
                Real-time tracking of shipments with updates
              </p>
            </div>
          </div>
          <div className="  mt-[10%] ">
            {/* desktop */}
            <div className=" xl:flex hidden gap-12">
              <a href="#contact" className="bg-[#FE6204] hover:bg-[#290068] hover:cursor-pointer  px-[3%]  py-[3%] 2xl:w-[70%] h-[50%] text-lg rounded-md flex  justify-center items-center font-semibold text-white">
                More About us
              </a>
              <div className="flex gap-3 ">
                <div className="bg-[#290068] text-white w-14 h-14  border-2 border-pink-200  rounded-full flex justify-center items-center text-2xl">
                  <IoCallOutline />
                </div>
                <div>
                  <h3 className="text-[#290068] font-bold text-lg whitespace-nowrap">
                    Have Any Questions?
                  </h3>
                  <p className="text-[#666666] text-base"><a href="tel:+919876543214">+91 9876543214</a></p>
                </div>
              </div>
            </div>
            {/* mobile */}
            <div className=" xl:hidden block space-x-16 space-y-6 ">
              <div className="flex md:space-x-4 space-x-4 ">
                <div className="bg-[#290068] text-white w-14 h-14  border-2 border-pink-200  rounded-full flex justify-center items-center text-2xl">
                  <IoCallOutline />
                </div>
                <div>
                  <h3 className="text-[#290068] font-bold text-lg whitespace-nowrap">
                    Have Any Questions?
                  </h3>
                  <p className="text-[#666666] text-base"><a href="tel:+919876543214">+91 9876543214</a></p>
                </div>
              </div>
              <a href="#contact" className="bg-[#FE6204] px-[10%] lg:w-[65%]  py-[3%] w-[70%] md:w-[44%] h-[50%] hover:bg-[#290068] hover:cursor-pointer text-lg rounded-md flex  justify-center items-center font-semibold text-white">
                More About us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
