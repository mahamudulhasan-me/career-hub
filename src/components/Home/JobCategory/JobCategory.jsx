import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const JobCategory = (props) => {
  const availableJobs = props.availableJobs;
  return (
    <div className="px-[10%]">
      <SectionTitle
        title="Job Category List"
        tag="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="flex justify-between gap-4">
        {availableJobs.map((jobs) => (
          <div className="bg-violet-300 w-full">
            <img src={jobs.logo} alt="" className="w-40" />
            <p>{jobs.name}</p>
            <p>{jobs.jobs_available}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
