import React, { useState, useEffect } from "react";

export default function DigitalForm({ apiData }) {
  // states for dynamic disabling form inputs
  const [selectCustomer, setSelectCustomer] = useState(null);
  const [whetherNewCustomer, setWhetherNewCustomer] = useState(null);

  useEffect(() => {
    setWhetherNewCustomer(selectCustomer === "addnewcustomer");
  }, [selectCustomer]);

  return (
    <div>
      <form
        className=" border-1 border-gray-200 w-full p-5"
        id="newBuild"
        action=""
        encType="multipart/form-data"
      >
        {/* row 1 */}
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
            <select className="mb-5 lg:mb-0" name="product" id="product">
              <option value="">Select Product</option>

              {apiData.data.all_products.map((product) => (
                <option key={product.product_id} value={product.product_name}>
                  {product.product_name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              className="mb-5 lg:mb-0"
              type="date"
              placeholder="Select Run Date"
            />
          </div>
        </div>

        {/* row 4 */}

        <div className="inputGroup md:columns-2 w-full">
          <div>
            <input type="text" placeholder="Ad Count" />
          </div>
          <div>
            <select name="adtype" id="adtype">
              <option value="">Select Type</option>
              <option value="static">Static</option>
              <option value="animated">Animated</option>
            </select>
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
    </div>
  );
}
