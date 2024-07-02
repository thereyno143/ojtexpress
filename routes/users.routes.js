// Import required modules
const express = require('express');
const users = express.Router();
const ojtnames = express.Router();
const db = require('../database/db'); // Import the db.js file

// Define route to fetch data from MySQL
users.get('/get', (req, res) => {
  // Example query to fetch users from a 'users' table
  const sql = 'SELECT u.username FROM users AS u;';

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

users.post('/insert', (req, res) => {
    const { username, password } = req.body; 
    const sql = 'INSERT INTO users (username, `password`) VALUES (?, PASSWORD(?));';
    db.query(sql, [username, password], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error saving data');
        return;
      }
      res.status(200).send('Data saved successfully');
    });
  });

users.post('/update', (req, res) => {
    const { username, id } = req.body; 
    const sql = 'UPDATE users u SET u.username = ? WHERE id = ?;';
    db.query(sql, [username, id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error saving data');
        return;
      }
      res.status(200).send('Data saved successfully');
    });
  });

users.delete('/delete', (req, res) => {
    const userId = req.query.id; // Access the ID from the query parameters
    // Example DELETE query to remove a record from 'ojt_names' table based on user ID
    const sql = 'DELETE FROM users WHERE id = ?;';
    db.query(sql, [userId], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error deleting data');
        return;
      }
      res.status(200).send('Data deleted successfully');
    });
  });

  users.get('/login', (req, res) => {
    const { username, password } = req.body; // Assuming you're sending 'username' and 'password' in the query parameters
    // Example query to check if the provided username and password match a user in the database
    const sql = 'SELECT username FROM users u WHERE u.username = ? AND u.password = PASSWORD(?);';
    // const sql = `SELECT username FROM users u WHERE u.username = '${username}' AND u.password = PASSWORD(${password});`;
    db.query(sql, [username, password], (err, result) => {
        try{
            if (err) {
                console.error(err);
                res.status(500).send('Error logging in');
                return;
              }
          
              if (result.length === 0) {
                res.status(401).send('Invalid username or password');
              } else {
                res.status(200).json({message: 'Login successful', data: result});
              }
        }catch(error){
            res.status(500).send('Server error!');
        }
    });
  });

module.exports = users;
