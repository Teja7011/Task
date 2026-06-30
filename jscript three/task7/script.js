document.writeln("<h3>Task 7 - Even Number Generator</h3>");

let evenNumbers = [];

for (let i = 1; i <= 100; i++) {

    if (i % 2 === 0) {
        console.log(i); 
        evenNumbers.push(i);
    }
}

document.writeln(evenNumbers.join(", ") + "<br><hr>");