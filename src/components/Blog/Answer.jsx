import React from "react";

const Accordion = (props) => {
  return (
    <>
      <div className="collapse border-2 border-violet-400 rounded-xl">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          {props.question}
        </div>
        <div className="collapse-content border-t border-violet-600 text-justify ">
          <p className="mt-2">{props.answer}</p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
