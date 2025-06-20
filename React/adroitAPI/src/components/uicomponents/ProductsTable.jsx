import React from "react";

export default function ProductsTable({ dataRow, updateProduct }) {
  const currStatus = dataRow.status;
  const statusToUpdate = currStatus === "Active" ? "Inactive" : "Active";

  return (
    <tr>
      <td>{dataRow.id}</td>
      <td>{dataRow.productName}</td>
      <td>{dataRow.companyName}</td>
      <td>{dataRow.productionSize}</td>
      <td>{dataRow.width}</td>
      <td>{dataRow.height}</td>
      <td>{dataRow.productType}</td>
      <td>{dataRow.createdAt}</td>
      <td className="flex justify-start items-center  mr-5">
        <p className="w-16 border-r-2 ">{dataRow.status}</p>{" "}
        <button
          onClick={() => {
            updateProduct(dataRow.id, {
              ...dataRow,
              status: statusToUpdate,
            });
          }}
          className={dataRow.status === "Active" ? "deactivate" : "reactivate"}
        >
          {dataRow.status === "Active" ? "Deactivate" : "Reactivate"}
        </button>{" "}
      </td>
    </tr>
  );
}
