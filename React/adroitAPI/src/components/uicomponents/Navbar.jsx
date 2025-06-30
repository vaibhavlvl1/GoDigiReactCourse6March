import React, { useContext } from "react";
import logo from "../../images/AdBookPlus.png";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";
import { SquareMenu } from "lucide-react";
import { AppContext } from "../../context/AppProvider";

export default function Navbar() {
  const { mobileNavOpen, setMobileNavOpen } = useContext(AppContext);

  return (
    <div className="w-full   bg-white flex flex-wrap justify-center sm:justify-between   shadow-2xl/30 pt-2 pb-2 relative">
      <button
        onClick={() => setMobileNavOpen((prev) => !prev)}
        className="fixed top-1 left-1 sm:hidden"
      >
        <SquareMenu className=" text-blue-800 w-12 h-12" />
      </button>
      <div className="flex flex-wrap justify-center sm:justify-start align-center items-center gap-5">
        <img className="inline" src={logo} alt="" />
        <div className=" hidden sm:flex w-auto ">
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
            Ad List
          </Link>
        </div>
      </div>
      <div className="hidden sm:block mt-10 sm:mt-0">
        <UserProfile />
      </div>
    </div>
  );
}
