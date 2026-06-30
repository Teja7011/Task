let userName = prompt("Enter Name:", "Naveen");
let userAge = prompt("Enter Age:", "25");
let acceptsTerms = confirm("Do you accept Terms?");

if (userName && userAge && acceptsTerms === true) {
    alert("Registered Successfully");
    
    document.body.innerHTML += `
        <h3>🟢 Task 12 - User Registration</h3>
        <p>Welcome ${userName}</p>
        <p>Age: ${userAge}</p>
        <p>Terms Accepted: Yes</p>
        <strong>Status: Registered Successfully</strong>
        <hr>
    `;
} else {
    alert("Registration Failed");
    
    document.body.innerHTML += `
        <h3>Task 12 - User Registration</h3>
        <strong>Status: Registration Cancelled/Failed</strong>
        <hr>
    `;
}