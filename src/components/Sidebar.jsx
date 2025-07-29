import { useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  Home,
  MessageSquare,
  ClipboardList,
  UserPlus,
  Utensils,
  User,
  Bot, // <-- Add this import from lucide-react for AI
} from "lucide-react";
import LogoutButton from "../components/LogoutButton";

const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to check if a route is active
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="min-h-screen flex"
      style={{
        color: "#D63743",
        background: "linear-gradient(135deg, #fff 0%, #D63743 100%)",
      }}
    >
      {/* Watermark Logo */}
      <img
        src="/smartserve-logo.png"
        alt="SmartServe Watermark"
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0 w-[40vw] max-w-xl select-none"
        aria-hidden="true"
      />
      {/* Sidebar */}
      <aside
        className="w-64 border-r shadow-sm sticky top-0 h-screen flex flex-col p-6 z-10"
        style={{
          background: "#fff",
          borderColor: "#D63743",
        }}
      >
        <div className="flex flex-col items-center mb-10">
          <img
            src="/smartserve-logo.png"
            alt="SmartServe Logo"
            className="h-20 w-32 object-contain bg-transparent"
          />
        </div>
        <h2
          className="text-lg font-bold mb-8 text-center"
          style={{ color: "#D63743" }}
        >
          SmartServe
        </h2>
        <nav className="flex flex-col gap-4 w-full items-start">
          <SidebarItem
            icon={<Home size={18} />}
            label="Dashboard"
            active={isActive("/dashboard") || location.pathname === "/"}
            onclick={() => navigate("/dashboard")}
          />
          <SidebarItem
            icon={<ClipboardList size={18} />}
            label="Reservations"
            active={isActive("/reservations")}
            onclick={() => navigate("/reservations")}
          />
          <SidebarItem
            icon={<MessageSquare size={18} />}
            label="Messages"
            active={isActive("/messages")}
            onclick={() => navigate("/messages")}
          />
          <SidebarItem
            icon={<Utensils size={18} />} // <-- Use Utensils icon for Menu
            label="Menu"
            active={isActive("/menu")}
            onclick={() => navigate("/menu")}
          />
          <SidebarItem
            icon={<User size={18} />} // <-- Use User icon for Profile
            label="Profile"
            active={isActive("/profile")}
            onclick={() => navigate("/profile")}
          />
          <SidebarItem
            icon={<Bot size={18} />} // <-- Use Bot icon for AI
            label="AI"
            active={isActive("/ai")}
            onclick={() => navigate("/ai")}
          />
          <SidebarItem
            icon={<UserPlus size={18} />}
            label="Add Account"
            active={isActive("/create-account")}
            onclick={() => navigate("/create-account")}
          />
        </nav>
        <div className="mt-auto mb-4 w-full flex justify-center">
          <LogoutButton />
        </div>
      </aside>
      {/* Main Content */}
      <main
        className="w-full flex-1 p-0 md:p-0"
        style={{
          background:
            "linear-gradient(135deg, #fff 0%, #fff5f6 80%, #D63743 100%)",
          minHeight: "100vh",
        }}
      >
        <div
          className="bg-white rounded-none shadow-none w-full h-full max-w-full mx-0"
          style={{
            border: "none",
            color: "#D63743",
            marginTop: 0,
            marginBottom: 0,
            minHeight: "100vh",
            boxShadow: "none",
            borderRadius: 0,
            padding: 0,
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, label, active, onclick }) => (
  <div
    onClick={onclick}
    className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
      active
        ? "bg-[#D63743] text-white font-semibold"
        : "hover:bg-[#fff5f6] hover:text-[#D63743]"
    }`}
    style={active ? { background: "#D63743", color: "#fff" } : {}}
  >
    {icon}
    <span>{label}</span>
  </div>
);

// PageCard Component
const PageCard = ({ children }) => (
  <div
    className="bg-white rounded-lg shadow p-8 max-w-4xl mx-auto"
    style={{
      border: "1px solid #D63743",
      color: "#D63743",
      marginTop: "32px",
      marginBottom: "32px",
    }}
  >
    {/* Your page content here */}
  </div>
);

export default Sidebar;
