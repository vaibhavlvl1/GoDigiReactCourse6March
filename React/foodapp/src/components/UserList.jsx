import React, { useState } from "react";
import ListItem from "./ListItem";

const users = [
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    id: 1,
    selected: false,
  },
  { name: "Bob Smith", email: "bob.smith@example.com", id: 2, selected: false },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    id: 3,
    selected: false,
  },
  {
    name: "Diana White",
    email: "diana.white@example.com",
    id: 4,
    selected: false,
  },
  {
    name: "Ethan Green",
    email: "ethan.green@example.com",
    id: 5,
    selected: false,
  },
  {
    name: "Fiona Black",
    email: "fiona.black@example.com",
    id: 6,
    selected: false,
  },
  {
    name: "George Martin",
    email: "george.martin@example.com",
    id: 7,
    selected: false,
  },
  {
    name: "Hannah Lee",
    email: "hannah.lee@example.com",
    id: 8,
    selected: false,
  },
  { name: "Ian Davis", email: "ian.davis@example.com", id: 9, selected: false },
  {
    name: "Julia Adams",
    email: "julia.adams@example.com",
    id: 10,
    selected: false,
  },
];

export default function UserList() {
  const [userList, setUserList] = useState(users);
  const [selectedUsers, setSelectedUsers] = useState([]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>User List</h1>
      <div className="userlist">
        <ul className="default-list">
          {userList.map((user) => (
            <ListItem
              key={user.id}
              setSelectedUsers={setSelectedUsers}
              selectedUsers={selectedUsers}
              user={user}
            />
          ))}
        </ul>

        <ul className="selected-list">
          {selectedUsers.map((user) => (
            <ListItem key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </>
  );
}
