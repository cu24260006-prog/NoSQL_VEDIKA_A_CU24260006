// Practical 13: Course Learning Platform
const db13 = db.getSiblingDB("Lab3_Practical13");
db13.LearningProgress.deleteMany({});
db13.LearningProgress.insertMany([
  {studentId: 1301, studentName: "Aarav", course: "MongoDB", instructor: "Mr. Sharma", modules: [{name: "Introduction", completed: true}, {name: "CRUD", completed: true}, {name: "Aggregation", completed: false}], progress: 66, completed: false},
  {studentId: 1302, studentName: "Diya", course: "MongoDB", instructor: "Mr. Sharma", modules: [{name: "Introduction", completed: true}, {name: "CRUD", completed: true}, {name: "Aggregation", completed: true}], progress: 100, completed: true},
  {studentId: 1303, studentName: "Rohan", course: "Python", instructor: "Ms. Gupta", modules: [{name: "Basics", completed: true}, {name: "Loops", completed: false}], progress: 50, completed: false}
]);
// Students with progress greater than 60%.
db13.LearningProgress.find({progress: {$gt: 60}});
// Students who completed the course.
db13.LearningProgress.find({completed: true});
// Students who have not completed the course.
db13.LearningProgress.find({completed: false});
// Course-wise average progress.
db13.LearningProgress.aggregate([
  {$group: {_id: "$course", averageProgress: {$avg: "$progress"}, students: {$sum: 1}}}
]);
