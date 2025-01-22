import React from "react";
import HorizontalBorder from "../assets/bar/HorizontalBorder.png";
import team from "../assets/Team/team.png";
import heading from "../assets/Team/heading.png";
import Slider from "react-slick";

const Team = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const data = [
    {
      id: 1,
      name: "Devansh kumar",
      designation: "Fleet Supervisor",
      img: team,
    },
    {
      id: 2,
      name: "Rohan kumar",
      designation: "Route Planner",
      img: team,
    },
    {
      id: 3,
      name: "Subham kumar",
      designation: "Dispatcher",
      img: team,
    },
    {
      id: 4,
      name: "Vedant kumar",
      designation: "Cargo Handler",
      img: team,
    },
  ];
  return (
    <div>
      <div className="md:w-[90%] w-[90%] mx-auto text-center relative pt-[3rem] md:pt-[8rem] lg:pt-[10rem] 2xl:pt-[12rem]  p-[5%]  " >
        <h5 className="text-[#FE6204] md:text-lg text-base font-medium ">
          Dedicated Transportation Team
        </h5>
        <img
          src={HorizontalBorder}
          className="absolute left-[2rem] top-[4rem] md:w-[50%] lg:w-[35%] xl:w-[23%] xl:left-[35rem] xl:top-[6rem]  2xl:top-[13rem] 2xl:left-[44rem] 2xl:w-[19%] lg:left-[20rem] lg:top-[11rem]  md:left-[12rem] md:top-[8.5rem]  w-[85%]  "
        />
        <h3 className="text-[#290068] md:text-2xl text-xl font-semibold  font-poppins  leading-tight md:mt-[0%] py-[2rem] 2xl:py-[2rem] xl:py-[2rem]  ">
          Deliver Fast
          <br /> Efficient
          <span className="border-b-4 border-[#FE6204]"> Transportation! </span>
        </h3>
        <p className="text-[#666666] text-base md:w-[80%] lg:w-full mt-[0%] 2xl:w-[30%]  w-[100%] mx-auto mb-[2rem]">
          Logistics company specializes in managing the transportation storage
          and distribution of goods.
        </p>

        <Slider {...sliderSettings}>
          {data.map((item,index) => (
            
            <div className="w-[70%] 2xl:mb-[2rem] mb-[1rem] " key={item.id || index} >
              <div className="relative 2xl:me-3 xl:me-3 lg:me-3 md:me-3 me-2">
                <img src={team} className=" object-fill sm:w-[100%]" />
                <div className="absolute bottom-0   ">
                  <img src={heading} className=" z-0" />
                  <p className="absolute left-[5%] bottom-[15%] text-white  md:text-sm  z-30 ">
                    {item.designation}
                  </p>
                </div>
              </div>
              <div className="bg-[#F8F5F1] text-left md:text-base lg:text-lg text-black font-bold  text-xl p-4 rounded-br-md rounded-lr-md 2xl:me-3 xl:me-3 lg:me-3 md:me-3 me-2">
                {item.name}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
