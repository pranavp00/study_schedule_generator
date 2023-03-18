var subjects = [];
var basicinfo = [];

function storinginfo(){
    var dict = {};
    dict["name"] = document.getElementById("name").value;
    dict["edu_lvl"] = document.getElementById("edu_level").value;
    dict["ava_time"] = document.getElementById("ava_time").value;

}
function storingdata(){
    var dict = {};
    dict["name"] = document.getElementById("subject").value;
    dict["priority"] = document.getElementById("priority").value;
    dict["goal"] = document.getElementById("goal").value;
    dict["difficulty"] = document.getElementById("difficulty").value;
    dict["time"] = document.getElementById("time").value;
    subjects.push(dict);
        
}

// User information
// const educationLevel = "college";
// const courseOfStudy = "computer science";
// const availability = ["Monday 9am-12pm", "Wednesday 3pm-5pm", "Friday 10am-1pm"];
// const goals = ["prepare for final exam", "improve coding skills"];
// const previousStudyHabits = ["visual learner", "takes frequent breaks"];
// const personalPreferences = { "location": "quiet library", "snacks": "coffee and nuts" };

// // Calculate available study time
// let studyTime = 0;
// for (const slot of availability) {
//   const [day, time] = slot.split(' ');
//   const [start, end] = time.split('-');
//   studyTime += (new Date(`1970-01-${['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].indexOf(day) + 1}T${start}Z`) - new Date(`1970-01-${['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].indexOf(day) + 1}T${end}Z`)) / 1000 / 60;
// }
studyTime *= 0.8; // Adjust for personal preferences

// Prioritize goals
// const prioritizedGoals = goals.slice().sort((a, b) => {
//   // Add any custom logic to determine goal priority here
//   return 0; // No custom logic, so don't change order
// });

// Allocate time for each goal
const studyPlan = {};
for (const goal of prioritizedGoals) {
  studyPlan[goal] = Math.floor(studyTime / prioritizedGoals.length);
}
const remainingTime = studyTime - Object.values(studyPlan).reduce((a, b) => a + b, 0);
if (remainingTime > 0) {
  studyPlan[prioritizedGoals[0]] += remainingTime; // Add any remaining time to the most important goal
}

// Add breaks and review sessions
for (const goal in studyPlan) {
  studyPlan[goal] += Math.floor(studyPlan[goal] / 5); // Add 20% of time for breaks
  studyPlan[goal] += Math.floor(studyPlan[goal] / 4); // Add 25% of time for review sessions
}

// Print study plan
console.log("Personalized Study Schedule:");
for (const goal in studyPlan) {
  console.log(`${goal}: ${studyPlan[goal]} minutes`);
}

