import React from "react";

const Job = (props) => {
  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
  } = props.featuredJob;
  return (
    <div>
      <img src={company_logo} alt="" />
      <h1>{job_title}</h1>
      <h2>{company_name}</h2>
      <div className="flex">
        <p>{remote_or_onsite}</p>
        <p>{fulltime_or_parttime}</p>
      </div>
      <div className="flex">
        <p>{location}</p>
        <p>Salary: {salary}</p>
      </div>
      <button className="my-btn">View Details</button>
    </div>
  );
};

export default Job;
