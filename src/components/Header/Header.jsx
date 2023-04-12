import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div className="navbar px-[10%] bg-[url('./assets/Images/common-bg.png')] py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ActiveLink to={"./"}>Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"./applied-jobs"}>Applied Jobs</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"./statistics"}>Statistics</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"./blog"}>Blog</ActiveLink>
            </li>
          </ul>
        </div>
        <Link to={"./"}>
          <img src="/logo.svg" alt="" className="w-40" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 space-x-5">
          <li>
            <ActiveLink to={"/"}>Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/applied-jobs"}>Applied Jobs</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/statistics"}>Statistics</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/blog"}>Blog</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="my-btn" to={"/"}>
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Header;
