import { Link } from "react-router-dom";
import ContactUs from "../pages/ContactUs";

export default function Navbar({ showLogout = false, handleLogout }) {
  return (
    <nav className="bg-[#F43F5E] text-white px-6 py-4 flex justify-between items-center shadow-lg">
      {/* Left: Brand */}
      <div className="text-2xl font-bold">
        <Link to="/" className="transition">
          NeighborFit
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex space-x-6 text-lg font-medium">
        <Link to="/" className="hover:text-gray-200 transition">
          Home
        </Link>
        <Link to="/neighborhoods" className="hover:text-gray-200 transition">
          Explore
        </Link>
        <a href="#about" className="hover:text-gray-200 transition">
          About
        </a>
        <a href="#contactus" className="hover:text-gray-200 transition">
          Contact
        </a>
      </div>

      {/* Right: Auth Buttons */}
      <div className="flex space-x-4">
        {!showLogout && (
          <>
            <Link to="/login">
              <button className="bg-[#F59E0B] text-[#fff] text-lg font-semibold py-2 px-6 rounded-lg hover:bg-amber-600 transition">
                Login/SignUp
              </button>
            </Link>
            {/* <Link to="/signup">
              <button className="bg-[#F59E0B] text-[#fff] text-lg font-semibold py-2 px-6 rounded-lg hover:bg-amber-600 transition">
                Signup
              </button>
            </Link> */}
          </>
        )}

        {showLogout && (
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
