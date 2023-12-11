const express = require('express');
const { getUserRepos, getCommitsForRepo } = require('../controllers/repoController');

const router = express.Router();

// Define a route for fetching user repositories with commit information
router.get('/:username', async (req, res) => {
    try {
      const username = req.params.username;
      
      // Fetch user repositories
      const repos = await getUserRepos(username);
  
      // Fetch commits for each repository
      const reposWithCommits = await Promise.all(
        repos.map(async (repo) => {
          const commits = await getCommitsForRepo(username, repo.name); // Fetch commits for a specific repository
          return { ...repo, commits };
        })
      );
  
      res.json(reposWithCommits); // Send the repositories with commit information as a JSON response
    } catch (error) {
      console.error('Error from GitHub API:', error);
      res.status(error).json({ error: 'Error from GitHub API' }); // Handle errors by sending an error response
    }
  });

module.exports = router;
