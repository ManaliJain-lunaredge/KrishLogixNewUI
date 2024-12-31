import React from "react";
import bckgrd2 from "../assets/bckgrd2.png";
import HorizontalBorder from "../assets/HorizontalBorder.png";
import transportation from "../assets/transportation.png";
import bckgrd3 from "../assets/bckgrd3.png";
import image11 from "../assets/image-11.png";
import image12 from "../assets/image-12.png";
import image13 from "../assets/image-13.png";
const Deliver = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat text-center pt-[3%] relative h-[100vh] bg-[#F8F5F1]"
        style={{ backgroundImage: `url(${bckgrd2})` }}
      >
        <div>
          <h5 className="text-[#FE6204] md:text-lg text-base font-medium ">
            Our Working Process!
          </h5>
          <img
            src={HorizontalBorder}
            className="absolute left-[45.5%] top-[8%]  md:w-[11%] w-[80%]  "
          />
          <h3 className="text-[#290068] md:text-3xl text-xl font-semibold font-poppins  leading-tight pt-[2%]">
            How We Deliver
            <br /> Your
            <span className="border-b-4 border-[#FE6204]"> Parcel!</span>
          </h3>
          <p className="text-[#666666] text-base pt-[2%] w-[25%] mx-auto">
            Logistics company specializes in managing the transportation storage
            and distribution of goods.
          </p>
          <img src={transportation} className="w-[60%] mx-auto pt-[3%]" />
          <div className="absolute  top-[65%] left-[15%] text-left  ">
            <div className="w-[80%] p-[3%]" style={{ backgroundImage: `url(${bckgrd3})` }}>
              <h5 className="text-[#FE6204] md:text-lg text-base font-medium pt-[10%] ">
                Our Working Process!
              </h5>
              <img
                src={HorizontalBorder}
                className="absolute left-[3%] top-[33%]  md:w-[13%] w-[80%]  "
              />
              <h3 className="text-white md:text-3xl text-xl font-semibold font-poppins  leading-tight pt-[2%]">
                Ensure Safe Transportation
                <br /> Fast Delivery
                <span className="border-b-4 border-[#FE6204]"> Service!</span>
              </h3>
              <div className="flex items-center bg-[#FE6204]  text-white hover:bg-white hover:text-[#FE6204] w-[23%] px-[3%]  rounded-md mt-[5%]">
                <button
                  type="button"
                  className=" px-3 py-4 rounded-lg text-xl font-medium transition"
                >
                  Book Your Parcel
                </button>
              </div>
            </div>
            <div className="flex w-[80%] ">
              <div className="bg-[#F8F5F1] flex p-[2%]">
                <div>
                  <img src={image11} className="w-44 h-28" />
                </div>
                <div className="">
                  <h3 className="text-black font-bold text-xl mb-1 mt-2">
                    Road Freight
                  </h3>
                  <p className="text-[#666666]">
                  Logistics company specializes in
                  managing transport.
                  </p>
                </div>
              </div>
              <div className="bg-[#FE6204] flex p-[2%]">
                <div>
                  <img src={image12} className="w-44 h-28"/>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1 mt-2 ">
                    Ocean Freight
                  </h3>
                  <p className="text-white">
                  Logistics company specializes in
                  managing transport.
                  </p>
                </div>
              </div>
              <div className="bg-[#F8F5F1] flex p-[2%]">
                <div>
                  <img src={image13} className="w-44 h-28"/>
                </div>
                <div>
                  <h3 className="text-black font-bold text-xl mb-1 mt-2 ">
                  Air Freight
                  </h3>
                  <p className="text-[#666666]">
                  Logistics company specializes in
                  managing transport.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliver;
