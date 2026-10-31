// Practical 14: Real-Time Order Tracking System
const db14 = db.getSiblingDB("Lab3_Practical14");
db14.Orders.deleteMany({});
db14.Orders.insertOne({
  orderId: "ORD1401",
  customerId: 1401,
  currentStatus: "Placed",
  statusHistory: [
    {status: "Placed", time: ISODate("2026-10-01T09:00:00Z")}
  ]
});
// Move order to Confirmed.
db14.Orders.updateOne(
  {orderId: "ORD1401"},
  {$set: {currentStatus: "Confirmed"}, $push: {statusHistory: {status: "Confirmed", time: new Date()}}}
);
// Move order to Shipped.
db14.Orders.updateOne(
  {orderId: "ORD1401"},
  {$set: {currentStatus: "Shipped"}, $push: {statusHistory: {status: "Shipped", time: new Date()}}}
);
// Move order to Delivered.
db14.Orders.updateOne(
  {orderId: "ORD1401"},
  {$set: {currentStatus: "Delivered"}, $push: {statusHistory: {status: "Delivered", time: new Date()}}}
);
// Retrieve current status and complete status history.
db14.Orders.findOne({orderId: "ORD1401"}, {currentStatus: 1, statusHistory: 1, _id: 0});
// Find all orders currently in transit.
db14.Orders.find({currentStatus: "Shipped"});
