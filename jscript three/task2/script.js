document.writeln("<h3>Task 2 - Student Grade System</h3>");
let marks = Number(prompt("Enter Student Marks (0-100):", ""));

console.log(`User Input Data -> Marks: ${marks}`);

let grade;

if (marks >= 90 && marks <= 100) {
    grade = "A+";
} else if (marks >= 80 && marks <= 89) {
    grade = "A";
} else if (marks >= 70 && marks <= 79) {
    grade = "B";
} else if (marks >= 60 && marks <= 69) {
    grade = "C";
} else if (marks >= 0 && marks < 60) {
    grade = "Fail";
} else {
    grade = "Invalid Marks Entered";
}

console.log(`Grade ${grade}`);
document.writeln(`Marks: ${marks} -> Grade ${grade}<br><hr>`);