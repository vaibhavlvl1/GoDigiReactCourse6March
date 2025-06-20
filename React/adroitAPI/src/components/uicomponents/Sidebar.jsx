import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CircleGauge } from "lucide-react";

import styles from "./Sidebar.module.css";
import { AppContext } from "../../context/AppProvider";

export default function Sidebar() {
  const { logout } = useContext(AppContext);

  return (
    <div className="w-1/5 bg-blue-800 h-dvh">
      <ul
        className={` ${styles.dashList} dash-list text-white border-b-1 border-gray-400 mt-5 pb-5`}
      >
        <li className="flex p-5 gap-2 hover:bg-white hover:text-black transition-all duration-300">
          <CircleGauge />
          <Link to="/">Dashboard</Link>
        </li>
        <li className="flex p-5 gap-2 hover:bg-white hover:text-black transition-all duration-300 ">
          <CircleGauge />
          <Link to="/usermanagement">User Management</Link>
        </li>
        <li className="flex p-5 gap-2 hover:bg-white hover:text-black transition-all duration-300">
          <CircleGauge />
          <Link to="/productmanagement">Product Management</Link>
        </li>
        <li className="flex p-5 gap-2 hover:bg-white hover:text-black transition-all duration-300">
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
