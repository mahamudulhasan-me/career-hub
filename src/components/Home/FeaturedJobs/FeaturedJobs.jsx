import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Job from "./Job";

const FeaturedJobs = (props) => {
  const featuredJobs = props.featuredJobs;
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="px-[10%] ">
      <SectionTitle
        title="Featured Jobs"
        tag="THis is a job feature job details"
      />
      <div className="grid grid-cols-2">
        {featuredJobs
          .slice(0, showAll ? featuredJobs.length : 4)
          .map((featuredJob) => (
            <Job key={featuredJob.id} featuredJob={featuredJob} />
          ))}
      </div>
      {!showAll && (
        <div className="text-center">
          <button className="my-btn" onClick={() => setShowAll(true)}>
            See All Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedJobs;
