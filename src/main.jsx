import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import JobDetails from "./components/JobDetails/JobDetails";
import Statistics from "./components/Statistics/Statistics";
import "./index.css";
import { loadAllJobs } from "./LoadFeaturedJobs/LoadAllJobs";
import { LoadFeaturedJobs } from "./LoadFeaturedJobs/LoadFeaturedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        loader: ({ params }) => loadAllJobs(params.job_title),
      },
      {
        path: "statistics",
        element: <Statistics />,
        loader: () => fetch("/assignmentMarks.json"),
      },
      { path: "blog", element: <Blog /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
