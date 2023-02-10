-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS countries CASCADE;

CREATE TABLE countries (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    country VARCHAR NOT NULL,
    capitol VARCHAR NOT NULL,
    spoken_language VARCHAR NOT NULL,
    continent VARCHAR NOT NULL,
    population INT NOT NULL 
);

INSERT INTO 
countries (country, capitol, spoken_language, continent, population)
VALUES
('United States', 'Washington DC', 'English', 'North America', 335999183 ),
('United Kingdom', 'London', 'English', 'North America', 67081234 ),
('India', 'New Dehli', 'Hindi', 'Asia', 1414940553),
('Romania', 'Bucharest', 'Romanian', 'Europe', 18907736),
('China', 'Beijing', 'Chinese', 'Asia', 1453629085),
('Mexico', 'Mexico City', 'Spanish', 'Europe', 132150971);