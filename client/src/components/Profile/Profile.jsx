import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faNewspaper, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  // Example profile information
  const profile = {
    username: 'Argjent Latifi',
    email: 'argjent@becode.org',
    profilePicture: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
  };

  return (
    <div className='dashcontainer'>
      <div className='content-container'>
        <div className='leftsidebar'>
          <div className="sidebar-content">
            <h1>Dashboard</h1>
            <Link to="/profile" className="sidebar-link"><FontAwesomeIcon icon={faUser} className="icon" />Profile</Link><br />
            <Link to="/blogpost" className="sidebar-link"><FontAwesomeIcon icon={faNewspaper} className="icon" />Blog</Link><br />
          </div>
          <div className="logout-container">
            <Link to="/logout" className="logoutlink">Log out<FontAwesomeIcon icon={faArrowRightFromBracket} className="icon" /></Link>
          </div>
        </div>
        <div className='rightsidecontainer'>
          <div className="profile-container">
            <h2 className="profile-heading">Profile</h2>
            <div className="profile-info">
              <div className="profile-details">
                <p className='prousername'><strong>Username:</strong> {profile.username}</p>
                <p><strong>Email:</strong> {profile.email}</p>
              </div>
              <div className="profile-picture">
                <img src={profile.profilePicture} />
              </div>
            </div>
            {/* Add options to edit profile, change password, etc. */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
