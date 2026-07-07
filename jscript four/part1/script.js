//Employee Array
let employees=[
    {
        name:"Naveen",
        id:101,
        salary:30000
    },
    {
        name:"John",
        id:102,
        salary:60000
    },
    {
        name:"Arun",
        id:103,
        salary:45000
    }
];

//Task 1-Find the Highest Salary
console.log("Task 1");
let highestEmployee=employees[0];
for (let emp of employees) {
    if (emp.salary > highestEmployee.salary) {
        highestEmployee = emp;
    }
}
console.log("Highest Salary :", highestEmployee.salary);
console.log("Employee Name :", highestEmployee.name);

//Task 2-Find Employee by ID
console.log("\nTask 2");
let searchId = 103;
let found = false;

for (let emp of employees) {

    if (emp.id === searchId) {

        console.log("Employee Found");
        console.log("Name :", emp.name);
        console.log("Salary :", emp.salary);

        found = true;
        break;
    }
}

if (!found) {
    console.log("Employee Not Found");
}

//Task 3-Calculate Salary with Bonus
console.log("\nTask 3");

let bonus = 5000;

for (let emp of employees) {
    console.log(emp.name + " : " + (emp.salary + bonus));
}

//Task 4- Experience Check
console.log("\nTask 4");
let experienceEmployees = [
    {
        name: "Naveen",
        experience: 2
    },
    {
        name: "John",
        experience: 7
    },
    {
        name: "Arun",
        experience: 5
    }
];

for (let emp of experienceEmployees) {

    if (emp.experience >= 5) {
        console.log(emp.name + " - Senior Employee");
    } else {
        console.log(emp.name + " - Junior Employee");
    }

}

//Task 5- Display Employee Names
console.log("\nTask 5");

for (let emp of employees) {
    console.log(emp.name);
}

//Task 6- Display Employee IDs
console.log("\nTask 6");
for (let emp of employees) {
    console.log(emp.id);
}

//Task 7- Find Total Salary
console.log("\nTask 7");
let totalSalary = 0;
for (let emp of employees) {
    totalSalary += emp.salary;
}

console.log("Total Salary:", totalSalary);

//Task 8- Employees Earning More Than ₹40,000
console.log("\nTask 8");
for (let emp of employees) {
    if (emp.salary > 40000) {
        console.log(emp.name);
    }
}

//Task 9- Increase Salary
console.log("\nTask 9");
for (let emp of employees) {
    let newSalary = emp.salary + 5000;
    console.log(emp.name + " : " + newSalary);
}

//Task 10- Employee Report
console.log("\nTask 10");
for (let emp of employees) {
    console.log(`
Employee Name: ${emp.name}
Employee ID: ${emp.id}
Salary: ${emp.salary}
`);
}

//Challenge Task
console.log("\nChallenge Task");

//Total Employees
console.log("Total Employees:", employees.length);

//Highest Salary
let highest= employees[0];
for (let emp of employees) {
    if (emp.salary > highest.salary) {
        highest = emp;
    }
}

console.log("Highest Salary:", highest.salary);
console.log("Employee:", highest.name);

//Lowest Salary
let lowest = employees[0];
for (let emp of employees) {
    if (emp.salary < lowest.salary) {
        lowest = emp;
    }
}

console.log("Lowest Salary:", lowest.salary);
console.log("Employee:", lowest.name);

//Total Salary
let total= 0;
for (let emp of employees) {
    total += emp.salary;
}

console.log("Total Salary:", total);

//Employees earning more than 40000
console.log("\nEmployees earning more than ₹40,000");

for (let emp of employees) {
    if (emp.salary > 40000) {
        console.log(emp.name);
    }
}

//Search Employee by ID
console.log("\nSearch Employee by ID");

let searchEmployeeId = 103;
let employeeFound = false;

for (let emp of employees) {
    if (emp.id === searchEmployeeId) {
        console.log("Employee Found");
        console.log(emp);

        employeeFound = true;
        break;
    }
}

if (!employeeFound) {
    console.log("Employee Not Found");
}

//Add Bonus
console.log("\nSalary After Bonus");

for (let emp of employees) {
    console.log(emp.name + " : " + (emp.salary + 5000));
}

//Professional Report
console.log("\nProfessional Employee Report");

for (let emp of employees) {
    console.log(`
Employee Name: ${emp.name}
Employee ID: ${emp.id}
Salary: ₹${emp.salary}
`);
}