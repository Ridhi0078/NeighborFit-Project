import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main
        className="flex-grow bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:`url("/assets1/hero1.webp")`,
        }}
      >
        <div className=" bg-opacity-50 p-8 rounded-lg max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Your Perfect Neighborhood
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Answer a few lifestyle-based questions and let NeighborFit match you
            with the best places to live in Delhi.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/login">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white text-xl font-semibold py-3 px-10 rounded-lg">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-white hover:bg-gray-100 text-yellow-600  text-xl font-semibold py-3 px-10 rounded-lg border border-white">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
