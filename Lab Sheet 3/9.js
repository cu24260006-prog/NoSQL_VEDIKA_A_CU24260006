// Practical 9: Product Review and Rating System
const db9 = db.getSiblingDB("Lab3_Practical9");
db9.Reviews.deleteMany({});
db9.Reviews.insertMany([
  {productId: "P101", customer: "Aarav", rating: 5, review: "Excellent"},
  {productId: "P101", customer: "Diya", rating: 4, review: "Very good"},
  {productId: "P102", customer: "Rohan", rating: 3, review: "Average"},
  {productId: "P102", customer: "Meera", rating: 4, review: "Good"},
  {productId: "P102", customer: "Kabir", rating: 5, review: "Great"}
]);
// Calculate average rating and number of reviews for each product.
db9.Reviews.aggregate([
  {$group: {_id: "$productId", averageRating: {$avg: "$rating"}, numberOfReviews: {$sum: 1}}},
  {$sort: {_id: 1}}
]);
// Display reviews for a particular product.
db9.Reviews.find({productId: "P101"});
