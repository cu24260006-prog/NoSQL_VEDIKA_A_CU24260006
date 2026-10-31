// Practical 20: Drop the complete college database.
// WARNING: This permanently deletes the entire college database.
const result = db.getSiblingDB("college").dropDatabase();
printjson(result);
print("Remaining databases:");
db.adminCommand({ listDatabases: 1 }).databases.forEach(item => print(item.name));
