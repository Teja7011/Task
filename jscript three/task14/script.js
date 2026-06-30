let burgerPrice = 150;
let pizzaPrice = 300;
let juicePrice = 80;

let subtotal = burgerPrice + pizzaPrice + juicePrice;
let gstAmount = subtotal * (18 / 100);
let grandTotal = subtotal + gstAmount;

console.log("--- Restaurant Bill ---");
console.log("Subtotal: Rs. " + subtotal);
console.log("GST (18%): Rs. " + gstAmount);
console.log("Grand Total: Rs. " + grandTotal);

document.writeln("<h3>--- Restaurant Bill ---</h3>");
document.writeln("Subtotal: Rs. " + subtotal + "<br>");
document.writeln("GST (18%): Rs. " + gstAmount + "<br>");
document.writeln("<strong>Grand Total: Rs. " + grandTotal + "</strong><br>");