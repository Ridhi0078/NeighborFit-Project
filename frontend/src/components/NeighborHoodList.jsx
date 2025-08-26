import { useEffect, useState } from "react";

export default function NeighborhoodsList() {
  const [neighborhoods, setNeighborhoods] = useState([]);

  useEffect(() => {
    const fetchNeighborhoods = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/neighbour/");
        const data = await res.json();
        setNeighborhoods(data);
      } catch (error) {
        console.error("Error fetching neighborhoods:", error);
      }
    };
    fetchNeighborhoods();
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto mt-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Explore Neighborhoods
      </h2>

      {neighborhoods.length === 0 ? (
        <p className="text-gray-500 text-center">No neighborhoods available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((nbr) => (
            <div
              key={nbr._id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 border"
            >
              <h3 className="text-xl font-semibold text-rose-600">{nbr.name}</h3>
              <p className="text-gray-600 mt-2">{nbr.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Location: <span className="font-medium">{nbr.location}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
