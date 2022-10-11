import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Questions and Answers</h1>
      <hr />
      <div className="ans-div">
        <h3>1. What is the purpose of React router?</h3>
        <p>
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.
        </p>
      </div>
      <div className="ans-div">
        <h3>2. How dose Context API works?</h3>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.React.createContext() is all you need. It
          returns a consumer and a provider. Provider is a component that as
          it's names suggests provides the state to its children. It will hold
          the "store" and be the parent of all the components that might need
          that store. Consumer as it so happens is a component that consumes and
          uses the state
        </p>
      </div>
      <div className="ans-div">
        <h3>3. What is useRef?</h3>
        <p>
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly. useRef
          returns a mutable ref object whose .current property is initialized to
          the passed argument (initialValue). The returned object will persist
          for the full lifetime of the component.
        </p>
      </div>
    </div>
  );
};

export default Blog;
