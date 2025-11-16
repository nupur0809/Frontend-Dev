// Program: Monthly Expense Tracker
// Description: Calculates total and average monthly expenses with a 10% tax applied
// Author: [Your Name]
// Date: [Current Date]

// 1️⃣ Declare an array of expenses for 5 categories (in order: food, travel, rent, bills, leisure)
const expenses = [5000, 2000, 12000, 3000, 1500]; // Values in ₹

// 2️⃣ Calculate total expenses
let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i]; // Accumulate each category's expense
}

// 3️⃣ Calculate average expenses
const average = total / expenses.length;

// 4️⃣ Add 10% tax to total using arithmetic and assignment operator
let taxRate = 0.1; // 10%
let totalWithTax = total; // Clone total
totalWithTax += totalWithTax * taxRate; // Add 10% tax

// 5️⃣ Use toFixed(2) to round values for neat formatting
total = total.toFixed(2);
const avgRounded = average.toFixed(2);
const finalAmount = totalWithTax.toFixed(2);

// 6️⃣ Display the final results
console.log(`📊 Monthly Expense Summary`);
console.log(`Total Expense: ₹${total}`);
console.log(`Average Expense per Category: ₹${avgRounded}`);
console.log(`Total After 10% Tax: ₹${finalAmount}`);
