// Initialize an empty array to store lessons
var myWork = [];
// Create lessons using a for loop
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "Lesson ".concat(i),
        status: i % 2 === 0, // Even lessons have true status, odd lessons have false status
    };
    myWork.push(lesson);
}
// Print the lesson plan
console.log('Lesson Plan:');
myWork.forEach(function (lesson) {
    console.log("".concat(lesson.name, " - Status: ").concat(lesson.status));
});
