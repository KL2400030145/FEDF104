import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ManageProducts from "./components/ManageProducts";
import UserManagement from "./components/UserManagement";
import ViewAnalytics from "./components/ViewAnalytics";
import Cart from "./components/Cart"; // ✅ Added Cart import

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-screen bg-gray-100 overflow-x-hidden">
        <Routes>
          {/* ✅ Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />

          {/* ✅ Functional Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} /> {/* ✅ Working Cart route */}
          <Route path="/manage-products" element={<ManageProducts />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/analytics" element={<ViewAnalytics />} />

          {/* ✅ 404 Fallback */}
          <Route
            path="*"
            element={
              <h2 className="text-center mt-10 text-xl font-semibold text-gray-600">
                Page Not Found
              </h2>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
