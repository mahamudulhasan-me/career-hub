import React from "react";
import bannerImg from "../../../assets/Images/banner-img.png";
const Banner = () => {
  return (
    <div className="px-[10%] flex justify-between items-center bg-[url('./assets/Images/common-bg.png')] h-[calc(100vh-90px)]">
      <div>
        <h1 className="text-6xl font-semibold">
          One Step Closer <br /> To Your <br />
          <span className="primary-clr"> Dream Job</span>
        </h1>
        <h4 className="mt-12 mb-4 w-4/5 font-medium text-slate-600">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </h4>
        <button className="my-btn">Get Started</button>
      </div>
      <figure>
        <img src={bannerImg} alt="" />
      </figure>
    </div>
  );
};

export default Banner;
