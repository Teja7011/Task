let employee = {
    name: prompt("Enter Employee Name:"),
    age: Number(prompt("Enter Employee Age:")),
    department: prompt("Enter Department:"),
    salary: Number(prompt("Enter Monthly Salary:"))
};

let annualSalary = employee.salary * 12;
let designation = employee.salary > 30000 ? "Senior Employee" : "Junior Employee";

console.log("--- Employee Profile ---");
console.log("Employee Name: " + employee.name);
console.log("Employee Age: " + employee.age);
console.log("Department: " + employee.department);
console.log("Annual Salary: " + annualSalary);
console.log("Designation: " + designation);

document.writeln("<h3>--- Employee Profile ---</h3>");
document.writeln("Employee Name: " + employee.name + "<br>");
document.writeln("Employee Age: " + employee.age + "<br>");
document.writeln("Department: " + employee.department + "<br>");
document.writeln("Annual Salary: " + annualSalary + "<br>");
document.writeln("Designation: " + designation + "<br>");