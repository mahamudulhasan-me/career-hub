import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Home from "./components/Home/Home";
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
        loader: () => fetch("availableJobs.json"),
        loader: LoadFeaturedJobs,
      },
      { path: "applied-jobs", element: <AppliedJobs /> },
      { path: "statistics", element: <Statistics /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
