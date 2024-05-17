import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Import the envelope icon

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your validation and login logic here
    const loginData = {
      email: email,
      password: password,
    };
    console.log(loginData);
    try {
      const response = await axios.post(
        "https://sport-blog-app-f99d3e95c99d.herokuapp.com/login",
        { email, password }
      );
      console.log(response.data); // Handle success response
      console.log(response.data);

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("id", user.id);
      localStorage.setItem("email", user.email);

      if (user.id && token) {
        console.log(user.id, token);
        window.location.href = "/";
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="main">
        <div className="whitecontainer">
          <h1>Login</h1>
          <div className="gtsya">Good to see you again !</div>
          <div className="input-container">
            <p className="infos">Your email</p>
            <input
              className="ourinfo"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
            />
          </div>
          <div className="input-container">
            <p className="infos">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button className="submitbutton" type="submit">
            Login
            <FontAwesomeIcon icon={faArrowRightToBracket} className="icon" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
