// Import required modules
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// MySQL database connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Define route to fetch data from MySQL
router.get('/get', (req, res) => {
  // Example query to fetch users from a 'users' table
  const sql = 'SELECT * FROM ojt_names';

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

router.post('/save', (req, res) => {
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

module.exports = router;
