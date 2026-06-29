let balance = Number(prompt("Enter Current Balance:"));
let withdrawAmount = Number(prompt("Enter Withdraw Amount:"));

if (withdrawAmount <= balance) {
    let remainingBalance = balance - withdrawAmount;
    console.log("Transaction Successful");
    console.log("Remaining Balance : " + remainingBalance);
    
    document.writeln("Transaction Successful<br>");
    document.writeln("Remaining Balance : " + remainingBalance + "<br><br>");
} else {
    console.log("Insufficient Balance");
    document.writeln("Insufficient Balance<br><br>");
}