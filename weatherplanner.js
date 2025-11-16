// Program: Weather Activity Planner
// Description: Suggests an activity based on weather conditions
// Author: [Your Name]
// Date: [Current Date]

// 1️⃣ Create weather-based variables
const temperature = 22;      // in Celsius
const isRaining = false;     // boolean
const windSpeed = 10;        // in km/h

// 2️⃣ Use logical conditions to advise on activity
if (isRaining) {
  console.log("☔ Stay indoors with hot coffee.");
} else if (temperature > 35) {
  console.log("🏊 Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
  console.log("🥶 Too cold and windy — stay home.");
} else {
  console.log("🚶 Perfect day for a walk.");
}
