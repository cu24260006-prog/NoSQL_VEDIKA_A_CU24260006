// Practical 1: Show all databases in MongoDB.
const result = db.adminCommand({ listDatabases: 1 });
print("Databases:");
result.databases.forEach(item => print(item.name));
