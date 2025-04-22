import React from "react";
import about_header from "../assets/About/about_header.png";
import services from "../assets/Services/services.png";
import HorizontalBorder from "../assets/bar/HorizontalBorder.png";
import solar_global from "../assets/Tomorrow/solar_global.png";
import carbon_storm_tracker from "../assets/Tomorrow/carbon_storm_tracker.png";
import { FaCheck } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import cost from "../assets/Cost/cost.png";
import bckgrd3 from "../assets/Deliver/bckgrd3.png";
import Contact from "../Components/Contact.jsx";
import Client from "../Components/Client.jsx";
import Team from "./Team";
import parcel_bg from "../assets/Deliver/parcel_bg.png";
import parcel from "../assets/Deliver/parcel.png";

const Services = () => {
  return (
    <div className="">
      <div
        className="bg-cover bg-no-repeat bg-center 2xl:h-[500px] h-[400px]  flex justify-center items-center"
        style={{ backgroundImage: `url(${about_header})` }}>
        <div className="text-center p-2 ">
          <h3 className="text-white font-semibold 2xl:text-5xl pt-[4rem] 2xl:pt-0  md:text-4xl lg:text-4xl text-4xl mb-[1%]">
            Our <span className="text-[#FE6204]">Services</span>
          </h3>
          <p className="text-white text-md pt-[1rem] px-[2rem] 2xl:text-xl  2xl:pt-[1.5rem] lg:text-xl max-w-4xl  mx-auto">
            Your trusted partner in freight forwarding, transportation, and
            logistics, we provide tailored solutions to streamline your supply
            chain.
          </p>
        </div>
      </div>
      {/* section1 */}
      <div className="grid md:grid-cols-5 2xl:grid-cols-5 md:gap-[2rem] 2xl:gap-[4rem] grid-cols-1   2xl:w-[80%] mx-auto 2xl:p-[3rem] p-[2rem] mt-[2rem]">
        <div className="md:col-span-2 2xl:col-span-2 relative md:flex justify-center items-center  2xl:block">
          <img src={services} className="" />
        </div>
        <div className="col-span-2 md:col-span-3 2xl:col-span-3 relative">
          <h5 className="text-[#FE6204] md:text-md lg:text-xl text-xl font-medium ms-1 2xl:mt-0 mt-[1.5rem] md:mt-0 ">
            Service1
          </h5>
          <img
            src={HorizontalBorder}
            className="md:w-[50%] 2xl:w-[25%] w-[80%] lg:top-[1rem] lg-1440:w-[30%] lg-1440:top-[1.5rem] xl:top-[7rem] xl:w-[50%] lg:w-[45%] absolute top-[3rem] md:top-[1rem] 2xl:top-[1rem]   2xl:left-[0rem] "
          />
          <h3 className="text-[#290068] md:text-base  2xl:text-3xl text-xl font-bold font-poppins lg:text-2xl   2xl:mt-[3rem] leading-tight mt-[2rem]">
            Leading Global Logistics & <br />
            Transportation
            <span className="border-b-4 border-[#FE6204]"> Agency!</span>
          </h3>
          <p className="mt-[6%] md:text-sm lg:text-base ">
            Logistics company specializes in managing the transportation,
            storage, and distribution of goods. It offers services such as
            freight forwarding, warehousing, inventory management, supply chain
            transportation logistic solutions.
          </p>
          <div>
            <div className="xl:flex    2xl:mt-[8%] mt-[8%] lg:mt-[5%] gap-5 md:gap-1 lg:gap-5">
              <div className="flex space-x-3 2xl:mb-[2rem] ">
                <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center md:w-[3rem] md:h-[3rem] 2xl:w-[5rem] 2xl:h-[4rem]  w-[4rem] h-[3rem] mt-[1%] ">
                  <img
                    src={carbon_storm_tracker}
                    className="md:h-6 lg:h-8 h-6 "
                  />
                </div>
                <div>
                  <h3 className="text-[#290068] font-bold 2xl:text-lg lg:text-lg text-lg md:text-base ">
                    Real-Time Tracking
                  </h3>
                  <p className="text-[#666666] 2xl:text-base text-base lg:text-base  md:text-sm">
                    Logistics company specializes in managing the
                    transportation.
                  </p>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center   md:w-[3rem] md:h-[3rem] 2xl:w-[5rem] 2xl:h-[4rem] w-[4rem] h-[3rem] mt-[1%]">
                  <img src={solar_global} className="md:h-6 lg:h-8 h-6" />
                </div>
                <div>
                  <h3 className="text-[#290068] font-bold 2xl:text-lg lg:text-lg text-lg md:text-base ">
                    Global Leaders
                  </h3>
                  <p className="text-[#666666] 2xl:text-base text-base lg:text-base  md:text-sm ">
                    Logistics company specializes in managing the
                    transportation.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[1.5rem] 2xl:mt-[0.5rem] ">
              <div className="flex space-x-3">
                <p className="text-[#FE6204] mt-1">
                  <FaCheck />
                </p>
                <p className="font-[500]  2xl:text-xl text-base lg:text-base md:text-sm">
                  Efficient management of freight transportation
                </p>
              </div>
              <div className="flex space-x-3">
                <p className="text-[#FE6204] mt-1">
                  <FaCheck />
                </p>
                <p className="font-[500]  2xl:text-xl text-base md:text-sm lg:text-base">
                  Specialized transport for fragile perishable
                </p>
              </div>
              <div className="flex space-x-3">
                <p className="text-[#FE6204] mt-1">
                  <FaCheck />
                </p>
                <p className="font-[500]  2xl:text-xl text-base md:text-sm lg:text-base">
                  Real-time tracking of shipments with updates
                </p>
              </div>
            </div>
            <div className="  mt-[3rem] ">
              {/* desktop */}
              <div className="flex items-center justify-center text-white bg-[#FE6204] hover:bg-slate-300 hover:cursor-pointer mt-[2rem] 2xl:mt-0 hover:text-[#FE6204] 2xl:w-[23%] md:w-[35%] w-[55%] 2xl:py-[0.5rem]  md:px-[1%] px-[2%]  py-[0.5%] rounded-md">
                <a
                  href="/contact"
                  className=" px-1 py-2  rounded-lg 2xl:text-xl text-xl  font-medium  md:text-base transition"
                >
                  Know More
                </a>
                <FaChevronRight className="2xl:text-sm text-xs ml-2 " />
              </div>
              {/* mobile */}
            </div>
          </div>
        </div>
      </div>
      {/* section2 */}
      <div
        style={{ backgroundImage: `url(${cost})` }}
        className="bg-cover bg-no-repeat">
        <div className="grid md:grid-cols-7 2xl:grid-cols-4 md:gap-[2rem] 2xl:gap-0 grid-cols-1  2xl:w-[80%] mx-auto 2xl:p-[3rem] p-[2rem]  ">
          <div className="md:col-span-4 2xl:col-span-2 relative">
            <h5 className="text-[#FE6204] md:text-md lg:text-xl text-xl font-medium ms-1  2xl:mt-0 ">
              Service2
            </h5>
            <img
              src={HorizontalBorder}
              className="md:w-[50%] 2xl:w-[25%] w-[80%] lg:top-[1rem] lg-1440:w-[30%] lg-1440:top-[1.5rem] xl:top-[7rem] xl:w-[50%] lg:w-[45%] absolute top-[1.5rem] md:top-[1rem] 2xl:top-[1rem]   2xl:left-[0rem] "
            />
            <h3 className="text-[#290068] md:text-base  2xl:text-3xl text-xl font-bold font-poppins lg:text-2xl   2xl:mt-[3rem] leading-tight mt-[2rem]">
              Leading Global Logistics & <br />
              Transportation
              <span className="border-b-4 border-[#FE6204]"> Agency!</span>
            </h3>
            <p className="mt-[6%] md:text-sm lg:text-base">
              Logistics company specializes in managing the transportation,
              storage, and distribution of goods. It offers services such as
              freight forwarding, warehousing, inventory management, supply
              chain transportation logistic solutions.
            </p>
            <div>
              <div className="xl:flex    2xl:mt-[8%] mt-[8%] md:mt-[5%] gap-5 md:gap-1 lg:gap-5">
                <div className="flex space-x-3 2xl:mb-[2rem] ">
                  <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center md:w-[3rem] md:h-[3rem] 2xl:w-[5rem] 2xl:h-[4rem]  w-[4rem] h-[3rem] mt-[1%] ">
                    <img
                      src={carbon_storm_tracker}
                      className="md:h-6 lg:h-8 h-6"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#290068] font-bold 2xl:text-lg lg:text-lg text-lg md:text-base">
                      Real-Time Tracking
                    </h3>
                    <p className="text-[#666666] text-base lg:text-base">
                      Logistics company specializes in managing the
                      transportation.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center   md:w-[3rem] md:h-[3rem] 2xl:w-[5rem] 2xl:h-[4rem] w-[4rem] h-[3rem] mt-[1%]">
                    <img src={solar_global} className="md:h-6 lg:h-8 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[#290068] font-bold 2xl:text-lg lg:text-lg text-lg md:text-base">
                      Global Leaders
                    </h3>
                    <p className="text-[#666666] text-base  lg:text-base ">
                      Logistics company specializes in managing the
                      transportation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[1.5rem] 2xl:mt-[0.5rem]">
                <div className="flex space-x-3">
                  <p className="text-[#FE6204] mt-1">
                    <FaCheck />
                  </p>
                  <p className="font-[500]  2xl:text-xl text-base md:text-sm lg:text-base">
                    Efficient management of freight transportation
                  </p>
                </div>
                <div className="flex space-x-3">
                  <p className="text-[#FE6204] mt-1">
                    <FaCheck />
                  </p>
                  <p className="font-[500] 2xl:text-xl text-base md:text-sm lg:text-base">
                    Specialized transport for fragile perishable
                  </p>
                </div>
                <div className="flex space-x-3">
                  <p className="text-[#FE6204] mt-1">
                    <FaCheck />
                  </p>
                  <p className="font-[500] 2xl:text-xl text-base md:text-sm lg:text-base">
                    Real-time tracking of shipments with updates
                  </p>
                </div>
              </div>
              <div className="  mt-[3rem] ">
                {/* desktop */}
                <div className="flex items-center justify-center text-white bg-[#FE6204] hover:bg-slate-300 hover:cursor-pointer mt-[2rem] 2xl:mt-0 hover:text-[#FE6204] 2xl:w-[25%] w-[55%] md:w-[35%] 2xl:py-[0.5rem]  md:px-[1%] px-[2%]  py-[0.5%] rounded-md">
                  <a
                    href="/contact"
                    className=" px-1 py-2  rounded-lg 2xl:text-xl text-xl  font-medium  md:text-base transition"
                  >
                    Know More
                  </a>
                  <FaChevronRight className="2xl:text-sm text-xs ml-2 " />
                </div>
                {/* mobile */}
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-3 2xl:col-span-2 2xl:mt-0 mt-[2rem] flex justify-center items-center">
            <img src={services} />
          </div>
        </div>
      </div>
      {/* section3 */}
      <div className="grid md:grid-cols-7 2xl:grid-cols-5 md:gap-[2rem] 2xl:gap-[4rem] grid-cols-1   2xl:w-[80%] mx-auto 2xl:p-[3rem] p-[2rem]">
        <div className="col-span-2 md:col-span-3 2xl:col-span-2 md:flex justify-center items-center 2xl:block">
          <img src={services} className="" />
        </div>
        <div className="col-span-2 md:col-span-4 2xl:col-span-3 relative">
          <h5 className="text-[#FE6204] md:text-md lg:text-xl text-xl font-medium ms-1 2xl:mt-0 mt-[1.5rem] md:mt-0 ">
            Service3
          </h5>
          <img
            src={HorizontalBorder}
            className="md:w-[50%] 2xl:w-[25%] w-[80%] lg-1440:w-[30%] lg-1440:top-[1.5rem] lg:top-[1rem] xl:top-[7rem] xl:w-[50%] lg:w-[45%] absolute top-[3rem] md:top-[1rem] 2xl:top-[1rem]   2xl:left-[0rem] "
          />
          <h3 className="text-[#290068] md:text-base  2xl:text-3xl text-xl font-bold font-poppins lg:text-2xl   2xl:mt-[3rem] leading-tight mt-[2rem]">
            Leading Global Logistics & <br />
            Transportation
            <span className="border-b-4 border-[#FE6204]"> Agency!</span>
          </h3>
          <p className="mt-[6%] md:text-sm lg:text-base ">
            Logistics company specializes in managing the transportation,
            storage, and distribution of goods. It offers services such as
            freight forwarding, warehousing, inventory management, supply chain
            transportation logistic solutions.
          </p>
          <div>
            <div className="xl:flex    2xl:mt-[8%] mt-[8%] lg:mt-[5%] gap-5 md:gap-1 lg:gap-5">
              <div className="flex space-x-3 2xl:mb-[2rem] ">
                <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center md:w-[3rem] md:h-[3rem] 2xl:w-[5rem] 2xl:h-[4rem]  w-[4rem] h-[3rem] mt-[1%] ">
                  <img
                    src={carbon_storm_tracker}
                    className="md:h-6 lg:h-8 h-6 "
                  />
                </div>
                <div>
                  <h3 className="text-[#290068] font-bold 2xl:text-lg lg:text-lg text-lg md:text-base ">
                    Real-Time Tracking
                  </h3>
                  <p className="text-[#666666] 2xl:text-base text-base lg:text-base  md:text-sm">
                    Logistics company specializes in managing the
                    transportation.
                  </p>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center   md:w-[3rem] md:h-[3rem] 2xl:w-[5rem] 2xl:h-[4rem] w-[4rem] h-[3rem] mt-[1%]">
                  <img src={solar_global} className="md:h-6 lg:h-8 h-6" />
                </div>
                <div>
                  <h3 className="text-[#290068] font-bold 2xl:text-lg lg:text-lg text-lg md:text-base ">
                    Global Leaders
                  </h3>
                  <p className="text-[#666666] 2xl:text-base text-base lg:text-base  md:text-sm ">
                    Logistics company specializes in managing the
                    transportation.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[1.5rem] 2xl:mt-[0.5rem]">
              <div className="flex space-x-3">
                <p className="text-[#FE6204] mt-1">
                  <FaCheck />
                </p>
                <p className="font-[500]  2xl:text-xl text-base lg:text-base md:text-sm">
                  Efficient management of freight transportation
                </p>
              </div>
              <div className="flex space-x-3">
                <p className="text-[#FE6204] mt-1">
                  <FaCheck />
                </p>
                <p className="font-[500]  2xl:text-xl text-base md:text-sm lg:text-base">
                  Specialized transport for fragile perishable
                </p>
              </div>
              <div className="flex space-x-3">
                <p className="text-[#FE6204] mt-1">
                  <FaCheck />
                </p>
                <p className="font-[500]  2xl:text-xl text-base md:text-sm lg:text-base">
                  Real-time tracking of shipments with updates
                </p>
              </div>
            </div>
            <div className="  mt-[3rem] ">
              {/* desktop */}
              <div className="flex items-center justify-center text-white bg-[#FE6204] hover:bg-slate-300 hover:cursor-pointer mt-[2rem] 2xl:mt-0 hover:text-[#FE6204] 2xl:w-[23%] w-[55%] md:w-[35%] 2xl:py-[0.5rem]  md:px-[1%] px-[2%]  py-[0.5%] rounded-md">
                <a
                  href="/contact"
                  className=" px-1 py-2  rounded-lg 2xl:text-xl text-xl  font-medium  md:text-base transition"
                >
                  Know More
                </a>
                <FaChevronRight className="2xl:text-sm text-xs ml-2 " />
              </div>
              {/* mobile */}
            </div>
          </div>
        </div>
      </div>
      {/* section4 */}
      <div
        style={{ backgroundImage: `url(${cost})` }}
        className="bg-cover bg-no-repeat"
      >
        <div className="grid md:grid-cols-7 2xl:grid-cols-4 gap-[2rem] grid-cols-1  2xl:w-[80%] mx-auto 2xl:p-[3rem] p-[2rem]  ">
          <div className="md:col-span-4 2xl:col-span-2 relative">
            <h5 className="text-[#FE6204] md:text-md lg:text-xl text-xl font-medium ms-1  2xl:mt-0 ">
              Service4
            </h5>
            <img
              src={HorizontalBorder}
              className="md:w-[50%] 2xl:w-[25%] w-[80%] lg-1440:w-[30%] lg-1440:top-[1.5rem] lg:top-[1rem] xl:top-[7rem] xl:w-[50%] lg:w-[45%] absolute top-[1.5rem] md:top-[1rem] 2xl:top-[1rem]   2xl:left-[0rem] "
            />
            <h3 className="text-[#290068] md:text-base  2xl:text-3xl text-xl font-bold font-poppins lg:text-2xl   2xl:mt-[3rem] leading-tight mt-[2rem]">
              Leading Global Logistics & <br />
              Transportation
              <span className="border-b-4 border-[#FE6204]"> Agency!</span>
            </h3>
            <p className="mt-[6%] md:text-sm lg:text-base">
              Logistics company specializes in managing the transportation,
              storage, and distribution of goods. It offers services such as
              freight forwarding, warehousing, inventory management, supply
              chain transportation logistic solutions.
            </p>
            <div>
              <div className="xl:flex    2xl:mt-[8%] mt-[8%] md:mt-[5%] gap-5 md:gap-1 lg:gap-5">
                <div className="flex space-x-3 2xl:mb-[2rem] ">
                  <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center md:w-[3rem] md:h-[3rem] 2xl:w-[5rem] 2xl:h-[4rem]  w-[4rem] h-[3rem] mt-[1%] ">
                    <img
                      src={carbon_storm_tracker}
                      className="md:h-6 lg:h-8 h-6"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#290068] font-bold 2xl:text-lg lg:text-lg text-lg md:text-base">
                      Real-Time Tracking
                    </h3>
                    <p className="text-[#666666] text-base lg:text-base">
                      Logistics company specializes in managing the
                      transportation.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="bg-[#FE6204] text-white rounded-md flex justify-center items-center   md:w-[3rem] md:h-[3rem]  2xl:w-[5rem] 2xl:h-[4rem] w-[4rem] h-[3rem] mt-[1%]">
                    <img src={solar_global} className="md:h-6 lg:h-8 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[#290068] font-bold 2xl:text-lg lg:text-lg text-lg md:text-base">
                      Global Leaders
                    </h3>
                    <p className="text-[#666666] text-base  lg:text-base ">
                      Logistics company specializes in managing the
                      transportation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[1.5rem] 2xl:mt-[0.5rem] ">
                <div className="flex space-x-3">
                  <p className="text-[#FE6204] mt-1">
                    <FaCheck />
                  </p>
                  <p className="font-[500]  2xl:text-xl text-base md:text-sm lg:text-base">
                    Efficient management of freight transportation
                  </p>
                </div>
                <div className="flex space-x-3">
                  <p className="text-[#FE6204] mt-1">
                    <FaCheck />
                  </p>
                  <p className="font-[500] 2xl:text-xl text-base md:text-sm lg:text-base">
                    Specialized transport for fragile perishable
                  </p>
                </div>
                <div className="flex space-x-3">
                  <p className="text-[#FE6204] mt-1">
                    <FaCheck />
                  </p>
                  <p className="font-[500] 2xl:text-xl text-base md:text-sm lg:text-base">
                    Real-time tracking of shipments with updates
                  </p>
                </div>
              </div>
              <div className="  mt-[3rem] ">
                {/* desktop */}
                <div className="flex items-center justify-center text-white bg-[#FE6204] hover:bg-slate-300 hover:cursor-pointer mt-[2rem] 2xl:mt-0 hover:text-[#FE6204] 2xl:w-[25%] w-[55%] md:w-[35%] 2xl:py-[0.5rem]  md:px-[1%] px-[2%]  py-[0.5%] rounded-md">
                  <a
                    href="/contact"
                    className=" px-1 py-2  rounded-lg 2xl:text-xl text-xl  font-medium  md:text-base transition"
                  >
                    Know More
                  </a>
                  <FaChevronRight className="2xl:text-sm text-xs ml-2 " />
                </div>
                {/* mobile */}
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-3 2xl:col-span-2 2xl:mt-0 mt-[2rem] flex justify-center items-center">
            <img src={services} />
          </div>
        </div>
      </div>
      <div className="pt-[3rem] hidden md:block">
        <div
          className="bg-cover 2xl:h-[500px] lg:h-[400px] h-[300px]  2xl:w-[79%] mx-auto 2xl:p-[5rem] md:pt-[3rem]  p-[5rem] relative"
          style={{ backgroundImage: `url(${bckgrd3})` }}
        >
          <h5 className="text-[#FE6204] md:text-base text-base font-medium pt-[10%] ">
            Our Working Process!
          </h5>
          <img
            src={HorizontalBorder}
            className="absolute left-[3%] top-[33%]  md:w-[31%] lg:w-[23%] lg-1440:top-[47%]  w-[80%] xl:w-[20%]  2xl:top-[46%] xl:top-[14%] md:top-[40%] lg:top-[37%] md:left-[4rem] "
          />
          <h3 className="text-white md:text-base text-xl font-semibold font-poppins 2xl:text-2xl leading-tight pt-[2%] md:w-[60%] lg:w-[40%] xl:w-[25%] 2xl:w-[30%] xl:text-lg md:mt-3  ">
            Ensure Safe Transportation Fast Delivery
            <span className="border-b-4 border-[#FE6204]"> Service!</span>
          </h3>
          <div className="flex items-center bg-[#FE6204]  text-white hover:bg-white hover:text-[#FE6204]  w-[23%] md:w-[25%] lg:w-[25%] xl:w-[18%] px-[3%] 2xl:w-[17%]  rounded-md mt-[4%] lg:mt-[3%] ">
            <a
              href="#contact"
              className=" px-3 md:px-0 md:py-2 2xl:px-[0rem] 2xl:py-[1rem] py-4 rounded-lg text-xl md:text-sm lg:text-lg font-medium transition hover:cursor-pointer"
            >
              Book Your Parcel
            </a>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="p-[5%] block md:hidden  h-[700px]">
        <div
          className="md:hidden w-full bg-cover bg-center  text-center mt-[2rem] relative h-full p-[7%] "
          style={{ backgroundImage: `url(${parcel_bg})` }}
        >
          <div className="relative mt-[1rem] text-left">
            <h5 className="text-[#FE6204] md:text-lg text-base font-medium ">
              Our Working Process!
            </h5>
            <img
              src={HorizontalBorder}
              className="absolute 2xl:left-[45.5%] 2xl:top-[8%]  2xl::w-[11%] w-[70%] left-[-0.5rem] top-[1rem] "
            />
            <h3 className="text-white md:text-3xl text-xl font-semibold font-poppins   py-[2rem] w-[80%]">
              Ensure Safe Transportation Fast Delivery
              <span className="border-b-4 border-[#FE6204]"> Service!</span>
            </h3>
          </div>

          <div className="flex items-center bg-[#FE6204]  text-white text-center hover:bg-white hover:text-[#FE6204] mx-auto  w-[69%] md:w-[28%] lg:w-[25%] xl:w-[18%] px-[5%]  2xl:w-[17%]  rounded-md mt-[9%]  ">
            <button
              type="button"
              className=" px-3 md:px-0 md:py-2 2xl:px-[0rem] 2xl:py-[1rem]  py-4 rounded-lg text-lg md:text-sm lg:text-lg font-medium transition hover:cursor-pointer"
            >
              Book Your Parcel
            </button>
          </div>
          <div className="">
            <img src={parcel} className="absolute bottom-0 left-[0.3rem]" />
          </div>
        </div>
      </div>
      <Team />
      <div className="2xl:w-[84%]  mx-auto ">
        <Contact />
      </div>
      <div className="2xl:pb-[5rem]">
        {" "}
        <Client />
      </div>
    </div>
  );
};

export default Services;
