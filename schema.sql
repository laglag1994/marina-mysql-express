CREATE DATABASE marina;
USE marina;

    CREATE TABLE mari (
    id integer PRIMARY KEY AUTO_INCREMENT,
    song VARCHAR(255) NOT NULL,
    lyrics TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
    );

INSERT INTO note (title, content)
    VALUES 
     ('Obsessions', 'The crackers were probably bad luck anyway'),
     ('Better Than That', 'And she will network till her dreams come true Even if it means getting into bed with you');
