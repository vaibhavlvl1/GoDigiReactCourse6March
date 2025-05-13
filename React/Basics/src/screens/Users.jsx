import { useEffect, useState } from "react";
import User from "./User";
import UserInfo from "./UserInfo";

const userListInitial = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Maple Street, Springfield, IL",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Michael Smith",
    email: "michael.smith@example.com",
    phone: "+1 (555) 234-5678",
    address: "456 Oak Avenue, Denver, CO",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Sophia Brown",
    email: "sophia.brown@example.com",
    phone: "+1 (555) 345-6789",
    address: "789 Pine Road, Austin, TX",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "James Wilson",
    email: "james.wilson@example.com",
    phone: "+1 (555) 456-7890",
    address: "321 Birch Lane, Seattle, WA",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Emma Davis",
    email: "emma.davis@example.com",
    phone: "+1 (555) 567-8901",
    address: "654 Cedar Street, Miami, FL",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

export default function Users() {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    setTimeout(() => {
      setUsersList(userListInitial);
      setIsLoading(false);
    }, 2000);
  }, []);

  function deleteUser(userId) {
    let newArray = usersList.filter((user) => user.id !== userId);
    setUsersList(newArray);
  }

  function viewInfo(obje) {
    console.log(obje);
    setSelectedUser(obje);
  }

  return (
    <div className="container">
      <div className="user-container">
        {isLoading && <p>Loading.......</p>}

        {usersList.length > 0 ? (
          usersList.map((user) => (
            <User
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              viewInfo={viewInfo}
              selectedUser={selectedUser}
            />
          ))
        ) : (
          <p>No Users Found</p>
        )}
      </div>
      {selectedUser && <UserInfo selectedUser={selectedUser} />}
    </div>
  );
}
