//Task 1- Company Welcome Function
console.log("Task 1");

function welcome() {
    console.log("Welcome to Stackly IT");
}

welcome();

//Task 2- Employee Details
console.log("\nTask 2");

function employeeDetails(name, department, salary) {
    console.log("Employee Name:", name);
    console.log("Department:", department);
    console.log("Salary:", salary);
}

employeeDetails("Naveen", "Developer", 30000);

//Task 3- Calculate Bonus
console.log("\nTask 3");

function calculateBonus(salary, bonus) {
    console.log("Total Salary :", salary + bonus);
}

calculateBonus(40000, 5000);

//Task 4- Student Result
console.log("\nTask 4");

function studentResult(marks) {
    if (marks >= 35) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

studentResult(45);

//Task 5- Return Employee Name
console.log("\nTask 5");

function getEmployeeName() {
    return "Naveen";
}

let employeeName = getEmployeeName();

console.log(employeeName);

//Task 6- Product Price
console.log("\nTask 6");

function productPrice() {
    return 25000;
}

let price = productPrice();

let gst = price * 0.18;

console.log("Product Price :", price);
console.log("GST :", gst);
console.log("Total :", price + gst);

//Task 7- Scope
console.log("\nTask 7");

function demo() {
    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

    }

    console.log(a);

    // console.log(b); // Error
    // console.log(c); // Error
}

demo();

console.log("var is function scoped.");
console.log("let and const are block scoped.");

//Task 8- Hoisting
console.log("\nTask 8");
console.log(a);

var a = 100;

//console.log(b); // ReferenceError

let b = 200;

console.log("var is hoisted with undefined.");
console.log("let is hoisted but stays in Temporal Dead Zone.");

//Task 9- Named Function
console.log("\nTask 9");

function greeting() {
    console.log("Good Morning");
}

greeting();

//Task 10- Anonymous Function
console.log("\nTask 10");
let welcomeEmployee = function () {
    console.log("Welcome Employee");
};

welcomeEmployee();

//Task 11- Arrow Function
console.log("\nTask 11");

const training = () => {
    console.log("JavaScript Training");
};

training();

//Task 12- Return Function
console.log("\nTask 12");

function company() {
    return "Stackly";
}

let companyName = company();

console.log("Welcome", companyName);

//Task 13- Higher Order Function
console.log("\nTask 13");

function dashboard() {
    console.log("Dashboard Loaded");
}

function login(callback) {

    console.log("Login Successful");

    callback();

}

login(dashboard);

//Task 14- Callback Function
console.log("\nTask 14");

function delivered() {
    console.log("Delivered");
}
function preparingFood(callback) {

    console.log("Preparing Food");

    callback();

}
function orderReceived(callback) {

    console.log("Order Received");

    callback(delivered);

}

orderReceived(preparingFood);

//Task 15- Generator Function
console.log("\nTask 15");

function* coupons() {
    yield "10% Discount";
    yield "20% Discount";
    yield "30% Discount";
    yield "Better Luck Next Time";
}

let coupon = coupons();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);

//Task 16- Generator Return
console.log("\nTask 16");

function* fruits() {
    yield "Apple";
    yield "Orange";
    yield "Banana";
}

let fruit = fruits();

console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);

//Task 17- Currying
console.log("\nTask 17");
function discount(price) {
    return function(discountPercent) {
        let finalPrice = price - (price * discountPercent / 100);
        console.log("Final Price :", finalPrice);
    }
}
discount(1000)(10);

//Task 18- Company Salary
console.log("\nTask 18");
function salary(salaryAmount) {
    return function(bonus) {
        return function(allowance) {
            console.log("Total Salary :", salaryAmount + bonus + allowance);
        }
    }
}
salary(30000)(5000)(2000);

//Task 19- Login System
console.log("\nTask 19");

function dashboardLoad() {
    console.log("Load Dashboard");
}

function loginSuccess(callback) {
    console.log("Login Successful");
    callback();
}

function verifyPassword(callback) {
    console.log("Verify Password");
    callback(dashboardLoad);

}

function enterUsername(callback) {
    console.log("Enter Username");
    callback(loginSuccess);
}

enterUsername(verifyPassword);

//Mini Project
console.log("\n Mini Project");

let employee = {
    name: "Naveen",
    department: "Developer",
    salary: 30000
};

//Display Employee
console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("Salary:", employee.salary);

//Salary Function
function finalSalary(salary, bonus) {
    return salary + bonus;
}

let totalSalary = finalSalary(employee.salary, 5000);

console.log("Final Salary:", totalSalary);

//Arrow Function
const welcomeMessage = () => {
    console.log("Welcome Employee");
};

welcomeMessage();

//Anonymous Function
let department = function () {
    console.log("Department:", employee.department);
};

department();

//Higher Order Function
function loadDashboard() {
    console.log("Employee Dashboard Loaded");
}

function loginSystem(callback) {
    console.log("Login Successful");
    callback();
}

loginSystem(loadDashboard);

//Generator
function* monthlyBonus() {
    yield "₹1000 Bonus";
    yield "₹2000 Bonus";
    yield "₹3000 Bonus";
}

let bonus = monthlyBonus();

console.log(bonus.next().value);
console.log(bonus.next().value);
console.log(bonus.next().value);

//Currying
function tax(salary) {
    return function (taxPercent) {
        let finalAmount = salary - (salary * taxPercent / 100);
        console.log("Salary After Tax :", finalAmount);
    }
}

tax(totalSalary)(10);

//Final Report
console.log("\nEmployee Report");
console.log("...");
console.log("Name:", employee.name);
console.log("Department:", employee.department);
console.log("Final Salary:", totalSalary);
console.log("...");