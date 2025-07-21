import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
                <label style={{ marginBottom: '10px' }}>
                    Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        style={{ margin: '5px 0', padding: '8px' }} 
                    />
                </label>
                <label style={{ marginBottom: '10px' }}>
                    Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        style={{ margin: '5px 0', padding: '8px' }} 
                    />
                </label>
                <label style={{ marginBottom: '10px' }}>
                    Message:
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                        style={{ margin: '5px 0', padding: '8px' }} 
                    />
                </label>
                <button type="submit" style={{ padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;