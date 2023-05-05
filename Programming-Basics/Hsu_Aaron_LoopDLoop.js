// Set variable for runner's distance
var RunnerCandy = 0 // amount of candy the Runner has
var RunnerDist = 0  // setting initial distance of Runner to 0

// Loop to reward candy at every 2 miles
for (RunnerDist = 0; RunnerDist < 6; RunnerDist++){ // Candy is stopped given at mile 6
    // Reward is given every 2 miles excluding mile 0
    if (RunnerDist > 0 && RunnerDist % 2 == 0){
        //Increasing number of candy given to Runner
        RunnerCandy++;
    }
}

console.log("Runner has earned", RunnerCandy, "candies for running", RunnerDist, "miles!");

// Ninja Bonus: Check how many candies RunA (RunA = Run-AH, eh? eh? Dad joke...)
// Function checks RunA's ran distance and average speed
function RunnerCheck(RunADist, RunAAvgSpeed){
    // amount of candy this new RunA has
    var RunACandy = 0

    // console.log(RunAAvgSpeed); // test checking if number has decimal points
    
    // Dist is RunA's current position
    for (var Dist = 0; Dist < RunADist; Dist++){
        // Reward is given every 2 miles excluding mile 0 and 6, and if speed >= 5.5
        if (Dist > 0 && Dist < 6 && Dist % 2 == 0 && RunAAvgSpeed >= 5.5){
            //Increasing number of candy given to Runner
            RunACandy++;
        }
    }

    console.log("Runner has earned", RunACandy, "candies for running", RunADist, "miles at",RunAAvgSpeed,"miles per hour!");
}

RunnerCheck(10, 5);
RunnerCheck(2, 6.5);
RunnerCheck(20, 10);
RunnerCheck(10, 6.5);