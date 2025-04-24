import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Navbar from "./component/Navbar";
import PropFirmComparison from "./component/PropFirmComparison";
import ForextParenet from "./component/ForextParenet";
import About from "./component/About";
import Login from "./component/Login";
import Signup from "./component/Signup";
import FirmsTable from "./component/FIrmTable";
import Contact from './component/Contact'
import PipsCalculator from "./component/PipsCalculator";

// ✅ ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("token");
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

// ✅ Main layout wrapper to handle 90-second timeout check
const AppLayout = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("token");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoggedIn) {
        alert("You must log in to continue using the site.");
        window.location.href = "/sign-up";
      }
    }, 90000000); // 90 seconds

    return () => clearTimeout(timer);
  }, [isLoggedIn]);

  return <>{children}</>;
};

// ✅ Routes setup
const route = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/sign-up",
    element: <Signup />
  },
  {
    path: "/",
    element: (
      <AppLayout>
        <ForextParenet />
      </AppLayout>
    )
  },
  {
    path: "/about",
    element: (
      <AppLayout>
        <About />
      </AppLayout>
    )
  },
 
  {
    path: "/contact",
    element: (
        <Contact />
    )
  },
  {
    path: "/tools",
    element: (
        <PipsCalculator />
    )
  },
  {
    path: "/PropFirmComparison",
    element: (
      <AppLayout>
        <PropFirmComparison />
      </AppLayout>
    )
  }
]);

// ✅ App Component
function App() {
  return <RouterProvider router={route} />;
}

export default App;
