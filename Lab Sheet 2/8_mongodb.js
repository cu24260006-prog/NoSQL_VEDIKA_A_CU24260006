// Practical 8: Student dataset in MongoDB.
const collegeDB = db.getSiblingDB("ComparisonDB");
collegeDB.Students.insertMany([
    { Student_ID: 801, Name: "Aarav Sharma", Course: "BCA", Semester: 3, Marks: 82 },
    { Student_ID: 802, Name: "Diya Singh", Course: "BCA", Semester: 3, Marks: 91 },
    { Student_ID: 803, Name: "Rohan Verma", Course: "BBA", Semester: 2, Marks: 76 },
    { Student_ID: 804, Name: "Meera Gupta", Course: "BCA", Semester: 5, Marks: 88 },
    { Student_ID: 805, Name: "Kabir Joshi", Course: "BCom", Semester: 4, Marks: 79 }
]);
collegeDB.Students.find({}, { _id: 0 }).forEach(doc => printjson(doc));
