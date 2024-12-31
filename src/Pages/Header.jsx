import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [active, setActive] = useState("/"); // Track the active link
  const [menuOpen, setMenuOpen] = useState(false); // Track the menu state

  const nav = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Services",
      link: "/services",
    },
    {
      id: 4,
      name: "Careers",
      link: "/careers",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="bg-slate-300 flex justify-around items-center font-poppins ">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-20 md:h-20 object-contain"
            alt="Logo"
          />
        </div>

        {/* Navigation Links */}
        <div className="md:block hidden">
          <ul className="flex space-x-20 text-[#1C0D5C] font-medium text-[18px]">
            {nav.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer ${
                  active === item.link
                    ? "text-[#FE6204] border-b-2 border-orange-400"
                    : "text-[#1C0D5C]"
                }`}
                onClick={() => setActive(item.link)}
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex items-center bg-[#FE6204] hover:bg-orange-600 px-[1%] py-[0.3%] rounded-md">
          <IoMdCall className="text-xl text-white" />
          <button
            type="button"
            className="text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Contact Us
          </button>
        </div>

        {/* Hamburger Menu */}
        <div
          className="text-black md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-slate-300 md:hidden">
          <ul className="flex flex-col items-start text-[#1C0D5C] font-medium text-[18px] px-4">
            {nav.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer w-full py-2 ${
                  active === item.link
                    ? "text-[#FE6204] border-b-2 border-orange-400"
                    : "text-[#1C0D5C]"
                }`}
                onClick={() => {
                  setActive(item.link);
                  setMenuOpen(false); // Close the menu after selection
                }}
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
