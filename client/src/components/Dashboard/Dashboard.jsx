import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Dashboard = () => {
    return (
        <div className='dashcontainer'>
            <div className='leftsidebar'>
                <h1>Dashboard</h1>
                <Link to="/blog" className="sidebar-link">Blog</Link><br></br>
                <Link to="/support" className="sidebar-link">Support</Link><br></br>
                <Link to="/logout" className="logoutlink">Log out</Link><br></br>
            </div>
        </div>
    );
}

export default Dashboard;
