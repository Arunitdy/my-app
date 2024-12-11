
// components/Profile.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, password } = location.state || {};

  return (
    <div className="profile">
      <img
        alt="profile img"
        src="https://via.placeholder.com/150"
        className="profile-img"
      />
      <h3>Email: {email}</h3>
      <p>Password: {password}</p>
      <button onClick={() => navigate('/chef')}>Go to Chef</button>
      <button onClick={() => navigate('/count')}>Go to Count</button>
    </div>
  );
};

export default Profile;