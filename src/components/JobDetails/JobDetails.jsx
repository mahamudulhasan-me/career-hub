import {
  faAddressCard,
  faBriefcase,
  faCircleDollarToSlot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { addDataToLocalStorage } from "../../StorageFunctionality/StorageFunctionality";
import SectionHeader from "../SectionHeader/SectionHeader";

const JobDetails = () => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = useLoaderData();
  const getJobTitle = (id, jobTitle) => {
    addDataToLocalStorage(id, jobTitle);
  };
  return (
    <div className="">
      <SectionHeader>Job Details</SectionHeader>
      <div className="md:grid md:grid-cols-3 gap-5 md:px-[15%] px-[5%] my-14">
        <div className="col-span-2 space-y-4 md:mb-0 mb-4">
          <p>
            <strong>Job Description:</strong>
            {job_description}
          </p>
          <p>
            <strong>Job Responsibility: </strong>
            {job_responsibility}
          </p>
          <div>
            <strong>Educational Requirements:</strong>
            <p>{educational_requirements}</p>
          </div>
          <div>
            <strong>Experience:</strong>
            <p>{experiences}</p>
          </div>
        </div>
        <div>
          <div className="bg-violet-100 p-6 rounded-md">
            <div>
              <p className="pb-3 mb-3 text-slate-900 text-lg font-semibold border-b-2 border-violet-400">
                Job Details
              </p>
              <p>
                <strong>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faCircleDollarToSlot}
                  />{" "}
                  Salary:{" "}
                </strong>{" "}
                {salary}
              </p>
              <p className="mt-1">
                <strong>
                  <FontAwesomeIcon className="icon" icon={faBriefcase} /> Job
                  Title:{" "}
                </strong>
                {job_title}
              </p>
            </div>
            <div>
              <p className="pb-3 mt-4 mb-3 text-slate-900 text-lg font-semibold border-b-2 border-violet-400">
                Contact Information
              </p>
              <div className="space-y-1">
                <h5>
                  <strong>
                    <FontAwesomeIcon className="icon" icon={faPhone} /> Phone:{" "}
                  </strong>{" "}
                  {contact_information?.phone}
                </h5>
                <h5>
                  <strong>
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />{" "}
                    Email:{" "}
                  </strong>{" "}
                  {contact_information?.email}
                </h5>
                <h5>
                  <strong>
                    <FontAwesomeIcon className="icon" icon={faAddressCard} />{" "}
                    Address:{" "}
                  </strong>{" "}
                  {contact_information?.address}
                </h5>
              </div>
            </div>
          </div>
          <button
            className="apply-btn"
            onClick={() => getJobTitle(id, job_title)}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
