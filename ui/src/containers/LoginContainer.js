import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import PageNotFound from '../pages/PageNotFound';

const LoginContainer = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<PageNotFound></PageNotFound>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default LoginContainer;
