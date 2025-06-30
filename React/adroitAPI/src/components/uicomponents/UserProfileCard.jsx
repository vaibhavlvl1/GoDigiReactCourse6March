import React, { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

export default function UserProfileCard() {
  const { userImg, userName, userPhone, userEmail, logout, setViewCard } =
    useContext(AppContext);

  return userPhone ? (
    <div className="absolute top-24 w-64 h-56 bg-white p-2 shadow-2xl">
      <div className="flex justify-start items-center gap-2">
        <img
          className="w-24 h-24 object-cover rounded-full"
          src={userImg}
          alt=""
        />
        <p className="text-2xl ">{userName}</p>
      </div>
      <hr className="mt-2 mb-2" />
      <p className="text-black">Email : {userEmail}</p>
      <p className="text-black">Mobile : {userPhone}</p>
      <hr />
      <div>
        <button className=" mr-1 bg-blue-800 text-white pl-2 pr-2 pt-1 pb-1 mt-2 mb-2">
          View Profile
        </button>
        <button
          onClick={logout}
          className="bg-blue-800 text-white pl-2 pr-2 pt-1 pb-1 mt-2 mb-2"
        >
          Logout
        </button>
        <button
          className="bg-red-500 h-8 w-8 rounded-full absolute top-0 right-0  text-white p-1 ml-5"
          onClick={() => setViewCard(false)}
        >
          X
        </button>
      </div>
    </div>
  ) : (
    <p>Loading</p>
  );
}
