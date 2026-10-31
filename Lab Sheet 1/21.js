// Practical 21: Re-create college and Students, then insert three students.
const collegeDB = db.getSiblingDB("college");
collegeDB.createCollection("Students");
const result = collegeDB.Students.insertMany([
    { RollNo: 201, Name: "Vedika Choudhary", Course: "BCA", Semester: 5, CGPA: 8.26 },
    { RollNo: 202, Name: "Aanya Sharma", Course: "BCA", Semester: 5, CGPA: 8.6 },
    { RollNo: 203, Name: "Priya Singh", Course: "BCA", Semester: 5, CGPA: 9.0 }
]);
printjson(result);
collegeDB.Students.find().forEach(student => printjson(student));
