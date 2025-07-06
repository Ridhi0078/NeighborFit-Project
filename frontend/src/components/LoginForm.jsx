import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/user/login`, {
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
    <Navbar/>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-30  p-6 bg-white shadow-lg rounded space-y-6 ">
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
      <button type="submit" className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700">
        Login
      </button>
    </form>
    </>
  );
}
