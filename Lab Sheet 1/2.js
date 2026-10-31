// Practical 2: Select the college database and show all collections.
const collegeDB = db.getSiblingDB("college");
print("Collections in college:");
collegeDB.getCollectionNames().forEach(name => print(name));
