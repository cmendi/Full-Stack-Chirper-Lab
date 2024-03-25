CREATE SCHEMA chirper;

CREATE TABLE users (
id INT AUTO_INCREMENT,
handle VARCHAR(50) UNIQUE,
email VARCHAR(100) UNIQUE,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

CREATE TABLE chirps (
id INT AUTO_INCREMENT,
user_id INT,
body VARCHAR(150),
location VARCHAR(50),
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE mentions (
chirp_id INT,
user_id INT,
PRIMARY KEY (chirp_id, user_id),
FOREIGN KEY (chirp_id) REFERENCES chirps(id),
FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users(handle, email) VALUES
('Kyle Mendenhall', 'kylemendenhall1246@gmail.com'),
('Chris Mendenhall', 'chrismendenhall1246@gmail.com');

SELECT * FROM users;

INSERT INTO chirps (user_id, body, location) VALUES
(2, 'When is the next golf trip?', 'California'),
(2, 'I am hungry', 'California'),
(2, 'This place is awesome!', 'Palm Springs'),
(2, 'Its so cold here', 'Mammoth Lakes'),
(1, 'My first full stack CRUD app!', 'California');


CREATE USER 'labs'@'localhost' IDENTIFIED BY 'labs';
	GRANT ALL PRIVILEGES ON chirper.* TO 'labs'@'localhost';
	FLUSH PRIVILEGES;