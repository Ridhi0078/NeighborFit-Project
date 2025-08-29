import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SignupForm from "./SignupForm";


export default function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`http://localhost:3000/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.msg || "Login failed");

      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("token", data.token);
      onLogin(data.user);

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }

  };


  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#F9FAFB]">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full p-6 bg-white shadow-lg rounded space-y-4"
        >
          <h2 className="text-2xl font-bold text-center">Login to NeighborFit</h2>
          {error && <p className="text-red-500">{error}</p>}
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#F59E0B] text-white py-2 rounded hover:opacity-90 cursor-pointer"
          >
            Login
          </button>

          <p>
            If you don’t have an account then{" "}
            <Link to="/signup" className="text-pink-600 hover:underline">
              Signup
            </Link>
          </p>
        </form>
      </div>

    </>
  );
}
