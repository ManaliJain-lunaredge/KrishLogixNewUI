import React from "react";
import contact from "../assets/Contact/contact.png";
import HorizontalBorder from "../assets/bar/HorizontalBorder.png";
import { IoCallOutline } from "react-icons/io5";
import contact_form from "../assets/Contact/contact_form.png";

const Contact = () => {
  return (
    <div className=" md:p-[1%] 2xl:pt-0 pt-[1rem]" id="contact">
      <div
        className="md:w-[90%] w-[100%] mx-auto  bg-cover md:p-[3%]  p-[7%] bg-center md:bg-left bg-no-repeat md:h-[85vh] lg:h-[82vh] 2xl:h-[90vh]"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="grid md:grid-cols-2 grid-cols-1 2xl:gap-3 md:gap-7 md:p-[2%]">
          <div className="relative">
            <h5 className="text-[#FE6204] md:text-md text-base font-medium md:mt-[3rem]">
              Trusted Path to Global Shipping!
            </h5>
            <img
              src={HorizontalBorder}
              className="absolute left-[-0.5rem] top-[3%] md:top-[9%] md:w-[97%] lg:top-[9%] w-[90%] xl:top-[9%] xl:left-[-1rem] lg:w-[78%] xl:w-[50%] 2xl:w-[40%] 2xl:top-[10.5%] 2xl:left-[-1rem] "
            />
            <h3 className="text-white md:text-2xl text-xl font-semibold font-poppins  leading-tight mt-[4%] py-[1rem] 2xl:w-[35%]">
              Logistics Redefined for
              <span className="border-b-4 border-[#FE6204]"> Tomorrow!</span>
            </h3>
            <p className="text-[#F8F5F1] text-base md:w-[100%] w-full xl:w-[70%] mt-[4%] 2xl:w-[50%] ">
              Logistics company specializes in managing the transportation,
              storage, and distribution of goods.
            </p>
            <div className="flex md:space-x-4 space-x-4 mt-[7%]">
              <div className="bg-[#FE6204] text-white w-14 h-14  border-2 border-slate-600  rounded-full flex justify-center items-center text-2xl">
                <IoCallOutline />
              </div>
              <div>
                <h3 className="text-[#FFFFFF] font-bold text-lg whitespace-nowrap">
                  Have Any Questions?
                </h3>
                <p className="text-[#FFFFFF] text-base">+91 987654321</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center 2xl:justify-around  h-auto 2xl:mt-[8%] bg-[#F8F5F1] mt-[3rem] md:mt-0 rounded-md ">
              <form className="w-full  md:p-6 p-6 lg:p-[10%] xl:p-[7%] 2xl:p-[7%]   rounded-md space-y-4">
                <h2 className="text-2xl pb-[5%] font-bold text-[#290068]">
                  Quick Booking
                </h2>
                {/* Row 1 */}
                <div className="xl:flex block xl:space-x-4 ">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border-0 focus:outline-none rounded-sm text-[#666666] mb-[1rem] xl:mb-0"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-2 border-0 focus:outline-none rounded-sm text-[#666666]"
                  />
                </div>
                {/* Row 2 */}
                <div className="xl:flex  xl:space-x-4">
                  <input
                    type="text"
                    placeholder="Departure"
                    className="w-full p-2 border-0 focus:outline-none rounded-sm text-[#666666] mb-[1rem] xl:mb-0"
                  />
                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-full p-2 border-0 focus:outline-none rounded-sm"
                  />
                </div>
                {/* Row 3 */}
                <div className="xl:flex block xl:space-x-4">
                  <input
                    type="number"
                    placeholder="Weight, Kg"
                    className="w-full p-2 border-0 focus:outline-none   text-[rgb(157,158,161)] mb-[1rem] xl:mb-0"
                    min="0"
                  />
                  <select className="w-full p-2 border-0 focus:outline-none text-[rgb(157,158,161)] mb-[1rem] xl:mb-0">
                    <option value="selected" disabled>
                      Select Freight Type
                    </option>
                    <option value="road">Road Freight</option>
                    <option value="ocean">Ocean Freight</option>
                    <option value="air">Air Freight</option>
                  </select>
                </div>
                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border-0 focus:outline-none rounded-sm text-[#666666]"
                  />
                </div>
                {/* Additional Details */}
                <div>
                  <textarea
                    placeholder="Additional Details"
                    className="w-full p-2 border-0 focus:outline-none rounded-sm text-[#666666]"
                  ></textarea>
                </div>
                {/* Button */}
                <button
                  type="submit"
                  className="md:w-[60%] lg:w-[50%] xl:w-[30%] w-[65%] p-3 text-white font-semibold hover:text-[#FE6204] bg-[#FE6204] rounded-sm hover:bg-[#290068] cursor-pointer"
                >
                  Get Solution
                </button>
              </form>
            </div>
            <img
              src={contact_form}
              className="w-[70%] h-[20%] mx-auto md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
