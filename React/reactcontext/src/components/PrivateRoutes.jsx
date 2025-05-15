import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const { isLoggedIn } = useContext(UserContext);
  return isLoggedIn ? children : <Navigate to="/" />;
}

export default PrivateRoutes;
