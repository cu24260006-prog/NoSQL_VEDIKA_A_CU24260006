// Practical 14: MapReduce to count students and calculate average marks by course.
// Note: MongoDB Map-Reduce is deprecated in modern MongoDB versions.
// This classic mapReduce example is included because the lab asks specifically
// for MapReduce. Use a MongoDB version/environment that supports mapReduce.

const collegeDB = db.getSiblingDB("MapReduceDemo");

collegeDB.Students.insertMany([
    { Student_ID: 1401, Name: "Aarav", Course: "BCA", Marks: 82 },
    { Student_ID: 1402, Name: "Diya", Course: "BCA", Marks: 91 },
    { Student_ID: 1403, Name: "Rohan", Course: "BBA", Marks: 76 },
    { Student_ID: 1404, Name: "Meera", Course: "BCA", Marks: 88 },
    { Student_ID: 1405, Name: "Kabir", Course: "BBA", Marks: 79 }
]);

// Map: emit one count and marks value for each course.
const mapFunction = function () {
    emit(this.Course, { count: 1, totalMarks: this.Marks });
};

// Reduce: combine count and marks totals for each course.
const reduceFunction = function (course, values) {
    const result = { count: 0, totalMarks: 0 };
    values.forEach(value => {
        result.count += value.count;
        result.totalMarks += value.totalMarks;
    });
    return result;
};

// Finalize: calculate average marks.
const finalizeFunction = function (course, result) {
    result.averageMarks = result.totalMarks / result.count;
    return result;
};

const output = collegeDB.Students.mapReduce(
    mapFunction,
    reduceFunction,
    { out: "CourseSummary", finalize: finalizeFunction }
);

print("MapReduce result (students per course and average marks):");
collegeDB.CourseSummary.find().forEach(doc => printjson(doc));
