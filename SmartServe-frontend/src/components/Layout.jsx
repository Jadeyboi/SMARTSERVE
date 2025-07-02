import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  ClipboardList,
  MessageSquare,
  Menu as MenuIcon,
} from "lucide-react";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: <Home size={18} />, label: "Dashboard", path: "/" },
    {
      icon: <ClipboardList size={18} />,
      label: "Reservations",
      path: "/reservations",
    },
    { icon: <MessageSquare size={18} />, label: "Messages", path: "/messages" },
    { icon: <MenuIcon size={18} />, label: "Menu", path: "/menu" },
  ];

  return (
    <div className="min-h-screen flex text-gray-800 bg-gradient-to-br from-blue-50 via-white to-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 shadow-sm sticky top-0 h-screen p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-blue-600 mb-10">SmartServe</h2>
        <nav className="space-y-4">
          {menuItems.map((item) => (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                location.pathname === item.path
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-full flex-1 p-6 md:p-10">
        <Outlet /> {/* where the routed page will load */}
      </main>
    </div>
  );
};

export default Layout;
