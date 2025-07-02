import StatCards from "../components/StatCards";
import RecentReservations from "../components/RecentReservations";

const Dashboard = () => {
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
    </div>
  );
};

export default Dashboard;
