
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
        var remainingHeight = minimum_height - Height;
        console.log("You're old enough to ride, but you're short by", remainingHeight, "inches",
                    '\n', "Are you sure you want to ride?");
    } else if (Height >= minimum_height){ // Age under min, check if Height is under min
        // If minimum height is met but not age
        var remainingAge = minimum_age - Age;
        console.log("You're tall enough to ride, but you're only", Age, "years old.",'\n', "Do you have your parents permission?");
        if(remainingAge == 1){
            console.log("Can you wait until next year?");
        }
        else { 
            console.log("Can you wait", remainingAge, "years?");
        }
    } else { // Age and Height are under min
        // Reject Rider that is not of age and height
        var remainingAge = minimum_age - Age;
        if (remainingAge == 1){
            console.log("Sorry kiddo. Maybe next year.");
        }
        else {
            console.log("Sorry kiddo. Maybe in",remainingAge,"years.");
        }
    }
}

/*
RiderCheck(10, 42); //min age and height
RiderCheck(12, 40); //min age below height
RiderCheck(9, 50);  //under age above height
RiderCheck(8, 50);  //under age over height
RiderCheck(9, 41);  //barely under age and height
RiderCheck(5, 40);  //under age under height
*/


