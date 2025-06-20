import React from "react";

export default function DashboardDateBox() {
  let date = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="w-64 h-40 bg-orange-600 flex justify-center items-center flex-col">
      <h1 className="text-white text-4xl">{date.getDate()}</h1>
      <p className="text-xl text-white ">
        {weekday[date.getDay()]} {date.getFullYear()}
      </p>
    </div>
  );
}
