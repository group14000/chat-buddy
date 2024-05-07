import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>Welcome to ChatBuddy!</h2>
      <p>Email Address:</p>
      <input type="email" name="email" />
      <br />
      <p>Password:</p>
      <input type="password" name="password" />
      <br />
      <button>Login</button>
      <p>
        New User?<Link to="/sign-up">Create Account</Link>
      </p>
    </div>
  );
};

export default Login;
