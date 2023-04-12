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
    <div className="px-[10%] md:my-20">
      <SectionTitle
        title="Job Category List"
        tag="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="flex md:flex-row flex-col justify-between gap-6">
        {availableJobs.map((jobs) => (
          <div
            className="bg-violet-100 w-full pl-8 py-5 rounded-md"
            key={jobs.id}
          >
            <figure className="w-24 p-4 bg-violet-200 rounded-lg">
              <img src={jobs.logo} alt="" />
            </figure>
            <h3 className="text-xl mt-5">{jobs.name}</h3>
            <p>
              <span className="text-red-400 underline mx-1 cursor-pointer">
                {jobs.jobs_available}
              </span>{" "}
              Jobs Available
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
