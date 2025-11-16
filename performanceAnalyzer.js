// [Q4] Array Performance Analyzer
let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let average = (scores.reduce((sum, v) => sum + v, 0) / scores.length).toFixed(2);
let passed = scores.filter(v => v >= 50).length;
console.log({ scores, highest, lowest, average, passed });