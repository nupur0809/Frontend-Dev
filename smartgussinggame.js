// Program: Smart Guessing Game
// Description: Checks if a user's guess matches or is close to a secret number
// Author: [Your Name]
// Date: [Current Date]

// 1️⃣ Generate a random secret number between 1 and 50
const secretNumber = Math.floor(Math.random() * 50) + 1;

// 2️⃣ Test user guess
const userGuess = 23;  // Test value, replace with user input as needed

// 3️⃣ Use nested conditions and logical operators to compare values
if (userGuess === secretNumber) {
  console.log("🎉 Correct guess!");
} else {
  if (Math.abs(userGuess - secretNumber) <= 3) {
    console.log("👌 Very close!");
  } else if (userGuess > secretNumber) {
    console.log("🔺 Too high!");
  } else {
    console.log("🔻 Too low!");
  }
}

console.log(`🔢 Secret Number was: ${secretNumber}, Your Guess: ${userGuess}`);
