// Practical 7: Content Management System
const db7 = db.getSiblingDB("Lab3_Practical7");
db7.Articles.deleteMany({});
db7.Articles.insertMany([
  {title: "MongoDB Introduction", author: "Aarav", category: "Technology", tags: ["mongodb", "database"], status: "published", publishedAt: ISODate("2026-09-01")},
  {title: "Study Guide", author: "Diya", category: "Education", tags: ["study"], status: "draft", publishedAt: null},
  {title: "NoSQL Trends", author: "Rohan", category: "Technology", tags: ["nosql", "database"], status: "published", publishedAt: ISODate("2026-09-10")},
  {title: "Travel Notes", author: "Meera", category: "Lifestyle", tags: ["travel"], status: "unpublished", publishedAt: null}
]);
// Retrieve all published articles.
db7.Articles.find({status: "published"});
// Retrieve unpublished and draft articles.
db7.Articles.find({status: {$in: ["unpublished", "draft"]}});
// Published Technology articles with database tag.
db7.Articles.find({status: "published", category: "Technology", tags: "database"});
// Articles written by a particular author.
db7.Articles.find({author: "Aarav"});
