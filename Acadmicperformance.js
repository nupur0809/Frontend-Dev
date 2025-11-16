// Program: Academic Performance Evaluator
// Description: Evaluates whether a student is promoted based on marks in 5 subjects
// Author: [Your Name]
// Date: [Current Date]

// 1️⃣ Input marks for 5 subjects using an array
const marks = [80, 90, 75, 85, 92]; // Example input, modify as needed

// 2️⃣ Validate: if any subject < 35 → auto Detained
let isFailed = false;
let totalMarks = 0;

for (let mark of marks) {
  if (mark < 35) {
    isFailed = true;
    break;
  }
  totalMarks += mark;
}

if (isFailed) {
  console.log("🚫 Detained (Failed in at least one subject)");
} else {
  // 3️⃣ Calculate average and percentage
  const average = totalMarks / marks.length;
  const percentage = (totalMarks / (marks.length * 100)) * 100;

  // 4️⃣ Evaluate promotion criteria
  if (percentage >= 85) {
    console.log(`🎉 Promoted with Distinction - ${percentage.toFixed(2)}%`);
  } else if (percentage >= 50) {
    console.log(`👍 Promoted - ${percentage.toFixed(2)}%`);
  } else {
    console.log(`🚫 Detained - ${percentage.toFixed(2)}%`);
  }
}
