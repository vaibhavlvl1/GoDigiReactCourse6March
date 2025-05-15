import { useEffect, useState } from "react";
import User from "./User";
import UserInfo from "./UserInfo";
import axios from "axios";

export default function Users() {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedUser, setSelectedUser] = useState();

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (response.status == "200") {
        setUsersList(response.data);
      }

      console.log(response);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
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
