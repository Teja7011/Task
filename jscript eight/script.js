//Task 1-Employee Age Calculator
console.log("Task 1");

//Employee DOB(Example:15 July 2001)
let dob=new Date("2001-07-15");

//Current Date
let today=new Date();

//Calculate Age
let age=today.getFullYear()-dob.getFullYear();

//Check if birthday has occurred this year
let monthDifference=today.getMonth()-dob.getMonth();

if(
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < dob.getDate())
) {
    age--;
}

console.log("Date of Birth :", dob.toDateString());
console.log("Employee Age :", age + " Years");

//Task 2-Online Appointment Scheduler
console.log("\nTask 2");
let appointment=new Date();

appointment.setFullYear(2027);
appointment.setMonth(11); //December (0 = January)
appointment.setDate(15);
appointment.setHours(10);
appointment.setMinutes(30);
appointment.setSeconds(0);

console.log("Updated Appointment :");
console.log(appointment.toString());

//Task 3-Multi-Country Meeting Time
console.log("\nTask 3");
let currentDate=new Date();
console.log(
    "India :",
    currentDate.toLocaleString("en-IN",{
        timeZone:"Asia/Kolkata"
    })
);

console.log(
    "New York:",
    currentDate.toLocaleString("en-US",{
        timeZone: "America/New_York"
    })
);

console.log(
    "Tokyo:",
    currentDate.toLocaleString("en-JP",{
        timeZone:"Asia/Tokyo"
    })
);

//Task 4-Product Warranty Expiry
console.log("\nTask 4");
let purchaseDate=new Date();
let warrantyExpiry=new Date(purchaseDate);
warrantyExpiry.setFullYear(warrantyExpiry.getFullYear()+2);

console.log("Purchase Date:", purchaseDate.toDateString());
console.log("Warranty Expiry:", warrantyExpiry.toDateString());

//Task 5-Digital Clock
console.log("\nTask 5");
console.log("Live Digital Clock Started...");
setInterval(function() 
{
    let time=new Date();
    console.log(time.toLocaleTimeString());
}, 1000);