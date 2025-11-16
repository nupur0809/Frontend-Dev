// [Q1] Scope Conflict Resolver
let bonus = 5000;
function calculateSalary(isPermanent) {
  let salary = 40000;
  if (isPermanent) salary += bonus;
  console.log(`Total Salary for ${isPermanent ? "Permanent" : "Temporary"} Employee: ${salary}`);
}
calculateSalary(true);
calculateSalary(false);
console.log(`Global Bonus Value: ${bonus}`);