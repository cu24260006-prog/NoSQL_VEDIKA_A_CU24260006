// Practical 13: Remove the Email field from all students.
const collegeDB = db.getSiblingDB("college");
const result = collegeDB.Students.updateMany(
    {},
    { $unset: { Email: "" } }
);
printjson(result);
