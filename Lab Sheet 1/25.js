// Practical 25: Find BCA students whose CGPA is greater than or equal to 8.5.
const collegeDB = db.getSiblingDB("college");
collegeDB.Students.find(
    { Course: "BCA", CGPA: { $gte: 8.5 } },
    { _id: 0 }
).forEach(student => printjson(student));
