// Practical 12: Add an Email field to all students.
const collegeDB = db.getSiblingDB("college");
const result = collegeDB.Students.updateMany(
    {},
    { $set: { Email: "student@example.com" } }
);
printjson(result);
