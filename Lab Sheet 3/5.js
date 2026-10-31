// Practical 5: E-Commerce Order Management System
const db5 = db.getSiblingDB("Lab3_Practical5");
db5.Customers.deleteMany({});
db5.Products.deleteMany({});
db5.Orders.deleteMany({});
db5.Customers.insertMany([
  {_id: 1, name: "Aarav", email: "aarav@example.com"},
  {_id: 2, name: "Diya", email: "diya@example.com"}
]);
db5.Products.insertMany([
  {_id: "P1", name: "Keyboard", price: 800},
  {_id: "P2", name: "Mouse", price: 400},
  {_id: "P3", name: "Headphones", price: 1500}
]);
db5.Orders.insertMany([
  {orderId: 501, customerId: 1, date: ISODate("2026-10-01"), items: [{productId: "P1", quantity: 1, price: 800}, {productId: "P2", quantity: 2, price: 400}]},
  {orderId: 502, customerId: 1, date: ISODate("2026-10-05"), items: [{productId: "P3", quantity: 1, price: 1500}]},
  {orderId: 503, customerId: 2, date: ISODate("2026-10-06"), items: [{productId: "P2", quantity: 1, price: 400}]}
]);
// Complete purchase history for customer 1, including calculated order totals.
db5.Orders.aggregate([
  {$match: {customerId: 1}},
  {$unwind: "$items"},
  {$group: {_id: "$orderId", customerId: {$first: "$customerId"}, date: {$first: "$date"}, total: {$sum: {$multiply: ["$items.price", "$items.quantity"]}}}},
  {$sort: {date: 1}}
]);
// Join customer details with orders.
db5.Orders.aggregate([
  {$lookup: {from: "Customers", localField: "customerId", foreignField: "_id", as: "customer"}},
  {$unwind: "$customer"}
]);
