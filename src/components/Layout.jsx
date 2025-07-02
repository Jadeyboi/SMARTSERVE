import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
