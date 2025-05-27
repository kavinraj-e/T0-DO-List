import React from "react";

export default function Navbar({ user, logout }) {
  return (
    <div className="flex justify-between items-center mb-8 w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-3xl font-bold text-gray-800">Welcome, {user.displayName}</h2>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
        onClick={logout}
      >
        Sign Out
      </button>
    </div>
  );
}
