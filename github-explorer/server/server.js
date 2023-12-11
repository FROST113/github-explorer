const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const repoRoutes = require('./routes/repoRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(express.json()); 
app.use(helmet()); 
app.use(cors()); 

// Define routes for user and repository data
app.use('/api/github/user', userRoutes);
app.use('/api/github/repos', repoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
