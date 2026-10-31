// Practical 15: Flexible News Database
const db15 = db.getSiblingDB("Lab3_Practical15");
db15.News.deleteMany({});
db15.News.insertMany([
  {title: "Technology Update", author: "Aarav", location: "India", category: "Technology", tags: ["AI", "technology"], images: ["tech.jpg"], sources: ["News Desk"], publishedAt: ISODate("2026-10-01")},
  {title: "City Weather Report", location: "Haridwar", category: "Local", tags: ["weather"], sources: ["City Bureau"], publishedAt: ISODate("2026-10-02")},
  {title: "Sports Championship", author: "Diya", category: "Sports", tags: ["sports", "final"], images: ["match.jpg"], publishedAt: ISODate("2026-10-03")},
  {title: "Business News", author: "Rohan", category: "Business", location: "Delhi", tags: ["market"], sources: ["Business Desk"], extraInfo: {edition: "Morning"}}
]);
// Search by category.
db15.News.find({category: "Technology"});
// Search by a tag, regardless of other optional fields.
db15.News.find({tags: "weather"});
// Search documents that have an author field.
db15.News.find({author: {$exists: true}});
// Search articles from a location even if other fields differ.
db15.News.find({location: "Haridwar"});
// Search for articles matching either Technology or Sports category.
db15.News.find({category: {$in: ["Technology", "Sports"]}});
// Search title text using a regular expression.
db15.News.find({title: /news/i});
