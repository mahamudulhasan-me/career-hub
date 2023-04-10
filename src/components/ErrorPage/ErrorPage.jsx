import React from "react";
import { Link, useRouteError } from "react-router-dom";
import page404 from "../../assets/Images/404.png";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="bg-[url('./assets/Images/404-bg.png')] bg-cover h-screen flex flex-col justify-center space-y-4 items-center">
      <img src="/logo.svg" alt="" className="w-40" />
      <img src={page404} alt="" />
      <h1 className="text-3xl font-medium text-[#FF5364]">
        Oh No! Error {status}
      </h1>
      <p>{error.message}</p>
      <Link to={"./"} className="my-btn">
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
