let employees = [
    { id: 101, name: "Rahul", salary: 35000, experience: 3 },
    { id: 102, name: "Arun", salary: 50000, experience: 6 }
];

function addEmployee() {
    let id = Number(prompt("Enter Employee ID:"));
    let name = prompt("Enter Employee Name:");
    let salary = Number(prompt("Enter Salary:"));
    let experience = Number(prompt("Enter Years of Experience:"));
    
    employees.push({ id, name, salary, experience });
    console.log(`${name} added successfully!`);
}

function viewEmployees() {
    if (employees.length === 0) {
        console.log("No employees found.");
        return;
    }
    console.log("--- All Employees ---");
    for (let emp of employees) {
        console.log(`ID: ${emp.id} | Name: ${emp.name} | Salary: Rs.${emp.salary} | Exp: ${emp.experience} years`);
    }
}

function searchEmployee() {
    let searchId = Number(prompt("Enter Employee ID to search:"));
    let foundEmp = null;
    
    for (let emp of employees) {
        if (emp.id === searchId) {
            foundEmp = emp;
            break;
        }
    }
    
    if (foundEmp) {
        console.log(`Employee Found:\nID: ${foundEmp.id}\nName: ${foundEmp.name}\nSalary: Rs.${foundEmp.salary}\nExperience: ${foundEmp.experience} years`);
    } else {
        console.log("Employee ID not found.");
    }
}

function calculateSalary() {
    let salId = Number(prompt("Enter Employee ID to calculate total salary:"));
    let bonusPercent = Number(prompt("Enter Bonus Percentage (e.g., 10 for 10%):"));
    let salEmp = null;

    for (let emp of employees) {
        if (emp.id === salId) {
            salEmp = emp;
            break;
        }
    }

    if (salEmp) {
        let bonusAmount = salEmp.salary * (bonusPercent / 100);
        let totalSalary = salEmp.salary + bonusAmount;
        console.log(`Salary Breakdown for ${salEmp.name}:\nBase Salary: Rs.${salEmp.salary}\nBonus (${bonusPercent}%): Rs.${bonusAmount}\nGrand Total: Rs.${totalSalary}`);
    } else {
        console.log("Employee ID not found.");
    }
}

function checkExperience() {
    let expId = Number(prompt("Enter Employee ID to check tier level:"));
    let expEmp = null;

    for (let emp of employees) {
        if (emp.id === expId) {
            expEmp = emp;
            break;
        }
    }

    if (expEmp) {
        let level = "";
        if (expEmp.experience >= 5) {
            level = "Senior Tier";
        } else if (expEmp.experience >= 2) {
            level = "Mid-Senior Tier";
        } else {
            level = "Junior Tier";
        }
        console.log(`${expEmp.name} has ${expEmp.experience} years of experience and is categorized as: ${level}`);
    } else {
        console.log("Employee ID not found.");
    }
}

function deleteEmployee() {
    let delId = Number(prompt("Enter Employee ID to delete:"));
    let indexToDelete = -1;

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === delId) {
            indexToDelete = i;
            break;
        }
    }

    if (indexToDelete !== -1) {
        let removed = employees.splice(indexToDelete, 1);
        console.log(`${removed[0].name} has been removed from the system.`);
    } else {
        console.log("Employee ID not found.");
    }
}