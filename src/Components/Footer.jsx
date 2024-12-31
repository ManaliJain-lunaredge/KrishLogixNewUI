import React from "react";
import footer_bg from "../assets/footer_bg.png";
import footer_logo from "../assets/footer_logo.png";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";

import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <div
        className=" bg-cover bg-center bg-no-repeat w-full h-full "
        style={{ backgroundImage: `url(${footer_bg})` }}
      >
        <div className="md:w-[70%] w-full mx-auto  p-[3%]  relative">
          <div className="md:flex block justify-between">
            <div className="md:w-[30%] w-full">
              <img src={footer_logo} className="w-[30%] h-[30%]" />
              <p className="text-[#666666] mt-4 text-sm">
                Our mission is to deliver seamless, efficient, and reliable
                solutions tailored to your unique supply chain needs. Let's
                navigate the complexities of the supply chain together!
              </p>
              <div className="flex gap-4 mt-6">
                <div className="bg-[#F8F5F1] text-[#FE6204] p-4 text-2xl rounded-md ">
                  <FaFacebookF />
                </div>
                <div className="bg-[#F8F5F1] text-[#FE6204] p-4 text-2xl rounded-md ">
                  <AiFillInstagram />
                </div>
                <div className="bg-[#F8F5F1] text-[#FE6204] p-4 text-2xl rounded-md ">
                  <BsTwitterX />
                </div>
                <div className="bg-[#F8F5F1] text-[#FE6204] p-4 text-2xl rounded-md ">
                  <FaYoutube />
                </div>
              </div>
            </div>
            <div className="md:flex justify-evenly gap-3 sm:p-[5%] md:w-[70%] w-full">
              <div className="md:w-[23%] w-full">
                <h3 className="text-[#290068] font-bold mb-[10%] text-xl relative">
                  Company
                </h3>
                <div className="absolute top-[25%] w-[7%] h-[1%] bg-[#FE6204]"></div>
                <ul className="text-black font-semibold text-md mt-[20%]">
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Blogs</li>
                  <li>Careers</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="md:w-[23%] w-full">
                <h3 className="text-[#290068]  mb-[15%] text-xl relative font-bold">
                  Contact Us
                </h3>
                <div className="absolute top-[25%] w-[7%] h-[1%] bg-[#FE6204]"></div>
                <div>
                  <h4 className="text-[#FE6204] font-semibold ">Address:</h4>
                  <p className="text-[#666666] text-sm">
                    Shelton Sapphire, B-Wing, Office no. 904, Plot no 18 & 19,
                    Sector 15, CBD, Belapur, Navi Mumbai, Maharashtra - 400614
                  </p>
                </div>
                <div className="mt-2">
                  <h4 className="text-[#FE6204] font-semibold">Telephone:</h4>
                  <p className="text-[#666666] text-sm">
                    022-45174666, 022-45175666
                  </p>
                </div>
                <div className="mt-2">
                  <h4 className="text-[#FE6204] font-semibold">Email ID:</h4>
                  <p className="text-[#666666] text-sm">info@krishlogix.com</p>
                </div>
              </div>
              <div className="md:w-[23%] w-full">
                <h3 className="text-[#290068]  mb-[15%] text-xl relative font-bold">
                  Newsletter
                </h3>
                <div className="absolute top-[25%] w-[7%] h-[1%] bg-[#FE6204]"></div>
                <p className="text-[#666666] text-sm mb-3">
                  Stay ahead in logistics and supply chain trends!{" "}
                </p>
                <p className="text-[#666666] text-sm ">
                  Subscribe to our newsletter for the latest updates, expert
                  insights, and industry innovations delivered straight to your
                  inbox.
                </p>
                <div className="md:w-[90%] w-full flex mt-[10%]">
                  <div>
                    <input type="email" placeholder="Your Email" className="bg-[#F8F5F1] text-[#212529] p-4 focus:outline-none"></input>
                  </div>
                  <div className="bg-[#FE6204] p-4 flex justify-center items-center rounded-br-md rounded-tr-md text-white">
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F5F1] w-full text-center text-sm md:text-md font-semibold md:p-[1%] p-[5%] text-[#666666]">
        © Copyright 2024. KrishLogiX Pvt. Ltd. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;