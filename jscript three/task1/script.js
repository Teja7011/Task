document.writeln("<h3>Task 1 - Employee Login Eligibility</h3>");

let age = Number(prompt("Enter Employee Age:"));

let hasId = confirm("Is Employee ID available? (Click OK for True, Cancel for False)");

let attendancePercentage = Number(prompt("Enter Employee Attendance Percentage:"));

console.log(`User Input Data -> Age: ${age}, ID Available: ${hasId}, Attendance: ${attendancePercentage}%`);

if (age >= 18 && hasId === true && attendancePercentage >= 75) {
    console.log("Access Granted");
    document.writeln("Access Granted<br><hr>");
} else {
    console.log("Access Denied");
    document.writeln("Access Denied<br><hr>");
}