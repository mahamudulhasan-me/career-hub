import React from "react";

const AppliedJob = (props) => {
  console.log(props.job);
  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = props.job;
  return (
    <div className="flex justify-between items-center border p-5">
      <div className="flex items-center gap-8">
        <div className="w-52 h-52  bg-[#F4F4F4] flex items-center justify-center">
          <img src={company_logo} alt="" />
        </div>
        <div>
          <h2>{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex">
            <p>{remote_or_onsite}</p>
            <p>{fulltime_or_parttime}</p>
          </div>
          <div className="flex">
            <p>{location}</p>
            <p>{salary}</p>
          </div>
        </div>
      </div>
      <button className="my-btn">View Details</button>
    </div>
  );
};

export default AppliedJob;
