import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppProvider";
import axios from "axios";

export default function PickUp({ apiData }) {
  const { token } = useContext(AppContext);

  const [soldById, setSoldById] = useState(null);

  const [productId, setProductId] = useState("");
  const [customerId, setCustomerId] = useState(null);
  const [color, setColor] = useState("");
  const [adSize, setAdSize] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("");
  const [date, setDate] = useState("");
  const [orderWidth, setOrderWidth] = useState(""); // order_width
  const [orderHeight, setOrderHeight] = useState(""); // order_height
  const [adDescription, setAdDescription] = useState("");

  // not in the props
  const [adNumber, setAdNumber] = useState("");
  const [customer, setCustomer] = useState("");
  const [product, setProduct] = useState("");
  const [companyId, setCompanyId] = useState("");

  // function to format date in the required format

  function formatDate(input_str_date) {
    const input_date = input_str_date.split("-");
    return `${input_date[1]}/${input_date[2]}/${input_date[0]}`;
  }

  async function getDataByAdNumber() {
    const formData = new FormData();
    formData.append("token", token);

    try {
      const response = await axios.post(
        `/api/demo-adbook/api/ads/data-by-ad-no/${adNumber}`,
        formData
      );
      console.log(response);
      if (response.data.status) {
        console.log(response.data.data[0]);
        setCustomer(response.data.data[0].customer_name);
        setProduct(response.data.data[0].product_name);
        setColor(response.data.data[0].color);
        setAdSize(response.data.data[0].adsize);
        setSelectedColumn(response.data.data[0].selected_column);
        setOrderWidth(response.data.data[0].width);
        setOrderHeight(response.data.data[0].height);
        setCompanyId(response.data.data[0].company_id);
        setCustomerId(response.data.data[0].customer_id);
        setProductId(response.data.data[0].product_id);
        setAdDescription(response.data.data[0].description);
      }
    } catch (error) {
      console.log(error.message, "failded to get ad data for above ad number");
    }
  }

  useEffect(() => {
    if (adNumber) {
      getDataByAdNumber(adNumber);
    }
  }, [adNumber]);

  async function handleSubmit(e) {
    e.preventDefault();

    const submitFormData = new FormData();
    submitFormData.append("token", token);

    submitFormData.append("company_name", companyId);
    submitFormData.append("customer_id_puc", customerId);
    submitFormData.append("order_height", orderHeight);
    submitFormData.append("order_width", orderWidth);
    submitFormData.append("publication_id_puc", productId);
    submitFormData.append("soldby", soldById);
    submitFormData.append("adsize", adSize);
    submitFormData.append("rundate", date);
    submitFormData.append("color", color);
    submitFormData.append("select_column", selectedColumn);
    submitFormData.append("assignpickup", adNumber);
    submitFormData.append("ad_description", adDescription);

    for (let pair of submitFormData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const response = await axios.post(
        "/api/demo-adbook/api/ads/store/pickup-with-change",
        submitFormData
      );

      if (response.data.status) {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error.message, " unable to submit");
    }
  }

  return (
    <div>
      <form
        className=" border-1 border-gray-200 w-full p-5"
        id="pickup"
        action=""
        encType="multipart/form-data"
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* row 1 soldby */}
        <div className="inputGroup md:columns-2 w-full">
          <div>
            <select
              onChange={(e) => {
                setSoldById(e.target.value);
              }}
              required
              className="w-full"
              name="sales-rep"
              id="sales-rep"
            >
              <option data-sales-rep-id="" value="" default>
                Select Sold By
              </option>
              {apiData.data.all_salesrep.map((sales_rep) => (
                <option value={sales_rep.id} key={sales_rep.id}>
                  {sales_rep.name}
                </option>
              ))}
            </select>
          </div>

          <div></div>
        </div>
        {/* row 2 select ad number customer */}
        <div className="inputGroup md:columns-2 w-full">
          <div>
            <select
              onChange={(e) => setAdNumber(e.target.value)}
              required
              className="w-full"
              name="adNumbers"
              id="adNumber"
            >
              <option value="" default>
                Select Ad Number
              </option>
              {apiData.data.all_orders.map((order) => (
                <option value={order.ad_number} key={order.ad_id}>
                  {order.ad_number}
                </option>
              ))}
            </select>
          </div>

          <div>
            <input
              disabled={true}
              required
              type="text"
              name="addnewcustomer"
              id="addnewcustomer"
              placeholder="customer"
              value={customer}
            />
          </div>
        </div>

        {/* row 3 product and color */}

        <div className="inputGroup md:columns-2 w-full">
          <div>
            <input
              type="text"
              disabled
              placeholder="Product"
              value={customer}
            />
          </div>

          <div>
            <input
              disabled={true}
              required
              type="text"
              name="addnewcustomer"
              id="addnewcustomer"
              placeholder="Color"
              value={color}
            />
          </div>
        </div>

        {/* row 4 adsize and column */}

        <div className="inputGroup md:columns-2 w-full">
          <div>
            <input type="text" disabled placeholder="Ad Size" value={adSize} />
          </div>

          <div>
            <input
              disabled={true}
              required
              type="text"
              name="addnewcustomer"
              id="addnewcustomer"
              placeholder="Columns"
              value={selectedColumn}
            />
          </div>
        </div>

        <div className="inputGroup md:columns-2 w-full">
          <div className="lg:columns-2 w-full border-1 border-gray-200 ">
            <div className="flex ">
              <span>Width</span>
              <input
                required
                name="width"
                id="width"
                type="number"
                max="1000"
                disabled={true}
                value={orderWidth}
              />
              <span>in</span>
            </div>
            <div className="flex  ">
              <span>Height</span>
              <input
                disabled={true}
                name="height"
                id="height"
                type="number"
                max="1000"
                value={orderHeight}
              />
              <span>in</span>
            </div>
            <div></div>
          </div>
          <div>
            <input
              onChange={(e) => {
                const inputDate = e.target.value;
                const formattedDate = formatDate(inputDate);

                setDate(formattedDate);
              }}
              required
              className="mb-5 lg:mb-0"
              type="date"
              placeholder="Select Run Date"
            />
          </div>
        </div>
        <h1 className="flex justify-center items-center">
          {" "}
          <button
            className="bg-blue-800 text-white pt-1 pb-1 pl-5 pr-5 rounded-l"
            type="submit"
          >
            Submit
          </button>
        </h1>
      </form>
    </div>
  );
}
