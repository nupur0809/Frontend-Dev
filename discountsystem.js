// Program: Progressive Discount System
// Description: Applies discount tiers based on shopping total
// Author: [Your Name]
// Date: [Current Date]

// 1️⃣ Input total purchase amount
let totalAmount = 7500; // Modify as needed

// 2️⃣ Determine discount percentage
let discountPercentage = 0;

if (totalAmount >= 10000) {
  discountPercentage = 25;
} else if (totalAmount >= 5000) {
  discountPercentage = 15;
} else if (totalAmount >= 2000) {
  discountPercentage = 5;
}

// 3️⃣ Calculate final price after discount
let discountAmount = (totalAmount * discountPercentage) / 100;
let finalPrice = totalAmount - discountAmount;

// 4️⃣ Print the summary
console.log(`🛒 Original Total: ₹${totalAmount}`);
console.log(`💸 Discount: ${discountPercentage}%`);
console.log(`🏷️ Final Price After Discount: ₹${Math.round(finalPrice)}`);
