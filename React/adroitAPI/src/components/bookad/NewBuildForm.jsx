import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppProvider";

export default function NewBuildForm({ apiData }) {
  const [formInfo, setFormInfo] = useState({});

  const { token } = useContext(AppContext);
  const formData = new FormData();
  formData.append("token", token);

  // states for dynamic disabling form inputs
  const [selectCustomer, setSelectCustomer] = useState(null);
  const [whetherNewCustomer, setWhetherNewCustomer] = useState(null);

  const [adSize, setAdSize] = useState(null);
  const [whetherCustomAdSize, setWhetherCustomAdSize] = useState(null);
  const [productName, setProductName] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(0);
  const [noOfColumns, setNoOfColumns] = useState(0);

  // selected product id and data
  const [selectedProductId, setSelectedProductId] = useState(0);
  const [selectedProductData, setSelectedProductData] = useState(null);

  let [columnArray, setColumnArray] = useState([]);

  // get selected product data setting the width and heights according to product name change and columns.

  async function getSelectedProductData() {
    try {
      const response = await axios.post(
        `/api/demo-adbook/api/ads/data-by-product-id/${selectedProductId}`,
        formData
      );

      if (response.data.status) {
        setSelectedProductData(response.data.data);
      }
    } catch (error) {
      console.log(error, "failed to get selected product data");
    }
  }

  // calculate width and height according to selected product data

  function calculateWidthHeight(adSize, columns) {
    let quarterPage,
      halfPageVertical,
      halfPageHorizontal,
      colWidth,
      newColWidth,
      mainHeight;
    switch (adSize) {
      case "qp":
        console.log("the ad is qp");
        console.log(selectedProductData);

        break;

      case "hphorizontal":
        console.log("this is hp horizontal");
        break;
      case "hpvertical":
        console.log("this is hp vertical");
        break;

      case "fp":
        console.log("this is fp");
        break;

      case "dt":
        console.log("This is dt");
        break;

      case "custom":
        console.log("This is custom");
        break;

      default:
        console.log("ehe");
        break;
    }
  }

  useEffect(() => {
    calculateWidthHeight(adSize, selectedColumn);
  }, [adSize]);

  useEffect(() => {
    getSelectedProductData();
  }, [selectedProductId]);

  // customer fields disable=ing

  useEffect(() => {
    setWhetherNewCustomer(selectCustomer === "addnewcustomer");
    setWhetherCustomAdSize(adSize === "custom");
  }, [selectCustomer, adSize, productName]);

  // setting the columns

  useEffect(() => {
    for (let i = 0; i <= noOfColumns; i++) {
      setColumnArray((prev) => [...prev, i]);
    }
  }, [noOfColumns]);

  // get column numbers function

  function getProductColumns(prodName) {
    apiData.data.all_products.map((product) => {
      if (product.product_name === prodName) {
        setNoOfColumns(product.no_of_cloumn);
        return;
      }
    });
  }

  return (
    <div className="newBuildForm">
      <form
        className=" border-1 border-gray-200 w-full p-5"
        id="newBuild"
        action=""
        encType="multipart/form-data"
      >
        {/* row 1  */}

        <div className="inputGroup md:columns-2 w-full">
          <div>
            <select className="w-full" name="sales-rep" id="sales-rep">
              <option value="" default>
                Select Sold By
              </option>
              {apiData.data.all_salesrep.map((rep) => (
                <option key={rep.id} value={rep.name}>
                  {rep.name}
                </option>
              ))}
            </select>
          </div>

          <div></div>
        </div>
        {/* row 2 */}
        <div className="inputGroup md:columns-2 w-full">
          <div>
            <select
              className="mb-5 lg:mb-0"
              onChange={(e) => {
                setSelectCustomer(e.target.value);
              }}
              name="select-customer"
              id="selectCustomer"
            >
              <option value="">Select Customer</option>
              <option value="addnewcustomer">Add New Customer</option>
              {apiData.data.all_customer.map((customer) => (
                <option
                  key={customer.customer_id}
                  value={customer.customer_name}
                >
                  {customer.customer_name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="text"
              name="addnewcustomer"
              id="addnewcustomer"
              placeholder="Add New Customer"
              disabled={!whetherNewCustomer}
            />
          </div>
        </div>

        {/* row 3 */}

        <div className="inputGroup md:columns-2 w-full">
          <div>
            <select
              className="mb-5 lg:mb-0"
              onChange={(e) => {
                setProductName(e.target.value);
                setColumnArray([]);
                getProductColumns(e.target.value);

                const selectedOption = e.target.options[e.target.selectedIndex];
                console.log(selectedOption.getAttribute("data-selectedprodid"));

                setSelectedProductId(
                  selectedOption.getAttribute("data-selectedprodid")
                );
              }}
              name="product"
              id="product"
            >
              <option value="">Select Product</option>

              {apiData.data.all_products.map((product) => (
                <option
                  key={product.product_id}
                  value={product.product_name}
                  data-selectedprodid={product.product_id}
                >
                  {product.product_name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select name="color" id="color">
              <option value="">Select Color</option>
              <option value="bw">BW</option>
              <option value="cmyk">CMYK</option>
              <option value="spot">Spot</option>
            </select>
          </div>
        </div>

        {/* row 4 */}

        <div className="inputGroup md:columns-2 w-full">
          <div>
            <input
              className="mb-5 lg:mb-0"
              type="date"
              placeholder="Select Run Date"
            />
          </div>
          <div>
            <select
              onChange={(e) => setAdSize(e.target.value)}
              name="adsize"
              id="adsize"
            >
              <option value="">Select Ad Size</option>
              <option value="qp">QP</option>
              <option value="hphorizontal">HP Horizontal</option>
              <option value="hpvertical">HP Vertical</option>
              <option value="fp">FP</option>
              <option value="dt">DT</option>
              <option value="custom">Custom</option>
            </select>
          </div>
        </div>

        {/* row 5 */}

        <div className="inputGroup lg:columns-2 w-full">
          <div>
            <select
              onChange={(e) => {
                setSelectedColumn(e.target.value);
              }}
              className="mb-5 lg:mb-0"
              name="columns"
              id="columns"
            >
              <option value="">Select Columns</option>
              {columnArray.map((num) => (
                <option value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="lg:columns-2 w-full border-1 border-gray-200 ">
            <div className="flex ">
              <span>Width</span>
              <input
                name="width"
                id="width"
                type="number"
                max="1000"
                disabled={!whetherCustomAdSize}
              />
              <span>in</span>
            </div>
            <div className="flex  ">
              <span>Height</span>
              <input
                name="height"
                id="height"
                type="number"
                max="1000"
                disabled={!whetherCustomAdSize}
              />
              <span>in</span>
            </div>
          </div>
        </div>

        <div className="inputGroup sm:columns-1 w-full">
          <textarea
            className="w-full"
            name="instructions"
            id="instructions"
            placeholder="Enter Instructions Here"
          ></textarea>
        </div>

        <div className="mb-5 md:columns-1 border-1 border-gray-200 ">
          <input type="file" />
        </div>

        <div className="inputGroup sm:columns-1">
          <textarea
            className="w-full"
            name="addescription"
            id="addescription"
            placeholder="Enter Ad Description "
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
      <button onClick={(e) => console.log(adSize)}>Logger</button>
    </div>
  );
}
