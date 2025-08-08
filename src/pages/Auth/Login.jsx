// src/pages/Auth/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Massk from "../../assets/Massk.png";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      // Yahan aap real auth API call karenge
      // Successful login par:
      onLogin(); // Parent component ko bata de ki login ho gaya
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img
            src={Massk}
            alt="Logo"
            className="text-cyan-300 rounded-2xl bg-[#745535] w-48 h-14 text-center"
          />
        </div>
        <p className="text-[24px] font-semibold text-gray-500 text-center mb-6">
          Login to your account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
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

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none font-displays focus:ring-2 bg-[#e8f0fe] focus:ring-blue-400 pr-10"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#745535] to-[#8b6b4f] text-white py-2 rounded-lg font-semibold hover:from-[#5e422b] hover:to-[#745535] transition"
          >
            Login
          </button>

          {/* Forgot Password link */}
          <div className="text-center mt-2">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:underline cursor-pointer"
            >
              Forgot Password?
            </Link>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
