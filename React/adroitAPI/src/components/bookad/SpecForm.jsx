import React, { useState, useEffect } from "react";

export default function SpecForm({ apiData }) {
  const [formInfo, setFormInfo] = useState({});

  // states for dynamic disabling form inputs
  const [selectCustomer, setSelectCustomer] = useState(null);
  const [whetherNewCustomer, setWhetherNewCustomer] = useState(null);

  const [adSize, setAdSize] = useState(null);
  const [whetherCustomAdSize, setWhetherCustomAdSize] = useState(null);
  const [productName, setProductName] = useState(null);
  const [noOfColumns, setNoOfColumns] = useState(0);

  let [columnArray, setColumnArray] = useState([]);

  useEffect(() => {
    setWhetherNewCustomer(selectCustomer === "addnewcustomer");
    setWhetherCustomAdSize(adSize === "custom");
  }, [selectCustomer, adSize, productName]);

  useEffect(() => {
    for (let i = 0; i <= noOfColumns; i++) {
      setColumnArray((prev) => [...prev, i]);
    }
    console.log(columnArray);
  }, [noOfColumns]);

  function getProductColumns(prodName) {
    apiData.data.all_products.map((product) => {
      if (product.product_name === prodName) {
        setNoOfColumns(product.no_of_cloumn);
        return;
      }
    });
  }

  return (
    <div className="specForm">
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
              }}
              name="product"
              id="product"
            >
              <option value="">Select Product</option>

              {apiData.data.all_products.map((product) => (
                <option key={product.product_id} value={product.product_name}>
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
            <select className="mb-5 lg:mb-0" name="columns" id="columns">
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
            placeholder="Enter Ad Instructions "
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
    </div>
  );
}
