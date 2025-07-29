import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.position || !form.email || !form.password) {
      setError("All fields are required.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === form.email)) {
      setError("Email already exists.");
      return;
    }
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #fff 0%, #D63743 100%)",
      }}
    >
      <div className="bg-white p-8 rounded shadow max-w-md w-full border border-[#D63743]">
        <h2
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: "#D63743" }}
        >
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded"
            style={{ borderColor: "#D63743" }}
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={form.position}
            onChange={handleChange}
            className="border p-2 rounded"
            style={{ borderColor: "#D63743" }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded"
            style={{ borderColor: "#D63743" }}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border p-2 rounded"
            style={{ borderColor: "#D63743" }}
            required
          />
          {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit"
            className="px-4 py-2 rounded font-semibold"
            style={{ backgroundColor: "#D63743", color: "#fff" }}
          >
            Create Account
          </button>
        </form>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 rounded font-semibold w-full transition"
          style={{
            backgroundColor: "#fff",
            color: "#D63743",
            border: "1px solid #D63743",
          }}
        >
          Back
        </button>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="underline font-semibold"
            style={{ color: "#D63743" }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
