import React from "react";
import "./Empty.css";
import { useNavigate } from "react-router-dom";
import image from "../assets/images.png";

function Empty({ title, desc, btnTitle, Link }) {
  const navigate = useNavigate();
  return (
    <div className="empty container">
      <div className="empty__image">
        <img src={image} alt="" />
      </div>
      <h2>{title}</h2>
      <p>{desc}</p>
      <button onClick={() => navigate(Link)}>{btnTitle}</button>
    </div>
  );
}

export default Empty;
