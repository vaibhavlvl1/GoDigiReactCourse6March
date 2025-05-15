import { useRef } from "react";

export default function UserInfo({ selectedUser }) {
  const boxTarget = useRef();

  const handleRef = () => {
    if (boxTarget.current.className == "user-info-container") {
      boxTarget.current.classList.remove("user-info-container");
      boxTarget.current.classList.add("user-info-container2");
    } else {
      boxTarget.current.classList.remove("user-info-container2");
      boxTarget.current.classList.add("user-info-container");
    }
  };
  return (
    <>
      <div ref={boxTarget} className="user-info-container">
        <h2>{selectedUser.name}</h2>
        <p>Email : {selectedUser.email}</p>
        <br></br>
        <span className="tohide">
          <p>UserId: {selectedUser.id}</p>
          <p style={{ padding: "20px" }}>
            Address:{selectedUser.address.street}
            <br />
            {selectedUser.address.suite}
            <br />
            {selectedUser.address.city}
            <br />
            {selectedUser.address.zipcode}
          </p>
          <p>Mobile:{selectedUser.phone}</p>
        </span>

        <button style={{ marginTop: "20px" }} onClick={handleRef}>
          Change Class
        </button>
      </div>
    </>
  );
}
