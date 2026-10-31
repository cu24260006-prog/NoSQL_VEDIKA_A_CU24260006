// Practical 1: Student Activity Tracking System
const db1 = db.getSiblingDB("Lab3_Practical1");
db1.Students.deleteMany({});
db1.Students.insertMany([
  {studentId: 1, name: "Aarav", courses: ["BCA", "Python"], attendance: 92, skills: ["Python", "HTML"], activities: [{type: "login", date: ISODate("2026-10-01")}, {type: "assignment", date: ISODate("2026-10-05")}]},
  {studentId: 2, name: "Diya", courses: ["BCA", "DBMS"], attendance: 78, skills: ["Java"], activities: [{type: "login", date: ISODate("2026-10-02")}]},
  {studentId: 3, name: "Rohan", courses: ["BBA"], attendance: 85, skills: ["Excel", "Communication"], activities: [{type: "assignment", date: ISODate("2026-10-06")}, {type: "project", date: ISODate("2026-10-08")}]}
]);
// Find students with attendance above 80.
db1.Students.find({attendance: {$gt: 80}});
// Find students enrolled in BCA.
db1.Students.find({courses: "BCA"});
// Find students who completed an assignment activity.
db1.Students.find({"activities.type": "assignment"});
// Find students with Python skill.
db1.Students.find({skills: "Python"});
// Find students with no recent project activity.
db1.Students.find({"activities.type": {$ne: "project"}});
