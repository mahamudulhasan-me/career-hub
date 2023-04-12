import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  return (
    <div className="transition duration-0 hover:duration-700 ease-in-out hover:bg-[url('./assets/Images/common-bg3.png')]  bg-cover border border-indigo-300  p-5 rounded-md">
      <img src={company_logo} alt="" className="w-44 bg-transparent" />
      <h1 className="text-xl mt-6 ">{job_title}</h1>
      <h2 className="text-slate-700">{company_name}</h2>
      <div className="flex">
        <p className="my-border">
          <span className="primary-clr">{remote_or_onsite}</span>
        </p>
        <p className="my-border">
          <span className="primary-clr">{fulltime_or_parttime}</span>
        </p>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <p>
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-xl text-slate-500"
          />{" "}
          {location}
        </p>
        <p>
          <FontAwesomeIcon
            className="text-xl text-slate-500"
            icon={faCircleDollarToSlot}
          />{" "}
          Salary: {salary}
        </p>
      </div>
      <Link className="my-btn2" to={`/job-details/${job_title}`}>
        <span>View Details</span>
      </Link>
    </div>
  );
};

export default Job;
