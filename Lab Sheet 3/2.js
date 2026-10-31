// Practical 2: Event Logging System
const db2 = db.getSiblingDB("Lab3_Practical2");
db2.Events.deleteMany({});
db2.Events.insertMany([
  {userId: 101, event: "login", time: ISODate("2026-10-01T09:00:00Z"), success: true},
  {userId: 101, event: "failed-login", time: ISODate("2026-10-01T09:05:00Z"), success: false},
  {userId: 101, event: "failed-login", time: ISODate("2026-10-01T09:06:00Z"), success: false},
  {userId: 102, event: "file-upload", time: ISODate("2026-10-01T10:00:00Z"), file: "notes.pdf"},
  {userId: 101, event: "password-change", time: ISODate("2026-10-02T08:00:00Z")},
  {userId: 103, event: "logout", time: ISODate("2026-10-02T12:00:00Z")},
  {userId: 101, event: "failed-login", time: ISODate("2026-10-02T12:05:00Z"), success: false}
]);
// Display all events.
db2.Events.find();
// Identify users with repeated failed login attempts.
db2.Events.aggregate([
  {$match: {event: "failed-login"}},
  {$group: {_id: "$userId", failedAttempts: {$sum: 1}}},
  {$match: {failedAttempts: {$gte: 2}}}
]);
// Find frequently occurring event types.
db2.Events.aggregate([
  {$group: {_id: "$event", total: {$sum: 1}}},
  {$sort: {total: -1}}
]);
