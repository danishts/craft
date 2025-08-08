// src/pages/Auth/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Massk from "../../assets/massk.png";

export default function Signup() {
  const navigate = useNavigate();

  // Optional: you can add state here if you want to handle inputs similarly
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Signup logic here (API call etc)
    console.log("Signup successful");
    navigate("/dashboard"); // redirect after signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* Header with image */}
        <div className="flex justify-center mb-6">
          <img
            src={Massk}
            alt=""
            className="text-cyan-300 rounded-2xl bg-[#745535] w-48 h-14 text-center"
          />
        </div>

        <p className="text-[24px] font-semibold text-gray-500 text-center mb-6">
          Create your account
        </p>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your full name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-[#e8f0fe] font-displays focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-[#e8f0fe] font-displays focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-[#e8f0fe] font-displays focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#745535] to-[#8b6b4f] text-white py-2 rounded-lg font-semibold hover:from-[#5e422b] hover:to-[#745535] transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
