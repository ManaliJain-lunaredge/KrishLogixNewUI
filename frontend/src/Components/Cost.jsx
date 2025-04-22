import React from "react";
import cost from "../assets/Cost/cost.png";
import HorizontalBorder from "../assets/bar/HorizontalBorder.png";
import image01 from "../assets/Cost/image-01.png";
import image02 from "../assets/Cost/image-02.png";
import image03 from "../assets/Cost/image-03.png";
import image04 from "../assets/Cost/image-04.png";
import image05 from "../assets/Cost/image-05.png";
import image06 from "../assets/Cost/image-06.png";
import card from "../assets/Cost/card.png";
import bar from "../assets/Cost/bar.png";
import Slider from "react-slick";
import Heading from "./Heading";

const Cost = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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
      name: "Road Freight",
      description:
        "Logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods.",
      image: image01,
      sign: image04,
    },
    {
      id: 2,
      name: "Ocean Freight",
      description:
        "Logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods.",
      image: image02,
      sign: image05,
    },
    {
      id: 3,
      name: "Air Freight",
      description:
        "Logistics company truly specializes in managing the transportation storage and distribution of basic logistics goods.",
      image: image03,
      sign: image06,
    },
  ];

  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat text-center md:p-[5%] 2xl:p-[3%] 2xl:mt-[3rem] p-[9%] relative"
        style={{ backgroundImage: `url(${cost})` }}
        id="cost"
      >
        <div>
          <div className="md:w-[70% ] w-[100%] md:text-center text-left  ">
            {/* <h5 className="text-[#FE6204] md:text-lg text-base font-medium ">
              Trusted Path to Global Shipping!
            </h5>
            <img
              src={HorizontalBorder}
              className="absolute left-[1.5rem] top-[3rem]  md:top-[3rem] md:left-[30%] md:w-[43%] w-[75%] lg:top-[4rem] lg:left-[36%] lg:w-[32%] xl:top-[5rem] xl:left-[39%] xl:w-[25%] 2xl:top-[4.5rem] 2xl:left-[42%] 2xl:w-[18%]   "
            /> */}
            <div className="w-full text-center">
              <Heading
                heading_text=" Trusted Path to Global Shipping!"
                align="center"
              />
            </div>

            <h3 className="text-[#290068] md:text-3xl text-xl font-semibold font-poppins leading-tight mt-[2%] py-[2rem] md:py-[1rem] ">
              Offering Cost Efficient <br /> Transport
              <span className="border-b-4 border-[#FE6204]"> Shipping!</span>
            </h3>
            <p className="text-[#666666] text-base 2xl:text-lg mt-[1.5%] mb-[2rem] 2xl:w-[30%] w-[100%] md:w-[60%] lg:w-[40%] mx-auto">
              Logistics company specializes in managing the transportation
              storage and distribution of goods.
            </p>
          </div>

          <div className="mt-[2%] w-[100%]  mx-auto  lg:w-[86%] xl:w-[90%] 2xl:w-[86%]">
            <Slider {...sliderSettings}>
              {data.map((item, index) => {
                const animations = ["fade-up", "zoom-in", "fade-down"]; // Add more if needed
                const animation = animations[index % animations.length]; // Cycle through animations

                return (
                  <div
                    className="px-2"
                    key={index}
                    data-aos={animation}
                    data-aos-delay={index * 100}
                  >
                    <div
                      key={item.id}
                      className="flex group justify-center cursor-pointer 2xl:mb-[3rem] mb-[1rem]"
                    >
                      <div>
                        <div className="relative">
                          <img src={item.image} className="mx-auto w-full" />
                        </div>
                        <div
                          className="p-[5%] text-left bg-white relative bg-cover bg-center bg-no-repeat"
                          style={{ backgroundImage: `url(${card})` }}
                        >
                          <div className="absolute top-[-25%] bg-[#F8F5F1] group-hover:bg-[#cbd5e1] rounded-md p-[4%] z-10">
                            <img src={item.sign} className="w-12 h-12" />
                          </div>
                          <div className="absolute left-[8%] top-[-2%] z-0">
                            <img src={bar} />
                          </div>
                          <h3 className="text-[#FE6204] group-hover:text-[#290068] font-semibold text-xl mb-3 mt-6">
                            {item.name}
                          </h3>
                          <p className="text-[#666666] group-hover:text-[#FE6204] ">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cost;
