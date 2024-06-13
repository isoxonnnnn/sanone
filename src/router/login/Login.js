import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    alert(`Foydalanuvchi nomi: ${username}, Parol: ${password}`);
  };

  return (
    <div className="login__page container">
      <div className="login__wrapper">
        <h2>Tizimga kirish</h2>
        <input
          type="text"
          placeholder="Foydalanuvchi nomi"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleLogin}>Kirish</button>
        <NavLink to={"/"} className="navbar__logo">
          <button>Asosiy sahifaga qaytish</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
