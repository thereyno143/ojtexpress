import React from 'react';
import { BrowserRouter  , Routes, Route, Navigate } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import MainContainer from './containers/MainContainer';

function App() {
  const username = localStorage.getItem('user');
    return (
      username ? <MainContainer/> :
      <LoginContainer />
    );
}

export default App;
