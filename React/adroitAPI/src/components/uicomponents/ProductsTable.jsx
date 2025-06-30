import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppProvider";
import axios from "axios";

export default function ProductsTable({
  dataRow,
  handleStatus,
  statusLoading,
}) {
  const currentStatus = dataRow.is_active;

  return (
    <tr>
      <td>{dataRow.product_id}</td>
      <td>{dataRow.product_name}</td>
      <td>{dataRow.company_name}</td>
      <td>{dataRow.product_size}</td>
      <td>{dataRow.width}</td>
      <td>{dataRow.height}</td>
      <td>{dataRow.product_type}</td>
      <td>{dataRow.created_at}</td>
      <td className="flex justify-start items-center  mr-5">
        <p className="w-16 border-r-2 ">
          {currentStatus === "1" ? "Active" : "Deactive"}
        </p>{" "}
        <button
          onClick={(e) => {
            handleStatus(dataRow.product_id);
          }}
          className={currentStatus === "1" ? "deactivate" : "reactivate"}
        >
          {statusLoading === dataRow.product_id ? (
            <LoaderSmall />
          ) : currentStatus === "1" ? (
            "Deactivate"
          ) : (
            "Activate"
          )}
        </button>{" "}
      </td>
    </tr>
  );
}
