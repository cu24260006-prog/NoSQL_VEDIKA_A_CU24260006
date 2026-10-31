// Practical 2: Create CollegeDB and Students collection; perform CRUD operations.
const collegeDB = db.getSiblingDB("CollegeDB");

collegeDB.Students.insertMany([
    { Student_ID: 201, Name: "Aarav Sharma", Course: "BCA", Semester: 3, Marks: 82 },
    { Student_ID: 202, Name: "Diya Singh", Course: "BCA", Semester: 3, Marks: 91 },
    { Student_ID: 203, Name: "Rohan Verma", Course: "BBA", Semester: 2, Marks: 76 },
    { Student_ID: 204, Name: "Meera Gupta", Course: "BCA", Semester: 5, Marks: 88 },
    { Student_ID: 205, Name: "Kabir Joshi", Course: "BCom", Semester: 4, Marks: 79 }
]);

// 1. Display all documents.
collegeDB.Students.find({}, { _id: 0 }).forEach(doc => printjson(doc));

// 2. Find students from a particular course (example: BCA).
collegeDB.Students.find({ Course: "BCA" }, { _id: 0 }).forEach(doc => printjson(doc));

// 3. Update marks of one student.
collegeDB.Students.updateOne(
    { Student_ID: 201 },
    { $set: { Marks: 86 } }
);

// 4. Delete one student.
collegeDB.Students.deleteOne({ Student_ID: 205 });

// 5. Count total students.
print("Total students: " + collegeDB.Students.countDocuments({}));
