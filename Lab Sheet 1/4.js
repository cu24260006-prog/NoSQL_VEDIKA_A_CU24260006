// Practical 4: Insert multiple student documents.
const collegeDB = db.getSiblingDB("college");
const result = collegeDB.Students.insertMany([
    { RollNo: 102, Name: "Aanya Sharma", Course: "BCA", Semester: 5, CGPA: 8.4 },
    { RollNo: 103, Name: "Priya Singh", Course: "BCA", Semester: 5, CGPA: 9.1 },
    { RollNo: 104, Name: "Rohan Verma", Course: "BTech", Semester: 5, CGPA: 7.8 },
    { RollNo: 105, Name: "Kavya Gupta", Course: "BCA", Semester: 4, CGPA: 8.7 }
]);
printjson(result);
