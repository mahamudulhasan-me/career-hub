import React from "react";
import { useLoaderData } from "react-router-dom";
import SectionHeader from "../SectionHeader/SectionHeader";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const { appliedJobs, allJobs } = useLoaderData();
  return (
    <div>
      <SectionHeader>Applied Jobs</SectionHeader>
      <div className="px-[20%] mx-auto">
        <div className="text-right">
          <div className="dropdown dropdown-top dropdown-end">
            <label tabIndex={0} className="px-10 py-5 border m-1">
              Filter By
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        {appliedJobs.map((job) =>
          job.map((job) => <AppliedJob key={job.id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
