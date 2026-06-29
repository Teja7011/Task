let username = "admin";
let password = "1234";

let enteredUser = prompt("Enter username:");
let enteredPass = prompt("Enter password:");

if (enteredUser === username && enteredPass === password) {
    console.log("Login Successful");
    document.writeln("Login Successful<br><br>");
} else {
    console.log("Invalid Credentials");
    document.writeln("Invalid Credentials<br><br>");
}