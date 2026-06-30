document.writeln("<h3>Task 5 - E-Commerce Discount</h3>");

let purchaseAmount = Number(prompt("Enter total purchase amount:", ""));
let isPremiumUser = confirm("Are you a Premium User? (Click OK for Yes, Cancel for No)");

console.log(`User Input Data -> Purchase Amount: ${purchaseAmount}, Premium Status: ${isPremiumUser}`);

let discountPercentage = 10;

if (purchaseAmount > 5000 && isPremiumUser === true) {
    discountPercentage = 20; 
}

let discountAmount = (purchaseAmount * discountPercentage) / 100;
let finalPrice = purchaseAmount - discountAmount;


console.log(`Original Price: ${purchaseAmount}`);
console.log(`Discount Applied: ${discountPercentage}% (${discountAmount})`);
console.log(`Final Price: ${finalPrice}`);

document.writeln(`Original Price: ${purchaseAmount}<br>`);
document.writeln(`Discount (${discountPercentage}%): ${discountAmount}<br>`);
document.writeln(`Final Price: ${finalPrice}<br><hr>`);