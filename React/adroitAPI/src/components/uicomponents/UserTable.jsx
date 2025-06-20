import React from "react";

export default function UserTable({ dataRow, changeStatus }) {
  const status = dataRow.status;
  const statusToUpdate = status == "Active" ? "Inactive" : "Active";
  // console.log(statusToUpdate)

  return (
    <tr>
      <td>{dataRow.id}</td>
      <td>{dataRow.name}</td>
      <td>{dataRow.company}</td>
      <td>{dataRow.role}</td>
      <td className="flex justify-start items-center  mr-5">
        <p className="w-16 border-r-2 ">{dataRow.status}</p>{" "}
        <button
          onClick={() =>
            updateItem(dataRow.id, { ...dataRow, status: statusToUpdate })
          }
          className={dataRow.status === "Active" ? "deactivate" : "reactivate"}
        >
          {dataRow.status === "Active" ? "Deactivate" : "Reactivate"}
        </button>{" "}
      </td>

      <td>{dataRow.createdAt}</td>
      <td>{dataRow.lastLogin}</td>
    </tr>
  );
}
