// Practical 1: Store the same student data in MongoDB documents.
const collegeDB = db.getSiblingDB("CollegeDB");

collegeDB.Students.insertMany([
    { Student_ID: 101, Name: "Aarav Sharma", Course: "BCA", Semester: 3, Marks: 82.50 },
    { Student_ID: 102, Name: "Diya Singh", Course: "BCA", Semester: 3, Marks: 91.00 },
    { Student_ID: 103, Name: "Rohan Verma", Course: "BBA", Semester: 2, Marks: 76.00 },
    { Student_ID: 104, Name: "Meera Gupta", Course: "BCA", Semester: 5, Marks: 88.50 },
    { Student_ID: 105, Name: "Kabir Joshi", Course: "BCom", Semester: 4, Marks: 79.00 }
]);

print("MongoDB student documents:");
collegeDB.Students.find({}, { _id: 0 }).forEach(doc => printjson(doc));

/*
Comparison:
RDBMS: fixed table structure, rows and columns, predefined schema.
MongoDB: document structure, BSON documents, flexible schema.
RDBMS: strong relational constraints and SQL queries.
MongoDB: embedded documents/arrays and document-oriented queries.
Both can scale vertically; MongoDB also supports horizontal scaling
through sharding. Actual scalability depends on database design/setup.
*/
