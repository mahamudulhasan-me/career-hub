import React from "react";
import vector1 from "../../assets/Images/Vector-1.png";
import vector from "../../assets/Images/Vector.png";

const SectionHeader = ({ children }) => {
  return (
    <div className="text-2xl font-semibold relative bg-[url('./assets/Images/common-bg.png')] md:h-56 h-44 flex justify-center items-center">
      <div className="absolute md:-top-[38%] -top-[53%] right-0">
        <img src={vector1} alt="" className="w-40 md:w-full" />
      </div>
      <div className="absolute bottom-0 left-0">
        <img src={vector} alt="" className="w-40 md:w-full" />
      </div>
      {children}
    </div>
  );
};

export default SectionHeader;
