import React from 'react';

const UserMessages = ({ messages, currentUser }) => {
    if (!messages || messages.length === 0) {
        return <div className="user-messages__empty">No messages yet.</div>;
    }

    return (
        <div className="user-messages">
            {messages.map((msg, idx) => (
                <div
                    key={idx}
                    className={
                        msg.sender === currentUser
                            ? 'user-messages__message user-messages__message--own'
                            : 'user-messages__message'
                    }
                >
                    <div className="user-messages__sender">{msg.sender}</div>
                    <div className="user-messages__text">{msg.text}</div>
                    <div className="user-messages__timestamp">{msg.timestamp}</div>
                </div>
            ))}
        </div>
    );
};

export default UserMessages;