import React from "react";

const SectionTitle = (props) => {
  return (
    <div className="text-center my-14">
      <h1 className="text-4xl font-semibold my-2">{props.title}</h1>
      <p className="w-4/5 mx-auto font-medium ">{props.tag}</p>
    </div>
  );
};

export default SectionTitle;
