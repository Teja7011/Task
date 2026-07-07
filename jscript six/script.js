//Task 1-Employee bonus(Spread operator)
console.log("Task 1");
let employee={
    name:"Naveen",
    salary:35000
};
let newEmployee={
    ...employee,
    bonus:5000,
    department:"Developer"
};
console.log(newEmployee);

//Task 2-Shopping cart(Rest operator)
console.log("\nTask 2");
function calculateBill(...prices) {
    let total=0;
    for (let price of prices) {
        total+=price;
    }
    console.log("Items:",prices.length);
    console.log("Total:",total);
}
calculateBill(10, 20, 30, 40);

//Task 3-Student details(Destructuring)
console.log("\nTask 3");
let student={
    name:"Rahul",
    age:22,
    course:"MERN",
    city:"Chennai"
};
let { name, age, course, city } = student;
console.log(name);
console.log(age);
console.log(course);
console.log(city);

//Task 4-Online food order
console.log("\nTask 4");
let foods = ["Pizza","Burger","Fries"];
foods.push("Coke");
foods.push("Ice Cream");
foods.splice(2,1);
console.log(foods);

//Task 5-Bank transactions
console.log("\nTask 5");
let transactions=[1000,2000,3000,4000];
transactions.shift();
transactions.unshift(500);
console.log(transactions);

//Task 6-Company departments
console.log("\nTask 6");
let dept1=["HR","Sales"];
let dept2=["Developer","Testing"];
let departments = dept1.concat(dept2);
console.log(departments);

//Task 7-Product search
console.log("\nTask 7");
let products=[
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
];

if(products.includes("Keyboard")) 
{
    console.log("Available");
}
else
{
    console.log("Not Available");
}

//Task 8-User login(Callback)
console.log("\nTask 8");
function dashboard() 
{
    console.log("Dashboard Opened");
}

function login(callback) 
{
    console.log("Login Success");
    callback();
}
login(dashboard);

//Task 9-Coupon generator
console.log("\nTask 9");
function* coupons() 
{
    yield "WELCOME10";
    yield "SAVE20";
    yield "MEGA50";
    yield "FREE100";
}
let coupon = coupons();
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);

//Task 10-Course registration(Currying)
console.log("\nTask 10");
function createcourse(courseName) 
{
    return function(batch) {
        return function(room) {
            console.log("Course:",courseName);
            console.log("Batch:",batch);
            console.log("Room:",room);
        }
    }
}
createcourse("JavaScript")("Morning")("Batch-36");

//Task 11-Movie collection
console.log("\nTask 11");
let movies=[
    "Leo",
    "GOAT",
    "Dragon",
    "Retro",
    "Coolie"
];
let selectedMovies = movies.slice(2,4);
console.log(selectedMovies);

//Task 12-Employee IDs
console.log("\nTask 12");
let ids=[101,102,103,104,105];
ids.splice(2,2,501,502);
console.log(ids);

//Task 13-Sort product prices
console.log("\nTask 13");
let price=[5000,250,700,12000,50];
price.sort(function(a, b){
    return a - b;
});
console.log(price);

//Task 14-Nested categories
console.log("\nTask 14");
let data=[
    "Electronics",
    [
        "Mobiles",
        [
            "Samsung",
            "Apple"
        ]
    ]
];
let [category,[subCategory,[brand1,brand2]]]=data;
console.log(category);
console.log(subCategory);
console.log(brand1);
console.log(brand2);

//Task 15-Company team
console.log("\nTask 15");
let developers=[
    "John",
    "David"
];
let designers=[
    "Ram",
    "Kiran"
];
let team=[...developers, ...designers];
console.log(team);

// Task 16-Return function
console.log("\nTask 16");
function calculateSalary(salary,bonus) 
{
    return salary+bonus;
}
let finalSalary=calculateSalary(30000,5000);
console.log("Final Salary:",finalSalary);

//Task 17-Scope checking
console.log("\nTask 17");
function checkScope() {
    if(true){
        var company="Stackly";
        let department="Developer";
        const salary=50000;
    }
    console.log(company);
// console.log(department);// Error
// console.log(salary);// Error
}
checkScope();
console.log("var works because it is function scoped.");
console.log("let and const give errors because they are block scoped.");

//Task 18-Customer orders
console.log("\nTask 18");
let orders=[
    "Pizza",
    "Burger",
    "Pizza",
    "Sandwich",
    "Pizza"
];
console.log("First Index:",orders.indexOf("Pizza"));
console.log("Last Index:",orders.lastIndexOf("Pizza"));

//Task 19-Flatten Product Categories
console.log("\nTask 19");
let items=[
    1,
    2,
    [
        3,
        4,
        [
            5,
            6
        ]
    ]
];
console.log(items.flat(2));

//Task 20-Mini shopping cart challenge
console.log("\nTask 20");
let cart=["Mouse","Keyboard"];
cart.push("Monitor");
cart.unshift("Laptop");
cart.splice(2,1);
if (cart.includes("Mouse")) {
    console.log("Mouse Available");
} else {
    console.log("Mouse Not Available");
}
let accessories = ["Webcam","Speaker"];
let finalCart = [...cart, ...accessories];
console.log(finalCart);