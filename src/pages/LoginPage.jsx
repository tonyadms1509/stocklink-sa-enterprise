import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

export default function LoginPage() {
  const { setUser } = useUser();
  const navigate = useNavigate();

  function handleLogin(role) {
    // Simulate authentication
    const newUser = {
      name: "Anthony", // Replace with actual backend data
      role: role,      // "Foreman" or "Admin"
      hasHeardIntro: false, // account-based flag
    };

    setUser(newUser);
    navigate("/dashboard");
  }

  return (
    <div className="bg-carbon min-h-screen flex items-center justify-center">
      <div className="holographic-glass max-w-lg w-full p-8 rounded-lg border-glow-red text-center">
        <h2 className="text-3xl font-bold text-glow-red mb-4">Login</h2>
        <p className="text-white mb-6">Choose your role to log in:</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleLogin("Foreman")}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Log in as Foreman
          </button>
          <button
            onClick={() => handleLogin("Admin")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Log in as Admin
          </button>
        </div>
      </div>
    </div>
  );
}
