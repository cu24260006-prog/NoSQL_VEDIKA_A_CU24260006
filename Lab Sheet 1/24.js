// Practical 24: Find students whose CGPA is greater than or equal to 8.5.
const collegeDB = db.getSiblingDB("college");
collegeDB.Students.find(
    { CGPA: { $gte: 8.5 } },
    { _id: 0 }
).forEach(student => printjson(student));
