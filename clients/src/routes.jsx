import { Route, Routes } from "react-router";
import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayouth";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./features/public/Home";

export default function Approutes() {
  return (
    <Routes>
      {/* Public Layout */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
      </Route>

      {/* Auth Layout */}
      <Route path="auth" element={<AuthLayout />}>
        {/* <Route path element={<Login />} />
        <Route path element={<Register />} /> */}
      </Route>

      {/* Admin Layout */}
      <Route path="dashboard" element={<AdminLayout/>}>
        {/* <Route index element={<Dashboard />} /> */}
      </Route>
    </Routes>
  );
}
