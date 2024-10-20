/* eslint-disable no-unused-vars */
// Profile.jsx
import React from 'react';
import Adrian from '../Assets/Adrian.png';
import '../styles/Profile.css'; // Import the CSS file for Profile component styles

function Profile() {
  return (
    <div className="profile"> {/* Main container for the profile */}
      <div className="profile-text"> {/* Text container */}
        <h1 className="profile-title">Full Stack</h1>
        <h2 className="profile-role">Developer</h2>
        <h4 className="profile-name">Adrian Dave A. Escudero</h4>
      </div>
      <img src={Adrian} alt="Adrian Escudero" className="profile-image" /> {/* Styled image */}
    </div>
  );
}

export default Profile;
