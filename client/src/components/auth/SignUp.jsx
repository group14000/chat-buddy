import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
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
        "http://localhost:3001/signup",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Signup error:", error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Welcome to ChatBuddy!</h2>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
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
        <button type="submit">SignUp</button>
      </form>
      <p>
        Already Have an account? <Link to="/login">Login Here</Link>
      </p>
    </div>
  );
};

export default SignUp;
