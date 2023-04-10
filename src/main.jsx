import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Home from "./components/Home/Home";
import JobDetails from "./components/JobDetails/JobDetails";
import Statistics from "./components/Statistics/Statistics";
import "./index.css";
import { LoadFeaturedJobs } from "./LoadFeaturedJobs/LoadFeaturedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("availableJobDetails.json"),
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />,
        loader: LoadFeaturedJobs,
      },
      {
        path: "/job-details/:job_title",
        element: <JobDetails />,
        loader: async ({ params }) => {
          const job = await fetch("availableJobDetails.json");
          const jobDetails = await job.json();
          const data = jobDetails.find(
            (job) => job.job_title === params.job_title
          );
          return data;
        },
      },
      { path: "statistics", element: <Statistics /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
