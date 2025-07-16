//  HYDRATION HABIT TRACKER - Example using  Unit 0 Concepts

//  PSEUDOCODE - ORGANIZATION & TIME MANAGEMENT
// 1. Create array of water intake entries for the day
// 2. Loop through each entry and check if it meets the daily goal
// 3. Count successful hydration entries
// 4. Show total and provide motivational message

// 1. VALUES, DATA TYPES, AND OPERATIONS
let totalGlasses = 0; // Number - track how many glasses in total
let dailyGoal = 8; // Number - target daily glasses
let encouragement = ""; // String - message to show at the end

// 2. BUILDING ARRAYS
let waterLog = [2, 1, 1, 2, 1, 1]; // Each number represents how many glasses drunk in each session

// 3. USING ARRAYS & 4. WORKING WITH LOOPS
for (let i = 0; i < waterLog.length; i++) {
  totalGlasses += waterLog[i]; // Add glasses from each session
  console.log(" You drank " + waterLog[i] + " glasses in session " + (i + 1)); // STRINGING CHARACTERS TOGETHER
}

// 5. CONTROL STRUCTURES AND LOGIC
console.log("\n Total glasses today: " + totalGlasses);

if (totalGlasses >= dailyGoal) {
  encouragement = "Awesome! You're staying well hydrated ";
} else if (totalGlasses >= 5) {
  encouragement = "Nice effort! Try to hit your goal tomorrow ";
} else {
  encouragement = "Don’t forget to drink water! You got this ";
}

console.log("\n " + encouragement);

