
import React, { useState } from "react";
import "./BlogPost.css";
import { Link } from "react-router-dom"; // Import Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faNewspaper,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";


import { faUser, faNewspaper, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import ReactDOM from 'react-dom/client';


const BlogPost = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

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

  const handleImageUpload = () => {
    // Fetch the image from the provided URL and handle the upload process
    // Here you can implement the logic to fetch the image and store it in your app
    // For simplicity, let's just set the image URL for now
    // You can replace this with your actual image upload logic
    // For example:
    // setImageUrl('URL_OF_THE_UPLOADED_IMAGE');
    alert("Image uploaded successfully!");
  };


  return (
    <div className="dashcontainer">
      <div className="content-container">
        <div className="leftsidebar">
          <div className="sidebar-content">
            <h1>Dashboard</h1>
            <div className="separator-container">
              <hr className="separator" />

            </div>
            <Link to="/profile" className="sidebar-link">
              <FontAwesomeIcon icon={faUser} className="icon" />
              Profile
            </Link>
            <br></br>
            <Link to="/blogpost" className="sidebar-link">
              <FontAwesomeIcon icon={faNewspaper} className="icon" />
              Blog
            </Link>
            <br></br>
            <Link to="/settings" className="sidebar-link">
              <FontAwesomeIcon icon={faGear} className="icon" />
              Settings
            </Link>
            <br></br>
          </div>
          <div className="logout-container">
            <Link to="/logout" className="logoutlink">
              Log out
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="icon"
              />
            </Link>
          </div>
        </div>
        <div className="rightsidecontainer">
          <h2 className="canp">Create a new post</h2>
          <h3 className="tt">Title:</h3>
          <input
            className="title-textarea"
            placeholder="Enter title here..."
            value={title}
            onChange={handleTitleChange}
          />
          <h3 className="cyi">Choose your image</h3>
          <input type="file" onChange={handleChange} />
          <img src={file} />
          {/* <button onClick={handleImageUpload}>Upload Image</button> */}
          <h3 className="tt">Write your description:</h3>
          <textarea
            type="text"
            className="description-input"
            placeholder="Enter description here..."
            value={description}
            onChange={handleDescriptionChange}
          />
          <div className="preview">
            <h3 className="prv">Preview : </h3>
            {title && <h2>{title}</h2>}
            {imageUrl && (
              <img src={imageUrl} alt="Uploaded" className="uploadimage" />
            )}
            {description && <p>{description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
