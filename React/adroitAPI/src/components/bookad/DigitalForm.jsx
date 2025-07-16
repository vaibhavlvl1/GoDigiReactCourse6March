import React, { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import axios from "axios";

export default function DigitalForm({ apiData }) {
  // states for dynamic disabling form inputs
  const { token } = useContext(AppContext);
  const [selectCustomer, setSelectCustomer] = useState(null);
  const [whetherNewCustomer, setWhetherNewCustomer] = useState(null);
  const [adCount, setAdCount] = useState(0);
  const [adCountArray, setAdCountArray] = useState([]);

  const [heights, setHeights] = useState({});
  const [widths, setWidths] = useState({});

  // form states

  // form inputs needed to submit
  const [date, setDate] = useState(null); // key rundate
  const [soldById, setSoldById] = useState(null); //key soldby
  const [adSize, setAdSize] = useState(null);
  const [customerId, setCustomerId] = useState(null); // key customer
  const [newCustomer, setNewCustomer] = useState(null); // key customer_new
  const [productId, setproductId] = useState(null); // key publication
  const [color, setColor] = useState(""); // color
  const [selectedColumn, setSelectedColumn] = useState(""); //select_column
  const [orderWidth, setOrderWidth] = useState(""); // order_width
  const [orderHeight, setOrderHeight] = useState(""); // order_height
  const [adDescription, setAdDescription] = useState("");
  const [adInstructions, setAdInstructions] = useState("");
  const [files, setFiles] = useState([]);

  const [adType, setAdType] = useState("");

  useEffect(() => {
    setWhetherNewCustomer(selectCustomer === "addnewcustomer");
  }, [selectCustomer]);

  function formatDate(input_str_date) {
    const input_date = input_str_date.split("-");
    return `${input_date[1]}/${input_date[2]}/${input_date[0]}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("token", token);

      for (let i = 0; i < adCount; i++) {
        formData.append(`order_height${i + 1}`, heights[`height${i + 1}`]);
      }

      for (let i = 0; i < adCount; i++) {
        formData.append(`order_width${i + 1}`, widths[`width${i + 1}`]);
      }

      formData.append("company_name", customerId);

      formData.append("digital_adcnt", adCount);
      formData.append("d_ad_type", adType);
      formData.append("tracking_id", "");
      formData.append("rundate", date);
      formData.append("files[]", files);
      formData.append("ad_description", adDescription);
      formData.append("instruction", adInstructions);
      formData.append("adsize", "");
      formData.append("publication", productId);
      formData.append("soldby", soldById);

      if (customerId == "New Customer") {
        formData.append("customer", "new_cust");
        formData.append("customer_new", newCustomer);
      } else {
        formData.append("customer", customerId);
      }

      const response = await axios.post(
        "/api/demo-adbook/api/ads/store/digital",
        formData
      );

      console.log(response.data);

      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }
    } catch (error) {
      console.log(error.message, "Failed to submit");
    }
  }

  return (
    <div>
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
              onChange={(e) => setSoldById(e.target.value)}
              className="w-full"
              name="sales-rep"
              id="sales-rep"
            >
              <option value="" default>
                Select Sold By
              </option>
              {apiData.data.all_salesrep.map((rep) => (
                <option key={rep.id} value={rep.id}>
                  {rep.name}
                </option>
              ))}
            </select>
          </div>

          <div></div>
        </div>
        {/* row 2 customer */}
        <div className="inputGroup md:columns-2 w-full">
          <div>
            <select
              className="mb-5 lg:mb-0"
              onChange={(e) => {
                setCustomerId(e.target.value);
              }}
              name="select-customer"
              id="selectCustomer"
            >
              <option value="">Select Customer</option>
              <option value="addnewcustomer">Add New Customer</option>
              {apiData.data.all_customer.map((customer) => (
                <option key={customer.customer_id} value={customer.customer_id}>
                  {customer.customer_name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              onChange={(e) => setNewCustomer(e.target.value)}
              type="text"
              name="addnewcustomer"
              id="addnewcustomer"
              placeholder="Add New Customer"
              disabled={!whetherNewCustomer}
            />
          </div>
        </div>

        {/* row 3 product  date */}
        <div className="inputGroup md:columns-2 w-full">
          <div>
            <select
              onChange={(e) => setproductId(e.target.value)}
              className="mb-5 lg:mb-0"
              name="product"
              id="product"
            >
              <option value="">Select Product</option>

              {apiData.data.all_products.map((product) => (
                <option key={product.product_id} value={product.product_id}>
                  {product.product_name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              onChange={(e) => setDate(formatDate(e.target.value))}
              className="mb-5 lg:mb-0"
              type="date"
              placeholder="Select Run Date"
            />
          </div>
        </div>

        {/* row 4 ad-count and adtype */}

        <div className="inputGroup md:columns-2 w-full">
          <div className="w-full">
            <input
              onChange={(e) => setAdCount(e.target.value)}
              type="text"
              placeholder="Ad Count"
            />
          </div>
          <div>
            <select
              onChange={(e) => setAdType(e.target.value)}
              name="adtype"
              id="adtype"
            >
              <option value="">Select Type</option>
              <option value="static">Static</option>
              <option value="animated">Animated</option>
            </select>
          </div>
        </div>

        <div className="inputGroup w-1/2 lg:columns-1 ">
          {Array.from({ length: adCount }).map((_, index) => (
            <div
              key={index}
              className="lg:columns-2 w-full border-1 border-gray-200 "
            >
              <div className="flex ">
                <span>Width</span>
                <input
                  onChange={(e) =>
                    setWidths((prev) => ({
                      ...prev,
                      [`width${index + 1}`]: e.target.value,
                    }))
                  }
                  required
                  name="width"
                  id={`width${index + 1}`}
                  type="number"
                />
                <span>in</span>
              </div>
              <div className="flex  ">
                <span>Height</span>
                <input
                  onChange={(e) =>
                    setHeights((prev) => ({
                      ...prev,
                      [`height${index + 1}`]: e.target.value,
                    }))
                  }
                  required
                  name="height"
                  id={`height${index + 1}`}
                  type="number"
                />
                <span>in</span>
              </div>
            </div>
          ))}
        </div>

        <div className="inputGroup sm:columns-1 w-full">
          <textarea
            onChange={(e) => setAdInstructions(e.target.value)}
            className="w-full"
            name="instructions"
            id="instructions"
            placeholder="Enter Instructions Here"
          ></textarea>
        </div>

        <div className="mb-5 md:columns-1 border-1 border-gray-200 ">
          <input type="file" onChange={(e) => setFiles(e.target.files[0])} />
        </div>

        <div className="inputGroup sm:columns-1">
          <textarea
            onChange={(e) => setAdDescription(e.target.value)}
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
    </div>
  );
}
