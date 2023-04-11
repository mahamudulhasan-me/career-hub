import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SectionHeader from "../SectionHeader/SectionHeader";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const { appliedJobs, allJobs } = useLoaderData();

  const [filterJob, setFilterJob] = useState(appliedJobs);
  const filterByRemote = () => {
    setFilterJob(
      appliedJobs.map((job) =>
        job.filter((job) => job.remote_or_onsite === "Remote")
      )
    );
  };
  const resetFilter = () => setFilterJob(appliedJobs);
  const filterByOnsite = () => {
    setFilterJob(
      appliedJobs.map((job) =>
        job.filter((job) => job.remote_or_onsite === "Onsite")
      )
    );
  };
  return (
    <div>
      <SectionHeader>Applied Jobs</SectionHeader>
      <div className="px-[20%] mx-auto mt-10">
        <div className="text-right my-10">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="px-10 py-5 my-border2 m-1">
              Filter By <FontAwesomeIcon icon={faChevronDown} />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={filterByRemote}>Remote</a>
              </li>
              <li>
                <a onClick={filterByOnsite}>Onsite</a>
              </li>
              <li>
                <a onClick={resetFilter}>Reset</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-10">
          {filterJob.map((job) =>
            job.map((job) => <AppliedJob key={job.id} job={job} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
