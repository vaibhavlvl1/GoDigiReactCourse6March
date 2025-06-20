import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppProvider";
import axios from "axios";
import Loader from "./Loader";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";

export default function ChartContainer() {
  const { token } = useContext(AppContext);
  const [chartData, setChartData] = useState([]);

  const [lineChartData, setLineChartData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);

  const formData = new FormData();
  formData.append("token", token);

  async function getDashboardCharts() {
    try {
      const response = await axios.post(
        "/api/demo-adbook/api/dashboard-graph-data",
        formData
      );

      if (response.data.status) {
        setChartData(response.data.data);
        setLineChartData({
          labels: response.data.data.myDatao_d_monthly.split(","),
          datasets: [
            {
              data: response.data.data.myDatao_n_monthly
                .split(",")
                .map((item) => Number(item.replace(/'/g, ""))),
            },
          ],
        });

        setBarChartData({
          labels: response.data.data.myDatao_d.split(","),
          datasets: [
            {
              data: response.data.data.myDatao_n
                .split(",")
                .map((item) => Number(item.replace(/'/g, ""))),
            },
          ],
        });
      }
    } catch (error) {
      console.log(error.message, "failed to get Charts");
    }
  }

  useEffect(() => {
    getDashboardCharts();
  }, []);

  return chartData ? (
    <div className="charts w-full h-auto">
      <button onClick={() => console.log(lineChartData)}>Log Data</button>

      {lineChartData && <LineChart lineChartData={lineChartData} />}

      {barChartData && <BarChart barChartData={barChartData} />}
    </div>
  ) : (
    <Loader />
  );
}
