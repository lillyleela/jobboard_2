import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://jobboard-2-ogr1.onrender.com/api/auth/login",
        {
          email,
          password,
        },
      );
      localStorage.setItem("userId", res.data.user._id);
      const user = res.data.user;

      // Redirect based on role
      if (user.role === "employer") {
        navigate("/employer-dashboard");
      } else {
        navigate("/candidate-dashboard");
      }
    } catch (error) {
      alert("Login Failed");
    }
  };

  return (
    // <div className="login-container">
    //   <h2>Login</h2>

    //   <form onSubmit={handleLogin}>
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />

    //     <input
    //       type="password"
    //       placeholder="Password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />

    //     <button type="submit">Login</button>
    //   </form>
    // </div>
    <div className="login-container">
      <div className="login-card">
        {/* 🔙 Back Button */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
