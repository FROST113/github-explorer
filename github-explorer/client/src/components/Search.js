// Search.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Search.css';

const Search = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); 

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/github/user/${username}`);
      setUser(response.data);
      navigate(`/user/${username}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-container">
      <div className="search-card">
        <h2>Github Explorer</h2>
        <p>Explore GitHub users and their repositories</p>
        <div className="search-input">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
          />
        </div>
        <div className="search-button">
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
