// Practical 23: Find students whose CGPA is less than 9.
const collegeDB = db.getSiblingDB("college");
collegeDB.Students.find(
    { CGPA: { $lt: 9 } },
    { _id: 0 }
).forEach(student => printjson(student));
