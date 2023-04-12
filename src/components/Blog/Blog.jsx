import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Answer from "./Answer";

const Blog = () => {
  return (
    <div>
      <SectionHeader>Latest Blog</SectionHeader>
      <div className="   my-12 md:px-[15%] px-[5%]">
        <div className="space-y-4">
          <Answer
            question={"How Does React work?"}
            answer={
              <p>
                React is a JavaScript library for rendering the user interface.
                React JS divides the user interface into reusable pieces called
                components. <br /> React includes virtual DOM, which make a
                website more interactive. When there is a change in our website,
                instead of rendering the entire website, it compares the virtual
                dom with what has changed and only renders the changed part and
                shows it to the user.
              </p>
            }
          />
          <Answer
            question={"Difference between props vs state."}
            answer={
              <p>
                Both props and state are used to manage data in React, but they
                are used in different ways for different reasons. <br />
                <strong className="underline">Properties(props):</strong> Props
                are used to send data from the parent component to the child
                component. Passing data cannot change child components, because
                they are immutable Props can be used to pass any type of data,
                including strings, numbers, objects, and functions. <br />
                <strong className="underline">State:</strong> A state is an
                object that executes asynchronously. It is used to keep track of
                data that may change over time. When state is updated, React
                will re-render the component and any child components that
                depend on the changed state. State is mutable and can be changed
                by the component itself.
              </p>
            }
          />
          <Answer
            question={"How does useState work?"}
            answer={
              <p>
                In React's <strong>useState()</strong> is a hook, that is used
                to manage state in functional components. It returns an array
                containing two values, the current state and a function that
                will change the state. When the state is updated using the
                update function, React will automatically re-render the
                component with the updated state.
              </p>
            }
          />
          <Answer
            question={"Purpose of useEffect other than fetching data."}
            answer={
              <p>
                <strong> useEffect()</strong> is usually used to fetch the data.
                Besides, useEffect in react js allows performing side effects in
                our components. The react useEffect examples of side effects
                include reading from local storage, retrieving data, direct DOM
                updates, and timers.
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
