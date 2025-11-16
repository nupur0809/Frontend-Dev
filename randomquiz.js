// Program: Random Math Quiz Generator
// Description: Generates random arithmetic problems and calculates the answer
// Author: [Your Name]
// Date: [Current Date]

// 1️⃣ Generate two random numbers between 1 and 20
let num1 = Math.ceil(Math.random() * 20);
let num2 = Math.ceil(Math.random() * 20);

// 2️⃣ Randomly pick an operator
const operators = ['+', '-', '*', '/'];
const operator = operators[Math.floor(Math.random() * operators.length)];

// 3️⃣ Calculate correct answer using switch
let answer;
switch (operator) {
  case '+':
    answer = num1 + num2;
    break;
  case '-':
    answer = num1 - num2;
    break;
  case '*':
    answer = num1 * num2;
    break;
  case '/':
    answer = (num1 / num2).toFixed(2);
    break;
}

// 4️⃣ Print question and correct answer
console.log(`🧠 Solve: ${num1} ${operator} ${num2}`);
console.log(`👉 Correct Answer: ${answer}`);
