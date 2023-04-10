import React from "react";
import { Link } from "react-router-dom";

const Job = (props) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
  } = props.featuredJob;
  const getJobId = (id) => {
    console.log(id);
  };
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
      <Link className="my-btn" to={`/job-details/${job_title}`}>
        View Details
      </Link>
    </div>
  );
};

export default Job;
