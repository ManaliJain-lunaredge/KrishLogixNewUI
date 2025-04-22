import React from "react";
import footer_bg from "../assets/Footer/footer_bg.png";
import footer_logo from "../assets/Footer/footer_logo.png";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import LE_Footer_logo from "../assets/Footer/LE_Footer_logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
  const handleLogoClick = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // This adds smooth scrolling behavior
      });
    }, 200);
  };

  return (
    <div className="">
      <div
        className=" bg-cover bg-center bg-no-repeat w-full h-full "
        style={{ backgroundImage: `url(${footer_bg})` }}
      >
        <div className="md:w-[80%] lg:w-[87%] w-[100%] mx-auto  md:p-[3%] lg:p-[4%] xl:lg-[7%] p-[8%] relative ">
          <div className="lg:flex block justify-between gap-[6rem]">
            <div className="md:flex block justify-between xl:gap-[8rem] lg:gap-[4rem] md:gap-[10rem] md:pb-[5%]">
              <div>
                <img
                  src={footer_logo}
                  className="w-[7rem] h-[5rem] cursor-pointer"
                  onClick={handleLogoClick}
                />
                <p className="text-[#666666] mt-[5%] text-sm">
                  Our mission is to deliver seamless, efficient, and reliable
                  solutions tailored to your unique supply chain needs. Let's
                  navigate the complexities of the supply chain together!
                </p>
                <div className="flex gap-4 mt-6">
                  <div className="bg-[#F8F5F1] text-[#FE6204] p-4 text-2xl rounded-md hover:bg-[#290068] cursor-pointer">
                    <Link to="https://www.facebook.com/people/KrishLogix/61567324988817/">
                      <FaFacebookF />
                    </Link>
                  </div>
                  <div className="bg-[#F8F5F1] text-[#FE6204] p-4 text-2xl rounded-md hover:bg-[#290068] cursor-pointer">
                    <Link to="https://www.instagram.com/krishlogix_/profilecard/?igsh=Y2swZnQzcm5odjVw">
                      <AiFillInstagram />
                    </Link>
                  </div>
                  <div className="bg-[#F8F5F1] text-[#FE6204] p-4 text-2xl rounded-md hover:bg-[#290068] cursor-pointer">
                    <Link to="https://www.linkedin.com/company/krishlogix">
                      <FaLinkedin />
                    </Link>
                  </div>
                  <div className="bg-[#F8F5F1] text-[#FE6204] p-4 text-2xl rounded-md hover:bg-[#290068] cursor-pointer">
                    <Link to="https://x.com/KrishLogix">
                      <BsTwitterX />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative pt-[5%] md:pt-0 pb-[5%] md:pb-0">
                <h3 className="text-[#290068] font-bold text-xl ">Company</h3>
                <div className="absolute w-[5.5rem] h-[0.2rem]  bg-[#FE6204]"></div>
                <div>
                  <ul className="text-black md:block flex gap-4 font-semibold md:text-base text-xs md:pt-[43%] pt-[5%] ">
                    <li>
                      <Link to="/about" className="hover:text-[#FE6204]">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="hover:text-[#FE6204]">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/blogs" className="hover:text-[#FE6204]">
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link to="/career" className="hover:text-[#FE6204]">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="hover:text-[#FE6204]">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:flex block justify-between gap-[5rem] md:gap-[2rem]  ">
              <div className="relative md:pb-0 pb-[5%]">
                <h3 className="text-[#290068] text-xl   font-bold">Contact</h3>
                <div className="absolute w-[5rem] h-[0.2rem]  bg-[#FE6204]"></div>
                <div>
                  <h4 className="text-[#FE6204] font-semibold md:pt-[10%] pt-[5%]">
                    Address:
                  </h4>
                  <p className="text-[#666666] text-sm ">
                    Shelton Sapphire, B-Wing, Office no. 904, Plot no 18 & 19,
                    Sector 15, CBD, Belapur, Navi Mumbai, Maharashtra - 400614
                  </p>
                </div>
                <div className="mt-2">
                  <h4 className="text-[#FE6204] font-semibold">Telephone:</h4>
                  <p className="text-[#666666] text-sm">
                    <a href="tel:02245174666" className="hover:text-[#290068]">
                      022-45174666
                    </a>
                    ,
                    <a
                      href="tel:02245175666"
                      className="hover:text-[#290068] ms-1"
                    >
                      022-45175666
                    </a>
                  </p>
                </div>
                <div className="mt-2">
                  <h4 className="text-[#FE6204] font-semibold">Email ID:</h4>
                  <p className="text-[#666666] text-sm">
                    <a
                      href="mailto:info@krishlogix.com"
                      className="hover:text-[#290068]"
                    >
                      info@krishlogix.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="relative">
                <h3 className="text-[#290068]  text-xl   font-bold">
                  Newsletter
                </h3>
                <div className="absolute w-[6.5rem] h-[0.2rem] bg-[#FE6204]"></div>
                <p className="text-[#666666] text-sm mb-3 pt-[10%]">
                  Stay ahead in logistics and supply chain trends!{" "}
                </p>
                <p className="text-[#666666] text-sm ">
                  Subscribe to our newsletter for the latest updates, expert
                  insights, and industry innovations delivered straight to your
                  inbox.
                </p>
                <form>
                  <div className="flex mt-[10%] w-full">
                    {/* Input Container */}
                    <div className="flex-grow">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="bg-[#F8F5F1] text-[#212529] p-4 w-full focus:outline-none"
                      />
                    </div>

                    {/* Button Container */}
                    <div className="bg-[#FE6204] p-4 flex justify-center items-center rounded-br-md rounded-tr-md text-white cursor-pointer hover:bg-[#290068] hover:text-white">
                      <FaArrowRightLong />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F5F1]   text-sm md:text-md font-semibold md:p-[1%] p-[2rem] text-[#666666]">
       <div className="md:w-[79%]  md:flex md:justify-around lg:justify-between mx-auto">
       <div> © 2025 KrishLogiX Pvt. Ltd. All Rights Reserved.</div>
        <div className="flex ">
          {" "}
          Designed and Developed by
          <a href="https://lunaredgeit.com/" target="_blank">
            <img
              src={LE_Footer_logo}
              alt="LE_Footer_logo"
              className="w-[5rem] md:ms-1 h-[0.9rem] mt-1"
            />
          </a>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Footer;
