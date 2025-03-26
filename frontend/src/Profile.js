import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('access_token');
      try {
        const response = await axios.get('http://localhost:8000/api/profile/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Profile fetch failed:', error.response.data);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="container"> 
      <h2>Profile</h2>
      {profile ? (
        <div className="profile"> 
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Date Joined:</strong> {profile.date_joined}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;