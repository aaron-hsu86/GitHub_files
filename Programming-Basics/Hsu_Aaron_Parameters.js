// Function greets the name given to function
function Greet(Name, Day){
    // if Day is Null, default to "day"
    if (Day == null){
        Day = "day";
    }
    // convert Day to lowercase
    Day = Day.toLowerCase();

    // Checks name for greeting
    if (Name == "Anakin"){
        // Add in time of day into greeting
        console.log("Good", Day+", Master", Name);
    } else if ( Name == "Count Dooku"){
        // Custom greeting for Count Dooku
        console.log("I'm coming for you, Dooku!");
    } else {
        // Greet everyone else
        console.log("Good", Day+", "+Name);
    }
    
}

Greet("Obi-Wan", "Morning");
Greet("Anakin", "afternoon");
Greet("Count Dooku", "Midnight");
Greet("Jerry");