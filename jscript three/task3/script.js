document.writeln("<h3>Task 3 - ATM Withdrawal</h3>");

let balance = 5000; 
let withdraw = Number(prompt(`Your current balance is ${balance}. Enter withdrawal amount:`, ""));

console.log(`User Input Data -> Initial Balance: ${balance}, Requested Withdrawal: ${withdraw}`);

if (withdraw <= balance && withdraw % 100 === 0) {
    balance -= withdraw;
    console.log("Transaction Successful");
    console.log(`Remaining Balance : ${balance}`);
    
    document.writeln("Transaction Successful<br>");
    document.writeln(`Remaining Balance : ${balance}<br><hr>`);
} else {
    
    let failureReason = (withdraw > balance) ? "Insufficient Balance" : "Amount must be a multiple of 100";
    
    console.log(`Transaction Failed: ${failureReason}`);
    document.writeln(`Transaction Failed: ${failureReason}<br><hr>`);
}