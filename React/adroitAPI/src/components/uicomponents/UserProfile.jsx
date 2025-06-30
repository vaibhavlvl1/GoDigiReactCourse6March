import React, { useContext, useState } from "react";

import { AppContext } from "../../context/AppProvider";
import { ChevronDown } from "lucide-react";
import UserProfileCard from "./UserProfileCard";

export default function UserProfile() {
  const { userName, userImg } = useContext(AppContext);
  const{viewCard,setViewCard} = useContext(AppContext)

  return (
    <>
      <div
        onClick={() => setViewCard((prev) => !prev)}
        className="w-58 h-auto flex justify-evenly items-center  hover:border-gray-300  transition-all duration-300 p-2 hover:shadow-xl hover:scale-105 mr-10 relative"
      >
        <img
          className="w-18 h-18 object-cover rounded-[50%]"
          src={userImg}
          alt=""
        />
        <div className="w-full ml-4 ">
          <h1 className="text-xl  text-white sm:text-black">
            {userName} <ChevronDown className="inline" />
          </h1>

          {/* <button
          onClick={logout}
          className="bg-blue-800 rounded-xl p-1 pl-2 pr-2 text-white"
        >
          Logout
        </button> */}
        </div>
      </div>
      {viewCard && <UserProfileCard />}
    </>
  );
}
