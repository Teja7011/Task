//Task 1-Employee Salary Dashboard
//Concepts: map(),filter(),find(),reduce()
console.log("Task 1");
let employees = [
    { name:"Naveen",salary:45000 },
    { name:"John",salary:55000 },
    { name:"Arun",salary:120000 },
    { name:"David",salary:70000 }
];

//Display all employee names
let employeeNames=employees.map(emp=>emp.name);
console.log("Employee Names:",employeeNames);

//Employees with salary>50000
let highSalary=employees.filter(emp=>emp.salary>50000);
console.log("Salary>50000:");
console.log(highSalary);

//First employee with salary>100000
let highestEmployee=employees.find(emp=>emp.salary>100000);
console.log("First Employee Above 100000:");
console.log(highestEmployee);

//Total salary expense
let totalSalary=employees.reduce((total,emp)=>total+emp.salary,0);
console.log("Total Salary Expense:",totalSalary);

//Task 2-E-Commerce Cart Management
//Concepts:Spread,Rest
console.log("\nTask 2");
let electronics=["Laptop","Mouse"];
let accessories=["Keyboard","Monitor"];

//Merge arrays
let products=[...electronics,...accessories];
console.log("Merged Products:",products);

//Add new product without changing original
let updatedProducts=[...products,"Webcam"];
console.log("Updated Products:",updatedProducts);
console.log("Original Products:",products);

//Rest Operator
function checkout(...items) 
{
    console.log("Products:",items);
    console.log("Total Products:",items.length);
}

checkout("Laptop","Mouse","Keyboard","Monitor");

//Task 3-Student Report Card
//Concepts:Object&Array Destructuring
console.log("\nTask 3");
let student = 
{
    name:"Rahul",
    department:"MERN",
    marks:[90, 85, 95, 88, 92]
};

//Object Destructuring
let{ name,department,marks}=student;

//Array Destructuring
let[sub1,sub2,sub3]=marks;

let totalMarks=marks.reduce((sum,mark)=>sum+mark,0);
let average = totalMarks / marks.length;

console.log("Student Name:",name);
console.log("Department:",department);
console.log("First Subject:",sub1);
console.log("Second Subject:",sub2);
console.log("Third Subject:",sub3);
console.log("Total Marks:",totalMarks);
console.log("Average Marks:",average);

//Task 4-Product Search System
//Concepts: String Methods
console.log("\nTask 4");
let searchText="   Laptop   ";

//Remove spaces
let trimmed=searchText.trim();
console.log("Trim:",trimmed);

//Lowercase
let lower=trimmed.toLowerCase();
console.log("Lowercase:",lower);

//Search
let productsList="Laptop Mouse Keyboard Monitor";

if(productsList.toLowerCase().includes(lower)) 
{
    console.log("Product Found");
} else {
    console.log("Product Not Found");
}

//Replace
let highlighted=productsList.replace("Laptop","[Laptop]");
console.log(highlighted);

//Task 5-Movie Collection Manager
//Concepts:Array Methods
console.log("\nTask 5");
let movies=["Leo","GOAT","Dragon"];

//push()
movies.push("Coolie");
console.log("After Push:",movies);

//pop()
movies.pop();
console.log("After Pop:",movies);

//shift()
movies.shift();
console.log("After Shift:",movies);

//unshift()
movies.unshift("Retro");
console.log("After Unshift:",movies);

//splice()
movies.splice(1, 1,"Master");
console.log("After Splice:",movies);

//Sort Ratings Descending
let ratings=[4.2,4.8,3.9,5.0,4.5];
ratings.sort((a, b)=>b-a);

console.log("Ratings Descending:",ratings);

//includes()
console.log("Movie Exists:",movies.includes("Master"));