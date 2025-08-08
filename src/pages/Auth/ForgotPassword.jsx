// src/pages/Auth/ForgotPassword.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Massk from "../../assets/massk.png";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your forgot password logic here, like sending reset email
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* Header */}
        <div className="flex justify-center mb-6">
          <img
            src={Massk}
            alt="Logo"
            className="text-cyan-300 rounded-2xl bg-[#745535] w-48 h-14 text-center"
          />
        </div>

        <p className="text-[24px] font-semibold text-gray-500 text-center mb-6">
          Forgot Password
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Enter your email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-[#e8f0fe] font-displays focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#745535] to-[#8b6b4f] text-white py-2 rounded-lg font-semibold hover:from-[#5e422b] hover:to-[#745535] transition"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
