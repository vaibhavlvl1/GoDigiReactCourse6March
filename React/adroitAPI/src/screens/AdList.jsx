import React, { useContext, useEffect, useState } from "react";
import SingleAd from "../components/uicomponents/SingleAd";
import { AppContext } from "../context/AppProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";

export default function AdList() {
  const { token } = useContext(AppContext);
  const [startAt, setStartAt] = useState(0);
  const [showPerPage, setShowPerPage] = useState(10);
  const [adList, setAdList] = useState([]);

  // advanced search data
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [adType, setAdType] = useState("");
  const [advancedSearchData, setAdvancedSearchData] = useState(null);
  const [prodId, setProdId] = useState(null);
  const [soldby, setSoldBy] = useState(null);
  const [keywords, setKeywords] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function dateFormatter(date) {
    let input_date = date.split("-");
    let newDate = `${input_date[1]}/${input_date[2]}/${input_date[0]}`;

    return newDate;
  }

  function resetFields() {
    setAdType("");
    setProdId("");
    setSoldBy("");
    setKeywords("");
    setHeight("");
    setEndDate("");
    setStartDate("");
  }

  async function fetchAdList() {
    const formData = new FormData();
    formData.append("token", token);
    formData.append("start", startAt);
    formData.append("show_per_page", showPerPage);

    // advanced filter data

    if (soldby) {
      formData.append("salesrep", soldby);
    }
    if (keywords) {
      formData.append("keywords", keywords);
    }
    if (startDate) {
      formData.append("intime_ist", startDate);
    }
    if (endDate) {
      formData.append("outtime_ist", endDate);
    }
    if (width) {
      formData.append("width", width);
    }
    if (height) {
      formData.append("height", height);
    }
    if (prodId) {
      formData.append("publication", prodId);
    }
    if (adType) {
      formData.append("product", adType);
    }

    for (let pair of formData.entries()) {
      console.log(pair[0], [pair[1]]);
    }
    try {
      const response = await axios.post(
        "/api/demo-adbook/api/ads/list",
        formData
      );
      console.log(response.data);

      if (response.data.status) {
        console.log("fetched ads successfully");
        setAdList(response.data.ads);
        setShowAdvancedSearch(false);
      }
    } catch (error) {
      console.log(error.message, "Failed to get Ad List");
    } finally {
      setAdType("");
      setProdId("");
      setSoldBy("");
      setKeywords("");
      setHeight("");
      setEndDate("");
      setStartDate("");
    }
  }

  useEffect(() => {
    fetchAdList();
  }, [showPerPage, startAt]);

  function handleNext() {
    if (adList.length < showPerPage) {
      return;
    }
    setStartAt((value) => value + showPerPage);
  }

  function handlePrev() {
    if (startAt === 0) {
      return;
    }
    setStartAt((value) => value - showPerPage);
  }

  async function getAdvancedFilterData() {
    const advFormData = new FormData();
    advFormData.append("token", token);
    try {
      const response = await axios.post(
        "/api/demo-adbook/api/ads/filers",
        advFormData
      );
      console.log(response.data);
      if (response.data.status) {
        setAdvancedSearchData(response.data);
      }
    } catch (error) {
      console.log(error.message, "failed to get advanced filter ");
    }
  }

  useEffect(() => {
    getAdvancedFilterData();
  }, []);

  async function handleAdvancedSearch(e) {
    e.preventDefault();

    fetchAdList();
  }

  return (
    <>
      <div className="bg-gray-200  w-full   p-5 overflow-y-scroll relative">
        <p className="font-medium text-xl uppercase  pt-1 pb-3 border-b-2 border-gray-400 mb-6">
          Ad List
        </p>

        <div className="w-full p-5 bg-white border-b-2 border-b-blue-800 flex gap-10">
          <div>
            <span>Show</span>{" "}
            <input
              onChange={(e) => {
                setShowPerPage(Number(e.target.value));
                setStartAt(0);
              }}
              className="ms-1 me-1 w-12 border-1 border-gray-500"
              type="number"
              value={showPerPage}
            />
            <span>Ads</span>
          </div>
          <button
            onClick={() => setShowAdvancedSearch((prev) => !prev)}
            className="bg-blue-800 text-white ps-3 pe-3 pt-1 pb-1"
          >
            Show Advanced Search
          </button>
          <div>
            <Settings />
          </div>
        </div>

        <table className=" adlist w-full table-auto text-center bg-white">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Ad Number</th>
              <th>Book Date</th>
              <th>Tracking ID</th>
              <th>Prod Method</th>
              <th>Product</th>
              <th>Pickup Number</th>
              <th>Ad Size</th>

              <th>Customer</th>
              <th>Run Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {adList &&
              adList.map((ad, index) => (
                <tr key={ad.ad_number}>
                  <td>{Number(startAt) + (index + 1)}</td>
                  <td>{ad.ad_number}</td>
                  <td>{ad.proofdate}</td>
                  <td>{ad.ad_tracking_id}</td>
                  <td>{ad.product}</td>
                  <td>{ad.product_name}</td>
                  <td>{ad.assign_pickup_number}</td>
                  <td>
                    {Number(ad.ad_width).toFixed(2)}(in) *{" "}
                    {Number(ad.ad_height).toFixed(2)}(in)
                  </td>

                  <td>{ad.customer_name}</td>

                  <td>{ad.rundate}</td>
                  <td>{ad.statusname}</td>
                  <td>
                    <button>
                      <Link to={`/adlist/addetails/${ad.ad_id}`}>
                        View Details
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="w-full pt-5 pb-5 flex justify-center items-center gap-5 bg-white">
          <button
            onClick={() => handlePrev()}
            className={`bg-blue-800 text-white ps-3 pe-3 pt-1 pb-1 ${
              startAt === 0 ? `adListGreyed` : ""
            }`}
          >
            Prev
          </button>
          <button
            onClick={() => handleNext()}
            className={`bg-blue-800 text-white ps-3 pe-3 pt-1 pb-1 ${
              adList.length < showPerPage ? "adListGreyed" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
      {showAdvancedSearch && (
        <div className=" z-50 top-20 left-11  fixed h-full w-full flex justify-center items-start ">
          <form
            onSubmit={(e) => handleAdvancedSearch(e)}
            className="w-auto bg-white p-5 mt-20 searchFilterform border-2 border-gray-400 shadow-2xl shadow-black"
          >
            <div className="md:columns-2 inputGroup">
              <div className="">
                <select
                  onChange={(e) => setAdType(e.target.value)}
                  name="new_build"
                  id="newbuild"
                >
                  <option value="">Select Ad Type</option>
                  {advancedSearchData.ad_types.map((adType) => (
                    <option key={adType} value={adType}>
                      {adType}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  onChange={(e) => setProdId(e.target.value)}
                  name="product"
                  id="product"
                >
                  <option value="">Select Product</option>
                  {Object.values(advancedSearchData.products).map((product) => (
                    <option key={product.product_id} value={product.product_id}>
                      {product.product_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="md:columns-2 inputGroup">
              <div>
                <select
                  onChange={(e) => setSoldBy(e.target.value)}
                  name="soldby"
                  id="soldby"
                >
                  <option value="">Select Sold By</option>
                  {Object.values(advancedSearchData.all_salesRep).map(
                    (salesrep) => (
                      <option key={salesrep.id} value={salesrep.id}>
                        {salesrep.name}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div>
                <input
                  onChange={(e) => setKeywords(e.target.value)}
                  type="text"
                  placeholder="Enter Keywords"
                />
              </div>
            </div>

            <div className="lg:columns-2 inputGroup">
              <p className="bg-white">Filter By Date</p>
              <div>
                <p>From</p>
                <input
                  onChange={(e) => setStartDate(dateFormatter(e.target.value))}
                  type="date"
                />
                <p>To</p>
                <input
                  onChange={(e) => setEndDate(dateFormatter(e.target.value))}
                  type="date"
                />
              </div>
              <p>By Dimensions</p>
              <div>
                <p>Width</p>
                <input
                  onChange={(e) => setWidth(e.target.value)}
                  type="number"
                  placeholder="Width in Inches"
                />
                <p>Height</p>
                <input
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Height in Inches"
                  type="number"
                />
              </div>
            </div>

            <div className="flex justify-start gap-5 items-center">
              <button
                className="bg-blue-800 text-white ps-3 pe-3 pt-1 pb-1"
                type="submit"
              >
                Submit
              </button>
              <button
                onClick={() => resetFields()}
                className="bg-blue-800 text-white ps-3 pe-3 pt-1 pb-1"
                type="reset"
              >
                Reset
              </button>
              <button
                className="bg-blue-800 text-white ps-3 pe-3 pt-1 pb-1"
                onClick={() => setShowAdvancedSearch(false)}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
