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
import axios from "axios";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditorComponent from "react-froala-wysiwyg";

const BlogPost = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };

  const handleContentChange = (model) => {
    setContent(model);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !tags || !description || !file) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("tags", tags);
    formData.append("content", description);
    formData.append("picture_url", file);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post("/api/blog", formData, {
        headers: {
          Authorization: `token ${token}`, // Add the token to the request headers
        },
      });

      console.log("Blog post created successfully:", response.data);
      // Reset form fields
      setTitle("");
      setTags("");
      setDescription("");
      setFile(null);
    } catch (error) {
      console.error("There was an error creating the blog post!", error);
    }
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
          <h3 className="cyi">Tags (comma separated):</h3>
          <input
            className="tags-input"
            placeholder="Enter tags here..."
            value={tags}
            onChange={handleTagsChange}
          />
          <h3 className="cyi">Choose your image</h3>
          <input type="file" onChange={handleFileChange} />
          <h3 className="tt">Write your description:</h3>
          <div id="editor">
            <FroalaEditorComponent
              tag="textarea"
              model={description}
              onModelChange={handleDescriptionChange}
            />
            <button type="submit" onClick={handleSubmit} className="syp">
              Submit your post!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
