import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom'; // Import Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faNewspaper, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import BlogPost from '../BlogPost/BlogPost.jsx';

const Dashboard = () => {
    return (
        <div className='dashcontainer'>
            <div className='leftsidebar'>
                <div className="sidebar-content">
                    <h1>Dashboard</h1>
                    <div className="separator-container">
                        <hr className="separator" />
                    </div>
                    <Link to="/profile" className="sidebar-link"><FontAwesomeIcon icon={faUser} className="icon" />Profile</Link><br></br>
                    <Link to="/blogpost" className="sidebar-link"><FontAwesomeIcon icon={faNewspaper} className="icon" />Blog</Link><br></br>
                    <Link to="/settings" className="sidebar-link"><FontAwesomeIcon icon={faGear} className="icon" />Settings</Link><br></br>
                </div>
                <div className="logout-container">
                    <Link to="/logout" className="logoutlink">Log out<FontAwesomeIcon icon={faArrowRightFromBracket} className="icon" /></Link>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
