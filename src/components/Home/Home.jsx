import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import JobCategory from "./JobCategory/JobCategory";

const Home = () => {
  const availableJobs = useLoaderData();
  console.log(availableJobs);
  return (
    <div>
      <Banner />
      <JobCategory availableJobs={availableJobs} />
    </div>
  );
};

export default Home;
