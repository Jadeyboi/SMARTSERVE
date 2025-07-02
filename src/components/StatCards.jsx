import React, { useEffect, useState } from "react";

const StatCards = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Error fetching stats:", err));
  }, []);

  if (!stats) {
    return <p>Loading stats...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <StatCard title="Total Reservations" value={stats.totalReservations} />
      <StatCard title="Available Tables" value={stats.availableTables} />
      <StatCard title="Messages" value={stats.messages} />
      <StatCard title="Menu Items" value={stats.menuItems} />
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h3 className="text-sm text-gray-500">{title}</h3>
    <p className="text-2xl font-bold text-blue-600 mt-1">{value}</p>
  </div>
);

export default StatCards;
