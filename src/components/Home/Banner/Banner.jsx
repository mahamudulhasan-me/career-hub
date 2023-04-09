import React from "react";
import bannerImg from "../../../assets/Images/banner-img.png";
const Banner = () => {
  return (
    <div className="px-[10%] flex justify-between items-center bg-[url('./assets/Images/common-bg.png')] h-[calc(100vh-90px)]">
      <div>
        <h1>One Step Closer To Your Dream Job</h1>
        <h4>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </h4>
        <button className="my-btn">Get Start</button>
      </div>
      <figure>
        <img src={bannerImg} alt="" />
      </figure>
    </div>
  );
};

export default Banner;
