import { getDataFromLocalStorage } from "../StorageFunctionality/StorageFunctionality";

const LoadFeaturedJobs = async () => {
  const response = await fetch("availableJobDetails.json");
  const allJobs = await response.json();
  const getDataFromDb = getDataFromLocalStorage();
  let appliedJobs = [];
  for (let id in getDataFromDb) {
    const foundJobs = allJobs.filter((job) => job.id === id);
    if (foundJobs) {
      appliedJobs.push(foundJobs);
    }
  }
  return { appliedJobs, allJobs };
};
export { LoadFeaturedJobs };
