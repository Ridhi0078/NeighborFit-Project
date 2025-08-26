// src/pages/ContactUs.jsx
export default function ContactUs() {
  return (
    <div id="contactus" className="min-h-screen flex flex-col bg-[#F9FAFB]">
      {/* Contact Us Section */}
      <div className="py-16 px-6 flex-1">
        <h2 className="text-[#F43F5E] text-5xl font-bold text-center mb-6">
          Contact Us
        </h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          Have questions? Get in touch with us!
        </p>

        <form className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-6">
          <div>
            <label className="block text-left text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f59e0b] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f59e0b] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f59e0b] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F59E0B] text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Extra Info */}
        {/* <div className="max-w-2xl mx-auto text-center mt-10 text-gray-600">
          <p>Email: <span className="font-semibold text-gray-800">support@neighborhoodfit.com</span></p>
          <p>Phone: <span className="font-semibold text-gray-800">+91 98765 43210</span></p>
          <p>Address: <span className="font-semibold text-gray-800">New Delhi, India</span></p>
        </div> */}
      </div>
    </div>
  );
}
