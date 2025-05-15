import { Link } from "react-router-dom";

export default function User({ user, deleteUser, viewInfo, selectedUser }) {
  return (
    <div
      className={` ${
        selectedUser && user.id === selectedUser.id ? "card active" : "card"
      }`}
    >
      <img src={user.image} alt="" />
      <h2>{user.name}</h2>
      <p>Email : {user.email}</p>
      <br></br>

      <button onClick={() => viewInfo(user)}>Click To View More Info</button>
      <br />
      <button onClick={() => deleteUser(user.id)}>Delete User</button>

      <Link to={`/users/${user.id}`}>View Detailed Info</Link>
    </div>
  );
}
