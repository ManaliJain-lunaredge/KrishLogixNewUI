import React from "react";
import cost from "../assets/cost.png";
import HorizontalBorder from "../assets/HorizontalBorder.png";
import image01 from "../assets/image-01.png";
import image02 from "../assets/image-02.png";
import image03 from "../assets/image-03.png";
import image04 from "../assets/image-04.png";
import image05 from "../assets/image-05.png";
import image06 from "../assets/image-06.png";
import card from "../assets/card.png";
import bar from "../assets/bar.png";
const Services = () => {
  return (
    <div>
      <div
        className=" bg-cover bg-center bg-no-repeat  text-center p-[3%] relative"
        style={{ backgroundImage: `url(${cost})` }}
      >
        <div>
          <h5 className="text-[#FE6204] md:text-lg text-base font-medium ">
            Trusted Path to Global Shipping!
          </h5>
          <img
            src={HorizontalBorder}
            className="absolute left-[43%] top-[15%] md:w-[16%] w-[80%]  mt-[-2%]"
          />
          <h3 className="text-[#290068] md:text-3xl text-xl font-semibold font-poppins  leading-tight mt-[2%]">
            Offering Cost Efficient <br /> Transport
            <span className="border-b-4 border-[#FE6204]"> Shipping!</span>
          </h3>
          <p className="text-[#666666] text-base mt-[1.5%]">
            Logistics company specializes in managing the transportation
            <br />
            storage and distribution of goods.
          </p>
        </div>

        <div>
          <div className="flex justify-center items-center space-x-4 mt-[2%]">
            <div className="border-2 border-slate-200 w-[20%] ">
              <div className="relative">
                <img src={image01} className=" mx-auto" />
                <span className="w-[30px] h-20px bg-orange-500"></span>
              </div>
              <div
                className="p-[5%] text-left bg-white relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${card})` }}
              >
                <div className="absolute top-[-25%] bg-[#F8F5F1] rounded-md p-[4%] z-10">
                  <img src={image04} className="w-12 h-12" />
                </div>
                <div className="absolute left-[8%] top-[-2%] z-0">
                  <img src={bar} />
                </div>
                <h3 className="text-[#FE6204] font-semibold text-xl mb-3 mt-6">
                  Road Freight
                </h3>
                <p className="text-[#666666]">
                  Logistics company truly specializes in managing the
                  transportation storage and distribution of basic logistics
                  goods.
                </p>
              </div>
            </div>
            <div className="border-2 border-slate-200 w-[20%] ">
              <div>
                <img src={image02} className=" mx-auto" />
              </div>
              <div
                className="p-[5%] text-left  relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${card})` }}
              >
                <div className="absolute top-[-25%] bg-[#F8F5F1] rounded-md p-[4%] z-10">
                  <img src={image05} className="w-12 h-12" />
                </div>
                <div className="absolute left-[8%] top-[-2%] z-0">
                  <img src={bar} />
                </div>
                <h3 className="text-[#FE6204] font-semibold text-xl mb-3 mt-6 ">
                  Ocean Freight
                </h3>
                <p className="text-[#666666]">
                  Logistics company truly specializes in managing the
                  transportation storage and distribution of basic logistics
                  goods.
                </p>
              </div>
            </div>
            <div className="border-2 border-slate-200 w-[20%] ">
              <div>
                <img src={image03} className=" mx-auto" />
              </div>
              <div
                className="p-[5%] text-left bg-white relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${card})` }}
              >
                <div className="absolute top-[-25%] bg-[#F8F5F1] rounded-md p-[4%] z-10">
                  <img src={image06} className="w-12 h-12" />
                </div>
                <div className="absolute left-[8%] top-[-2%] z-0">
                  <img src={bar} />
                </div>
                <h3 className="text-[#FE6204] font-semibold text-xl mb-3  mt-6">
                  Air Freight
                </h3>
                <p className="text-[#666666]">
                  Logistics company truly specializes in managing the
                  transportation storage and distribution of basic logistics
                  goods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
