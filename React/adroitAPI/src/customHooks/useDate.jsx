import React from "react";
import { useState, useEffect } from "react";

export default function useDate(dateString) {
  const [date, setDate] = useState(dateString);
  let tempArray = date.split("-");
  newDate = "";
  useEffect(() => {
    newDate = `${date[3]}/${date[2]}/${date[1]}`;
  });

  return newDate;
}
