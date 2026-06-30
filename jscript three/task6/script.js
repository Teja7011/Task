document.writeln("<h3>Task 6 - Attendance Report</h3>");

for (let day = 1; day <= 30; day++) {
    let reportString = `Day ${day} Present`;

    console.log(reportString);
    
    document.writeln(`${reportString}<br>`);
}

document.writeln("<hr>");