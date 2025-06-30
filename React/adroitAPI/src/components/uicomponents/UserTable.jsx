import React from "react";
import Loader from "./Loader";
import LoaderSmall from "./LoaderSmall";

export default function UserTable({ dataRow, handleStatus, statusLoading }) {
  return (
    <tr>
      <td>{dataRow.user_id}</td>
      <td>{dataRow.name}</td>
      <td>{dataRow.company}</td>
      <td>{dataRow.role}</td>
      <td className="flex justify-start items-center  mr-5">
        <p className="w-16 border-r-2 ">
          {dataRow.status === "Reactivate" ? "Deactive" : "Active"}
        </p>{" "}
        <button
          onClick={() => handleStatus(dataRow.user_id)}
          className={
            dataRow.status === "Reactivate" ? "reactivate" : "deactivate"
          }
        >
          {statusLoading === dataRow.user_id ? (
            <LoaderSmall />
          ) : dataRow.status === "Reactivate" ? (
            "Reactivate"
          ) : (
            "Deactivate"
          )}
        </button>
      </td>

      <td>{dataRow.created_at}</td>
      <td>{dataRow.last_login}</td>
    </tr>
  );
}
