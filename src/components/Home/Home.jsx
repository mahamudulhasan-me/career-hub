import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";
import JobCategory from "./JobCategory/JobCategory";

const Home = () => {
  const featuredJobs = useLoaderData();

  return (
    <div>
      <Banner />
      <JobCategory />
      <FeaturedJobs featuredJobs={featuredJobs} />
    </div>
  );
};

export default Home;
