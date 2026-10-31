// Practical 16: Count the total number of student documents.
const collegeDB = db.getSiblingDB("college");
print("Total students: " + collegeDB.Students.countDocuments({}));
collegeDB.Students.find().forEach(student => printjson(student));
