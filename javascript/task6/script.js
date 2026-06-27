let username = prompt("Enter your username:");
if (username === null || username.trim() === "") {
    console.warn("Warning: Username is empty.");   
    document.writeln("Warning: Username is empty.");
} else {
    console.log("Login Successful: " + username);
    document.writeln("Login Successful: " + username);
}