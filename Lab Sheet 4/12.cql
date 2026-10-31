-- Practical 12: CRUD operations on Cassandra Employees table.
USE CollegeDB;

CREATE TABLE IF NOT EXISTS Employees (
    employee_id int PRIMARY KEY,
    name text,
    department text,
    salary decimal,
    city text
);

-- INSERT
INSERT INTO Employees (employee_id, name, department, salary, city)
VALUES (201, 'Aarav Sharma', 'IT', 35000, 'Haridwar');

INSERT INTO Employees (employee_id, name, department, salary, city)
VALUES (202, 'Diya Singh', 'HR', 32000, 'Roorkee');

-- SELECT
SELECT * FROM Employees;
SELECT * FROM Employees WHERE employee_id = 201;

-- UPDATE
UPDATE Employees SET salary = 40000 WHERE employee_id = 201;

-- DELETE
DELETE FROM Employees WHERE employee_id = 202;

SELECT * FROM Employees;
