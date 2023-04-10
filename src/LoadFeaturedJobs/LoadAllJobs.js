const loadAllJobs = async (jobTitle) => {
  const response = await fetch("/availableJobDetails.json");
  const allJobs = await response.json();
  const jobById = allJobs.find((job) => job.job_title === jobTitle);
  return jobById;
};
export { loadAllJobs };
