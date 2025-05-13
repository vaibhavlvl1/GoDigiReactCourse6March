import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        height: "70px",
        width: "100%",
        backgroundColor: "black",
        color: "#fff",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0px",
        }}
      >
        <li>
          <Link style={{ color: "#fff" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ color: "#fff" }} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link style={{ color: "#fff" }} to="/settings">
            Settings
          </Link>
        </li>
        <li>
          <Link style={{ color: "#fff" }} to="/blog">
            Blogs
          </Link>
        </li>
        <li>
          <Link style={{ color: "#fff" }} to="/users">
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
}
