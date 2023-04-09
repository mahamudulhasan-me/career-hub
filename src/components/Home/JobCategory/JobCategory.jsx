import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const JobCategory = (props) => {
  const [availableJobs, setAvailableJobs] = useState([]);
  useState(() => {
    fetch("availableJobs.json")
      .then((response) => response.json())
      .then((data) => setAvailableJobs(data));
  }, []);
  return (
    <div className="px-[10%]">
      <SectionTitle
        title="Job Category List"
        tag="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="flex justify-between gap-4">
        {availableJobs.map((jobs) => (
          <div className="bg-violet-100 w-full">
            <img src={jobs.logo} alt="" className="w-24" />
            <p>{jobs.name}</p>
            <p>{jobs.jobs_available} Jobs Available</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
