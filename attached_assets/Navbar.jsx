import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const isLoggedIn = !!localStorage.getItem("token");

  const navItems = [
    { label: "Compare Firms", path: "/PropFirmComparison" },
    { label: "Inventory", path: "#" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    
    ...(isLoggedIn ? [] : [{ label: "Signup", path: "/sign-up" }]),
  ];

  const handleNav = (path) => {
    if (path !== "#") navigate(path);
    setMenuOpen(false);
    setUserMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 text-white top-0 z-50 shadow-lg rounded-full p-2 mx-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between rounded-full bg-black bg-opacity-90">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="bg-black p-2 rounded-full shadow-md transform hover:scale-110 transition-transform duration-300">
            <img
              src="/src/images/img_01.png"
              alt="Logo"
              className="h-7 w-7 object-contain"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            ForexTree
          </span>
        </div>

        <div className="hidden  md:flex items-center gap-8">
          {navItems.map(({ label, path }) =>
            label === "Inventory" ? (
              <div className=" mb-2 relative group" key={label}>
                <button className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md px-2 py-1">
                  {label}
                </button>
                <div className="mt-2 absolute top-full left-0 hidden group-hover:flex flex-col bg-white/80 text-gray-800 rounded-md shadow-lg w-35 z-50">
                  <button
                    onClick={() => navigate("/tools")}
                    className="px-4 py-2 hover:bg-white/90 text-left"
                  >
                    Tools
                  </button>
                  <button
                    onClick={() => handleNav("/courses")}
                    className="px-4 py-2 hover:bg-white/90  text-left"
                  >
                    Courses
                  </button>
                </div>
              </div>
            ) : (
              <button
                key={label}
                onClick={() => handleNav(path)}
                className="relative text-lg font-medium hover:text-yellow-300 transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md px-2 py-1"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            )
          )}
        </div>

        {isLoggedIn && (
          <div className="relative hidden md:flex">
            <button
              className="flex items-center justify-center p-2 rounded-full hover:bg-yellow-500/20 transition"
              onClick={() => setUserMenuOpen((prev) => !prev)}
            >
              <User className="text-white" size={24} />
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 mt-12 bg-white text-gray-800 shadow-xl rounded-xl w-48 py-2 ring-1 ring-black/10 z-50 animate-fadeIn transform transition duration-300 ease-out origin-top-right">
                <button
                  onClick={() => handleNav("/dashboard")}
                  className="block w-full text-left px-5 py-3 hover:bg-yellow-100 hover:text-yellow-800 transition font-medium"
                >
                  Dashboard
                </button>
                <div className="border-t border-gray-200"></div>
                <button
                  onClick={() => handleNav("/profile")}
                  className="block w-full text-left px-5 py-3 hover:bg-yellow-100 hover:text-yellow-800 transition font-medium"
                >
                  Profile
                </button>
                <div className="border-t border-gray-200"></div>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    handleNav("/");
                  }}
                  className="block w-full text-left px-5 py-3 text-red-600 hover:bg-red-100 hover:text-red-800 transition font-medium"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        <button
          className="md:hidden focus:outline-none p-2 rounded-full hover:bg-yellow-500/20 transition-colors duration-200"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden bg-white text-gray-800 shadow-xl border-t border-gray-200 transform transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } rounded-b-3xl`}
      >
        <div className="flex flex-col gap-4 px-6 py-8">
          {navItems.map(({ label, path }) =>
            label === "Inventory" ? (
              <div key={label} className=" flex flex-col">
                <button className="text-lg font-semibold text-gray-700 hover:text-yellow-500 transition-colors duration-200 py-2 text-left">
                  {label}
                </button>
                <div className="ml-2 flex flex-col">
                  <button
                    onClick={() => handleNav("/tools")}
                    className="text-base text-gray-600 hover:text-yellow-500 transition py-1 text-left"
                  >
                    Tools
                  </button>
                  <button
                    onClick={() => handleNav("/courses")}
                    className="text-base text-gray-600 hover:text-yellow-500 transition py-1 text-left"
                  >
                    Courses
                  </button>
                </div>
              </div>
            ) : (
              <button
                key={label}
                onClick={() => handleNav(path)}
                className="text-lg font-semibold text-gray-700 hover:text-yellow-500 transition-colors duration-200 py-2 rounded-md text-left"
              >
                {label}
              </button>
            )
          )}

          {isLoggedIn && (
            <>
              <button
                onClick={() => handleNav("/dashboard")}
                className="text-lg font-semibold text-gray-700 hover:text-yellow-500 transition-colors duration-200 py-2 text-left"
              >
                Dashboard
              </button>
              <button
                onClick={() => handleNav("/profile")}
                className="text-lg font-semibold text-gray-700 hover:text-yellow-500 transition-colors duration-200 py-2 text-left"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  handleNav("/");
                }}
                className="text-lg font-semibold text-red-500 hover:text-red-700 transition-colors duration-200 py-2 text-left"
              >
                Logout
              </button>
            </>
          )}

          {!isLoggedIn && (
            <button
              onClick={() => handleNav("/sign-up")}
              className="mt-4 px-4 py-2 bg-transparent border border-gray-700 text-gray-700 rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-200"
            >
              Signup
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
