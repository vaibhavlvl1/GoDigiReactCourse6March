import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/AppProvider";
import axios from "axios";

export default function ProductReport() {
  const currDate = new Date();
  const months = [
    "Jannuary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { token } = useContext(AppContext);
  const [response, setResponse] = useState(null);
  const [filterFrom, setFilterFrom] = useState("");
  const [filterTo, setFilterTo] = useState("");
  const formData = new FormData();
  formData.append("token", token);
  formData.append("start_date", filterFrom);
  formData.append("end_date", filterTo);

  async function getProductReport() {
    try {
      const res = await axios.post(
        "/api/demo-adbook/api/dashboard-reports",
        formData
      );

      if (res.data.status) {
        setResponse(res.data.data.product_client);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  function getValues(e) {
    e.preventDefault();
    getProductReport();
  }

  useEffect(() => {
    getProductReport();
  }, []);

  return response ? (
    <div className="productReport mt-7 mb-7 bg-white p-5 overflow-x-scroll">
      <div className="flex flex-wrap justify-between items-center pt-5 pl-3 pr-3">
        <h1 className="text-lg text-blue-800 text-extrabold  mb-5 ">
          Product Report - {months[currDate.getMonth()]} -{" "}
          {currDate.getFullYear()}
        </h1>
        <form
          className=" flex flex-wrap gap-5 justify-start  sm:justify-center items-center"
          onSubmit={(e) => getValues(e)}
        >
          <div>
            <label htmlFor="filterfrom">From : </label>
            <input
              className="border border-gray-400 mr-2"
              onChange={(e) => setFilterFrom(e.target.value)}
              id="filterfrom"
              type="date"
            />
          </div>
          <div>
            <label htmlFor="filterfrom">To : </label>
            <input
              className="border border-gray-400 mr-2"
              onChange={(e) => setFilterTo(e.target.value)}
              id="filterto"
              type="date"
            />
          </div>
          <button className="border-blue-800 border-2   text-black pt-2 pb-1 pl-2 pr-2 ml-2 hover:bg-blue-800 hover:text-white rounded-l">
            Filter
          </button>
        </form>
      </div>
      <table className="w-full table-fixed text-left report-table  min-w-md">
        <thead>
          <tr>
            <th>Product</th>
            <th>Booked</th>
            <th>Hold</th>
            <th>Production</th>
            <th>Received</th>
          </tr>
        </thead>
        <tbody>
          {response.map((dataRow, index) => (
            <tr key={index}>
              <td>{dataRow.product_name}</td>
              <td>{dataRow.order_cnt}</td>
              <td>{dataRow.hold}</td>
              <td>{dataRow.production}</td>
              <td>{dataRow.received}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p>...Loading</p>
  );
}
