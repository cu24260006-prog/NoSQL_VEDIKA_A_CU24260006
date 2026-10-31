// Practical 8: Same student dataset in Neo4j.
CREATE
  (s1:Student {student_id: 801, name: 'Aarav Sharma', course: 'BCA', semester: 3, marks: 82}),
  (s2:Student {student_id: 802, name: 'Diya Singh', course: 'BCA', semester: 3, marks: 91}),
  (s3:Student {student_id: 803, name: 'Rohan Verma', course: 'BBA', semester: 2, marks: 76}),
  (s4:Student {student_id: 804, name: 'Meera Gupta', course: 'BCA', semester: 5, marks: 88}),
  (s5:Student {student_id: 805, name: 'Kabir Joshi', course: 'BCom', semester: 4, marks: 79});

MATCH (s:Student)
RETURN s;
