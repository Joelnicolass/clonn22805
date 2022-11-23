import React from "react";
import Nav from "../../nav/Nav";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default HomeLayout;
