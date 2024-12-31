import React from "react";
import about from "../assets/about.png";
import HorizontalBorder from "../assets/HorizontalBorder.png";
import solar_global from "../assets/solar_global.png";
import carbon_storm_tracker from "../assets/carbon_storm_tracker.png";
import { FaCheck } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="md:w-[60%] w-[100%] mx-auto text-center md:grid md:grid-cols-4 gird-cols-1  pt-[20%] pb-[3%]">
      <div className="col-span-1 md:col-span-2 ">
        {/* <img src={about} className="w-full  h-full" /> */}
        <img
          src={about}
          className="md:w-[95%] w-[90%] h-auto ms-[4%] object-cover"
        />
      </div>
      <div className="col-span-2 md:col-span-2 text-left p-[5%] pt-0 relative">
        <h5 className="text-[#FE6204] md:text-lg text-base font-medium ">
          Trusted Path to Global Shipping!
        </h5>
        <img
          src={HorizontalBorder}
          className="md:w-[55%] w-[80%] absolute top-[3%] mt-[-2%]"
        />
        <h3 className="text-[#290068] md:text-3xl text-xl font-bold font-poppins  leading-tight mt-[3%]">
          Leading Global Logistics & <br />
          Transportation
          <span className="border-b-4 border-[#FE6204]">Agency!</span>
        </h3>
        <p className="mt-[6%]">
          Logistics company specializes in managing the transportation, storage,
          and distribution of goods. It offers services such as freight
          forwarding, warehousing, inventory management, supply chain
          transportation logistic solutions.
        </p>
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1  mt-[6%] gap-5">
            <div className="flex space-x-3 ">
              <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center  w-[50%] h-[50%] mt-[1%] ">
                <img src={carbon_storm_tracker} className="" />
              </div>
              <div>
                <h3 className="text-[#290068] font-bold text-lg">
                  Real-Time Tracking
                </h3>
                <p className="text-[#666666] text-base ">
                  Logistics company specializes in
                
                  managing the transportation.
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center   w-[50%] h-[50%] mt-[1%]">
                <img src={solar_global} className="" />
              </div>
              <div>
                <h3 className="text-[#290068] font-bold text-lg">
                  Global Leaders
                </h3>
                <p className="text-[#666666] text-base">
                  Logistics company specializes in
                 
                  managing the transportation.
                </p>
              </div>
            </div>
          </div>
          <div className="  mt-[6%]">
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
          <div className="  mt-[6%]">
            {/* desktop */}
            <div className="md:flex hidden space-x-16 ">
              <div className="bg-[#FE6204] hover:bg-[#290068]  px-[2%]  py-[2%] w-[30%] h-[50%] text-lg rounded-md flex justify-center items-center font-semibold text-white">
                More About us
              </div>
              <div className="flex md:space-x-4 space-x-4 ">
                <div className="bg-[#290068] text-white w-14 h-14  border-2 border-pink-200  rounded-full flex justify-center items-center text-2xl">
                  <IoCallOutline />
                </div>
                <div>
                  <h3 className="text-[#290068] font-bold text-lg whitespace-nowrap">
                    Have Any Questions?
                  </h3>
                  <p className="text-[#666666] text-base">+91 987654321</p>
                </div>
              </div>
            </div>
            {/* mobile */}
            <div className="md:hidden block space-x-16 space-y-6 ">
              <div className="flex md:space-x-4 space-x-4 ">
                <div className="bg-[#290068] text-white w-14 h-14  border-2 border-pink-200  rounded-full flex justify-center items-center text-2xl">
                  <IoCallOutline />
                </div>
                <div>
                  <h3 className="text-[#290068] font-bold text-lg whitespace-nowrap">
                    Have Any Questions?
                  </h3>
                  <p className="text-[#666666] text-base">+91 987654321</p>
                </div>
              </div>
              <div className="bg-[#FE6204] px-[10%]  py-[3%] w-[70%] h-[50%] text-lg rounded-md flex justify-center items-center font-semibold text-white">
                More About us
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
