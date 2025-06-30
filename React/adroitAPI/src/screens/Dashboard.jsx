import React, { useContext, useEffect, useState } from "react";
import DashboardBox from "../components/uicomponents/DashboardBox";
import DashboardDateBox from "../components/uicomponents/DashboardDateBox";
import ProductReport from "../components/uicomponents/ProductReport";
import SalesRepReport from "../components/uicomponents/SalesRepReport";

import { AppContext } from "../context/AppProvider";
import axios from "axios";
import ChartContainer from "../components/uicomponents/ChartContainer";
import DashboardBoxContainer from "../components/uicomponents/DashboardBoxContainer";

export default function Dashboard() {
  const [response, setResponse] = useState([]);

  return response ? (
    <div className="bg-gray-200 w-full  p-5 overflow-y-scroll">
      <p className="font-medium text-xl uppercase  pt-1 pb-3 border-b-2 border-gray-400 mb-6">
        Dashboard
      </p>
      <DashboardBoxContainer />

      <ProductReport />

      <SalesRepReport />

      <ChartContainer />
    </div>
  ) : (
    <p>Loading</p>
  );
}
