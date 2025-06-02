import { useState } from "react";

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

export default function Home() {
  const [userList, setUserList] = useState(users);
  const [selectedUsers, setSelectedUsers] = useState([]);

  function handleChecked(e) {
    let itemId = e.target.parentElement.getAttribute("id");

    e.target.checked
      ? userList.forEach((user) => {
          if (user.id == itemId) {
            setSelectedUsers((prev) =>
              [...prev, user].sort((a, b) => a.id - b.id)
            );
          }
        })
      : setSelectedUsers(selectedUsers.filter((item) => item.id != itemId));
  }

  return (
    <>
      <h1>This is Home Section</h1>
      <div className="list-container">
        <div className="allUsers">
          <ul>
            {userList.map((item) => (
              <li key={item.id} id={item.id}>
                {item.id}
                <span className="fname">{item.name}</span>
                <span className="lemail">{item.email}</span>
                <input onChange={(e) => handleChecked(e)} type="checkbox" />
              </li>
            ))}
          </ul>
        </div>
        <div className="allUsers selectedUsers">
          <ul>
            {selectedUsers.map((item) => (
              <li key={item.id} id={item.id}>
                {item.id}
                <span className="fname">{item.name}</span>
                <span className="lemail">{item.email}</span>
                <input onChange={(e) => handleChecked(e)} type="checkbox" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
