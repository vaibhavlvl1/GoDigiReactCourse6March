import React from "react";

export default function ProductReport({ response }) {
  return response.length > 0 ? (
    <table className="w-full table-fixed text-left report-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Booked</th>
          <th>Hold</th>
          <th>Production</th>
          <th>Received</th>
        </tr>
      </thead>
      <tbody>
        {response.map((dataRow, index) => (
          <tr key={index}>
            <td>{dataRow.product}</td>
            <td>{dataRow.booked}</td>
            <td>{dataRow.hold}</td>
            <td>{dataRow.production}</td>
            <td>{dataRow.received}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>Loading</p>
  );
}
