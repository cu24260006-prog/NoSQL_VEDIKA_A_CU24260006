// Practical 9: Basic MongoDB operations on a single local server.
// First install and start MongoDB Server, then run this file with mongosh.
const localDB = db.getSiblingDB("LocalDemoDB");

// Create collection and insert sample records.
if (!localDB.getCollectionNames().includes("Students")) {
    localDB.createCollection("Students");
}
localDB.Students.insertMany([
    { Student_ID: 901, Name: "Aarav", Course: "BCA", Marks: 82 },
    { Student_ID: 902, Name: "Diya", Course: "BCA", Marks: 91 },
    { Student_ID: 903, Name: "Rohan", Course: "BBA", Marks: 76 }
]);

// Read.
localDB.Students.find().forEach(doc => printjson(doc));

// Update.
localDB.Students.updateOne(
    { Student_ID: 901 },
    { $set: { Marks: 86 } }
);

// Delete.
localDB.Students.deleteOne({ Student_ID: 903 });

// Verify.
print("Final records:");
localDB.Students.find().forEach(doc => printjson(doc));
print("Server status:");
printjson(db.adminCommand({ ping: 1 }));
