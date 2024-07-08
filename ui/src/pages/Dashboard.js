import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove user data
        navigate('/login'); // Redirect to login page
    };

    const username = localStorage.getItem('user');

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
