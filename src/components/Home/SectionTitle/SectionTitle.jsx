import React from "react";

const SectionTitle = (props) => {
  return (
    <div className="text-center">
      <h1>{props.title}</h1>
      <p>{props.tag}</p>
    </div>
  );
};

export default SectionTitle;
