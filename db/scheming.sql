--
-- made by fixedOtter on 27.7.2022
--

-- first dropping the database so it can be re-defined
DROP DATABASE IF EXISTS notes_data;

-- defining the database
CREATE DATABASE notes_data;
-- then calling the database to use it
USE notes_data;

-- creating table to store our data
CREATE TABLE notes(
  id INT AUTO_INCREMENT PRIMARY KEY, -- auto incrementing index
  title VARCHAR(255) NOT NULL, -- title can't be empty
  words MEDIUMTEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- grabs the timestamp of when it was added
);

-- adding values into title and words columns
-- INSERT INTO notes (title, words) VALUES ('first note', 'i like nots'), ('scent', 'notsnn');

-- SELECT * FROM notes;
-- SELECT * FROM notes WHERE id = 2;

-- less efficent because it's not indexed
-- SELECT * FROM notes WHERE words = 'notsnn';