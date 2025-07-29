import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        firstName: name,
        lastName: name,
        position,
        email,
        password,
      });

      if (response.status === 201) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("currentUser", JSON.stringify(response.data.user));
        navigate("/login");
      } else if (response.status === 409) {
        setError("User already exists.");
      } else if (response.status === 400) {
        setError("Please fill in all required fields.");
      } else {
        setError(response.data.error || "Registration failed.");
      }
    } catch (err) {
      console.error("Signup Error:", err);
      setError("Unable to connect to the server.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register for SmartServe</h2>
      <form onSubmit={handleRegister} style={styles.form}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Position (e.g. Manager, Staff)"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
          style={styles.input}
        />
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
          Register
        </button>
      </form>
      {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
      <p style={{ marginTop: 16, textAlign: "center" }}>
        Already have an account?{" "}
        <a
          href="/login"
          style={{
            color: "#D63743",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Login
        </a>
      </p>
    </div>
  );
}

const styles = {
  container: {
    margin: "80px auto",
    padding: 20,
    maxWidth: 400,
    border: "1px solid #D63743",
    borderRadius: 10,
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  input: {
    padding: 12,
    fontSize: 16,
    borderRadius: 6,
    border: "1px solid #D63743",
  },
  button: {
    padding: 12,
    fontSize: 16,
    backgroundColor: "#D63743",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: "bold",
  },
};
