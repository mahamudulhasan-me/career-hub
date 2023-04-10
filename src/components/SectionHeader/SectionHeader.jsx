import React from "react";
import vector1 from "../../assets/Images/Vector-1.png";
import vector from "../../assets/Images/Vector.png";

const SectionHeader = ({ children }) => {
  return (
    <div className="text-2xl font-semibold relative bg-[url('./assets/Images/common-bg.png')] h-56 flex justify-center items-center">
      <div className="absolute -top-[38%] right-0">
        <img src={vector1} alt="" />
      </div>
      <div className="absolute bottom-0 left-0">
        <img src={vector} alt="" />
      </div>
      {children}
    </div>
  );
};

export default SectionHeader;
