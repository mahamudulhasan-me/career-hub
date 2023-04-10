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
      <div className="grid grid-cols-3 justify-between px-[10%]">
        <div className="col-span-2">
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
          <div>
            <p>Job Details</p>
            <h5>
              <strong>Salary: </strong> {salary}
            </h5>
            <h5>
              <strong>Job Title: </strong>
              {job_title}
            </h5>
          </div>
          <div>
            <p>Contact Information</p>
            <h5>
              <strong>Phone: </strong> {contact_information?.phone}
            </h5>
            <h5>
              <strong>Email: </strong> {contact_information?.email}
            </h5>
            <h5>
              <strong>Address: </strong> {contact_information?.address}
            </h5>
          </div>
          <button
            className="my-btn w-full"
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
