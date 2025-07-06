export default function Navbar({ showLogout = false, handleLogout }) {
  return (
    <nav className="bg-yellow-600 text-white p-4 flex justify-between py-4 items-center shadow-lg">
      <div className="text-2xl font-bold">NeighborFit</div>

      {showLogout && (
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      )}
    </nav>
  );
}
