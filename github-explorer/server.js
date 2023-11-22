const express = require('express');
const axios = require('axios');
const helmet = require('helmet');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());

// Routes
app.get('/api/github/user/:username', async (req, res) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${req.params.username}`);
      console.log('GitHub API Response:', response.data); // Add this line
      res.json(response.data);
    } catch (error) {
      console.error('Error from GitHub API:', error);
      res.status(error.response.status).json({ error: error.response.statusText });
    }
  });
  
  app.get('/api/github/repos/:username', async (req, res) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${req.params.username}/repos`);
      console.log('GitHub Repos Response:', response.data); // Add this line
      res.json(response.data);
    } catch (error) {
      console.error('Error from GitHub API:', error);
      res.status(error.response.status).json({ error: error.response.statusText });
    }
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
