// Practical 6: Website Analytics System
const db6 = db.getSiblingDB("Lab3_Practical6");
db6.PageVisits.deleteMany({});
db6.PageVisits.insertMany([
  {page: "/home", userId: 1, device: "mobile", browser: "Chrome", location: "Haridwar", time: ISODate("2026-10-01T09:00:00Z")},
  {page: "/products", userId: 2, device: "desktop", browser: "Firefox", location: "Roorkee", time: ISODate("2026-10-01T09:10:00Z")},
  {page: "/home", userId: 3, device: "mobile", browser: "Chrome", location: "Haridwar", time: ISODate("2026-10-01T09:20:00Z")},
  {page: "/about", userId: 1, device: "tablet", browser: "Safari", location: "Dehradun", time: ISODate("2026-10-01T09:30:00Z")},
  {page: "/products", userId: 4, device: "mobile", browser: "Chrome", location: "Roorkee", time: ISODate("2026-10-01T09:40:00Z")},
  {page: "/home", userId: 5, device: "desktop", browser: "Chrome", location: "Haridwar", time: ISODate("2026-10-01T09:50:00Z")}
]);
// Most visited pages.
db6.PageVisits.aggregate([
  {$group: {_id: "$page", visits: {$sum: 1}}},
  {$sort: {visits: -1}}
]);
// Most commonly used devices.
db6.PageVisits.aggregate([
  {$group: {_id: "$device", visits: {$sum: 1}}},
  {$sort: {visits: -1}}
]);
// Visits by browser.
db6.PageVisits.aggregate([
  {$group: {_id: "$browser", visits: {$sum: 1}}},
  {$sort: {visits: -1}}
]);
