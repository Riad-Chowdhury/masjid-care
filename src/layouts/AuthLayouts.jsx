import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import { Outlet } from "react-router";

const AuthLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayouts;
