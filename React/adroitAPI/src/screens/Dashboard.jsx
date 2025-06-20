import React, { useContext, useEffect, useState } from "react";
import DashboardBox from "../components/uicomponents/DashboardBox";
import DashboardDateBox from "../components/uicomponents/DashboardDateBox";
import ProductReport from "../components/uicomponents/ProductReport";
import SalesRepReport from "../components/uicomponents/SalesRepReport";

import { AppContext } from "../context/AppProvider";
import axios from "axios";
import ChartContainer from "../components/uicomponents/ChartContainer";

export default function Dashboard() {
  const [response, setResponse] = useState([]);

  return response ? (
    <div className="bg-gray-200 w-full  p-5 overflow-scroll">
      <h1 className="text-bold uppercase text-xl pt-1 pb-3 border-b-2 border-gray-400 mb-6">
        Dashboard
      </h1>
      <div className="boxContainer w-full flex justify-evenly items-center flex-wrap gap-5">
        {/* <DashboardDateBox /> */}
        {/* <DashboardBox status="booked" summary={response.summary} /> */}
        {/* <DashboardBox status="OHQ" summary={response.summary} /> */}
        {/* <DashboardBox status="production" summary={response.summary} /> */}
        {/* <DashboardBox status="received" summary={response.summary} /> */}
      </div>

      <div className="productReport mt-7 mb-7 bg-white ">
        <div className="flex justify-between items-center pt-5 pl-3 pr-3">
          <h1 className="text-lg text-blue-800 text-extrabold  mb-5 ">
            Product Report
          </h1>
          <p>Filter</p>
        </div>
        {/* <ProductReport response={response.productReport} /> */}
      </div>

      <div className="salesReport mt-7 mb-7 bg-white ">
        <div className="flex justify-between items-center pt-5 pl-3 pr-3">
          <h1 className="text-lg text-blue-800 text-extrabold mb-5 ">
            Sales Rep Report
          </h1>
          <p>Filter</p>
        </div>
        {/* <SalesRepReport response={response.salesRepReport} /> */}
      </div>

      <ChartContainer />
    </div>
  ) : (
    <p>Loading</p>
  );
}
