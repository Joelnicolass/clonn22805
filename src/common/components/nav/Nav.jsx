import React from "react";

const Nav = () => {
  return (
    <nav style={navStyle}>
      <ul>
        <li>Home</li>
      </ul>
    </nav>
  );
};

export default Nav;

const navStyle = {
  display: "flex",
  height: "50px",
  background: "red",
  width: "100%",
};
