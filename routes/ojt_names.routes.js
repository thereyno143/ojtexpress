// Import required modules
const express = require('express');
const ojtnames = express.Router();
const db = require('../database/db'); // Import the db.js file

// Define route to fetch data from MySQL
ojtnames.get('/get', (req, res) => {
  // Example query to fetch users from a 'users' table
  const sql = 'SELECT * FROM ojt_names';

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

ojtnames.post('/save', (req, res) => {
    const { name } = req.body; // Assuming you're sending 'name' in the request body
  
    // Example INSERT query to add a new record to 'ojt_names' table
    const sql = 'INSERT INTO ojt_names (name) VALUES (?)';
    db.query(sql, [name], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error saving data');
        return;
      }
      res.status(200).send('Data saved successfully');
    });
  });

module.exports = ojtnames;
