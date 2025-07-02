import React, { useEffect, useState } from "react";

const RecentReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [formData, setFormData] = useState({ name: "", table: "", time: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = () => {
    fetch("http://localhost:5000/api/reservations")
      .then((res) => res.json())
      .then((data) => setReservations(data));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.table || !formData.time) {
      alert("Please fill in all fields.");
      return;
    }

    const url = editingId
      ? `http://localhost:5000/api/reservations/${editingId}`
      : "http://localhost:5000/api/reservations";

    const method = editingId ? "PUT" : "POST";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setFormData({ name: "", table: "", time: "" });
        setEditingId(null);
        fetchReservations();
      })
      .catch((err) => console.error("Submit failed:", err));
  };

  const handleEdit = (res) => {
    setFormData({ name: res.name, table: res.table, time: res.time });
    setEditingId(res.id);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/reservations/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => fetchReservations());
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-8">
      <h2 className="text-xl font-semibold">
        {editingId ? "Edit Reservation" : "Add New Reservation"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <input
            type="number"
            name="table"
            placeholder="Table Number"
            value={formData.table}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <input
            type="datetime-local"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg"
          >
            {editingId ? "✏️ Update Reservation" : "➕ Add Reservation"}
          </button>
        </div>
      </form>

      <div>
        <h2 className="text-xl font-semibold mb-2">Recent Reservations</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600 text-sm border-b">
              <th className="py-2">#</th>
              <th className="py-2">Name</th>
              <th className="py-2">Table</th>
              <th className="py-2">Time</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res) => (
              <tr key={res.id} className="border-t text-sm">
                <td className="py-2">{res.id}</td>
                <td className="py-2">{res.name}</td>
                <td className="py-2">Table {res.table}</td>
                <td className="py-2">{res.time}</td>
                <td className="py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(res)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(res.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentReservations;
