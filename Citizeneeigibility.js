// Program: Citizen Eligibility Validator
// Description: Evaluates eligibility for voting, driving, and passport based on age and citizenship
// Author: [Your Name]
// Date: [Current Date]

// 1️⃣ Declare age and citizenship status
const age = 19;
const isCitizen = true;

// 2️⃣ Check eligibility using nested if-else and logical operators
if (isCitizen && age >= 18) {
  if (age >= 21) {
    console.log("🟢 Eligible for all services.");
  } else {
    console.log("🔵 Eligible to vote only."); // Age 18-20 for vote only
  }
} else if (!isCitizen && age >= 18) {
  console.log("🟡 Only age criteria met.");
} else {
  console.log("🔴 Not eligible yet.");
}
