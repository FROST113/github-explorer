const axios = require('axios');

// Function to fetch user data from the GitHub API
const getUserData = async (username) => {
    try {
      // Make a GET request to the GitHub API to retrieve user data
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data; // Return the fetched user data
    } catch (error) {
      // Handle errors by throwing the HTTP status code
      throw error.response.status;
    }
  };

module.exports = {
  getUserData,
};
