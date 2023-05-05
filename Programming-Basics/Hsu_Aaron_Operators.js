// Number of slices of cake
var numberOfPieces = 12;
var numberOfPeople = 5;

// Function to determine how much cake remains
function howMuchLeftOverCake(numberOfPieces, numberOfPeople){
    // Check how many pieces of cake remain
    var remainder = numberOfPieces - numberOfPeople;

    // Display message depending on remaining pieces
    if (remainder < 0){         // less slices than people
        console.log("Not enough slices for everyone!")
    } else if (remainder == 0){  // 0 slices remaining
        console.log("No leftovers for you!")
    } else if (remainder <= 2){ // 1-2 slices remaining
        console.log("You have some leftovers");
    } else if (remainder <= 5){ // 3-5 slices remaining
        console.log("You have leftovers to share");
    } else {                    // more than 5 slices remaining
        console.log("Hold another party!");
    }

    return remainder;
}

howMuchLeftOverCake(12, 5);  // Original example parameters
howMuchLeftOverCake(5, 7);   // More people than slices
howMuchLeftOverCake(5, 5);   // No remainder
howMuchLeftOverCake(12, 10); // 2 slices remain
howMuchLeftOverCake(15, 10); // 5 slices remain
howMuchLeftOverCake(20, 11); // 9 slices remain
