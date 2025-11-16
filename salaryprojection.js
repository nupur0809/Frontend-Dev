// Program: Employee Salary Projection
// Description: Computes salary over 5 years with yearly increments
// Author: [Your Name]
// Date: [Current Date]

// 1️⃣ Declare current salary and increment rate
let salary = 50000;  // Starting salary
const incrementRate = 10; // Annual increment rate (10%)

// 2️⃣ Create an array to store yearly salary
const salaryTable = [];

for (let year = 1; year <= 5; year++) {
  salary += salary * (incrementRate / 100);   // Apply increment
  salaryTable.push({
    Year: `Year ${year}`,
    Salary: Math.round(salary),               // Rounded salary
  });
}

// 3️⃣ Print salary growth table
console.table(salaryTable);
