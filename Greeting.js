// Program: Personalized Login Greeting
// Description: Greets the user based on the current time of day
// Author: [Your Name]
// Date: [Current Date]

// 1️⃣ Declare a variable for the user's name
const userName = "Nupur"; // You can change this or ask through prompt()

// 2️⃣ Use Date() object to get the current hour (0–23 format)
const currentHour = new Date().getHours(); // Fetch current hour

// 3️⃣ Initialize greeting message based on the time of day using conditional statements
let greetingMessage; // To store the final greeting message

if (currentHour < 12) {
  greetingMessage = `Good Morning, ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
  greetingMessage = `Good Afternoon, ${userName}!`;
} else {
  greetingMessage = `Good Evening, ${userName}!`;
}

// 4️⃣ Print the greeting message to the console
console.log(greetingMessage);
