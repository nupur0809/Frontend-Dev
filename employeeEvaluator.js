// [Q10] Departmental Employee Evaluator
const departments = [["HR", 72], ["Finance", 88], ["Tech", 95], ["Support", 63]];
departments.forEach(([dept, score]) => console.log(`${dept}: ${score >= 90 ? "Excellent" : score >= 75 ? "Good" : score >= 60 ? "Average" : "Needs Improvement"}`));