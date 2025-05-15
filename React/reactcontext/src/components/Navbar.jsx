import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "./UserContext";
function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  function handlesignin() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="menu-container">
      <ul className="menu">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        
        {isLoggedIn ? (<Link to="/users">User</Link>,
        <Link to="/settings">Settings</Link>) : ""}


        <button className="signbtn" onClick={handlesignin}>
          {isLoggedIn ? "Sign Out" : "Login in"}
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
