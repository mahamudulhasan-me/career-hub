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
            question={"When should you use context API?"}
            answer={
              <p>
                <strong className="underline"> Context API</strong> in React is
                used to manage global state that needs to be shared across
                multiple components in a React application. <br /> I can use the
                Context API in React when i have need to manage global state
                that needs to be shared across multiple components, avoid prop
                drilling, manage global settings or configurations, implement
                dynamic theming or styling, handle authentication and user data,
                or manage cross-cutting concerns in my application.
              </p>
            }
          />
          <Answer
            question={"What is a custom hook?"}
            answer={
              <p>
                <strong className="underline">Custom hooks</strong> are a
                powerful pattern in React that allows to create reusable logic
                and promote clean and maintainable code. They can be used to
                encapsulate common functionality, abstract complex logic, and
                improve the reusability of my React components. <br />
                Custom hooks are created using standard JavaScript functions and
                naming convention with the prefix "use" followed by a
                descriptive name, such as "useFetch", "useForm", or
                "useLocalStorage".
              </p>
            }
          />
          <Answer
            question={"What is useRef?"}
            answer={
              <p>
                <strong className="underline">useRef</strong> is a built-in hook
                in React that allows to create a mutable reference to a value
                that persists across re-renders of a component. It is commonly
                used for accessing and modifying DOM elements, storing and
                accessing previous values, managing mutable state, caching
                expensive computations, and storing values in event handlers or
                effects. <br /> However, it should not be used as a replacement
                for state management when values need to trigger re-renders or
                be part of the component's declarative state.
              </p>
            }
          />
          <Answer
            question={"What is useMemo?"}
            answer={
              <p>
                <strong className="underline">useMemo</strong> is a built-in
                hook in React that allows to memoize the result of a computation
                and cache it, so that unnecessary re-computations can be
                avoided. It is commonly used for optimizing performance by
                caching expensive computations or computations with stable
                inputs. However, it should be used judiciously to strike a
                balance between performance optimization and memory usage.
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
