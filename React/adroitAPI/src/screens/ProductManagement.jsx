import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductsTable from "../components/uicomponents/ProductsTable";
import Loader from "../components/uicomponents/Loader";
import axios from "axios";
import { AppContext } from "../context/AppProvider";

export default function ProductManagement() {
  const { token } = useContext(AppContext);
  let statusLoading = null;
  const [isLoading, setIsLoading] = useState(false);
  const [prodList, setProdList] = useState([]);
  const formData = new FormData();
  formData.append("token", token);

  const productsListContainer = (
    <div className="tableContainer bg-white p-5">
      <div className="entryFilter mb-5">
        Show
        <select
          className="border-[1px] border-gray-300 pr-2 pl-1 mr-1 ml-1"
          name="entries"
          id=""
          onChange={(e) => setEntries(e.target.value)}
        >
          <option value="10" default>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        entries
      </div>
      <div className="mainTable overflow-x-scroll bg-white ">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Company Name</th>
              <th>Production Size</th>
              <th>Width</th>
              <th>Height</th>
              <th>Product Type</th>
              <th>Created At</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {prodList.map((dataRow) => (
              <ProductsTable
                key={dataRow.product_id}
                dataRow={dataRow}
                handleStatus={handleStatus}
                statusLoading={statusLoading}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  async function handleStatus(id) {
    try {
      statusLoading = id;
      const response = await axios.post(
        `/api/demo-adbook/api/products/active-inactive/${id}`,
        formData
      );

      if (response.data.status) {
        const newProdList = prodList.map((product) =>
          product.product_id === id
            ? { ...product, is_active: product.is_active === "1" ? "0" : "1" }
            : product
        );

        setProdList(newProdList);
      }
    } catch (error) {
      console.log(error.message, "Failed to change the status");
    } finally {
      statusLoading = null;
    }
  }

  async function getProducts() {
    try {
      setIsLoading(true);

      const response = await axios.post(
        "/api/demo-adbook/api/products/list",
        formData
      );

      if (response.data.status) {
        setProdList(response.data.products);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-gray-200 w-full h-dvh pl-10 pr-10 box-shadow overflow-scroll">
      <div className="flex justify-between items-center pb-5 pt-5 border-b-2 border-gray-300">
        <p className="font-medium text-xl">PRODUCTS</p>
        <p>
          <Link to="/">Home</Link> /{" "}
          <Link to="/productmanagement">Products</Link>{" "}
        </p>
      </div>
      {isLoading ? <Loader /> : productsListContainer}
    </div>
  );
}
