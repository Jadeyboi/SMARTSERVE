import StatCards from "../components/StatCards";
import RecentReservations from "../components/RecentReservations";

const Dashboard = ({ active, icon, label }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Dashboard Overview</h1>

      {/* Stat Cards */}
      <section>
        <StatCards />
      </section>

      {/* Recent Reservations */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Recent Reservations</h2>
        <RecentReservations />
      </section>

      <li
        className={`w-full px-4 py-2 rounded cursor-pointer flex items-center gap-2 transition ${
          active ? "bg-blue-100 text-blue-700 font-bold" : "hover:bg-gray-100"
        }`}
        onClick={onclick}
      >
        {icon}
        <span>{label}</span>
      </li>
    </div>
  );
};

export default Dashboard;
