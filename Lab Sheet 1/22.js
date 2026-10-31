// Practical 22: Find students whose CGPA is greater than 8.5.
const collegeDB = db.getSiblingDB("college");
collegeDB.Students.find(
    { CGPA: { $gt: 8.5 } },
    { _id: 0 }
).forEach(student => printjson(student));
