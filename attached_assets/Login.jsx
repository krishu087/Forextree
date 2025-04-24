import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);  // Error message state

  const handleLogin = async (e) => {
    e.preventDefault();  // Prevent default form submission behavior
    const data = { email, password };

    try {
      const res = await axios.post("http://localhost:3000/api/v1/user/login", data);

      if (res.data.success) {
        alert("Login successful!");
        localStorage.setItem("token", res.data.token || "dummy_token");
        navigation("/"); // Redirect to home page
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (e) {
      setError("Something went wrong. Please try again later.");
      console.log("Error: ", e);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1625] bg-gradient-to-br from-[#2d1f3f] via-[#1a1625] to-[#2d1f3f] flex items-center justify-center p-6">
      <div className="w-full max-w-md p-8 bg-[#2d1f3f]/50 rounded-lg border border-white/10 backdrop-blur-sm">
        <h2 className="text-2xl font-semibold text-white mb-6">Welcome Back</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1.5">Email</label>
            <div className="relative">
              <input
                type="email"
                className="w-full bg-[#1a1625] border border-white/10 rounded-lg px-4 py-2.5 pl-10 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Mail className="absolute left-3 top-2.5 text-white/40" size={18} />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full bg-[#1a1625] border border-white/10 rounded-lg px-4 py-2.5 pl-10 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Lock className="absolute left-3 top-2.5 text-white/40" size={18} />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-white/40 hover:text-white/60"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-white/10 bg-[#1a1625] text-purple-500 focus:ring-purple-500/50"
              />
              <label className="ml-2 text-white/80">Remember me</label>
            </div>
            <a href="#" className="text-purple-400 hover:text-purple-300">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          >
            Log in
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-white/60">
          Don't have an account?{" "}
          <button
            onClick={() => navigation("/sign-up")}
            className="text-purple-400 hover:text-purple-300"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
