import React, { useState } from 'react';

const initialMenu = [
    { id: 1, name: 'Margherita Pizza', price: 10.99 },
    { id: 2, name: 'Caesar Salad', price: 7.99 },
];

export default function MenuManager() {
    const [menu, setMenu] = useState(initialMenu);
    const [newItem, setNewItem] = useState({ name: '', price: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (!newItem.name || !newItem.price) return;
        setMenu([
            ...menu,
            {
                id: Date.now(),
                name: newItem.name,
                price: parseFloat(newItem.price),
            },
        ]);
        setNewItem({ name: '', price: '' });
    };

    const handleDelete = (id) => {
        setMenu(menu.filter((item) => item.id !== id));
    };

    return (
        <div>
            <h2>Menu Manager</h2>
            <form onSubmit={handleAdd} style={{ marginBottom: '1rem' }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Item name"
                    value={newItem.name}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={newItem.price}
                    onChange={handleChange}
                    step="0.01"
                    min="0"
                />
                <button type="submit">Add Item</button>
            </form>
            <ul>
                {menu.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price.toFixed(2)}{' '}
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}