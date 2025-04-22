import React from "react";
import contact from "../assets/Contact/contact.png";
import HorizontalBorder from "../assets/bar/HorizontalBorder.png";
import { IoCallOutline } from "react-icons/io5";
import contact_form from "../assets/Contact/contact_form.png";
import about_header from "../assets/About/about_header.png";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { API } from "../../helper";
import Heading from "./Heading";

const Contact = () => {
  const [isContact, setIsContact] = useState(false);
  const [services, setServices] = useState(false);
  const [resetKey, setResetKey] = useState(0); // New state for reset key
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Departure: "",
    Destination: "",
    Weight: "",
    Freight_Type: "",
    Email: "",
    Details: "",
  });

  const [errors, setErrors] = useState({
    Name: "",
    Phone: "",
    Departure: "",
    Destination: "",
    Weight: "",
    Freight_Type: "",
    Email: "",
    Details: "",
  });
  useEffect(() => {
    const pathname = window.location.pathname;

    if (pathname === "/contact") {
      setIsContact(true);
    } else if (pathname === "/") {
      setIsContact(false);
    }
    if (pathname === "/services") {
      setServices(true);
    } else if (pathname === "/") {
      setServices(false);
    }
  }, []);

  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', 'error'

  const validateField = (name, value) => {
    switch (name) {
      case "Name":
        if (!value.trim()) {
          return `Please enter your ${name
            .replace(/([A-Z ])/g, " $1")
            .toLowerCase()}.`;
        }
        if (!/^[A-Za-z\s]+$/.test(value)) {
          return ` Only alphabets are  allowed .`;
        }
        return "";
      case "Phone":
        if (!value.trim()) {
          return `Please enter your ${name
            .replace(/([A-Z])/g, " $1")
            .toLowerCase()}.`;
        }
        if (!/^\+?[0-9]{1,4}?[-. ]?[0-9]{3,5}[-. ]?[0-9]{3,5}$/.test(value)) {
          return `Enter a valid contact number with only numbers, hyphens (-), dots (.), or spaces.`;
        }

        return "";

      case "Email":
        if (!value.trim()) {
          return "Please enter your email address.";
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          return "Please enter a valid email address.";
        }
        return "";

      default:
        return "";
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("formdata", formData);

    // Validate all fields before submission
    const newErrors = {};
    for (const key in formData) {
      newErrors[key] = validateField(key, formData[key]);
    }
    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) return;

    setSubmissionStatus(null); // Reset status

    try {
      const response = await axios.post(API.contactQuery.url, formData);

      if (response.status === 200 || response.status === 201) {
        setSubmissionStatus("success");
        setFormData({
          Name: "",
          Email: "",
          Phone: "", // Reset the phone number
          Details: "",
          Destination: "",
          Weight: "",
          Departure: "",
          Freight_Type: "",
        });
        setResetKey((prevKey) => prevKey + 1); // Increment resetKey to force PhoneInput reset
        setErrors({
          Name: "",
          Email: "",
          Phone: "",
          Details: "",
          Destination: "",
          Weight: "",
          Departure: "",
          Freight_Type: "",
        });

        // Explicitly reset the PhoneInput state
        setTimeout(() => {
          setFormData((prev) => ({ ...prev, Phone: "" }));
        }, 0);
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus("error");
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div>
      {isContact ? (
        <div
          className="bg-cover bg-no-repeat bg-center 2xl:h-[500px] h-[400px]  flex justify-center items-center 2xl:mb-[5rem]"
          style={{ backgroundImage: `url(${about_header})` }}
        >
          <div className="text-center p-2 ">
            <h3 className="text-white font-semibold 2xl:text-5xl pt-[4rem] 2xl:pt-0  md:text-4xl lg:text-4xl text-4xl mb-[1%]">
              Contact<span className="text-[#FE6204]"> Us</span>
            </h3>
            <p className="text-white text-md pt-[1rem] px-[2rem] 2xl:text-xl  2xl:pt-[1.5rem] lg:text-xl max-w-4xl  mx-auto">
              Your trusted partner in freight forwarding, transportation, and
              logistics, we provide tailored solutions to streamline your supply
              chain.
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className=" md:p-[1%] 2xl:pt-0 pt-[1rem]" id="contact">
        <div
          className="md:w-[81.5%] w-[100%] mx-auto  bg-cover md:p-[3%]  p-[7%]  bg-center md:bg-left bg-no-repeat md:h-[85vh] sm-912:h-[63vh] lg:h-[90vh] xl:h-[700px] lg-1440:h-[100vh] 2xl:h-[90vh]"
          style={{ backgroundImage: `url(${contact})` }}
        >
          <div className="grid md:grid-cols-2 grid-cols-1 2xl:gap-3 md:gap-7 md:p-[2%]">
            <div className="relative">
              {/* <h5 className="text-[#FE6204] md:text-md text-base font-medium md:mt-[3rem]">
                Trusted Path to Global Shipping!
              </h5>
              <img
                src={HorizontalBorder}
                className={`absolute left-[-0.5rem] top-[3%] md:top-[9%] md:w-[97%] lg-1440:top-[10%] lg:top-[9%] w-[90%] xl:top-[12%] xl:left-[-1rem] lg:w-[78%] xl:w-[60%] lg-1440:w-[55%] 2xl:w-[46%] 2xl:top-[8%] 2xl:left-[-1rem] ${
                  services
                    ? "lg-1440:w-[60%] lg-1440:top-[10%] 2xl:w-[50%]"
                    : ""
                }`}
              /> */}

              <Heading
                heading_text="Trusted Path to Global Shipping!"
                align="left"
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
            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="300"
            >
              <div className="flex items-center justify-center 2xl:justify-around  h-auto 2xl:mt-[8%] bg-[#F8F5F1] mt-[3rem] md:mt-0 rounded-md ">
                <form
                  onSubmit={handleSubmit}
                  className={`w-full  md:p-6 p-6 lg:p-[10%] xl:p-[7%] 2xl:p-[7%]   rounded-md space-y-4 ${
                    services ? "space-y-8 " : "lg-1440:space-y-8"
                  }`}
                >
                  <h2 className="text-2xl pb-[5%] font-bold text-[#290068]">
                    Quick Booking
                  </h2>
                  {/* Row 1 */}
                  <div className="xl:flex block xl:space-x-4 ">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-2 border-0 focus:outline-none rounded-sm text-[#666666] mb-[1rem] xl:mb-0"
                      value={formData.Name}
                      onChange={handleChange}
                      name="Name"
                    />
                    {errors.Name && (
                      <p className="text-red-500 text-sm">{errors.Name}</p>
                    )}
                    <PhoneInput
                      country={"in"} // Default country (India)
                      value={formData.Phone} // Controlled component
                      onChange={(value) =>
                        setFormData({ ...formData, Phone: value })
                      } // Update state
                      inputProps={{
                        name: "Phone",
                        required: true,
                        className:
                          "w-full p-2 border-0 focus:outline-none rounded-sm text-[#666666] ps-[3rem]",
                      }}
                      enableSearch={true} // Allows searching for a country
                      countryCodeEditable={false} // Prevents editing the country code manually
                    />
                    {errors.Phone && (
                      <p className="text-red-500 text-sm">{errors.Phone}</p>
                    )}
                  </div>
                  {/* Row 2 */}
                  <div className="xl:flex  xl:space-x-4">
                    <input
                      type="text"
                      placeholder="Departure"
                      className="w-full p-2 border-0 focus:outline-none rounded-sm text-[#666666] mb-[1rem] xl:mb-0"
                      name="Departure"
                      value={formData.Departure}
                      onChange={handleChange}
                    />
                    {errors.Departure && (
                      <p className="text-red-500 text-sm">{errors.Departure}</p>
                    )}
                    <input
                      type="text"
                      placeholder="Destination"
                      className="w-full p-2 border-0 focus:outline-none rounded-sm"
                      name="Destination"
                      value={formData.Destination}
                      onChange={handleChange}
                    />
                    {errors.Destination && (
                      <p className="text-red-500 text-sm">
                        {errors.Destination}
                      </p>
                    )}
                  </div>
                  {/* Row 3 */}
                  <div className="xl:flex block xl:space-x-4">
                    <input
                      type="number"
                      placeholder="Weight, Kg"
                      className="w-full p-2 border-0 focus:outline-none   text-[rgb(157,158,161)] mb-[1rem] xl:mb-0"
                      min="0"
                      name="Weight"
                      value={formData.Weight}
                      onChange={handleChange}
                    />
                    {errors.Weight && (
                      <p className="text-red-500 text-sm">{errors.Weight}</p>
                    )}

                    <select
                      name="Freight_Type"
                      value={formData.Freight_Type}
                      onChange={handleChange}
                      className="w-full p-2 border-0 focus:outline-none text-[rgb(157,158,161)] mb-[1rem] xl:mb-0"
                    >
                      <option value="">Select Freight Type</option>
                      <option value="road_freight">Road Freight</option>
                      <option value="ocean_freight">Ocean Freight</option>
                      <option value="air_freight">Air Freight</option>
                    </select>
                    {errors.Freight_Type && (
                      <p className="text-red-500 text-sm">
                        {errors.Freight_Type}
                      </p>
                    )}
                  </div>
                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      name="Email"
                      className="w-full p-2 border-0 focus:outline-none rounded-sm text-[#666666]"
                      value={formData.Email}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                    {errors.Email && (
                      <p className="text-red-500 text-sm">{errors.Email}</p>
                    )}
                  </div>
                  {/* Additional Details */}
                  <div>
                    <textarea
                      placeholder="Additional Details"
                      className="w-full p-2 border-0 focus:outline-none rounded-sm text-[#666666]"
                      value={formData.Details}
                      onChange={handleChange}
                      name="Details"
                    ></textarea>
                    {errors.Details && (
                      <p className="text-red-500 text-sm">{errors.Details}</p>
                    )}
                  </div>
                  {submissionStatus === "success" && (
                    <p className="text-green-500">
                      Form submitted successfully!
                    </p>
                  )}

                  {submissionStatus === "error" && (
                    <p className="text-red-500">
                      There was an error submitting the form. Please try again.
                    </p>
                  )}
                  {/* Button */}
                  <button
                    type="submit"
                    className={` p-5 text-white 2xl:text-xl font-semibold hover:text-[#FE6204] bg-[#FE6204] rounded-sm hover:bg-[#290068] cursor-pointer `}
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
    </div>
  );
};

export default Contact;
