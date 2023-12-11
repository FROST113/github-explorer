const express = require('express');
const { getUserData } = require('../controllers/userController');

const router = express.Router();

// Define a route for fetching user data based on the provided username
router.get('/:username', async (req, res) => {
    try {
      const userData = await getUserData(req.params.username); // Call the getUserData function to fetch user data
      res.json(userData); // Send the fetched user data as a JSON response
    } catch (error) {
      console.error('Error from GitHub API:', error);
      res.status(error).json({ error: 'Error from GitHub API' }); // Handle errors by sending an error response
    }
  });

module.exports = router;
