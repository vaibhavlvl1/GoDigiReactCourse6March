import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppProvider";
import axios from "axios";
import Loader from "./Loader";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";

function ChartContainer() {
  const { token } = useContext(AppContext);
  const [chartData, setChartData] = useState([]);

  const [lineChartData, setLineChartData] = useState(null);
  const [lineChartDataSwitch, setLineChartSwitch] = useState(null);
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
              label: "Ads Booked Monthly",
              data: response.data.data.myDatao_n_monthly
                .split(",")
                .map((item) => Number(item.replace(/'/g, ""))),
              borderColor: "rgba(75,192,192,1)",
            },
          ],
        });

        setLineChartSwitch({
          labels: response.data.data.myDatao_d_monthly.split(","),
          datasets: [
            {
              label: "Adds Booked Monthly",
              data: response.data.data.myDatao_n_monthly
                .split(",")
                .map((item) => Number(item.replace(/'/g, ""))),
              backgroundColor: [
                "#60a5fa",
                "#60a5fa",
                "#60a5fa",
                "#60a5fa",
                "#60a5fa",
                "#60a5fa",
              ],
              borderColor: "rgba(75,192,192,1)",
            },
          ],
        });

        setBarChartData({
          labels: response.data.data.myDatao_d.split(","),
          datasets: [
            {
              label: "Adds Booked Daily",
              data: response.data.data.myDatao_n
                .split(",")
                .map((item) => Number(item.replace(/'/g, ""))),
              backgroundColor: [
                "#60a5fa",
                "#60a5fa",
                "#60a5fa",
                "#60a5fa",
                "#60a5fa",
                "#60a5fa",
              ],
              borderColor: "rgba(75,192,192,1)",
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
    <div className="charts w-full h-auto ">
      <div className="line-chart-container flex justify-center items-center bg-white sm:p-20 mb-10">
        {lineChartData && <LineChart lineChartData={lineChartData} />}
      </div>

      <div className="bar-chart-container flex justify-center items-center bg-white sm:p-20 ">
        {barChartData && <BarChart barChartData={barChartData} />}
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default React.memo(ChartContainer);
