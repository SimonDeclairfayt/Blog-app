import React, { useState } from 'react';
import './BlogPost.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faNewspaper, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import axios from 'axios';

const BlogPost = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');

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
    if (!title || !tags || !content || !file) {
      alert('All fields are required!');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('tags', tags);
    formData.append('content', content);
    formData.append('picture-url', file);

    try {
      const response = await axios.post('https://sport-blog-app-f99d3e95c99d.herokuapp.com/blog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Check if the request was successful (status code 200 or 201)
      if (response.status === 200 || response.status === 201) {
        console.log('Blog post created successfully:', response.data);
        alert('Blog post created successfully!');
        // Reset form fields
        setTitle('');
        setTags('');
        setContent('');
        setFile(null);
      } else {
        console.error('Failed to create blog post. Status:', response.status);
        alert('Failed to create blog post. Please try again.');
      }
    } catch (error) {
      console.error('There was an error creating the blog post!', error);
      alert('Failed to create blog post. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='dashcontainer'>
        <div className='content-container'>
          <div className='leftsidebar'>
            <div className="sidebar-content">
              <h1>Dashboard</h1>
              <Link to="/profile" className="sidebar-link">
                <FontAwesomeIcon icon={faUser} className="icon" />Profile
              </Link><br />
              <Link to="/blogpost" className="sidebar-link">
                <FontAwesomeIcon icon={faNewspaper} className="icon" />Blog
              </Link><br />
            </div>
            <div className="logout-container">
              <Link to="/logout" className="logoutlink">
                Log out<FontAwesomeIcon icon={faArrowRightFromBracket} className="icon" />
              </Link>
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
            <h3 className='cyi'>Tags (comma separated):</h3>
            <input
              className="tags-input"
              placeholder="Enter tags here..."
              value={tags}
              onChange={handleTagsChange}
            />
            <h3 className='cyi'>Choose your image</h3>
            <input type="file" onChange={handleFileChange} />
            <h3 className='tt'>Write your description:</h3>
            <div id="editor">
              <FroalaEditorComponent
                tag='textarea'
                model={content}
                onModelChange={handleContentChange}
              />
            </div>
            <button type='submit' className='syp'>Submit your post!</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BlogPost;
