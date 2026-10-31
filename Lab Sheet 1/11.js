// Practical 11: Replace the complete document of Roll No. 103.
const collegeDB = db.getSiblingDB("college");
const result = collegeDB.Students.replaceOne(
    { RollNo: 103 },
    { RollNo: 103, Name: "Priya Singh", Course: "BCA", Semester: 6, CGPA: 9.3 }
);
printjson(result);
