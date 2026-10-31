// Practical 5: Display all student documents.
const collegeDB = db.getSiblingDB("college");
collegeDB.Students.find().forEach(student => printjson(student));
