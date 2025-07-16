import axios from "axios";
import React, { useState, useEffect, useContext, useRef } from "react";
import { AppContext } from "../../context/AppProvider";

export default function NewBuildForm({ apiData }) {
  // context imports
  const { token } = useContext(AppContext);

  // function to format date in the required format

  function formatDate(input_str_date) {
    const input_date = input_str_date.split("-");
    return `${input_date[1]}/${input_date[2]}/${input_date[0]}`;
  }

  // utitlity array
  const [whetherNewCustomer, setWhetherNewCustomer] = useState();
  const [columnArray, setColumnArray] = useState([]);
  const [totalColumns, setTotalColumns] = useState(null);
  const [whetherCustomAdSize, setWhetherCustomAdSize] = useState(false);
  const [selectedProductData, setSelectedProductData] = useState("");
  const [files, setFiles] = useState("");

  // form inputs needed to submit
  const [date, setDate] = useState(""); // key rundate
  const [soldById, setSoldById] = useState(""); //key soldby
  const [adSize, setAdSize] = useState("");
  const [customerId, setCustomerId] = useState(""); // key customer
  const [newCustomer, setNewCustomer] = useState(""); // key customer_new
  const [productId, setproductId] = useState(""); // key publication
  const [color, setColor] = useState(""); // color
  const [selectedColumn, setSelectedColumn] = useState(""); //select_column
  const [orderWidth, setOrderWidth] = useState(""); // order_width
  const [orderHeight, setOrderHeight] = useState(""); // order_height
  const [adDescription, setAdDescription] = useState("");
  const [adInstructions, setAdInstructions] = useState("");

  // useEffect to disable the width height input in real time

  useEffect(() => {
    if (adSize === "custom") {
      setWhetherCustomAdSize(true);
    } else {
      setWhetherCustomAdSize(false);
    }
  }, [adSize]);

  // states and useEffect to enable / disable newcustomer input field

  useEffect(() => {
    setWhetherNewCustomer(customerId === "New Customer");
  }, [customerId]);

  // function to get no of columns of selected product

  async function getNoOfColumnsForProduct(id) {
    if (!id) {
      return;
    }

    try {
      if (id === null) {
        return;
      }
      const prodFormData = new FormData();
      prodFormData.append("token", token);
      const response = await axios.post(
        `/api/demo-adbook/api/ads/data-by-product-id/${id}`,
        prodFormData
      );
      console.log(response.data.data);
      if (response.data.status) {
        // console.log("inside if");
        setTotalColumns(response.data.data.products.no_of_cloumn);
        setSelectedProductData(response.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // useEffect to get and change setColumns as soon as the productId changes

  useEffect(() => {
    setColumnArray([]);
    for (let i = 1; i <= totalColumns; i = i + 1) {
      setColumnArray((prev) => [...prev, i]);
    }
  }, [totalColumns]);

  useEffect(() => {
    getNoOfColumnsForProduct(productId);
  }, [productId]);

  // function to calculate the width and height and its useEffect

  function toCalculateWidthAndHeight() {
    let api_width, api_height, mainHeight;

    if (selectedProductData && selectedColumn) {
      switch (adSize) {
        case "QP":
          console.log("The Ad is QP");
          let qparea = selectedProductData.products.quater_page;

          api_width =
            selectedProductData.product_column[selectedColumn - 1].column_width;
          api_height = selectedProductData.products.height;

          mainHeight = qparea / api_width;

          if (mainHeight > api_height) {
            alert(
              `Column No ${selectedColumn} not possible. please select other column`
            );
          }

          setOrderHeight(mainHeight.toFixed(2));
          setOrderWidth(api_width);

          break;
        case "VHP":
          console.log("This Ad is VHP");
          let vhparea = selectedProductData.products.v_half_page;

          api_width =
            selectedProductData.product_column[selectedColumn - 1].column_width;
          api_height = selectedProductData.products.height;

          mainHeight = vhparea / api_width;

          if (mainHeight > api_height) {
            alert(
              `Column No ${selectedColumn} not possible. please select other column`
            );
          }

          setOrderHeight(mainHeight.toFixed(2));
          setOrderWidth(api_width);
          break;
        case "HP":
          console.log("This Ad is HP");
          let hparea = selectedProductData.products.h_half_page;

          api_width =
            selectedProductData.product_column[selectedColumn - 1].column_width;
          api_height = selectedProductData.products.height;

          mainHeight = hparea / api_width;

          if (mainHeight > api_height) {
            alert(
              `Column No ${selectedColumn} not possible. please select other column`
            );
          }

          setOrderHeight(mainHeight.toFixed(2));
          setOrderWidth(api_width);
          break;

        case "FP":
          "This is fp";
          setOrderHeight(selectedProductData.products.height);
          setOrderWidth(selectedProductData.products.height);
          break;

        case "DT":
          console.log("This ad is DT");
          setOrderHeight(selectedProductData.products.height);
          setOrderWidth(selectedProductData.products.height * 2);
          break;
        default:
          console.log("This is default");
          break;
      }
    }
  }

  useEffect(() => {
    toCalculateWidthAndHeight();
  }, [adSize, selectedColumn]);

  // function to handle form submit event
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("token", token);
    formData.append("soldby", soldById);
    formData.append("product", "New Build");
    formData.append("rundate", date);
    formData.append("adsize", adSize);
    formData.append("color", color);
    formData.append("order_width", orderWidth);
    formData.append("order_height", orderHeight);
    formData.append("ad_description", adDescription);
    formData.append("instruction", adInstructions);
    formData.append("publication", productId);
    formData.append("tracking_id", "");
    formData.append("files[]", files);
    formData.append("company_name", productId);

    if (customerId == "New Customer") {
      formData.append("customer_new", newCustomer);
    } else {
      formData.append("customer", customerId);
    }

    if (adSize === "FP" || adSize === "DT") {
      formData.append("select_column", selectedColumn);
      formData.append("select_column_fp", selectedColumn);
    } else {
      formData.append("select_column", selectedColumn);
      formData.append("select_column_fp", "");
    }

    // logs
    console.log("token", formData.get("token"));
    console.log("order_width", formData.get("order_width"));
    console.log("order_height", formData.get("order_height"));
    console.log("customer", formData.get("customer"));
    console.log("rundate", formData.get("rundate"));
    console.log("adsize", formData.get("adsize"));
    console.log("color", formData.get("color"));
    console.log("ad_description", formData.get("ad_description"));
    console.log("instruction", formData.get("instruction"));
    console.log("company_name", formData.get("company_name"));
    console.log("product", formData.get("product"));
    console.log("publication", formData.get("publication"));
    console.log("select_column", formData.get("select_column"));
    console.log("select_column_fp", formData.get("select_column_fp"));
    console.log("files", files);

    console.log("soldby", formData.get("soldby"));

    console.log("publication", formData.get("publication"));
    console.log("tracking_id", formData.get("tracking_id"));
    console.log("customer_new", formData.get("customer_new"));

    try {
      const response = await axios.post(
        "/api/demo-adbook/api/ads/store/new-build-spec",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      if (response.data.status === 200) {
        alert("Ad has been submitted");
      }

      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  // console.log(apiData);
  return (
    <div className="newBuildForm">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" border-1 border-gray-200 w-full p-5"
        id="newBuild"
        action=""
        encType="multipart/form-data"
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
        {/* row 2 select customer and new customer */}
        <div className="inputGroup md:columns-2 w-full">
          <div>
            <select
              onChange={(e) => {
                setCustomerId(e.target.value);
              }}
              required
              className="mb-5 lg:mb-0"
              name="select-customer"
              id="selectCustomer"
            >
              <option data-customer-id="" value="">
                Select Customer
              </option>
              <option data-customer-id="New Customer" value="New Customer">
                Add New Customer
              </option>
              {apiData.data.all_customer.map((customer) => (
                <option value={customer.customer_id} key={customer.customer_id}>
                  {customer.customer_name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              onChange={(e) => {
                setNewCustomer(e.target.value);
              }}
              required
              type="text"
              name="addnewcustomer"
              id="addnewcustomer"
              placeholder="Add New Customer"
              disabled={!whetherNewCustomer}
            />
          </div>
        </div>

        {/* row 3 select product and select color */}

        <div className="inputGroup md:columns-2 w-full">
          <div>
            <select
              required
              className="mb-5 lg:mb-0"
              name="product"
              id="product"
              onChange={(e) => setproductId(e.target.value)}
            >
              <option data-product-id value="">
                Select Product
              </option>

              {apiData.data.all_products.map((product) => (
                <option
                  value={product.product_id}
                  data-product-id={product.product_id}
                  key={product.product_id}
                >
                  {product.product_name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              onChange={(e) => setColor(e.target.value)}
              required
              name="color"
              id="color"
            >
              <option value="">Select Color</option>
              <option value="BW">BW</option>
              <option value="CMYK">CMYK</option>
              <option value="SPOT">Spot</option>
            </select>
          </div>
        </div>

        {/* row 4 rundate and adsize */}

        <div className="inputGroup md:columns-2 w-full">
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
          <div>
            <select
              onChange={(e) => setAdSize(e.target.value)}
              required
              name="adsize"
              id="adsize"
            >
              <option value="">Select Ad Size</option>
              <option value="QP">QP</option>
              <option value="HP">HP Horizontal</option>
              <option value="VHP">HP Vertical</option>
              <option value="FP">FP</option>
              <option value="DT">DT</option>
              <option value="custom">Custom</option>
            </select>
          </div>
        </div>

        {/* row 5 select columns and width*/}

        <div className="inputGroup lg:columns-2 w-full">
          <div>
            <select
              onChange={(e) => setSelectedColumn(e.target.value)}
              required
              className="mb-5 lg:mb-0"
              name="columns"
              id="columns"
              disabled={adSize === "custom"}
            >
              <option value="">Select Columns</option>
              {columnArray.map((col) => (
                <option key={col} value={adSize === "custom" ? 6 : col}>
                  {col}
                </option>
              ))}
            </select>
          </div>
          <div className="lg:columns-2 w-full border-1 border-gray-200 ">
            <div className="flex ">
              <span>Width</span>
              <input
                onChange={(e) => {
                  setOrderWidth(e.target.value);
                }}
                required
                name="width"
                id="width"
                type="number"
                max="1000"
                disabled={!whetherCustomAdSize}
                value={orderWidth}
              />
              <span>in</span>
            </div>
            <div className="flex  ">
              <span>Height</span>
              <input
                onChange={(e) => setOrderHeight(e.target.value)}
                disabled={!whetherCustomAdSize}
                name="height"
                id="height"
                type="number"
                max="1000"
                value={orderHeight}
              />
              <span>in</span>
            </div>
          </div>
        </div>

        <div className="inputGroup sm:columns-1 w-full">
          <textarea
            onChange={(e) => {
              setAdInstructions(e.target.value);
            }}
            className="w-full"
            name="instructions"
            id="instructions"
            placeholder="Enter Instructions Here"
          ></textarea>
        </div>

        <div className="mb-5 md:columns-1 border-1 border-gray-200 ">
          <input
            required
            type="file"
            onChange={(e) => setFiles(e.target.files[0])}
          />
        </div>

        <div className="inputGroup sm:columns-1">
          <textarea
            onChange={(e) => setAdDescription(e.target.value)}
            className="w-full"
            name="addescription"
            id="addescription"
            placeholder="Enter Ad Description"
          ></textarea>
        </div>
        <h1 className="flex justify-center items-center">
          <button
            className="bg-blue-800 text-white pt-1 pb-1 pl-5 pr-5 rounded-l"
            type="submit"
          >
            SUBMIT
          </button>
        </h1>
      </form>
      <button
        onClick={(e) => {
          console.log("soldby -", soldById);
          console.log("whether new customer", whetherNewCustomer);
          console.log("customer", customerId);
          console.log("customer_new", newCustomer);
          console.log("publication", productId);
          console.log("color", color);
          console.log("rundate", date);
          console.log("total columns", totalColumns);
          console.log("columnArray", columnArray);
          console.log("select_column", selectedColumn);
          console.log("order_height", orderHeight);
          console.log("order_width", orderWidth);
        }}
      >
        Logger
      </button>
    </div>
  );
}
