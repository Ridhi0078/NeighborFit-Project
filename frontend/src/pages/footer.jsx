export default function Footer() {
  return (
    <div id="contact">
      <footer className="bg-[#F43F5E] text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-3xl font-bold text-white">NeighborFit</h2>
          <p className="mt-3 text-sm text-white-500">
            Helping you find the perfect neighborhood based on your lifestyle, 
            safety, and affordability preferences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/neighborhoods" className="hover:text-white transition">Neighborhoods</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex flex-col space-x-4">
            <a href="#" className="hover:text-white transition">🌐 Email: support@neighborhoodfit.com</a>
            <a href="#" className="hover:text-white transition">Phone: XXXXXXX</a>
            <a href="#" className="hover:text-white transition">📸</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-white-700">
        © {new Date().getFullYear()} NeighborhoodFit. All rights reserved by Ridhima Dangwal.
      </div>
    </footer>
    </div>
    
  );

}
