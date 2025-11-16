// [Q6] Event-Based Counter Simulation
let count = 0;
function increment() { count++; console.log(count); }
function decrement() { count--; console.log(count); }
function simulate() { increment(); decrement(); }
simulate();