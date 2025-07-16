import axios from "axios";
import React, { use, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppProvider";
import Booked from "./SingleAdScreen/Booked";

export default function AdDetails() {
  const { token } = useContext(AppContext);
  const { id } = useParams();
  const [adData, setAdData] = useState("");
  const [adStatus, setAdStatus] = useState("");

  async function getAdDetails() {
    const formData = new FormData();
    formData.append("token", token);
    try {
      const response = await axios.post(
        `/api/demo-adbook/api/ads/fetch-details/${id}`,
        formData
      );
      console.log(response.data);
      if (response.data.status) {
        setAdData(response.data);
        setAdStatus(response.data.ads_details.status);
        console.log("data has been set");
      }
    } catch (error) {
      console.log(error.message, "Failed To Get Ad Details");
    }
  }

  useEffect(() => {
    getAdDetails();
  }, []);

  return (
    <div className="bg-gray-200  w-full h-auto   overflow-y-scroll">
      <p className="font-medium text-xl uppercase p-5  border-b-2 border-gray-400 mb-6">
        Ad Details for id {id}
      </p>

      {adStatus === "Booked" && <Booked adStatus={adStatus} adData={adData} />}
    </div>
  );
}
