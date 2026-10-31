// Practical 10: Update the semester of all BCA students to 6.
const collegeDB = db.getSiblingDB("college");
const result = collegeDB.Students.updateMany(
    { Course: "BCA" },
    { $set: { Semester: 6 } }
);
printjson(result);
