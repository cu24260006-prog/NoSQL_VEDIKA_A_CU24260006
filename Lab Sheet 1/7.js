// Practical 7: Find all BCA students.
const collegeDB = db.getSiblingDB("college");
collegeDB.Students.find({ Course: "BCA" }).forEach(student => printjson(student));
