import React from "react";

const Title = ({ text, capitalize = true }) => {
  return (
    <h1
      style={{
        fontSize: "4rem",
        margin: "2rem 0",
      }}
    >
      {text && capitalize ? text.toUpperCase() : text}
    </h1>
  );
};

export default Title;
