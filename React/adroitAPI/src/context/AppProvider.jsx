import React, { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [userDetails, setUserDetails] = useState("");

  const [loginError, setLoginError] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem("username"));
  const [userImg, setUserImg] = useState(localStorage.getItem("userimg"));
  const [token, setToken] = useState(localStorage.getItem("token"));

  async function login(email, password) {
    const BASE_URL = "/api/demo-adbook/api/login";
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);
    try {
      const response = await axios.post(BASE_URL, formData);

      if (response.data.code === 200) {
        setUserDetails(response.data.userDetails);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.userDetails.user_name);
        localStorage.setItem(
          "userimg",
          response.data.userDetails.profileimage_url
        );
        localStorage.getItem("token") && setIsLoggedIn(true);

        setUserName(localStorage.getItem("username"));
        setUserImg(localStorage.getItem("userimg"));
        setToken(localStorage.getItem("token"));

        setLoginError(false);
      }

      if (response.data.code === 401) {
        setLoginError(true);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      // console.log(userDetails);
    }
  }

  function logout() {
    localStorage.clear();
    setIsLoggedIn(false);
  }

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        login,
        userDetails,
        logout,
        loginError,
        userName,
        userImg,
        token,
        setToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
