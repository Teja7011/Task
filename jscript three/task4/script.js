document.writeln("<h3>Task 4 - Food Ordering App</h3>");

let menuMessage = "Menu:\n1. Pizza\n2. Burger\n3. Shawarma\n4. Biryani\n5. Juice\n\nEnter your choice number (1-5):";
let choice = Number(prompt(menuMessage, ""));

console.log(`User Input Data -> Choice: ${choice}`);

switch (choice) {
    case 1:
        console.log("You Ordered Pizza");
        document.writeln("You Ordered Pizza<br><hr>");
        break;
    case 2:
        console.log("You Ordered Burger");
        document.writeln("You Ordered Burger<br><hr>");
        break;
    case 3:
        console.log("You Ordered Shawarma");
        document.writeln("You Ordered Shawarma<br><hr>");
        break;
    case 4:
        console.log("You Ordered Biryani");
        document.writeln("You Ordered Biryani<br><hr>");
        break;
    case 5:
        console.log("You Ordered Juice");
        document.writeln("You Ordered Juice<br><hr>");
        break;
    default:
        console.log("Invalid Choice");
        document.writeln("Invalid Choice. Please select a number from 1 to 5.<br><hr>");
}