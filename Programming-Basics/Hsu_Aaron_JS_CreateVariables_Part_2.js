
// variables for our program to determine if rider can ride the coaster
var minimum_age = 10; // 10 years old
var minimum_height = 42; // 42 inches

// Rider must meet both age and height requirement
function RiderCheck(Age, Height){
    // Check if Rider is above minimum age and height
    if (Age >= minimum_age && Height >= minimum_height){
        // Allow Rider if they are either above min age and min height
        console.log("Get on that ride, kiddo!");
    } else if (Age >= minimum_age){ // Age and Height failed, so one value is under min. Check if Age is above min
        // If minimum age is met but not height
        console.log("You're old enough to ride but not tall enough, are you sure you want to ride?");
    } else if (Height >= minimum_height){ // Age under min, check if Height is under min
        // If minimum height is met but not age
        console.log("You're tall enough to ride, but do you have your parents permission?");
    } else { // Age and Height are under min
        // Reject Rider that is not of age and height
        console.log("Sorry kiddo. Maybe next year.");
    }
}