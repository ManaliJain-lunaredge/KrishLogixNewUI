import React from "react";
import Header from "../Pages/Header";
import { FaChevronRight } from "react-icons/fa";
import hero_image from "../assets/hero_image.png";
import bus from "../assets/bus.png"

const Hero = () => {
  return (
    <div className="font-poppins">
      <div
        className="relative bg-[#14193E] text-center md:p-5 text-white  bg-cover bg-center bg-no-repeat md:h-[70vh]"
        style={{ backgroundImage: `url(${hero_image})` }}
      >
        <div className="absolute inset-0 bg-[#14193E] opacity-85"></div>

        <div className="relative z-10">
          <div className=" text-center h-[500px]">
            <div className="md:pt-[2%]">
              <Header />
            </div>
            <h3 className="text-white font-semibold text-3xl mt-[5%] mb-[1%]">
              Driving Excellence,{" "}
              <span className="text-[#FE6204]">In Dynamic World</span>
            </h3>
            <p className="text-white">
              Your trusted partner in freight forwarding, transportation, and
              logistics, we provide tailored <br />
              solutions to streamline your supply chain.
            </p>

            {/* Buttons Section */}
            <div className="flex justify-center space-x-4 mt-6">
              {/* Get Started Button */}
              <div className="flex items-center bg-[#FE6204] hover:bg-white hover:text-[#FE6204] px-[1%] py-[0.3%] rounded-md">
                <button
                  type="button"
                  className=" px-2 py-2  rounded-lg text-sm font-medium transition"
                >
                  Get Started
                </button>
                <FaChevronRight className="text-sm ml-2 " />
              </div>

              {/* Know More Button */}
              <div className="flex items-center bg-white text-[#FE6204]  hover:bg-[#FE6204] hover:text-white px-[1%] py-[0.3%] rounded-md">
                <button
                  type="button"
                  className=" px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  Know More
                </button>
                <FaChevronRight className=" text-sm ml-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[70%] left-[20%] text-center">
        <img src={bus} className="w-[70%] h-[80%] "/>
      </div>
      </div>
     
    </div>
  );
};

export default Hero;
