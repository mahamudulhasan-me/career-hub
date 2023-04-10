import React from "react";
import { useLoaderData } from "react-router-dom";
import SectionHeader from "../SectionHeader/SectionHeader";

const JobDetails = () => {
  const {
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
  } = useLoaderData();

  return (
    <div className="">
      <SectionHeader>Job Details</SectionHeader>
      <div className="flex justify-between">
        <div>
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
        <div></div>
      </div>
    </div>
  );
};

export default JobDetails;
