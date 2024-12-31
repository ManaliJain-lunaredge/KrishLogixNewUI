import React from "react";
import HorizontalBorder from "../assets/HorizontalBorder.png";
import team from "../assets/team.png";
import heading from "../assets/heading.png";

const Team = () => {
  return (
    <div>
      <div className="w-[70%] mx-auto text-center relative mt-[20%]">
        <h5 className="text-[#FE6204] md:text-lg text-base font-medium ">
          Dedicated Transportation Team
        </h5>
        <img
          src={HorizontalBorder}
          className="absolute left-[40%] top-[1%] md:w-[23%] w-[80%]  "
        />
        <h3 className="text-[#290068] md:text-3xl text-xl font-semibold font-poppins  leading-tight mt-[3%]">
          Deliver Fast
          <br /> Efficient
          <span className="border-b-4 border-[#FE6204]"> Transportation! </span>
        </h3>
        <p className="text-[#666666] text-base w-[30%] mt-[3%] mx-auto">
          Logistics company specializes in managing the transportation storage
          and distribution of goods.
        </p>
        <div className="flex gap-10 justify-center items-center mt-[3%]">
          <div>
            <div>
              <img src={team} className="relative" />
              <div
                className=" text-white absolute bottom-[10.2%] p-[1%]"
                style={{ backgroundImage: `url(${heading})` }}
              >
                Fleet Supervisor
              </div>
            </div>
            <p className="bg-[#F8F5F1] text-left text-black font-bold  p-[7%] text-xl rounded-br-md rounded-lr-md ">
              Devansh kumar
            </p>
          </div>
          <div>
            <div>
              <img src={team} className="relative" />
              <div
                className=" text-white absolute bottom-[10.2%] p-[1%]"
                style={{ backgroundImage: `url(${heading})` }}
              >
                Route Planner
              </div>
            </div>
            <p className="bg-[#F8F5F1] text-black font-bold text-left p-[7%] text-xl rounded-br-md rounded-lr-md ">
              Rohan kumar
            </p>
          </div>
          <div>
            <div>
              <img src={team} className="relative" />
              <div
                className=" text-white absolute bottom-[10.2%] p-[1%]"
                style={{ backgroundImage: `url(${heading})` }}
              >
                Dispatcher
              </div>
            </div>
            <p className="bg-[#F8F5F1] text-black font-bold text-left p-[7%] text-xl rounded-br-md rounded-lr-md ">
              Subham kumar
            </p>
          </div>
          <div>
            <div>
              <img src={team} className="relative" />
              <div
                className=" text-white absolute bottom-[10.2%] p-[1%]"
                style={{ backgroundImage: `url(${heading})` }}
              >
                Cargo Handler
              </div>
            </div>
            <p className="bg-[#F8F5F1] text-black font-bold text-left p-[7%] text-xl rounded-br-md rounded-lr-md ">
              Vedant kumar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
