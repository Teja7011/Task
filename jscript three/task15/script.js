let attendance = {
    "Rahul": "Present",
    "Arun": "Absent",
    "Kamal": "Present",
    "Priya": "Present",
    "Divya": "Absent"
};

let totalPresent = 0;
let totalAbsent = 0;

let presentEmployees = "";
let absentEmployees = "";

for (let name in attendance) {
    if (attendance[name] === "Present") {
        presentEmployees += name + " ";
        totalPresent++;
    } else {
        absentEmployees += name + " ";
        totalAbsent++;
    }
}

console.log("Present Employees: " + presentEmployees.trim());
console.log("Absent Employees: " + absentEmployees.trim());
console.log("Total Present: " + totalPresent);
console.log("Total Absent: " + totalAbsent);

document.writeln("Present Employees: " + presentEmployees.trim() + "<br>");
document.writeln("Absent Employees: " + absentEmployees.trim() + "<br>");
document.writeln("Total Present: " + totalPresent + "<br>");
document.writeln("Total Absent: " + totalAbsent + "<br>");