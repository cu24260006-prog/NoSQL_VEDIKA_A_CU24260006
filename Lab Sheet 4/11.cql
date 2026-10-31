-- Practical 11: Cassandra CollegeDB keyspace and Students table.
-- Run in cqlsh. The replication factor 1 is suitable for a single-node lab.
-- For a multi-node cluster, choose a replication factor supported by the cluster.

CREATE KEYSPACE IF NOT EXISTS CollegeDB
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE CollegeDB;

CREATE TABLE IF NOT EXISTS Students (
    student_id int PRIMARY KEY,
    name text,
    course text,
    semester int,
    city text
);

INSERT INTO Students (student_id, name, course, semester, city)
VALUES (101, 'Aarav Sharma', 'BCA', 3, 'Haridwar');

INSERT INTO Students (student_id, name, course, semester, city)
VALUES (102, 'Diya Singh', 'BCA', 3, 'Roorkee');

INSERT INTO Students (student_id, name, course, semester, city)
VALUES (103, 'Rohan Verma', 'BBA', 2, 'Dehradun');

INSERT INTO Students (student_id, name, course, semester, city)
VALUES (104, 'Meera Joshi', 'BCA', 4, 'Haridwar');

INSERT INTO Students (student_id, name, course, semester, city)
VALUES (105, 'Kabir Khan', 'BCA', 2, 'Roorkee');

SELECT * FROM Students;
