import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="h-full w-full">
      <header>
        <Navbar />
      </header>
      <main className="flex">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
}
