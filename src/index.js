const express = require('express');
const setRoutes = require('./routes/routes');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Register routes
setRoutes(app);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});