import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout2() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="users">Users</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
