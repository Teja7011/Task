document.writeln("<h3> Task 8 - Mobile Number Validation</h3>");

let mobileNumber = prompt("Enter a 10-digit mobile number:", "");


let firstChar = mobileNumber.charAt(0);

console.log(`User Input Data -> Mobile Number: ${mobileNumber}`);

if (mobileNumber.length === 10 && (firstChar === '6' || firstChar === '7' || firstChar === '8' || firstChar === '9')) {
    console.log("Valid Mobile Number");
    document.writeln("Valid Mobile Number<br><hr>");
} else {
    console.log("Invalid Mobile Number");
    document.writeln("Invalid Mobile Number<br><hr>");
}