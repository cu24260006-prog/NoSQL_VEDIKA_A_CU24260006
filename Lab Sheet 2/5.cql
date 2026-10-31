-- Practical 5: Cassandra keyspace and Students table.
CREATE KEYSPACE IF NOT EXISTS CollegeDB
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE CollegeDB;

CREATE TABLE IF NOT EXISTS Students (
    Student_ID int PRIMARY KEY,
    Name text,
    Course text,
    Semester int,
    Marks decimal
);

-- 1. Insert at least five records.
INSERT INTO Students (Student_ID, Name, Course, Semester, Marks) VALUES (401, 'Aarav Sharma', 'BCA', 3, 82.5);
INSERT INTO Students (Student_ID, Name, Course, Semester, Marks) VALUES (402, 'Diya Singh', 'BCA', 3, 91.0);
INSERT INTO Students (Student_ID, Name, Course, Semester, Marks) VALUES (403, 'Rohan Verma', 'BBA', 2, 76.0);
INSERT INTO Students (Student_ID, Name, Course, Semester, Marks) VALUES (404, 'Meera Gupta', 'BCA', 5, 88.5);
INSERT INTO Students (Student_ID, Name, Course, Semester, Marks) VALUES (405, 'Kabir Joshi', 'BCom', 4, 79.0);

-- 2. Display all records.
SELECT * FROM Students;

-- 3. Retrieve students from a particular course.
-- Cassandra requires an index or a suitable query-first table for non-key filtering.
CREATE INDEX IF NOT EXISTS students_course_idx ON Students (Course);
SELECT * FROM Students WHERE Course = 'BCA';

-- 4. Update the marks of a student.
UPDATE Students SET Marks = 86.0 WHERE Student_ID = 401;

-- 5. Delete a student record.
DELETE FROM Students WHERE Student_ID = 405;
