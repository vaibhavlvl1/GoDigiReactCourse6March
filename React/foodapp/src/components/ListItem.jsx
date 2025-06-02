import React from "react";

export default function ListItem({ user, setSelectedUsers, selectedUsers }) {
  function handleSelected(e, user) {
    if (e.target.checked) {
      setSelectedUsers((prev) => [...prev, user]);
    } else setSelectedUsers(selectedUsers.filter((item) => item.id !== user.id));
  }

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid black",
        padding: 10,
        width: "200px",
      }}
    >
      {" "}
      {user.id} . {user.name}
      <input
        style={{ marginLeft: 5 }}
        onChange={(e) => handleSelected(e, user)}
        type="checkbox"
      />
    </li>
  );
}
