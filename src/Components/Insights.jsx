import React from "react";
import HorizontalBorder from "../assets/HorizontalBorder.png";
import { FaChevronRight } from "react-icons/fa";
import logistics1 from "../assets/logistics1.png";
import logistics2 from "../assets/logistics2.png";
import logistics3 from "../assets/logistics3.png";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BiSolidChevronRight } from "react-icons/bi";
const Insights = () => {
  return (
    <div>
      <div className="bg-[#F8F5F1]">
        <div className="w-[70%] mx-auto p-[3%]  mt-[5%] ">
          <div className="relative">
            <h5 className="text-[#FE6204] md:text-lg text-base font-medium ">
              Blogs & News updates
            </h5>
            <img
              src={HorizontalBorder}
              className="absolute left-[0%] top-[10%] md:w-[18%] w-[80%]  "
            />
            <h3 className="text-[#290068] md:text-3xl text-xl font-semibold font-poppins  leading-tight mt-[2%]">
              Find All Your Logistics <br /> Insights
              <span className="border-b-4 border-[#FE6204]"> Here!</span>
            </h3>
            <div className="flex absolute right-0 cursor-pointer items-center bg-[#FE6204] text-white w-[15%] hover:bg-[#290068]  px-[1%] py-[0.5%] rounded-md">
              <button
                type="button"
                className=" px-1 py-2 rounded-lg text-md font-medium transition"
              >
                View All Updates
              </button>
              <FaChevronRight className=" text-xs ml-2" />
            </div>
          </div>
          <div className="flex mt-[7%] justify-between">
            <div className="w-[30%]">
              <div className="relative">
                <img src={logistics1} className="w-full" />
                <div className="absolute right-[5%] top-[15%] flex ">
                  <span className="bg-[#FE6204] text-white px-2 py-1">10</span>
                  <span className="bg-white text-xs flex justify-center items-center font-semibold text-[#290068] px-2 py-1">
                    JAN 2025
                  </span>
                </div>
              </div>
              <div className="bg-white p-4 leading-loose">
                <h3 className="text-[#FE6204] font-semibold text-lg">
                  Optimizing Efficiency in Supply
                  <br /> Chains
                </h3>
                <div className="flex gap-4">
                  <div className="flex gap-2 text-sm mb-2">
                    <div className="mt-2">
                      <FaRegUser />
                    </div>
                    <div>
                      <p className="mt-[6%]">Shubham kumar</p>
                    </div>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <div className="mt-2">
                      <FaRegBookmark />
                    </div>
                    <div>
                      <p className="mt-[6%]">Supply chain</p>
                    </div>
                  </div>
                </div>
                <p className="leading-tight text-[#666666] mb-2">
                  Discover key trends, innovations, and logistic challenges
                  shaping the future of global transportation.
                </p>
                <div className="flex mt-[3%] text-[#290068] font-semibold">
                  <button>Read More </button>
                  <div className="flex mt-[3%] font-bold ">
                    <BiSolidChevronRight />
                    <BiSolidChevronRight className="ml-[-25%]"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[30%]">
              <div className="relative">
                <img src={logistics2} />
                <div className="absolute right-[5%] top-[15%] flex ">
                  <span className="bg-[#FE6204] text-white px-2 py-1">10</span>
                  <span className="bg-white text-xs flex justify-center items-center font-semibold text-[#290068] px-2 py-1">
                    JAN 2025
                  </span>
                </div>
              </div>
              <div className="bg-white p-4 leading-loose">
                <h3 className="text-[#FE6204] font-semibold text-lg">
                  Revolutionizing Logistics for Unmatched Efficiency
                </h3>
                <div className="flex gap-4">
                  <div className="flex gap-2 text-sm mb-2">
                    <div className="mt-2">
                      <FaRegUser />
                    </div>
                    <div>
                      <p className="mt-[6%]">Varun Kumar</p>
                    </div>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <div className="mt-2">
                      <FaRegBookmark />
                    </div>
                    <div>
                      <p className="mt-[6%]">Logistics</p>
                    </div>
                  </div>
                </div>
                <p className="leading-tight text-[#666666] mb-2">
                  Discover how cutting-edge technologies and innovative
                  strategies are transforming logistics, ensuring faster,
                  smarter.
                </p>
                <div className="flex mt-[3%] text-[#290068] font-semibold">
                  <button>Read More </button>
                  <div className="flex mt-[3%] font-bold ">
                    <BiSolidChevronRight />
                    <BiSolidChevronRight className="ml-[-25%]"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%]">
              <div className="relative">
                <img src={logistics3} />
                <div className="absolute right-[5%] top-[15%] flex ">
                  <span className="bg-[#FE6204] text-white px-2 py-1">10</span>
                  <span className="bg-white text-xs flex justify-center items-center font-semibold text-[#290068] px-2 py-1">
                    JAN 2025
                  </span>
                </div>
              </div>
              <div className="bg-white p-4 leading-loose">
                <h3 className="text-[#FE6204] font-semibold text-lg">
                  Driving Innovation in Logistics to Optimize Operations
                </h3>
                <div className="flex gap-4">
                  <div className="flex gap-2 text-sm mb-2">
                    <div className="mt-2">
                      <FaRegUser />
                    </div>
                    <div>
                      <p className="mt-[6%]">Rahul Kumar</p>
                    </div>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <div className="mt-2">
                      <FaRegBookmark />
                    </div>
                    <div>
                      <p className="mt-[6%]">Supply chain</p>
                    </div>
                  </div>
                </div>
                <p className="leading-tight text-[#666666] mb-2">
                  Learn how advanced solutions are reshaping logistics, reducing
                  costs, and enhancing supply chain efficiency like never
                  before.
                </p>
                <div className="flex mt-[3%] text-[#290068] font-semibold">
                  <button>Read More </button>
                  <div className="flex mt-[3%] font-bold ">
                    <BiSolidChevronRight />
                    <BiSolidChevronRight className="ml-[-25%]"/>
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

export default Insights;
