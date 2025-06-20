import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductsTable from "../components/uicomponents/ProductsTable";
import Loader from "../components/uicomponents/Loader";
import axios from "axios";

export default function ProductManagement() {
  const [isLoading, setIsLoading] = useState(false);
  const [prodList, setProdList] = useState([]);

  const productsListContainer = (
    <div className="tableContainer bg-white p-5">
      <div className="entryFilter mb-5">
        Show
        <select
          className="border-[1px] border-gray-300 pr-2 pl-1 mr-1 ml-1"
          name="entries"
          id=""
        >
          <option value="10" default>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        entries
      </div>
      <div className="mainTable ">
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
                key={dataRow.id}
                dataRow={dataRow}
                updateProduct={updateProduct}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  async function getProducts() {
    try {
      setIsLoading(true);

      const response = await axios.get("http://localhost:4000/products");

      if (response.status === 200) {
        setProdList(response.data);
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

  async function updateProduct(id, product) {
    try {
      const response = await axios.put(
        `http://localhost:4000/products/${id}`,
        product
      );
    } catch (error) {
      console.log(error.message);
    }
  }

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
