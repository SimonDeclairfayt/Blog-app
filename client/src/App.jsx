import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import BlogPost from './components/BlogPost/BlogPost';
import Settings from './components/Settings/Settings'; // Import the Settings component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blogpost" element={<BlogPost />} />
        <Route path="/settings" element={<Settings />} /> {/* Route for the Settings component */}
      </Routes>
    </Router>
  );
}

export default App;
