import RecentReservations from "../components/RecentReservations";

const ReservationsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Manage Reservations</h1>
      <RecentReservations />
    </div>
  );
};

export default ReservationsPage;
