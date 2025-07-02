import React, { useState, useEffect } from "react";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [formData, setFormData] = useState({ name: "", price: "" });

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = () => {
    fetch("http://localhost:5000/api/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price) {
      alert("Please fill out both fields.");
      return;
    }

    fetch("http://localhost:5000/api/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setFormData({ name: "", price: "" });
        fetchMenu();
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/menu/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => fetchMenu());
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-2xl font-semibold">Manage Menu</h1>

      {/* Add Form */}
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="name"
          placeholder="Menu Item Name"
          value={formData.name}
          onChange={handleChange}
          className="border px-4 py-2 rounded-md w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border px-4 py-2 rounded-md w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          ➕ Add Item
        </button>
      </form>

      {/* Menu List */}
      <table className="w-full text-left border-collapse mt-6">
        <thead>
          <tr className="text-sm text-gray-600 border-b">
            <th className="py-2">#</th>
            <th className="py-2">Name</th>
            <th className="py-2">Price</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
            <tr key={item.id} className="border-t text-sm">
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{item.name}</td>
              <td className="py-2">₱{item.price}</td>
              <td className="py-2">
                <button
                  onClick={() => handleDelete(item.id)}
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
  );
};

export default MenuPage;
