import { useState } from "react";
import PropTypes from "prop-types";

export function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanName = username.trim();
    const cleanPassword = password.trim();

    if (!cleanName || !cleanPassword) {
      setError("Both fields are required");
      return;
    }
    setError("");
    onLogin({ username: cleanName, password: cleanPassword });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setError("");
        }}
        required
        aria-invalid={!!error}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        aria-invalid={!!error}
      />
      <br />
      {error && (
        <p role="alert" aria-live="assertive">
          {error}
        </p>
      )}
      <button type="submit">Login </button>
    </form>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
