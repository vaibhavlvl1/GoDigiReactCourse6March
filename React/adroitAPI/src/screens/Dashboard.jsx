import React, { useContext, useEffect, useState, lazy, Suspense } from "react";
import DashboardBox from "../components/uicomponents/DashboardBox";
import DashboardDateBox from "../components/uicomponents/DashboardDateBox";
import ProductReport from "../components/uicomponents/ProductReport";
import SalesRepReport from "../components/uicomponents/SalesRepReport";

import { AppContext } from "../context/AppProvider";
import axios from "axios";

const ChartContainer = lazy(() =>
  import("../components/uicomponents/ChartContainer")
);

import DashboardBoxContainer from "../components/uicomponents/DashboardBoxContainer";
import { Loader2 } from "lucide-react";

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
      <Suspense fallback={<Loader2 />}>
        <ChartContainer />
      </Suspense>
    </div>
  ) : (
    <p>Loading</p>
  );
}
