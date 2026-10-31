// Practical 18: Create a Departments collection.
const collegeDB = db.getSiblingDB("college");
const result = collegeDB.createCollection("Departments");
printjson(result);
collegeDB.getCollectionNames().forEach(name => print(name));
