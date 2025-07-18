import React, { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser") || "null")
  );
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || "",
    position: user?.position || "",
    email: user?.email || "",
  });
  const [error, setError] = useState("");

  if (!user) {
    return (
      <div style={styles.container}>
        <h2 style={{ color: "#e53e3e" }}>No profile found</h2>
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  const handleEdit = () => {
    setEditing(true);
    setError("");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!form.name || !form.position || !form.email) {
      setError("All fields are required.");
      return;
    }
    // Update localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = users.map((u) =>
      u.email === user.email ? { ...u, ...form } : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify({ ...user, ...form }));
    setUser({ ...user, ...form });
    setEditing(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={{ fontSize: 28, color: "#2563eb", marginBottom: 20 }}>
        My Profile
      </h2>
      <div style={styles.profileBox}>
        {editing ? (
          <form
            onSubmit={handleSave}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            <label>
              <strong>Name:</strong>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </label>
            <label>
              <strong>Position:</strong>
              <input
                type="text"
                name="position"
                value={form.position}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </label>
            <label>
              <strong>Email:</strong>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </label>
            {error && <p style={{ color: "#e53e3e" }}>{error}</p>}
            <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
              <button type="submit" style={styles.button}>
                Save
              </button>
              <button
                type="button"
                style={styles.cancelButton}
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Position:</strong> {user.position}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <button style={styles.button} onClick={handleEdit}>
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: "100px auto",
    padding: 20,
    maxWidth: 400,
    border: "1px solid #ccc",
    borderRadius: 10,
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  profileBox: {
    background: "#f3f4f6",
    padding: 20,
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    marginTop: 10,
    textAlign: "left",
  },
  input: {
    padding: "10px",
    fontSize: 16,
    border: "1px solid #2563eb",
    borderRadius: 8,
    width: "100%",
    marginTop: 4,
    marginBottom: 8,
    boxSizing: "border-box",
  },
  button: {
    padding: "10px 18px",
    fontSize: 16,
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: 8,
    boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
    transition: "background 0.2s",
  },
  cancelButton: {
    padding: "10px 18px",
    fontSize: 16,
    backgroundColor: "#e5e7eb",
    color: "#333",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    transition: "background 0.2s",
  },
};
