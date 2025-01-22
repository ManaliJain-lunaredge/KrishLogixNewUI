import React from "react";
import bckgrd2 from "../assets/Deliver/bckgrd2.png";
import HorizontalBorder from "../assets/bar/HorizontalBorder.png";
import transportation from "../assets/Deliver/transportation.png";
import bckgrd3 from "../assets/Deliver/bckgrd3.png";
import image11 from "../assets/Deliver/image-11.png";
import image12 from "../assets/Deliver/image-12.png";
import image13 from "../assets/Deliver/image-13.png";
import parcel from "../assets/Deliver/parcel.png";
import parcel_bg from "../assets/Deliver/parcel_bg.png";
import copy1 from "../assets/Deliver/copy1.png";
import copy2 from "../assets/Deliver/copy2.png";
import copy3 from "../assets/Deliver/copy3.png";
import copy4 from "../assets/Deliver/copy4.png";
import Slider from "react-slick";

const Deliver = () => {
  const data = [
    {
      id: 1,
      name: "Road Freight",
      description: "Logistics company specializes inmanaging transport.",
      img: image11,
    },
    {
      id: 2,
      name: "Ocean Freight",
      description: "Logistics company specializes inmanaging transport.",
      img: image12,
    },
    {
      id: 3,
      name: "Air Freight",
      description: "Logistics company specializes inmanaging transport.",
      img: image13,
    },
  ];
  const images = [
    {
      id: 1,
      path: copy1,
    },
    {
      id: 2,
      path: copy2,
    },
    {
      id: 3,
      path: copy3,
    },
    {
      id: 4,
      path: copy4,
    },
  ];
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
  return (
    <div>
      <div
        className="w-full bg-cover bg-center bg-no-repeat text-center 2xl:pt-[3%] p-[7%]  relative 2xl:h-[90vh] md:h-[80vh]  lg:h-[85vh] xl:h-[85vh]  h-auto bg-[#F8F5F1]"
        style={{ backgroundImage: `url(${bckgrd2})` }}
      >
        <div className="text-left md:text-center">
          <h5 className="text-[#FE6204] md:text-lg text-base font-medium ">
            Our Working Process!
          </h5>
          <img
            src={HorizontalBorder}
            className="absolute 2xl:left-[45%] 2xl:top-[5rem] xl:w-[16%] xl:top-[8rem] xl:left-[42rem] 2xl:w-[12%]  w-[55%] left-[1rem] top-[2.5rem] md:w-[32%] md:top-[4.5rem] md:left-[17rem] lg:w-[25%]  lg:top-[5.5rem] lg:left-[25rem]"
          />
          <h3 className="text-[#290068] md:text-2xl text-xl font-semibold font-poppins   py-[1.5rem] w-[80%] 2xl:w-[15%] md:mx-auto 2xl:py-[2rem]">
            How We Deliver Your
            <span className="border-b-4 border-[#FE6204]"> Parcel!</span>
          </h3>
          <p className="text-[#666666] text-base  md:w-[60%] 2xl:w-[30%] mx-auto w-full">
            Logistics company specializes in managing the transportation storage
            and distribution of goods.
          </p>
          <img
            src={transportation}
            className="2xl:w-[80%] w-[100%] mx-auto 2xl:pt-[%] xl:w-[70%] pt-[7%] md:pt-[2rem] hidden md:block"
          />
          <div className="2xl:w-[70%]  2xl:p-[3%] p-[7%] md:hidden custom-slider">
            <Slider {...sliderSettings}>
              {images.map((i) => (
                <img
                  src={i.path}
                  key={i}
                  className="2xl:w-[30%] w-full  2xl:pt-[3%]  md:pt-[2rem] mb-[1rem]  "
                />
              ))}
            </Slider>
          </div>
          <div className="absolute  top-[65%] md:top-[76%] xl:top-[85%] lg:top-[83%] md:left-[10%] 2xl:left-[14%] left-[15%] text-left hidden md:block  ">
            <div className="">
              <img
                src={parcel}
                className="absolute  right-[15rem] top-[-9.1rem] w-[30%] h-full lg:right-[10rem] lg:w-[40%] lg:top-[-8rem] md:right-[4rem] md:top-[-8.7rem] md:w-[45%] xl:w-[30%] 2xl:w-[30%] 2xl:right-[14rem] xl:top-[-8.8rem] 2xl:top-[-9.1rem]"
              />
            </div>
            <div
              className="md:w-[90%] bg-right p-[3%] md:p-[3rem] md:h-[23vh] lg:h-[25vh] xl:h-[30vh] 2xl:h-[35vh] md:pt-[2%]"
              style={{ backgroundImage: `url(${parcel_bg})` }}
            >
              <h5 className="text-[#FE6204] md:text-base text-base font-medium pt-[10%] md:pt-2 ">
                Our Working Process!
              </h5>
              <img
                src={HorizontalBorder}
                className="absolute left-[3%] top-[33%]  md:w-[31%] lg:w-[23%]  w-[80%] xl:w-[15%]  2xl:top-[12%] xl:top-[14%] md:top-[10%] lg:top-[12%] md:left-[2rem] "
              />
              <h3 className="text-white md:text-base text-xl font-semibold font-poppins 2xl:text-2xl leading-tight pt-[2%] md:w-[60%] lg:w-[40%] xl:w-[25%] 2xl:w-[30%] xl:text-lg md:mt-3  ">
                Ensure Safe Transportation Fast Delivery
                <span className="border-b-4 border-[#FE6204]"> Service!</span>
              </h3>
              <div className="flex items-center bg-[#FE6204]  text-white hover:bg-white hover:text-[#FE6204]  w-[23%] md:w-[28%] lg:w-[25%] xl:w-[18%] px-[3%] 2xl:w-[17%]  rounded-md mt-[4%] lg:mt-[3%] ">
                <a href="#contact"
                  className=" px-3 md:px-0 md:py-2 2xl:px-[0rem] 2xl:py-[1rem] py-4 rounded-lg text-xl md:text-sm lg:text-lg font-medium transition hover:cursor-pointer"
                >
                  Book Your Parcel
                </a>
              </div>
            </div>
            <div className="md:flex md:w-[90%] hidden  ">
              <div className="bg-[#F8F5F1] flex p-[2%] md:p-[1.5%]">
                <div>
                  <img
                    src={image11}
                    className="w-44 h-28 md:w-48 md:h-20 xl:w-40 2xl:w-36 md:mt-[1.5rem]"
                  />
                </div>
                <div className="">
                  <h3 className="text-black font-bold text-xl mb-1 mt-2 md:text-lg xl:text-xl">
                    Road Freight
                  </h3>
                  <p className="text-[#666666] md:text-sm xl:text-base">
                    Logistics company specializes in managing transport.
                  </p>
                </div>
              </div>
              <div className="bg-[#FE6204] flex p-[2%] md:p-[1.5%]">
                <div>
                  <img
                    src={image12}
                    className="w-44 h-28 md:w-48 md:h-20 2xl:w-36 xl:w-40 md:mt-[1.5rem]"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1 mt-2 md:text-lg xl:text-xl">
                    Ocean Freight
                  </h3>
                  <p className="text-white md:text-sm xl:text-base">
                    Logistics company specializes in managing transport.
                  </p>
                </div>
              </div>
              <div className="bg-[#F8F5F1] flex p-[2%] md:p-[1.5%]">
                <div>
                  <img
                    src={image13}
                    className="w-44 h-28 md:w-48 md:h-20 2xl:w-36 xl:w-40 md:mt-[1.5rem]"
                  />
                </div>
                <div>
                  <h3 className="text-black font-bold text-xl mb-1 mt-2 md:text-lg xl:text-xl">
                    Air Freight
                  </h3>
                  <p className="text-[#666666] md:text-sm xl:text-base ">
                    Logistics company specializes in managing transport.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="p-[5%] md:h-auto h-[1135px]">
        <div
          className="md:hidden w-full bg-cover bg-center  text-center mt-[2rem] relative h-full p-[7%] "
          style={{ backgroundImage: `url(${parcel_bg})` }}
        >
          <div className="relative mt-[1rem] text-left">
            <h5 className="text-[#FE6204] md:text-lg text-base font-medium ">
              Our Working Process!
            </h5>
            <img
              src={HorizontalBorder}
              className="absolute 2xl:left-[45.5%] 2xl:top-[8%]  2xl::w-[11%] w-[70%] left-[-0.5rem] top-[1rem] "
            />
            <h3 className="text-white md:text-3xl text-xl font-semibold font-poppins   py-[2rem] w-[80%]">
              Ensure Safe Transportation Fast Delivery
              <span className="border-b-4 border-[#FE6204]"> Service!</span>
            </h3>
          </div>
          <div>
            {data.map((item, index) => (
              <div
                className="flex justify-between bg-[#F8F5F1] rounded-md py-[1rem] px-[0.1rem] mb-4"
                key={item.id || index}
              >
                <div>
                  <img
                    src={item.img}
                    className="w-[10rem] h-[5rem] mt-[1rem]"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-black font-bold text-xl mb-1 mt-2 ">
                    {item.name}
                  </h3>
                  <p className="text-black text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center bg-[#FE6204]  text-white text-center hover:bg-white hover:text-[#FE6204] mx-auto  w-[69%] md:w-[28%] lg:w-[25%] xl:w-[18%] px-[5%]  2xl:w-[17%]  rounded-md mt-[9%]  ">
            <button
              type="button"
              className=" px-3 md:px-0 md:py-2 2xl:px-[0rem] 2xl:py-[1rem]  py-4 rounded-lg text-lg md:text-sm lg:text-lg font-medium transition hover:cursor-pointer"
            >
              Book Your Parcel
            </button>
          </div>
          <div className="">
            <img src={parcel} className="absolute bottom-0 left-[0.3rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliver;
