import React from "react";
import contact from "../assets/contact.png";
import HorizontalBorder from "../assets/HorizontalBorder.png";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <div
        className="w-[70%] mx-auto mt-[5%] bg-cover p-[3%] bg-center bg-no-repeat h-[70vh]"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="grid grid-cols-2">
          <div className="relative">
            <h5 className="text-[#FE6204] md:text-lg text-base font-medium ">
              Trusted Path to Global Shipping!
            </h5>
            <img
              src={HorizontalBorder}
              className="absolute left-[0.5%] top-[4%] md:w-[50%] w-[80%]  mt-[-2%]"
            />
            <h3 className="text-white md:text-3xl text-xl font-semibold font-poppins  leading-tight mt-[4%]">
              Logistics Redefined
              <br /> for
              <span className="border-b-4 border-[#FE6204]"> Tomorrow!</span>
            </h3>
            <p className="text-[#F8F5F1] text-base w-[55%] mt-[4%]">
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
            {/* <div className="bg-[#F8F5F1] p-[3%]">
              <h3 className="text-[#290068] font-bold text-xl">
                Quick Booking
              </h3>
              <form>
                <div className="flex justify-between">
                  <div >
                    <input type="text" placeholder="Name" className="" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <input type="text" placeholder="Departure" />
                  </div>
                  <div>
                    <input type="text" placeholder="Destination" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <input type="number" placeholder="Weight,Kg" />
                  </div>
                  <div>
                    <select type="text">
                      <option>Freight Type</option>
                    </select>
                  </div>
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <textarea
                    type="text"
                    placeholder="Additional Details"
                  ></textarea>
                </div>
                <button>Get Solution</button>
              </form>
            </div> */}
            <div className="flex items-center justify-center h-[60vh] bg-[#F8F5F1]">
              <form className="w-full max-w-lg p-8   rounded-md space-y-4">
                <h2 className="text-2xl pb-[5%] font-bold text-[#290068]">
                  Quick Booking
                </h2>
                {/* Row 1 */}
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border-0 focus:outline-none rounded-sm text-[#666666]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-2 border-0 focus:outline-none rounded-sm text-[#666666]"
                  />
                </div>
                {/* Row 2 */}
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Departure"
                    className="w-full p-2 border-0 focus:outline-none rounded-sm text-[#666666]"
                  />
                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-full p-2 border-0 focus:outline-none rounded-sm"
                  />
                </div>
                {/* Row 3 */}
                <div className="flex space-x-4">
                  <input
                    type="number"
                    placeholder="Weight, Kg"
                    className="w-full p-2 border-0 focus:outline-none  rounded-sm text-[#666666]"
                  />
                  <select className="w-full p-2 border-0  rounded-sm text-[#666666]" placeholder="Freight Type">
                    <option className="text-[#666666]">Freight Type</option>
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
                  className="w-[30%] p-3 text-white font-semibold hover:text-[#FE6204] bg-[#FE6204] rounded-sm hover:bg-[#290068] "
                >
                  Get Solution
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
