import React from "react";
import Slider from "react-slick";
import HorizontalBorder from "../assets/bar/HorizontalBorder.png";
import { FaChevronRight, FaRegBookmark, FaRegUser } from "react-icons/fa";
import { BiSolidChevronRight } from "react-icons/bi";
import logistics1 from "../assets/Insights/logistics1.png";
import logistics2 from "../assets/Insights/logistics2.png";
import logistics3 from "../assets/Insights/logistics3.png";
import { Link } from "react-router-dom";

const ArticleCard = ({ image, date, title, author, category, description }) => (
  <div className="p-2 ">
    <div className="relative">
      <img src={image} className="w-full" alt="Article" />
      <div className="absolute right-[5%] top-[15%] flex">
        <span className="bg-[#FE6204] text-white px-2 py-1">{date.day}</span>
        <span className="bg-white text-xs flex justify-center items-center font-semibold text-[#290068] px-2 py-1">
          {date.month} {date.year}
        </span>
      </div>
    </div>
    <div className="bg-white p-4 leading-loose">
      <h3 className="text-[#FE6204] font-semibold text-lg">{title}</h3>
      <div className="flex gap-4 text-sm mb-2">
        <div className="flex gap-2">
          <FaRegUser className="mt-2" />
          <p className="mt-[6%]">{author}</p>
        </div>
        <div className="flex gap-2">
          <FaRegBookmark className="mt-2" />
          <p className="mt-[6%]">{category}</p>
        </div>
      </div>
      <p className="leading-tight text-[#666666] mb-2">{description}</p>
      <div className="flex mt-[3%] xl:mt-[0%] text-[#290068] font-semibold hover:text-[#FE6204]">
        <Link to="">Read More</Link>
        <div className="flex mt-[3%] xl:mt-[2%] 2xl:mt-[2%]  font-bold">
          <BiSolidChevronRight />
          <BiSolidChevronRight className="ml-[-25%]" />
        </div>
      </div>
    </div>
  </div>
);

const Insights = () => {
  const articles = [
    {
      image: logistics1,
      date: { day: "10", month: "JAN", year: "2025" },
      title: "Optimizing Operational Efficiency in Supply Chains",
      author: "Shubham Kumar",
      category: "Supply chain",
      description:
        "Discover key trends, innovations, and emerging logistic challenges shaping the future of global transportation.",
    },
    {
      image: logistics2,
      date: { day: "10", month: "JAN", year: "2025" },
      title: "Revolutionizing Logistics for Unmatched Efficiency ",
      author: "Varun Kumar",
      category: "Logistics",
      description:
        "Discover how cutting-edge technologies, innovative strategies are transforming logistics, ensuring faster.",
    },
    {
      image: logistics3,
      date: { day: "10", month: "JAN", year: "2025" },
      title: "Driving Innovation in Logistics to Optimize Operations",
      author: "Rahul Kumar",
      category: "Supply chain",
      description:
        "Learn how advanced solutions are reshaping logistics, reducing costs, and enhancing supply chain efficiency.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
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
    <div className="bg-[#F8F5F1] 2xl:p-0 p-[5%]" id="team"> 
      <div className=" lg:w-[100%] w-[100%] 2xl:w-[90%] mx-auto p-[3%] py-[10%] md:py-[3%] mt-[3%]">
        <div className="relative">
         <div className="2xl:ms-[1rem]">
         <h5 className="text-[#FE6204] md:text-lg text-base font-medium">Blogs & News updates</h5>
          <img
            src={HorizontalBorder}
            alt="Border"
            className="absolute left-[0%] top-[13%] md:top-[10%] 2xl:w-[15%] lg:w-[27%] lg:top-[13%] 2xl:top-[15%] 2xl:left-[0.5rem] lg:left-[-1%] xl:w-[18%]  md:w-[35%] w-[65%]"
          />
          <h3 className="text-[#290068] md:text-2xl text-xl font-semibold font-poppins leading-tight mt-[2%] py-[2rem] lg:py-[0rem]">
            Find All Your Logistics <br /> Insights
            <span className="border-b-4 border-[#FE6204]"> Here!</span>
          </h3>
         </div>
          <div className="md:flex  hidden absolute right-[5%] xl:right-[3%] cursor-pointer items-center bg-[#FE6204] text-white xl:w-[14%] 2xl:w-[12%]  lg:w-[20%]  md:w-[27%] hover:bg-[#290068] px-[1%] py-[0.5%] rounded-md">
            <button
              type="button"
              className="px-1 py-2 rounded-lg text-md font-medium transition"
            >
              View All Updates
            </button>
            <FaChevronRight className="text-xs ml-2 " />
          </div>
        </div>
      <div className="md:mt-[5rem]">
      <Slider {...sliderSettings} >
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article}  />
          ))}
        </Slider>
      </div>
      </div>
    </div>
  );
};

export default Insights;
