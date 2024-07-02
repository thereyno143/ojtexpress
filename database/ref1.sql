-- CRUD
-- Create 	| Read 	| Update 	| Delete (System)
-- Insert 	| Select| Update	| Delete (Database) 
-- Post		| Get	| Put/Post	| Delete (HTTP Request)

-- Database
-- Insert:
INSERT INTO users (username, `password`) VALUES ('admin', PASSWORD('admin'));
CALL sp_users_insert('admin2', 'admin');
-- Select
SELECT u.username FROM users AS u;
CALL sp_users_get();
-- Update
UPDATE users u SET u.username = 'admin' WHERE id = 2;
-- Delete 
DELETE FROM users WHERE id = 4;

-- login (authentication):
SELECT username FROM users u WHERE u.username = 'user' AND u.password = PASSWORD('1234');
