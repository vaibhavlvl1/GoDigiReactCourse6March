import "./App.css";
import Navbar from "./components/Navbar";
import PrivateRoutes from "./components/PrivateRoutes";
import Blogs from "./screens/Blogs";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Users from "./screens/Users";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/users" element={<Users />} />
        <Route
          path="/settings"
          element={
            <PrivateRoutes>
              <Settings />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
