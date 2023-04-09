import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-rose-500" : "")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
