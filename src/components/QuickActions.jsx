import React from 'react';

const actions = [
    { label: 'New Order', icon: '📝', onClick: () => alert('New Order') },
    { label: 'View Reports', icon: '📊', onClick: () => alert('View Reports') },
    { label: 'Manage Users', icon: '👥', onClick: () => alert('Manage Users') },
];

const QuickActions = () => (
    <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
        {actions.map((action, idx) => (
            <button
                key={idx}
                onClick={action.onClick}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    background: '#fff',
                    cursor: 'pointer',
                    minWidth: '100px',
                }}
            >
                <span style={{ fontSize: '2rem' }}>{action.icon}</span>
                <span style={{ marginTop: '0.5rem' }}>{action.label}</span>
            </button>
        ))}
    </div>
);

export default QuickActions;