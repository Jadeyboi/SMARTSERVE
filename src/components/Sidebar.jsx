import { useNavigate } from "react-router-dom";
import StatCards from "../components/StatCards";
import RecentReservations from "../components/RecentReservations";
import { Menu, Home, MessageSquare, ClipboardList } from "lucide-react";
import LogoutButton from "../components/LogoutButton";

const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  console.log("Sidebar rendered");

  return (
    <div className="min-h-screen flex text-gray-800 bg-gradient-to-br from-blue-50 via-white to-gray-100 relative overflow-hidden">
      {/* Watermark Logo */}
      <img
        src="/smartserve-logo.png"
        alt="SmartServe Watermark"
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0 w-[40vw] max-w-xl select-none"
        aria-hidden="true"
      />
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 shadow-sm sticky top-0 h-screen p-6 z-10">
        <div className="flex flex-col items-center mb-10">
          <img
            src="/smartserve-logo.png"
            alt="SmartServe Logo"
            className="h-20 w-[30rem] object-contain bg-transparent"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/480x80?text=Logo";
            }}
          />
        </div>

        <h2 className="text-1xl font-bold text-blue-600 mb-10">
          Name of Restaurant
        </h2>
        <nav className="space-y-4">
          <SidebarItem
            icon={<Home size={18} />}
            label="Dashboard"
            active
            onclick={() => navigate("/")}
          />
          <SidebarItem
            icon={<ClipboardList size={18} />}
            label="Reservations"
            onclick={() => navigate("/reservations")}
          />
          <SidebarItem
            icon={<MessageSquare size={18} />}
            label="Messages"
            onclick={() => navigate("/messages")}
          />
          <SidebarItem
            icon={<Menu size={18} />}
            label="Menu"
            onclick={() => navigate("/menu")}
          />
        </nav>
        <div className="mt-8 flex justify-center">
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, label, active, onclick }) => (
  <div
    onClick={onclick}
    className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
      active ? "bg-blue-100 text-blue-600 font-semibold" : "hover:bg-gray-100"
    }`}
  >
    {icon}
    <span>{label}</span>
  </div>
);

export default Sidebar;
