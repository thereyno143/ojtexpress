// Import required modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const OJTNamesRouter = require('./routes/ojt_names.routes'); // Import the users route
const UsersRouter = require('./routes/users.routes'); // Import the users route

// Create an Express application
const app = express();
const port = 5000;

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use('/ojtnames', OJTNamesRouter);
app.use('/users', UsersRouter);

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to my Express janiel!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
