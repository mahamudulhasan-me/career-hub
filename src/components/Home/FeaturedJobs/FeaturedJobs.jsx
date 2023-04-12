import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Job from "./Job";

const FeaturedJobs = (props) => {
  const featuredJobs = props.featuredJobs;
  const [showAll, setShowAll] = useState(false);
  // bg-[url('./assets/Images/common-bg2.png'),url('./assets/Images/common-bg3.png')] bg-left-top bg-no-repeat bg-cover
  return (
    <div className="px-[10%] my-10 ">
      <SectionTitle
        title="Featured Jobs"
        tag="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="grid md:grid-cols-2 gap-10">
        {featuredJobs &&
          featuredJobs
            ?.slice(0, showAll ? featuredJobs.length : 4)
            .map((featuredJob) => (
              <Job key={featuredJob.id} featuredJob={featuredJob} />
            ))}
      </div>
      {!showAll && (
        <button
          className="my-btn mx-auto mt-8"
          onClick={() => setShowAll(true)}
        >
          See All Jobs
        </button>
      )}
    </div>
  );
};

export default FeaturedJobs;
