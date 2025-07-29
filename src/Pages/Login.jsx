import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Clear authentication on app start (for development)
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUser");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.status === 200) {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem(
            "currentUser",
            JSON.stringify(response.data.user)
          );
          navigate("/dashboard");
        } else if (response.status === 401) {
          setError("Invalid email or password.");
        } else {
          setError("Login failed. Please try again.");
        }
      })
      .catch(function (error) {
        console.error("Login Error:", error);
        setError("Unable to connect to the server");
      });
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h2 style={styles.title}>Login to SmartServe</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
        <p
          style={{
            ...styles.registerText,
            width: "100%",
            textAlign: "center",
            marginTop: 24,
            fontSize: 15,
            color: "#444",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          Don't have an account?
          <a href="/create-account" style={styles.registerLink}>
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  outerContainer: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #e0e7ff 0%, #fff 100%)",
  },
  container: {
    padding: "32px 32px 24px 32px",
    minWidth: 340,
    maxWidth: 400,
    width: "100%",
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    boxShadow: "0 4px 24px rgba(37,99,235,0.08)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    color: "#2563eb",
    marginBottom: 24,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: "100%",
    alignItems: "center",
  },
  input: {
    padding: "12px 14px",
    fontSize: 16,
    border: "1px solid #2563eb",
    borderRadius: 8,
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    marginBottom: 0,
    transition: "border-color 0.2s",
  },
  button: {
    padding: "12px 0",
    fontSize: 16,
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
    marginTop: 8,
    boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
    transition: "background 0.2s",
  },
  error: {
    color: "#e53e3e",
    marginTop: 12,
    fontSize: 15,
    fontWeight: "bold",
  },
  registerText: {
    marginTop: 24,
    fontSize: 15,
    color: "#444",
  },
  registerLink: {
    color: "#2563eb",
    textDecoration: "underline",
    fontWeight: "bold",
  },
};
