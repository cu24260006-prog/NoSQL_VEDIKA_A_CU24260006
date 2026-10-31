// Practical 9: Update the course of Roll No. 102.
const collegeDB = db.getSiblingDB("college");
const result = collegeDB.Students.updateOne(
    { RollNo: 102 },
    { $set: { Course: "BCA-AI" } }
);
printjson(result);
printjson(collegeDB.Students.findOne({ RollNo: 102 }));
