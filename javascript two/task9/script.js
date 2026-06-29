let foodPrice = 350;
let deliveryCharge = 50;

let totalBill = foodPrice + deliveryCharge;
let gst = totalBill * 0.05; 
let grandTotal = totalBill + gst;


console.log("Total Bill: " + totalBill);
console.log("GST 5%: " + gst);
console.log("Grand Total: " + grandTotal);

document.writeln("Total Bill: " + totalBill + "<br>");
document.writeln("GST 5%: " + gst + "<br>");
document.writeln("Grand Total: " + grandTotal + "<br><br>");