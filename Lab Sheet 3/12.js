// Practical 12: User Notification System
const db12 = db.getSiblingDB("Lab3_Practical12");
db12.Notifications.deleteMany({});
db12.Notifications.insertMany([
  {userId: 1201, type: "message", text: "You have a new message", read: false, createdAt: new Date()},
  {userId: 1201, type: "order-update", text: "Your order has shipped", read: false, createdAt: new Date()},
  {userId: 1201, type: "system-alert", text: "Password updated", read: true, createdAt: new Date()},
  {userId: 1202, type: "message", text: "Welcome", read: false, createdAt: new Date()}
]);
// Retrieve unread notifications for user 1201.
db12.Notifications.find({userId: 1201, read: false}).sort({createdAt: -1});
// Mark one notification as read.
db12.Notifications.updateOne(
  {userId: 1201, type: "message", read: false},
  {$set: {read: true, readAt: new Date()}}
);
// Mark all remaining notifications for this user as read.
db12.Notifications.updateMany(
  {userId: 1201, read: false},
  {$set: {read: true, readAt: new Date()}}
);
// Verify notifications.
db12.Notifications.find({userId: 1201});
