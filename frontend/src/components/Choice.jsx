import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import NeighborhoodsList from "./NeighborHoodList";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  };

  // 👇 Define actions dynamically
  const actions = [
    {
      title: "Fill Preferences",
      description: "Find neighborhoods according to your lifestyle.",
      link: "/preferences",
      color: "from-rose-500 to-rose-600",
      border: "border-rose-400",
      text: "text-white",
      hover: "hover:shadow-rose-300/60",
      icon: "✨",
    },
    {
      title: "Create Neighborhood",
      description: "Add a neighborhood for others to explore.",
      link: "/create",
      color: "from-amber-400 to-amber-500",
      border: "border-amber-300",
      text: "text-white",
      hover: "hover:shadow-amber-300/60",
      icon: "🏡",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen relative bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <Navbar showLogout handleLogout={handleLogout} />

      {/* Hero Section */}
      <main className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-12 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Welcome to <span className="text-rose-500">NeighborFit</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Discover, create, and explore neighborhoods that match your lifestyle.
          </p>

          {/* Dynamic Action Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {actions.map((action, idx) => (
              <Link key={idx} to={action.link}>
                <div
                  className={`bg-gradient-to-r ${action.color} ${action.text} rounded-2xl p-8 shadow-lg 
                              text-center cursor-pointer border ${action.border}
                              transform transition duration-300 hover:scale-105 hover:shadow-2xl ${action.hover}`}
                >
                  <div className="text-4xl mb-3">{action.icon}</div>
                  <h2 className="text-2xl font-semibold">{action.title}</h2>
                  <p className="text-sm mt-3 opacity-90">{action.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Neighborhoods Section */}
      <section className="bg-white py-16 px-6">
        {/* <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Explore Neighborhoods
        </h2> */}
        <NeighborhoodsList />
      </section>
    </div>
  );
}
