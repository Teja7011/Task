//Task 1 - Employee Login (Scope)
console.log("Task 1");
function employeeLogin() {
    if (true) {
        var companyName = "Stackly IT";
        let employeeId = 101;
        const password = "stack123";

        console.log("Employee ID:", employeeId);
        console.log("Password:", password);
    }

    console.log("Company Name :", companyName);
    // console.log(employeeId); // Error
    // console.log(password);   // Error
}

employeeLogin();

console.log("var is function scoped.");
console.log("let and const are block scoped.");

//Task 2 - ATM Machine (Hoisting)
console.log("\nTask 2");
console.log(balance);

var balance = 50000;

//console.log(amount); // ReferenceError
let amount = 10000;

//console.log(cash); // ReferenceError
const cash = 5000;

console.log("var => undefined");
console.log("let & const => ReferenceError");

//Task 3 - Food Delivery App (Named Function)
console.log("\nTask 3");

function orderFood(foodName) {
    console.log("Order Placed :", foodName);
}
orderFood("Chicken Biryani");

//Task 4 - WhatsApp Status (Anonymous Function)
console.log("\nTask 4");
let updateStatus = function(status){
    console.log("Status Updated :", status);
}

updateStatus("Busy in Meeting");

//Task 5 - Weather App (Arrow Function)
console.log("\nTask 5");
const weather = (city, temperature)=>{
    console.log(`${city} Temperature is ${temperature}°C`);
}

weather("Chennai",36);

//Task 6 - Flipkart Offer (IIFE)
console.log("\nTask 6");
(function(){
    console.log("Today's Offer");
    console.log("Flat 60% Discount");
})();

//Task 7 - Online Payment (Higher Order)
console.log("\nTask 7");
function paymentSuccess(){
    console.log("Payment Successful");
}

function makePayment(callback){
    console.log("Payment Processing...");
    callback();
}

makePayment(paymentSuccess);

//Task 8 - YouTube Playlist (Generator)
console.log("\nTask 8");

function* playlist(){
    yield "Video 1";
    yield "Video 2";
    yield "Video 3";
    yield "Video 4";
    return "Playlist Completed";
}

let video = playlist();

console.log(video.next().value);
console.log(video.next().value);
console.log(video.next().value);
console.log(video.next().value);
console.log(video.next().value);

//Task 9 - Student Result (Return)
console.log("\nTask 9");

function calculateTotal(){
    return 485;
}

let totalMarks = calculateTotal();
console.log("Total Marks :", totalMarks);

//Task 10 - Shopping Cart (Return)
console.log("\nTask 10");
function cartTotal(price1,price2,price3){
    return price1+price2+price3;
}

let total = cartTotal(500,800,700);
console.log("Total Amount :",total);

//Task 11 - Salary Calculator (Uncurrying)
console.log("\nTask 11");
function salary(basic,hra,bonus){
    console.log("Total Salary :",basic+hra+bonus);
}

salary(40000,10000,8000);

//Task 12 - Food Bill (Currying)
console.log("\nTask 12");
function foodBill(food){
    return function(drinks){
        return function(dessert){
            console.log(food+drinks+dessert);
        }
    }
}

foodBill(200)(100)(80);

//Task 13 - Coupon Generator
console.log("\nTask 13");
function* coupons(){
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "MEGA50";

    return "No More Coupons";
}

let coupon = coupons();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);

//Task 14 - Bank Transaction
console.log("\nTask 14");

function transactionSuccess(){
    console.log("Transaction Successful");
}

function withdraw(callback){
    console.log("Processing...");
    callback();
}

withdraw(transactionSuccess);

//Task 15 - Employee Profile (Scope)
console.log("\nTask 15");

function employeeProfile(){
    if(true){
        var company = "Stackly";
        let designation = "MERN Developer";
        const salary = 50000;
    }

    console.log("Company:",company);

    // console.log(designation); // Error
    // console.log(salary); // Error

}

employeeProfile();

console.log("company works because var is function scoped");
console.log("designation and salary throw errors because let and const are block scoped");