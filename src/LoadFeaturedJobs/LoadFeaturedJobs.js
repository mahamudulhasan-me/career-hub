const LoadFeaturedJobs = async () => {
  const response = await fetch("availableJobDetails.json");
  const data = await response.json();
  return data;
};
export { LoadFeaturedJobs };
