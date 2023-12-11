const axios = require('axios');

const getUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer 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`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.status;
  }
};

module.exports = {
  getUserData,
};
