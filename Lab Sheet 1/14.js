// Practical 14: Delete the student with Roll No. 105.
const collegeDB = db.getSiblingDB("college");
const result = collegeDB.Students.deleteOne({ RollNo: 105 });
printjson(result);
printjson(collegeDB.Students.findOne({ RollNo: 105 }));
