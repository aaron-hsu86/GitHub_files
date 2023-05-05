// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];

// 1. Write a for loop that will traverse through an array of numbers, and print each number.
function printArray(arr){
    // For loop to iterate through array
    for (var i = 0; i < arr.length; i++){
        // Print number
        console.log(arr[i]);
    }
}

// 2. Write a for loop that will traverse through an array of numbers, and print the sum of the number and the index of the number in the array.
function printSum(arr){
    // Sum array
    var sum = [];
    // For loop to iterate through array
    for (var i = 0; i<arr.length;i++){
        // sum of the number and the index of the number
        sum [i] = arr[i] + i;
        // Print each number in the array?
        console.log(sum[i]);
    }
    // Print result of the array
    // console.log(sum);
}

// 3. Write a for loop that will traverse through an array of numbers, and print only the numbers greater than 5.
// Ninja Bonus: Modify your solution for #3 so that any numbers in the array that are not greater than 5 are instead replaced with a string of "No dice." This string should not be printed.
function printSome(arr){
    // For loop to iterate through array
    for (var i=0; i<arr.length; i++){
        // Check if number is greater than 5
        if (arr[i] > 5){
            // Print number
            console.log(arr[i]);
        } else { // Ninja bonus
            // Replace smaller numbers with string
            arr[i] = "No dice.";
        }
    }
    // Ninja bonus check
    // console.log(arr);
}

// printArray(arr1);   // prints [8, 6, 7, 5, 3, 0, 9]
// printSum(arr2);     // prints [4, 8, 15, 16, 23, 42, 4]
// printSome(arr3);    // prints 6, 12, 14, replaced array [6, No dice, 12, 14, No dice, No dice, No dice]