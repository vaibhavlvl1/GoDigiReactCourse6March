import React, { useContext } from "react";

import { AppContext } from "../../context/AppProvider";

export default function UserProfile() {
  const { logout, userName, userImg } = useContext(AppContext);

  return (
    <div className="w-52 h-auto flex justify-evenly items-center">
      <img
        className="w-18 h-18 object-cover rounded-[50%]"
        src={userImg}
        alt=""
      />

      <div className="w-full ml-4">
        <h1 className="text-xl ">{userName}</h1>
        <button
          onClick={logout}
          className="bg-blue-800 rounded-xl p-1 pl-2 pr-2 text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
