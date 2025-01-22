import React, { useRef } from "react";
import clientback from "../assets/Client/clientback.png";
import HorizontalBorder from "../assets/bar/HorizontalBorder.png";
import team from "../assets/Team/team.png";
import { TiStarOutline } from "react-icons/ti";
import { PiQuotesBold } from "react-icons/pi";
import { FiArrowRight } from "react-icons/fi";
import Slider from "react-slick";

const Client = () => {
  const sliderRef = useRef(null); 
  const sliderSettings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 2, 
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

  const Stars = () => {
    return (
      <div className="flex text-[#FE6204] font-bold text-xl  mt-[1rem]" >
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <TiStarOutline key={index} />
          ))}
      </div>
    );
  };

  const QuoteIcon = () => {
    return (
      <div className="bg-[#FE6204] text-white rounded-sm flex justify-center items-center p-3 font-bold text-xl">
        <PiQuotesBold />
      </div>
    );
  };
  const data = [
    {
      id: 1,
      name: "Devansh Kumar",
      desgination: "SUPERVISOR",
      description:
        "The delivery was incredibly fast and efficient! My package arrived a day earlier than expected, and the tracking updates. Highly recommended!",
    },
    {
      id: 2,
      name: "Shubham kumar",
      desgination: "SUPERVISOR",
      description:
        "  The delivery was incredibly fast and efficient! My package arrived a day earlier than expected, and the tracking updates. Highly recommended!",
    },
  ];
  return (
    <div>
      <div
        className="md:w-[100%] w-[100%] mx-auto 2xl:mt-[3rem] md:mt-[2rem] bg-cover md:p-[7%] 2xl:p-[3%] p-[12%] bg-center bg-no-repeat h-auto xl:h-[77vh] 2xl:h-[60vh] relative "
        style={{ backgroundImage: `url(${clientback})` }}
      >
        <div className="relative md:text-center text-left">
          <h5 className="text-[#FE6204] md:text-lg text-base font-medium ">
            Clients Testimonials
          </h5>
          <img
            src={HorizontalBorder}
            className="absolute md:left-[35%] lg:left-[38%]   lg:w-[26%] xl:w-[16%] xl:top-[23%] xl:left-[43%] 2xl:w-[12%] 2xl:left-[45%] 2xl:top-[29%]  left-[-0.5rem] lg:top-[18%] md:top-[16%] top-[1.3rem] md:w-[3%] w-[70%]  mt-[-2%]"
          />
          <h3 className="text-[#290068] md:text-3xl text-xl font-semibold font-poppins  leading-tight mt-[2%] md:py-[0.5rem] py-[1rem]">
            Customer
            <span className="border-b-4 border-[#FE6204]"> Reviews!</span>
          </h3>
          <p className="text-[#666666] mx-auto text-base md:w-[100%] lg:w-[40%] 2xl:w-[25%] xl:w-[50%] w-full mt-[2%] mb-[1rem]">
            Logistics company specializes in managing the transportation storage
            and distribution of goods.
          </p>
        </div>
        <div className="2xl:w-[85%] mx-auto">
          <Slider {...sliderSettings} ref={sliderRef}  // Add horizontal spacing
          >
            {data.map((item,index) => (
              <div key={item.id || index} className="px-2"> {/* Add padding here */}
              <div className="bg-[#F8F5F1]   p-[1rem] mt-[2%] relative rounded-md 2xl:mb-[2rem] md:mb-[3rem] lg:mb-[1rem] mb-[1rem]  " key={item.id || index} >
                <div className="absolute top-[15%] left-0 h-[70%] border-l-4 border-[#FE6204]"></div>
                <div className="flex gap-3">
                  <div className="bg-white border-white rounded-md border-4 p-1">
                    <img src={team} className="w-20 h-20 rounded-md" />
                  </div>
                  <div className="mt-[3%]">
                    <h3 className="text-[#FE6204] font-bold md:text-md text-xl">
                      {item.name}
                    </h3>
                    <h5 className="text-[#666666] md:text-sm text-md capitalize">
                      {item.desgination}
                    </h5>
                  </div>
                </div>
                <p className="pt-[2%] text-[#666666] md:text-md text-base font-normal">
                  {item.description}
                </p>
                <div className="flex justify-between mt-[3%]">
                  <Stars />
                  <QuoteIcon />
                </div>
              </div>
              </div>
            ))}
          </Slider>

          <div
            className="w-12 h-12 absolute right-2 md:top-[55%] md:right-[0.5rem] 2xl:right-[7rem] lg:right-[1rem] lg:top-[65%] top-[65%] rounded-full bg-[#290068] text-white border-2 border-white flex justify-center items-center cursor-pointer"
            onClick={() => sliderRef.current.slickNext()} // Move to the next slide
          >
            <FiArrowRight className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
