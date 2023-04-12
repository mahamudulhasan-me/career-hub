import React from "react";

const SectionTitle = (props) => {
  return (
    <div className="text-center my-14">
      <h1 className="md:text-4xl text-2xl font-semibold my-2">{props.title}</h1>
      <p className="md:w-3/5 mx-auto font-medium ">{props.tag}</p>
    </div>
  );
};

export default SectionTitle;
