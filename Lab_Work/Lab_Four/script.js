//Task 2


//  function addTwoNumbers(num_1, num_2) {
//     var sum=num_1 + num_2;
//     document.write("The sum of " + num_1 + " and " + num_2 + " is: " + sum);
// }

// addTwoNumbers(5, 10);

// Task 3

// function showPattern() {
//             var x = 3;
//             var y = 3;

//             // 1. Initial State
//             document.write("x = y + 1 ...Result = " + x + "<br>");

//             // 2. Addition
//             x += y; 
//             document.write("x += y ...Result = " + x + "<br>");

//             // 3. Subtraction
//             x -= y; 
//             document.write("x -+ y ...Result = " + x + "<br>");

//             // 4. Multiplication
//             x *= y; 
//             document.write("x *= y ...Result = " + x + "<br>");

//             // 5. Division
//             x /= y; 
//             document.write("x /= y ...Result = " + x + "<br>");
//         }

        
//         showPattern();

// Task 4

// function calculate() {
//             // 1. Prompt user for 3 numbers and convert them to Integers
            
//             var num1 = parseInt(prompt("Enter the first integer:"));
//             var num2 = parseInt(prompt("Enter the second integer:"));
//             var num3 = parseInt(prompt("Enter the third integer:"));

//             // 2. Calculate Sum
//             var sum = (num1) + (num2) + parseInt(num3);

//             // 3. Calculate Average
//             var average = sum / 3;

//             // 4. Return result in a dialogue box (alert)
//             alert("Sum: " + sum + "\nAverage: " + average);
//         }

//         calculate();

// Task 5

// var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// // 2. Start dropdown
// document.write("<select>");

// // 3. Use forEach loop
// fruits.forEach(function(fruit) {
//     document.write("<option value='" + fruit + "'>" + fruit + "</option>");
// });

// // 4. Close dropdown
// document.write("</select>");


// Task 6

// var regNo = prompt("Enter Registration Number:");
// var name = prompt("Enter Student Name:");
// var semester = prompt("Enter Semester:");

// // 2. Take Subject Marks
// var web = parseInt(prompt("Enter Web Engineering Marks: "), 10);
// var cp = parseInt(prompt("Enter Computer Programming Marks: "), 10);
// var oop = parseInt(prompt("Enter Object Oriented Programming Marks: "), 10);
// var dsa = parseInt(prompt("Enter Data Structures & Algorithms Marks: "), 10);
// var ai = parseInt(prompt("Enter Artificial Intelligence Marks: "), 10);

// // 3. Calculate Total & Percentage
// var total = web + cp + oop + dsa + ai;
// var percentage = (total / 500) * 100;

// // 4. Determine Grade
// var grade;

// if (percentage >= 80) {
//     grade = "A";
// } else if (percentage >= 70) {
//     grade = "B";
// } else if (percentage >= 60) {
//     grade = "C";
// } else if (percentage >= 50) {
//     grade = "D";
// } else {
//     grade = "F";
// }


// document.write("<h2>Student Grade Sheet</h2>");
// document.write("<table border='1' cellpadding='10' >");

// document.write("<tr><th>Registration No</th><td>" + regNo + "</td></tr>");
// document.write("<tr><th>Name</th><td>" + name + "</td></tr>");
// document.write("<tr><th>Semester</th><td>" + semester + "</td></tr>");

// document.write("<tr><th>Web Engineering</th><td>" + web + "</td></tr>");
// document.write("<tr><th>Computer Programming</th><td>" + cp + "</td></tr>");
// document.write("<tr><th>OOP</th><td>" + oop + "</td></tr>");
// document.write("<tr><th>DSA</th><td>" + dsa + "</td></tr>");
// document.write("<tr><th>Artificial Intelligence</th><td>" + ai + "</td></tr>");

// document.write("<tr><th>Total Marks</th><td>" + total + " / 500</td></tr>");
// document.write("<tr><th>Percentage</th><td>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("<tr><th>Final Grade</th><td>" + grade + "</td></tr>");

// document.write("</table>");

// Task 7


// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// // 2. Take Inputs

// var num1 = parseFloat(prompt("Enter first number:"));
// var operator = prompt("Enter operator (+, -, *, /):");
// var num2 = parseFloat(prompt("Enter second number:"));

// // 3. Operator Mapping Object (NO if-else)

// var operations = {
//     "+": add,
//     "-": subtract,
//     "*": multiply,
//     "/": divide
// };

// // 4. Call Corresponding Function

// var result = operations[operator](num1, num2);

// // 5. Display Result

// alert("Result: " + result);