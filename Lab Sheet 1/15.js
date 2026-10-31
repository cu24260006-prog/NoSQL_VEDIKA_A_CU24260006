// Practical 15: Delete all students having CGPA less than 8.
const collegeDB = db.getSiblingDB("college");
const result = collegeDB.Students.deleteMany({ CGPA: { $lt: 8 } });
printjson(result);
print("Students still having CGPA below 8:");
collegeDB.Students.find({ CGPA: { $lt: 8 } }).forEach(student => printjson(student));
