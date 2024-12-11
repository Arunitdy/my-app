// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Chef from './components/Chef';
import Count from './components/Count';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/count" element={<Count />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;