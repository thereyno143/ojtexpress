import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {

        try {
            const response = await axios.post('http://localhost:5000/users/login', 
                { username, password }, 
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
            // console.log(response.data?.data);

            if (response.data?.data) {
                // Assuming you get a token or some kind of authentication indication
                localStorage.setItem('user', response.data?.data[0]?.username);
                navigate('/dashboard');
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            console.error(error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h2>Login Page</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
