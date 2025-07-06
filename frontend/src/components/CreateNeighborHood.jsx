import { useState } from "react";
import Navbar from "./Navbar";

export default function CreateNeighborhood() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    safety: "",
    affordability: "",
    public_transport: "",
    walkability: "",
    noise_level: "",
    green_space: "",
    internet_speed: "",
    climate_score: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert number fields to actual numbers
    const isNumberField = [
      "safety", "affordability", "public_transport", "walkability",
      "noise_level", "green_space", "internet_speed", "climate_score"
    ].includes(name);

    setFormData((prev) => ({
      ...prev,
      [name]: isNumberField ? parseFloat(value) || "" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/neighbour/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //"Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Neighborhood created successfully!");
        setFormData({
          name: "",
          city: "",
          safety: "",
          affordability: "",
          public_transport: "",
          walkability: "",
          noise_level: "",
          green_space: "",
          internet_speed: "",
          climate_score: "",
          description: "",
        });
      } else {
        setMessage(`${data.msg}`);
      }
      
    } catch (err) {
      setMessage("Error creating neighborhood.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Create a Neighborhood</h2>
        {message && <p className="mb-4 text-yellow-600">{message}</p>}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {Object.keys(formData).map((key) => (
            <div key={key} className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium mb-1 capitalize">
                {key.replace(/_/g, " ")}
              </label>
              <input
                type={key === "description" || key === "name" || key === "city" ? "text" : "number"}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
          ))}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700"
            >
              Create Neighborhood
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
