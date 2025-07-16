import React, { useRef, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { useEffect } from "react";
import axios from "axios";
import NewBuildForm from "../components/bookad/NewBuildForm";
import PickUp from "../components/bookad/PickUp";
import DigitalForm from "../components/bookad/DigitalForm";
import MultipleBuildForm from "../components/bookad/MultipleBuildForm";
import SpecForm from "../components/bookad/SpecForm";

export default function BookAd() {
  // api call token
  const { token } = useContext(AppContext);
  const formData = new FormData();
  formData.append("token", token);

  // api data
  const [apiData, setApiData] = useState(null);

  // tab selector
  const [tabSelector, setTabSelector] = useState("newbuild");

  async function getBookAdData() {
    try {
      const response = await axios.post(
        "/api/demo-adbook/api/ads/create",
        formData
      );

      if (response.data.status) {
        setApiData(response.data);
      }
    } catch (error) {
      console.log(error.message, "Failed to get adbookdata");
    } finally {
    }
  }

  useEffect(() => {
    getBookAdData();
  }, []);

  return (
    <div className="bg-gray-200 w-full h-auto  p-5 overflow-y-scroll">
      <p className="font-medium text-xl uppercase  pt-1 pb-3 border-b-2 border-gray-400 mb-6">
        Book Ad
      </p>

      <div className="tabsContainer bg-white p-5 mb-7 mt-7">
        <div>
          <ul className="tabList w-full flex justify-start items-center">
            <li
              className={
                tabSelector === "newbuild" ? "tabActive" : "normalTabBorder"
              }
              onClick={() => setTabSelector("newbuild")}
            >
              New Build
            </li>
            <li
              className={
                tabSelector === "pickup" ? "tabActive" : "normalTabBorder"
              }
              onClick={() => setTabSelector("pickup")}
            >
              PickUp with Change
            </li>
            <li
              className={
                tabSelector === "spec" ? "tabActive" : "normalTabBorder"
              }
              onClick={() => setTabSelector("spec")}
            >
              Spec
            </li>
            <li
              className={
                tabSelector === "digital" ? "tabActive" : "normalTabBorder"
              }
              onClick={() => setTabSelector("digital")}
            >
              Digital
            </li>
            <li
              className={tabSelector === "multiple" ? "tabActive" : ""}
              onClick={() => setTabSelector("multiple")}
            >
              Multiple New Build
            </li>
          </ul>

          {apiData && (
            <div className="content">
              {{
                newbuild: <NewBuildForm apiData={apiData} />,
                digital: <DigitalForm apiData={apiData} />,
                multiple: <MultipleBuildForm apiData={apiData} />,
                pickup: <PickUp apiData={apiData} />,
                spec: <SpecForm apiData={apiData} />,
              }[tabSelector] || null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
