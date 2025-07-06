import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

export default function SignupForm(){
    const navigate=useNavigate();
    const [formData, setFormData]=useState({name:"", email:"", password:""});
    const [message, setMessage]=useState("");

    const handleChange=((e)=>{
        setFormData((prev)=> ({...prev,[e.target.name]:e.target.value}));
    })

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/user/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(" Signup successfull!! Please Login ");
        setFormData({ name:"", email:"", password:""});
      }
      else{
        setMessage(`${data.msg}`);
      }
    } catch (err) {
        console.log(err)
        setMessage("Something went wrong");
    }

    navigate("/login");
  };

  return (
    <>
    <Navbar/>
     <div className="max-w-md mx-auto mt-30 p-6 rounded-xl shadow-lg bg-white space-y-6">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      {message && <p className="mb-4 text-sm text-yellow-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
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
          className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700"
        >
          Create Account
        </button>
      </form>
    </div>
    </>
  )
}
