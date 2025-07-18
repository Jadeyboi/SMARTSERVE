import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (
      !isAuthenticated &&
      location.pathname !== "/login" &&
      location.pathname !== "/register"
    ) {
      navigate("/login");
    }
  }, [location, navigate]);

  return (
    <Sidebar>
      <div className="min-h-screen flex text-gray-800 bg-gradient-to-br from-blue-50 via-white to-gray-100">
        {/* Sidebar (now handled by Sidebar component) */}
        {/* Main Content */}
        <main className="w-full flex-1 p-6 md:p-10">
          <Outlet /> {/* where the routed page will load */}
        </main>
      </div>
    </Sidebar>
  );
};

export default Layout;
