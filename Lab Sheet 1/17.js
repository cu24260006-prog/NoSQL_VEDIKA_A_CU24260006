// Practical 17: Rename Students collection to StudentDetails.
const collegeDB = db.getSiblingDB("college");
const result = collegeDB.Students.renameCollection("StudentDetails");
printjson(result);
print("Collections:");
collegeDB.getCollectionNames().forEach(name => print(name));
