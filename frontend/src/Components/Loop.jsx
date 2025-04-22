import React from 'react';
import "../Components/Style/Style.css";
import { FaRegSnowflake } from "react-icons/fa";

const Loop = () => {
  const marqueeText = [
    "Trusted by all over the world",
    "Cost efficient transportation",
    "Leading global logistic company",
    "Global logistics experts",
  ];

  return (
    <div className="marquee-container p-[1.5rem] 2xl:p-[2rem] ">
      <div className="marquee-content ">
        {marqueeText.map((text, index) => (
          <span key={index}>
            <FaRegSnowflake className='mt-1 2xl:text-2xl text-lg'/> <p className='text-lg 2xl:text-2xl'>{text}</p>
          </span>
        ))}
        {/* Duplicate content for seamless scrolling */}
        {marqueeText.map((text, index) => (
          <span key={`duplicate-${index}`}>
           <FaRegSnowflake className='mt-1 2xl:text-2xl text-lg'/> <p className='text-lg 2xl:text-2xl'>{text} </p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Loop;
