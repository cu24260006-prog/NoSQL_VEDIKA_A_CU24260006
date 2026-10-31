// Practical 3: Insert one student document.
const collegeDB = db.getSiblingDB("college");
const result = collegeDB.Students.insertOne({
    RollNo: 101,
    Name: "Vedika Choudhary",
    Course: "BCA",
    Semester: 5,
    CGPA: 8.26
});
printjson(result);
