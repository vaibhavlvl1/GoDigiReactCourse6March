import React, { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileSideBar from "./MobileSideBar";
import { AppContext } from "../../context/AppProvider";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout() {
  const { mobileNavOpen, sideBarOpen } = useContext(AppContext);
  const location = useLocation();
  return (
    <div className="h-full w-full">
      <header className="sticky top-0 left-0 max-w-full z-50">
        <Navbar />
      </header>
      <motion.main layout className="flex relative">
        <div className="sm:hidden z-10">
          {mobileNavOpen && <MobileSideBar />}
        </div>
        <AnimatePresence initial={false}>
          <motion.div
            className="hidden sm:block absolute top-0 left-0 h-full w-80 "
            key="sidebar"
            initial={false}
            animate={{ x: sideBarOpen ? 0 : -320 }}
            // exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            layout // 👈 enables pushing the content smoothly
          >
            <Sidebar />
          </motion.div>
        </AnimatePresence>

        <motion.div
          key={location.pathname}
          layout
          animate={{
            paddingLeft: sideBarOpen ? 320 : 0, // 👈 shifts the content
          }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <Outlet />
        </motion.div>
      </motion.main>
    </div>
  );
}
