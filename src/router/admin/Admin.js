import React from "react";
import ManageProduct from "./manage-product/ManageProduct";
import CreateProduct from "./create-product/CreateProduct";
import "./Admin.css";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  return (
    <div className="admin">
      <div className="admin__sidebar">
        <h2>Admin panel</h2>
        <button onClick={() => navigate("/")}>Go home</button>
        <NavLink to={"create-product"} className="admin__link">
          Create Product
        </NavLink>
        <NavLink to={"manage-product"} className="admin__link">
          Manage Product
        </NavLink>
      </div>
      <div className="admin__content">
        <Routes>
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/manage-product" element={<ManageProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
