import React from "react";
import logo from "../../images/AdBookPlus.png";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";

export default function Navbar() {
  return (
    <div className="w-full h-20 bg-white flex justify-start items-center shadow-2xl/30">
      <img className="w-48 h-14 me-20" src={logo} alt="" />
      <div className="flex justify-between items-center w-full">
        <div className="flex w-auto">
          <Link
            to="/bookad"
            className="bg-blue-800 h-10 w-28 text-white rounded-3xl flex justify-center items-center me-3"
          >
            BookAd
          </Link>
          <Link
            to="/adlist"
            className="bg-blue-800 h-10 w-28 text-white rounded-3xl flex justify-center items-center"
          >
            Add List
          </Link>
        </div>
        <UserProfile />
      </div>
    </div>
  );
}
