import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn({ onFlip, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      // Fake login token
      const fakeToken = "12345";
      setToken(fakeToken);
      localStorage.setItem("token", fakeToken);

      // Redirect to dashboard after login
      navigate("/dashboard/rationcard");
    } else {
      alert("Enter username and password");
    }
  };

  return (
    <div className="form-side">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don’t have an account?{" "}
        <span className="link" onClick={onFlip}>
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default SignIn;
