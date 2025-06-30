import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserTable from "../components/uicomponents/UserTable";
import axios from "axios";
import { AppContext } from "../context/AppProvider";

export default function UserManagement() {
  const [isLoading, setIsLoading] = useState(false);
  const [statusLoading, setStatusLoading] = useState(null);
  const [userList, setUserList] = useState([]);
  const { token } = useContext(AppContext);
  const formData = new FormData();
  formData.append("token", token);

  async function getUsers() {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "/api/demo-adbook/api/users/list",
        formData
      );

      if (response.data.status) {
        setUserList(response.data.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleStatus(id) {
    try {
      setStatusLoading(id);
      console.log(statusLoading);
      const response = await axios.post(
        `/api/demo-adbook/api/users/active-inactive/${id}`,
        formData
      );

      if (response.data.status) {
        const newUserList = userList.map((user) =>
          user.user_id === id
            ? {
                ...user,
                status:
                  user.status === "Reactivate" ? "Deactivate" : "Reactivate",
              }
            : user
        );
        setUserList(newUserList);
      }
    } catch (error) {
      console.log(error.message, "failed to change the status");
    } finally {
      console.log(statusLoading);
      setStatusLoading(null);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="bg-gray-200 w-full h-dvh pl-10 pr-10 box-shadow overflow-scroll">
      <div className="flex justify-between items-center pb-5 pt-5 border-b-2 border-gray-300">
        <p className="font-medium text-xl">USERS</p>
        <p>
          <Link to="/">Home</Link> / <Link to="/usermanagement">Users</Link>{" "}
        </p>
      </div>
      <div className="tableContainer  bg-white p-5">
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
        <div className="mainTable overflow-x-scroll bg-white ">
          <table className="table-auto w-full  text-left  bg-white">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Company</th>
                <th>Role</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Last Login</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((dataRow) => (
                <UserTable
                  key={dataRow.user_id}
                  dataRow={dataRow}
                  handleStatus={handleStatus}
                  statusLoading={statusLoading}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
