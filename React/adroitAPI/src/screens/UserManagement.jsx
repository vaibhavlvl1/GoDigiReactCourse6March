import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserTable from "../components/uicomponents/UserTable";
import axios from "axios";

export default function UserManagement() {
  const [isLoading, setIsLoading] = useState(false);
  const [userList, setUserList] = useState([]);

  async function getUsers() {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:4000/users");

      console.log(response.data.users);

      if (response.status === 200) {
        setUserList(response.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const updateItem = async (id, user) => {
    console.log(id, user);
    try {
      const response = await axios.put(
        `http://localhost:4000/users/${id}`,
        user
      );

      console.log("Item updated: with", id, updatedStatus, response.data);
      // Optionally update state here
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

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
                <UserTable updateItem={updateItem} dataRow={dataRow} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
