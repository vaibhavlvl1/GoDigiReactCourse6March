import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CircleGauge } from "lucide-react";
import UserProfile from "./UserProfile";

import styles from "./Sidebar.module.css";
import { AppContext } from "../../context/AppProvider";

export default function MobileSideBar() {
  const { logout, setMobileNavOpen } = useContext(AppContext);

  function closeMobileNav() {
    console.log("function running");
    setMobileNavOpen(false);
  }

  return (
    <div className="w-max  bg-blue-800 h-dvh fixed top-10 left-0 pr-2 pl-2 pt-5 transition-all duration-300 ease-in-out">
      <div className=" mt-10 sm:mt-0">
        <UserProfile />
      </div>
      <div className="flex w-auto mt-5">
        <Link
          onClick={closeMobileNav}
          to="/bookad"
          className="bg-white h-10 w-28 text-blue-800 rounded-3xl flex justify-center items-center me-3"
        >
          BookAd
        </Link>
        <Link
          onClick={closeMobileNav}
          to="/adlist"
          className="text-blue-800 h-10 w-28 bg-white rounded-3xl flex justify-center items-center"
        >
          Add List
        </Link>
      </div>
      <ul
        className={` ${styles.dashList} dash-list text-white border-b-1 border-gray-400 mt-5 pb-5`}
      >
        <li
          onClick={closeMobileNav}
          className="flex p-5 gap-2 hover:bg-white hover:text-black transition-all duration-300"
        >
          <CircleGauge />
          <Link to="/">Dashboard</Link>
        </li>
        <li
          onClick={closeMobileNav}
          className="flex p-5 gap-2 hover:bg-white hover:text-black transition-all duration-300 "
        >
          <CircleGauge />
          <Link to="/usermanagement">User Management</Link>
        </li>
        <li
          onClick={closeMobileNav}
          className="flex p-5 gap-2 hover:bg-white hover:text-black transition-all duration-300"
        >
          <CircleGauge />
          <Link to="/productmanagement">Product Management</Link>
        </li>
        <li
          onClick={closeMobileNav}
          className="flex p-5 gap-2 hover:bg-white hover:text-black transition-all duration-300"
        >
          <CircleGauge />
          <Link to="/customer">Customer</Link>
        </li>
      </ul>
      <button
        onClick={logout}
        className="text-white  p-5 w-full gap-2 cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
      >
        Log Out
      </button>
    </div>
  );
}
