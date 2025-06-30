import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppProvider";
import DashboardDateBox from "./DashboardDateBox";
import DashboardBox from "./DashboardBox";

export default function DashboardBoxContainer() {
  const { token } = useContext(AppContext);
  const [response, setResponse] = useState(null);
  const formData = new FormData();
  formData.append("token", token);

  async function getDashboardCount() {
    try {
      const res = await axios.post("/api/demo-adbook/api/dashboard", formData);
      console.log(res.data.status);

      if (res.data.status) {
        setResponse(res.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getDashboardCount();
  }, []);

  return response ? (
    <div className="boxContainer w-full flex justify-evenly items-center flex-wrap gap-5">
      <DashboardDateBox />
      <DashboardBox status="booked" summary={response.booked} />
      <DashboardBox status="OHQ" summary={response.hold} />
      <DashboardBox status="production" summary={response.production} />
      <DashboardBox status="received" summary={response.received} />
    </div>
  ) : (
    <p>...Loading</p>
  );
}
