// Practical 8: Display only Name and Course of BCA students.
const collegeDB = db.getSiblingDB("college");
collegeDB.Students.find(
    { Course: "BCA" },
    { _id: 0, Name: 1, Course: 1 }
).forEach(student => printjson(student));
