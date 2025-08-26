import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../pages/footer";
import ContactUs from "../pages/ContactUs";
import Carousel from "../pages/carousel";
import Autotype from "../pages/Autotype";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <section className="relative w-full h-screen">
        <Carousel />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/40">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Welcome to NeighborFit
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mt-4 max-w-2xl">
            Answer a few lifestyle-based questions and let NeighborFit match you
            with the best places to live in Delhi.
          </p>

          <Link
            to="/form"
            className="mt-6 px-6 py-3 bg-rose-500 text-white font-semibold rounded-xl shadow-lg hover:bg-rose-600 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      <div id="about" className="py-20 px-6 bg-white">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-900">
          <Autotype />
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-rose-500">
              NeighborFit
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              NeighborhoodFit is designed to help people find their ideal place to
              live based on lifestyle preferences such as safety, affordability,
              community, and amenities. Our mission is to make relocating or choosing
              a neighborhood simple, data-driven, and tailored to your needs.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Why Choose NeighborhoodFit?
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">✔</span>
                Find your ideal place to live based on safety, affordability,
                community, and amenities.
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">✔</span>
                Get personalized recommendations using data-driven insights.
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">✔</span>
                Make relocating simple and stress-free.
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">✔</span>
                Choose a neighborhood that’s tailored to your lifestyle.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
        {[
          "/assets1/image1.jpg",
          "/assets1/image2.jpg",
          "/assets1/image6.jpg",
          "/assets1/image7.jpg",
          "/assets1/image9.jpg",
          "/assets1/image11.jpg"
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Neighborhood ${i + 1}`}
            className="w-full h-60 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      <ContactUs />
      <Footer />
    </div>
  );
}
