import LoginForm from "./components/uicomponents/LoginForm";
import Layout from "./components/uicomponents/Layout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import UserManagement from "./screens/UserManagement";
import ProductManagement from "./screens/ProductManagement";
import Customer from "./screens/Customer";
import BookAd from "./screens/BookAd";
import AdList from "./screens/AdList";
import ProtectedRoutes from "./components/logic/ProtectedRoutes";
import PageNotFound from "./screens/PageNotFound";
import HiddenRoute from "./components/logic/HiddenRoute";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          to="/"
          element={
            <ProtectedRoutes>
              <Layout />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="usermanagement" element={<UserManagement />} />
          <Route path="productmanagement" element={<ProductManagement />} />
          <Route path="customer" element={<Customer />} />
          <Route path="bookad" element={<BookAd />} />
          <Route path="adlist" element={<AdList />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route
          path="signin"
          element={
            <HiddenRoute>
              <LoginForm />
            </HiddenRoute>
          }
        />
      </Routes>
    </>
  );
}
