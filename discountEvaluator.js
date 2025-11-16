// [Q8] Dynamic Discount Evaluator
const cart = [{ item: "Laptop", category: "electronics", price: 45000 },{ item: "Shoes", category: "fashion", price: 2500 },{ item: "Book", category: "education", price: 600 }];
let total = 0;
cart.forEach(p => total += p.price * (p.category === "electronics" ? 0.90 : p.category === "fashion" ? 0.95 : 1));
if (total > 50000) total *= 0.95;
console.log(`Final Total: ₹${total.toFixed(2)}`);