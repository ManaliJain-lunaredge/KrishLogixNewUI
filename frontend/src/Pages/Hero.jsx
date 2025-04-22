import React from "react";
import Header from "../Pages/Header";
import { FaChevronRight } from "react-icons/fa";
import hero_image from "../assets/Header/Hero/hero_image.png";
import bus from "../assets/Header/Hero/bus.png";

const Hero = () => {
  return (
    <div className="font-poppins ">
      <div
        className="relative bg-[#14193E] text-center md:p-5 text-white rounded-md bg-cover bg-center bg-no-repeat 
        min-h-[50vh] md:min-h-[55vh] lg:min-h-[75vh] xl:min-h-[92vh] sm-912:min-h-[40vh] 2xl:min-h-[80vh]  lg-1440:min-h-[92vh] xl-1560:min-h-[90vh] "
        style={{ backgroundImage: `url(${hero_image})` }}
      >
        <div className="absolute inset-0 bg-[#14193E] opacity-85"></div>

        <div className="relative z-10">
          <div className=" text-center h-[500px]">
            <div className=""></div>
            <div className="p-2">
              {" "}
              <h3
                className="text-white font-semibold 2xl:text-4xl md:text-2xl sm-820:text-4xl lg:text-4xl xl:mt-[10%] lg-1440:mt-[10%] text-lg mt-[50%] md:mt-[19%] 2xl:mt-[4%] lg:mt-[14%] sm-912:mt-[12%] mb-[1%] xl-1560:pt-[3%]"
                data-aos="zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="500"
              >
                Driving Excellence,{" "}
                <span className="text-[#FE6204]">In Dynamic World</span>
              </h3>
              <p className="text-white text-sm 2xl:text-lg lg:text-xl sm-820:text-base">
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
              </div>
            </div>
          </div>
        </div>
        <div className="absolute md:top-[65%] lg:top-[27rem] top-[26rem] 2xl:left-[20%] 2xl:top-[26rem]  xl:top-[24rem] lg-1440:top-[28rem] sm-912:top-[60%] xl-1560:top-[31rem] xl:left-[13%] md:left-[11%] sm-820:left-[8%] lg:left-[13%]  left-[2rem]  text-center">
          <img
            src={bus}
            className="md:w-[90%] lg:w-[75vw]  2xl:w-[60vw] xl:h-[55vh] 2xl:h-[50vh] w-[90%] h-[80%] lg:h-[36vh] lg-1440:h-[55vh] sm-820:w-[90%]"
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="1000"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
