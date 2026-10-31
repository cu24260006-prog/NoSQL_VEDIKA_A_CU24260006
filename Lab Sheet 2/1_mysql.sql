-- Practical 1: Create a Student table and insert at least five records.
CREATE DATABASE IF NOT EXISTS CollegeDB;
USE CollegeDB;

CREATE TABLE IF NOT EXISTS Student (
    Student_ID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Course VARCHAR(50) NOT NULL,
    Semester INT NOT NULL,
    Marks DECIMAL(5,2) NOT NULL
);

INSERT INTO Student (Student_ID, Name, Course, Semester, Marks) VALUES
(101, 'Aarav Sharma', 'BCA', 3, 82.50),
(102, 'Diya Singh', 'BCA', 3, 91.00),
(103, 'Rohan Verma', 'BBA', 2, 76.00),
(104, 'Meera Gupta', 'BCA', 5, 88.50),
(105, 'Kabir Joshi', 'BCom', 4, 79.00);

SELECT * FROM Student;
