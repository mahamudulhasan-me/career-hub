import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Job from "./Job";

const FeaturedJobs = (props) => {
  const featuredJobs = props.featuredJobs;
  const [jobs, setJobs] = useState([]);
  return (
    <div className="px-[10%] ">
      <SectionTitle
        title="Featured Jobs"
        tag="THis is a job feature job details"
      />
      <div className="grid grid-cols-2">
        {featuredJobs.map((featuredJob) => (
          <Job key={featuredJob.id} featuredJob={featuredJob} />
        ))}
      </div>
      <div className="text-center">
        <button className="my-btn">See All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
