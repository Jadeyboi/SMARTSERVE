import React, { useState } from 'react';

const BranchManager = () => {
    const [branches, setBranches] = useState([
        { id: 1, name: 'Main Branch', location: 'Downtown' },
        { id: 2, name: 'East Branch', location: 'Eastside' },
    ]);
    const [newBranch, setNewBranch] = useState({ name: '', location: '' });

    const handleChange = (e) => {
        setNewBranch({ ...newBranch, [e.target.name]: e.target.value });
    };

    const handleAddBranch = (e) => {
        e.preventDefault();
        if (!newBranch.name || !newBranch.location) return;
        setBranches([
            ...branches,
            { id: Date.now(), name: newBranch.name, location: newBranch.location },
        ]);
        setNewBranch({ name: '', location: '' });
    };

    const handleDelete = (id) => {
        setBranches(branches.filter(branch => branch.id !== id));
    };

    return (
        <div>
            <h2>Branch Manager</h2>
            <form onSubmit={handleAddBranch}>
                <input
                    type="text"
                    name="name"
                    placeholder="Branch Name"
                    value={newBranch.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={newBranch.location}
                    onChange={handleChange}
                />
                <button type="submit">Add Branch</button>
            </form>
            <ul>
                {branches.map(branch => (
                    <li key={branch.id}>
                        <strong>{branch.name}</strong> - {branch.location}
                        <button onClick={() => handleDelete(branch.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BranchManager;