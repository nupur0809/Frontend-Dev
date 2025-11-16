// [Q9] Odd–Even Number Analyzer
let results = [];
for (let i = 1; i <= 30; i++) results.push(i % 15 === 0 ? "FizzBuzz" : i % 2 === 0 ? "Even" : "Odd");
console.log(results);