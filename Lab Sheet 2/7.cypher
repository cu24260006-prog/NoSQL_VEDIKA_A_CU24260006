// Practical 7: Student-Course relationship graph using Neo4j.

// 1. Create at least five students and three courses.
CREATE
  (s1:Student {student_id: 601, name: 'Aarav Sharma'}),
  (s2:Student {student_id: 602, name: 'Diya Singh'}),
  (s3:Student {student_id: 603, name: 'Rohan Verma'}),
  (s4:Student {student_id: 604, name: 'Meera Gupta'}),
  (s5:Student {student_id: 605, name: 'Kabir Joshi'}),
  (c1:Course {course_id: 'C01', name: 'BCA'}),
  (c2:Course {course_id: 'C02', name: 'BBA'}),
  (c3:Course {course_id: 'C03', name: 'BCom'}),
  (s1)-[:ENROLLED_IN]->(c1),
  (s2)-[:ENROLLED_IN]->(c1),
  (s3)-[:ENROLLED_IN]->(c2),
  (s4)-[:ENROLLED_IN]->(c1),
  (s5)-[:ENROLLED_IN]->(c3);

// 2. Display all students.
MATCH (s:Student)
RETURN s;

// 3. Find students enrolled in a particular course (example: BCA).
MATCH (s:Student)-[:ENROLLED_IN]->(c:Course {name: 'BCA'})
RETURN s.name AS Student, c.name AS Course;

// 4. Display all courses taken by a particular student (example: Aarav Sharma).
MATCH (s:Student {name: 'Aarav Sharma'})-[:ENROLLED_IN]->(c:Course)
RETURN s.name AS Student, c.name AS Course;

// 5. Add a relationship, then remove it.
MATCH (s:Student {student_id: 603}), (c:Course {course_id: 'C01'})
CREATE (s)-[:ENROLLED_IN]->(c);

MATCH (s:Student {student_id: 603})-[r:ENROLLED_IN]->(c:Course {course_id: 'C01'})
DELETE r;
