import { toast } from "react-toastify";

const addDataToLocalStorage = (id, jobTitle) => {
  let appliedJobs = {};
  const isAppliedJobAvailable = localStorage.getItem("applied-jobs");
  if (isAppliedJobAvailable) {
    appliedJobs = JSON.parse(isAppliedJobAvailable);
  } else {
    localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
  }
  let newJob = appliedJobs[id];
  if (!newJob) {
    appliedJobs[id] = jobTitle;
    toast("Successfully applied");
  } else {
    toast(`Already applied for the post of ${jobTitle}`);
  }
  localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
};
const getDataFromLocalStorage = () => {
  const appliedJobs = localStorage.getItem("applied-jobs");
  return JSON.parse(appliedJobs);
};
export { addDataToLocalStorage, getDataFromLocalStorage };
