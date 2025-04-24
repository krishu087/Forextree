import React from "react";
import { useNavigate } from "react-router-dom";

function Firstview() {
  const navigate = useNavigate();

  const handleCompareClick = () => {
    navigate("/PropFirmComparison");
  };

  const handleSignupClick = () => {
    navigate("/sign-up");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-900 px-6 py-20 text-white text-center">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-snug tracking-tight">
          Find Your Perfect <span className="text-yellow-500">Prop Firm</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed">
          Join thousands of traders who’ve already found their ideal match on 
          <span className="font-medium text-white"> PropFirmMatch</span>. Start comparing today and unlock exclusive discounts.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={handleCompareClick}
            className="bg-gradient-to-r from-yellow-600 to-black hover:scale-105 transform transition-all duration-300 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            🔍 Compare Now
          </button>
          <button
            onClick={handleSignupClick}
            className="border-2 border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 rounded-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-white"
          >
            ✍️ Sign Up Free
          </button>
        </div>

        <p className="text-sm text-gray-300 mt-4">
          No account required to start comparing firms.
        </p>
      </div>
    </section>
  );
}

export default Firstview;
