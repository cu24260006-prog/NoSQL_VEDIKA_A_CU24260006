// Practical 19: Drop the Departments collection.
const collegeDB = db.getSiblingDB("college");
const result = collegeDB.Departments.drop();
print("Collection dropped: " + result);
collegeDB.getCollectionNames().forEach(name => print(name));
