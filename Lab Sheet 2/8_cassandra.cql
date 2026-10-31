-- Practical 8: Same student dataset in Cassandra.
CREATE KEYSPACE IF NOT EXISTS ComparisonDB
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE ComparisonDB;

CREATE TABLE IF NOT EXISTS Students (
    Student_ID int PRIMARY KEY,
    Name text,
    Course text,
    Semester int,
    Marks decimal
);

INSERT INTO Students (Student_ID, Name, Course, Semester, Marks) VALUES (801, 'Aarav Sharma', 'BCA', 3, 82.0);
INSERT INTO Students (Student_ID, Name, Course, Semester, Marks) VALUES (802, 'Diya Singh', 'BCA', 3, 91.0);
INSERT INTO Students (Student_ID, Name, Course, Semester, Marks) VALUES (803, 'Rohan Verma', 'BBA', 2, 76.0);
INSERT INTO Students (Student_ID, Name, Course, Semester, Marks) VALUES (804, 'Meera Gupta', 'BCA', 5, 88.0);
INSERT INTO Students (Student_ID, Name, Course, Semester, Marks) VALUES (805, 'Kabir Joshi', 'BCom', 4, 79.0);

SELECT * FROM Students;
