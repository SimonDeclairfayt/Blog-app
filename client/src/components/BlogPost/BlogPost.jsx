import React, { useState } from 'react';
import './BlogPost.css';
import { Link } from 'react-router-dom'; // Import Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faNewspaper, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import ReactDOM from 'react-dom/client';

const BlogPost = () => {
    const [file, setFile] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    };

    return (
        <div className='dashcontainer'>
            <div className='content-container'>
                <div className='leftsidebar'>
                    <div className="sidebar-content">
                        <h1>Dashboard</h1>
                        
                        <Link to="/profile" className="sidebar-link"><FontAwesomeIcon icon={faUser} className="icon" />Profile</Link><br></br>
                        <Link to="/blogpost" className="sidebar-link"><FontAwesomeIcon icon={faNewspaper} className="icon" />Blog</Link><br></br>

                    </div>
                    <div className="logout-container">
                        <Link to="/logout" className="logoutlink">Log out<FontAwesomeIcon icon={faArrowRightFromBracket} className="icon" /></Link>
                    </div>
                </div>
                <div className='rightsidecontainer'>
                    <h2 className='canp'>Create a new post</h2>
                    <h3 className='tt'>Title:</h3>
                    <input
                        className="title-textarea" 
                        placeholder="Enter title here..." 
                        value={title} 
                        onChange={handleTitleChange} 
                    />
                    <h3 className='cyi'>Choose your image</h3>
                    <input type="file" onChange={handleChange} />
                    {/* <button onClick={handleImageUpload}>Upload Image</button> */}
                    <h3 className='tt'>Write your description:</h3>
                    <div id="editor">
                        <FroalaEditorComponent tag='textarea'/>
                    </div>
                    {/* <div className='preview'>
                        <h3 className='prv'>Preview : </h3>
                         {title && <h2 className='prvtitle'>{title}</h2 >} 
                         <img src={file} className="preview-image" />
                         {description &&<p className='pdesc'>{description}</p>} 
                    </div> */}
                    <button type='submit' className='syp'>Submit your post !</button>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;
