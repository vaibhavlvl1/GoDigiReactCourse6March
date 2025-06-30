import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileSideBar from "./MobileSideBar";
import { AppContext } from "../../context/AppProvider";

export default function Layout() {
  const { mobileNavOpen } = useContext(AppContext);
  return (
    <div className="h-full w-full">
      <header className="sticky top-0 left-0 max-w-full z-50">
        <Navbar />
      </header>
      <main className="flex relative">
        <div className="sm:hidden z-10">
          {mobileNavOpen && <MobileSideBar />}
        </div>
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
}
