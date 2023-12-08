const axios = require('axios');

// Function to fetch user repositories from the GitHub API
const getUserRepos = async (username) => {
    try {
      // Make a GET request to the GitHub API to retrieve user repositories
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      return response.data; // Return the fetched user repositories
    } catch (error) {
      // Handle errors by throwing the HTTP status code
      throw error.response.status;
    }
  };
  
  // Function to fetch commits for a specific repository from the GitHub API
  const getCommitsForRepo = async (username, repoName) => {
    try {
      // Make a GET request to the GitHub API to retrieve commits for a specific repository
      const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/commits`);
      return response.data.slice(0, 5); // Return the first 5 commits for the repository
    } catch (error) {
      // Handle errors by throwing the HTTP status code
      throw error.response.status;
    }
  };

module.exports = {
  getUserRepos,
  getCommitsForRepo,
};
