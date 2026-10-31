// Practical 11: Student, Course and Department graph in Neo4j.
// Run in Neo4j Browser or cypher-shell.

CREATE
  (d1:Department {department_id: 'D01', name: 'Computer Applications'}),
  (d2:Department {department_id: 'D02', name: 'Management'}),
  (c1:Course {course_id: 'C01', name: 'BCA'}),
  (c2:Course {course_id: 'C02', name: 'BBA'}),
  (s1:Student {student_id: 1101, name: 'Aarav Sharma'}),
  (s2:Student {student_id: 1102, name: 'Diya Singh'}),
  (s3:Student {student_id: 1103, name: 'Rohan Verma'}),
  (s1)-[:ENROLLED_IN]->(c1),
  (s2)-[:ENROLLED_IN]->(c1),
  (s3)-[:ENROLLED_IN]->(c2),
  (c1)-[:BELONGS_TO]->(d1),
  (c2)-[:BELONGS_TO]->(d2);

// Display the graph visually.
MATCH (s:Student)-[r1:ENROLLED_IN]->(c:Course)-[r2:BELONGS_TO]->(d:Department)
RETURN s, r1, c, r2, d;
