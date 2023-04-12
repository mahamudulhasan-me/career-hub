import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const AppliedJob = (props) => {
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
    <div className="flex md:flex-row justify-between items-center border p-5 rounded-md flex-col">
      <div className="flex md:flex-row flex-col items-center gap-8">
        <div className="w-48 h-48  bg-[#F4F4F4] flex items-center justify-center rounded-md">
          <img src={company_logo} alt="" />
        </div>
        <div>
          <h2 className="text-xl md:mt-6 ">{job_title}</h2>
          <p className="text-slate-700">{company_name}</p>
          <div className="flex ">
            <p className="my-border">
              <span className="primary-clr">{remote_or_onsite}</span>
            </p>
            <p className="my-border">
              <span className="primary-clr">{fulltime_or_parttime}</span>
            </p>
          </div>
          <div className="flex text-center gap-4 mt-2 md:mb-0 mb-2">
            <p>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-xl text-slate-500"
              />
              {location}
            </p>
            <p>
              <FontAwesomeIcon
                className="text-xl text-slate-500"
                icon={faCircleDollarToSlot}
              />
              {salary}
            </p>
          </div>
        </div>
      </div>
      <Link className="my-btn" to={`/job-details/${job_title}`}>
        View Details
      </Link>
    </div>
  );
};

export default AppliedJob;
