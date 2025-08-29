import { useState } from "react";
import Navbar from "./Navbar";

export default function PreferenceForm() {
  const userId = localStorage.getItem("userId");
  const [preferences, setPreferences] = useState({
    safety: 5,
    affordability: 5,
    public_transport: 5,
    walkability: 5,
    noise_level: 5,
    green_space: 5,
    internet_speed: 5,
    climate_score: 5,
  });
  const [matches, setMatches] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: parseInt(value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Saving preferences and finding matches...");

    try {
      // 1. Update preferences
      const res = await fetch(`http://localhost:3000/api/user/${userId}/preferences`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`, 
       },
        body: JSON.stringify(preferences),
      });
      if (!res.ok) throw new Error("Failed to update preferences");

      // 2. Get matched neighborhoods
      const matchRes = await fetch(`http://localhost:3000/api/match/${userId}`);
      const matchData = await matchRes.json();
      setMatches(matchData.matches || []);
      setMessage("Top matches found!");

      //localStorage.setItem("token", data.token);
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded space-y-6">
      <h2 className="text-center text-2xl font-bold">Set Your Preferences</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {Object.keys(preferences).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="capitalize">{key.replace(/_/g, " ")}</label>
            <input
              type="number"
              min={0}
              max={10}
              name={key}
              value={preferences[key]}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {/* <span className="text-sm text-gray-500">Value: {preferences[key]}</span> */}
          </div>
        ))}
        <div className="col-span-2">
          <button type="submit" className="w-full bg-[#F59E0B] text-white py-2 rounded hover:opacity-90">
            Submit Preferences
          </button>
        </div>
      </form>

      {message && <p className="text-center text-yellow-600">{message}</p>}

      {matches.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Top 5 Recommended Locations</h3>
          <ul className="list-disc pl-5 space-y-2">
            {matches.slice(0, 5).map((loc) => (
              <li key={loc._id}>
                <strong>{loc.name}</strong> — {loc.city} <br />
                <span className="text-sm text-gray-600">{loc.description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
}
