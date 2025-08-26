import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/user/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Signup successful! Please login.");
        setFormData({ name: "", email: "", password: "" });
      } else {
        setMessage(`${data.msg}`);
      }
    } catch (err) {
      console.log(err);
      setMessage("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      {/* Full-screen background like login */}
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#F9FAFB]">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full p-6 bg-white shadow-lg rounded space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-[#023020]">Signup</h2>
          {message && <p className="text-sm text-yellow-600 text-center">{message}</p>}

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#F59E0B] text-white py-2 rounded hover:bg-yellow-700"
          >
            Create Account
          </button>

          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-pink-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
