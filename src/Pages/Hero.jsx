import React from "react";
import Header from "../Pages/Header";
import { FaChevronRight } from "react-icons/fa";
import hero_image from "../assets/Hero/hero_image.png";
import bus from "../assets/Hero/bus.png"

const Hero = () => {
  return (
    <div className="font-poppins">
      <div
        className="relative bg-[#14193E] text-center md:p-5 text-white rounded-md bg-cover bg-center bg-no-repeat 
        min-h-[50vh] md:min-h-[55vh] lg:min-h-[65vh] xl:min-h-[75vh] 2xl:min-h-[80vh]"
        style={{ backgroundImage: `url(${hero_image})` }}
      >
        <div className="absolute inset-0 bg-[#14193E] opacity-85"></div>

        <div className="relative z-10">
          <div className=" text-center h-[500px]">
            <div className="">
              <Header />
            </div>
          <div className="p-2">  <h3 className="text-white font-semibold 2xl:text-4xl md:text-2xl lg:text-4xl xl:mt-[5%] text-lg mt-[33%] md:mt-[14%] 2xl:mt-[4%] lg:mt-[22%] mb-[1%]">
              Driving Excellence,{" "}
              <span className="text-[#FE6204]">In Dynamic World</span>
            </h3>
            <p className="text-white text-sm 2xl:text-lg lg:text-xl">
              Your trusted partner in freight forwarding, transportation, and
              logistics, we provide tailored <br />
              solutions to streamline your supply chain.
            </p>

            {/* Buttons Section */}
            <div className="flex justify-center space-x-4 mt-6">
              {/* Get Started Button */}
              <div className="flex items-center bg-[#FE6204] hover:bg-slate-300 hover:cursor-pointer hover:text-[#FE6204] md:px-[1%] px-[2%]  py-[0.5%] rounded-md">
                <a
                  href="#contact"
                  className=" px-1 py-2  rounded-lg 2xl:text-sm text-xs  font-medium transition"
                >
                  Get Started
                </a>
                <FaChevronRight className="2xl:text-sm text-xs ml-2 " />
              </div>

              {/* Know More Button */}
              <div className="flex items-center bg-white text-[#FE6204]  hover:bg-slate-300 hover:cursor-pointer hover:text- md:px-[1%]  px-[2%] py-[0.5%] rounded-md">
                <a
                  href="#about"
                  className=" px-1 py-2 rounded-lg 2xl:text-sm text-xs font-medium transition"
                >
                  Know More
                </a>
                <FaChevronRight className=" 2xl:text-sm text-xs ml-2" />
              </div>
            </div></div>
          </div>
        </div>
        <div className="absolute md:top-[73%] lg:top-[38rem] top-[26rem] 2xl:left-[20%] 2xl:top-[26rem]  xl:top-[24rem] xl:left-[13%] md:left-[20%] lg:left-[13%]  left-[3rem]  text-center">
        <img src={bus} className="md:w-[80%] lg:w-[75vw] 2xl:w-[60vw] xl:h-[47vh] 2xl:h-[50vh] w-[85%] h-[80%] lg:h-[30vh] "/>
      </div>
      </div>
     
    </div>
  );
};

export default Hero;
