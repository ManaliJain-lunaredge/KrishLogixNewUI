// TriangleDesign.jsx
import React from "react";

const TriangleDesign = () => {
  return (
    <div className="relative w-full h-12 bg-orange-500">
    <div className="absolute top-0 right-0 w-6 h-full bg-white clip-triangle"></div>
  </div>
  );
};

export default TriangleDesign;
