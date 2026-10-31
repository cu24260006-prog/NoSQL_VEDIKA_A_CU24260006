// Practical 3: Mini Blogging Platform
const db3 = db.getSiblingDB("Lab3_Practical3");
db3.Blogs.deleteMany({});
db3.Blogs.insertMany([
  {title: "Learning MongoDB", author: "Aarav", category: "Technology", tags: ["mongodb", "database"], comments: [{user: "Diya", text: "Helpful!"}], published: true, publishedAt: ISODate("2026-09-10")},
  {title: "Healthy Study Habits", author: "Diya", category: "Education", tags: ["study", "health"], comments: [{user: "Rohan", text: "Great tips"}], published: true, publishedAt: ISODate("2026-09-12")},
  {title: "NoSQL Basics", author: "Rohan", category: "Technology", tags: ["nosql", "database"], comments: [], published: false, publishedAt: null}
]);
// Blogs in Technology category.
db3.Blogs.find({category: "Technology"});
// Blogs containing the database tag.
db3.Blogs.find({tags: "database"});
// Blogs in Technology with database tag.
db3.Blogs.find({category: "Technology", tags: "database"});
// Blogs matching either study or nosql tag.
db3.Blogs.find({tags: {$in: ["study", "nosql"]}});
// Display published blogs newest first.
db3.Blogs.find({published: true}).sort({publishedAt: -1});
