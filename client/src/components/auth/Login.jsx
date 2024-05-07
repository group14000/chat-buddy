import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        formData
      );
      console.log(response.data);
      // Redirect user after successful login
    } catch (error) {
      console.error("Login error:", error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Welcome to ChatBuddy!</h2>
      <form onSubmit={handleSubmit}>
        <p>Email Address:</p>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <p>Password:</p>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        New User? <Link to="/sign-up">Create Account</Link>
      </p>
    </div>
  );
};

export default Login;
