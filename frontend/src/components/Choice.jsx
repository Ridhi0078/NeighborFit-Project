import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar showLogout handleLogout={handleLogout} />
      <main
        className="flex-grow bg-cover bg-center flex flex-col items-center justify-center text-center px-4 relative"
        style={{
          backgroundImage: `url("/assets1/hero1.webp")`,
        }}
      >

        <div className="relative z-10 bg-opacity-50 p-8 rounded-lg max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to NeighborFit
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            What would you like to do today?
          </p>

          <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl justify-center">
            <Link to="/preferences" className="w-full md:w-64">
              <div className="bg-yellow-600 text-white rounded-lg p-6 shadow hover:bg-yellow-700 text-center cursor-pointer">
                <h2 className="text-xl font-semibold">Fill Preferences</h2>
                <p className="text-sm mt-2">
                  Find neighborhoods according to your lifestyle.
                </p>
              </div>
            </Link>

            <Link to="/create" className="w-full md:w-64">
              <div className="bg-white text-yellow-600 rounded-lg p-6 shadow hover:bg-gray-100 text-center cursor-pointer">
                <h2 className="text-xl font-semibold">Create Neighborhood</h2>
                <p className="text-sm mt-2">
                  Add a Neighborhood for others to explore.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
