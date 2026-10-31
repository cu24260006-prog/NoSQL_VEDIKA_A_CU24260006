// Practical 6: Find a student using Roll Number.
const collegeDB = db.getSiblingDB("college");
const student = collegeDB.Students.findOne({ RollNo: 103 });
printjson(student);
