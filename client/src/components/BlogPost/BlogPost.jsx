import React, { useState } from 'react';
import './BlogPost.css';
import { Link } from 'react-router-dom'; // Import Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faNewspaper, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const BlogPost = () => {
    const [title, setTitle] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    return (
        <div className='dashcontainer'>
            <div className='content-container'>
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
                <div className='rightsidecontainer'>
                    <h2 className='canp'>Create a new post</h2>
                    <h3>Title</h3>
                    <textarea 
                        className="title-textarea" 
                        placeholder="Enter title here..." 
                        value={title} 
                        onChange={handleTitleChange} 
                    />
                    <div>
                        {/* {title && <h2>{title}</h2>} PREVIEW FEATURE*/ }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;
