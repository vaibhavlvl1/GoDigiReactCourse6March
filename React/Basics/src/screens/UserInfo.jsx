export default function UserInfo({ selectedUser }) {
  return (
    <div className="user-info-container">
      <img src={selectedUser.image} alt="" />
      <h2>{selectedUser.name}</h2>
      <p>Email : {selectedUser.email}</p>
      <br></br>
      <span className="tohide">
        <p>UserId: {selectedUser.id}</p>
        <p>Address:{selectedUser.address}</p>
        <p>Mobile:{selectedUser.phone}</p>
      </span>
    </div>
  );
}
