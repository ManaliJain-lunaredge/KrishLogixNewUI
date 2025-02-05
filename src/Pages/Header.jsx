import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import logo from "../assets/Header/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const [active, setActive] = useState("#home"); // Track the active link
  const [menuOpen, setMenuOpen] = useState(false); // Track the menu state

  const nav = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Services", href: "/services" },
    { id: 4, name: "Careers", href: "/career" },
  ];

  const handleScroll = (href) => {
    const target = document.querySelector(href);
    if (target) {
      setMenuOpen(false); // Close the menu in mobile view
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActive(href); // Update the active link state
  };

  return (
    <div className="container mx-auto absolute 2xl:top-[1rem] 2xl:left-[5rem] w-full z-50 shadow-md">
      <div className="bg-slate-300 flex 2xl:justify-around px-[2rem] lg:px-[2rem] justify-between items-center font-poppins">
        {/* Logo Section */}
        <div className="flex-shrink-0">
         <Link to="/">
         <img
            src={logo}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-20 md:h-20 object-contain cursor-pointer"
            alt="Logo"
            onClick={() => handleScroll("/")}
          /></Link>
        </div>

        {/* Navigation Links */}
        <div className="lg:block hidden">
          <ul className="flex space-x-20 text-[#1C0D5C] font-medium text-[18px]">
            {nav.map((item) => (
              <NavLink
                key={item.id}
                to={item.href}
               
                className={({ isActive }) =>
                  `text-[#1C0D5C] px-2 py-1 hover:cursor-pointer ${
                    isActive
                      ? "text-[#FE6204] border-b-2 border-orange-400"
                      : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="lg:flex hidden items-center bg-[#FE6204] hover:bg-[#1c0d5c] hover:cursor-pointer px-[1%] py-[0.3%] rounded-md">
          <IoMdCall className="text-xl text-white" />
          <a
            href="/contact"
            className="text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger Menu */}
        {/* <div
          className="text-black lg:hidden cursor-pointer absolute right-[2rem] z-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose size={24} />: <RxHamburgerMenu size={24} />}
        
        </div> */}
        {/* Hamburger Menu */}
        <div
          className="text-black lg:hidden cursor-pointer absolute right-[2rem] top-[1.5rem] z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "" : <RxHamburgerMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-slate-100 z-40">
          <div className="flex justify-between items-center p-4 ">
           <Link to="/"> <img src={logo} className="w-24 h-16 object-contain" alt="Logo" /></Link>
            {/* Close Button Inside the Menu */}
            <IoClose
              size={28}
              className="text-black cursor-pointer z-50 absolute right-[2rem]"
              onClick={() => setMenuOpen(false)}
            />
          </div>
          <ul className="flex flex-col text-left items-start text-[#1C0D5C] font-medium text-[18px] px-4 py-6">
            {nav.map((item) => (
               <NavLink
               key={item.id}
               to={item.href}
               onClick={() => setMenuOpen(!menuOpen)}
               className={({ isActive }) =>
                 `text-[#1C0D5C] px-2 py-1 hover:cursor-pointer ${
                   isActive
                     ? "text-[#FE6204] border-b-2 border-orange-400"
                     : ""
                 }`
               }
             >
               {item.name}
             </NavLink>
            ))}
            <div className="flex items-center bg-[#FE6204] hover:bg-[#1c0d5c] px-4 py-2 mt-[1rem] rounded-md">
              <IoMdCall className="text-xl text-white" />{" "}
              <a href="/contact"
                
                className="text-white px-1 py-1 rounded-lg text-sm font-medium"  onClick={() => setMenuOpen(!menuOpen)}
              >
                Contact Us
              </a>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
