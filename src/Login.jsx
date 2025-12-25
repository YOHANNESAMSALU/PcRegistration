// Login.jsx

import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const users = [
      { username: "admin", password: "admin123", role: "Admin" },
      { username: "user", password: "user123", role: "User" },
    ];

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      onLogin(user);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login">
    <div className="login-container">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
       className="new-input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        className="new-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className="login-button" onClick={handleLogin}>Login</button>
    </div></div>
  );
}

export default Login;
