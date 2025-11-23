/**
 * JavaScript Array Challenges
 * This script contains various array manipulation exercises to practice
 * fundamental JavaScript concepts
 */

document.addEventListener("DOMContentLoaded", function () {
    // FizzBuzz Challenge: Print Fizz for multiples of 3, Buzz for multiples of 5,
    // and FizzBuzz for multiples of both
    console.log("FizzBuzz Challenge: ");

    for (let num = 1; num <= 100; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("FizzBuzz");
        } else if (num % 3 === 0) {
            console.log("Fizz")
        } else if (num % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(num);
        }

    }

    // Always Bored Challenge: Check if an activity is "watch TV"
    console.log("Always Bored Challenge: ");
    function alwaysBored(activities) {
        for (let i = 0; i < activities.length; i++) {
            if (activities[i] === "watch TV") {
                console.log("Fun!");
            }
            else {
                console.log("I'm Bored!");
            }
        }
    }
    alwaysBored(["sing", "run", "go out", "watch TV"]);

    // Cut Number Challenge:
    // Write a function that takes an array and a cutoff number.
    // This function should return a new array containing only the
    // numbers that are smaller than this cutoff value.

    console.log("Cut Number Challenge");
    let cutNumber = (arr, cutNum) => {
        let result = [];
        for (let num of arr) {
            if (num < cutNum) result.push(num);
        }
        return result;
    }
    console.log(cutNumber([1, 2, 8, 4, 5, 7, 6], 4));

    // Below Average Challenge: 
    // Write a function that takes an array of numbers and tells you 
    // how many of those numbers are less than the average of all numbers.

    console.log("Below Average Challenge: ");
    let numbersBelowAverage = (arr) => {
        let countNumbersBelowAverage = 0;
        let sum = arr.reduce((acc, current) => {
            return acc + current;
        }, 0);
        let average = sum / arr.length;
        for (let num of arr) {
            if (num < average) {
                countNumbersBelowAverage++
                // console.log(num);
            };
        }
        return countNumbersBelowAverage;

    }

    // Expected result: (4) [1, 3, 4, 6]
    console.log(numbersBelowAverage([1, 20, 3, 4, 15, 6, 27]));


    // Even Numbers Count Challenge:
    // Write a function that takes an array of numbers as an argument 
    // and returns the count of even elements it contains.

    console.log("Even Numbers Count: ");
    let evenNumbers = (arr) => {
        let count = 0;
        for (let num of arr) {
            if (num % 2 === 0) count++;
        }
        return count;
    }

    // Usage example
    console.log(evenNumbers([1, 2, 3, 4, 5, 6, 10, 11, 13, 14, 16, 18]));


    // Fibonacci Array Challenge:
    // This is a classic! Fibonacci numbers are like a magical sequence 
    // you can find in many places. Write a function that generates an 
    // array of Fibonacci numbers. Remember to tell it how many numbers 
    // you want in your sequence or it will be an infinite loop!
    // Each number in the sequence is the sum of the two previous numbers.

    console.log("Fibonacci Array:");

    let fibonacci = (num) => {
        if (num < 0) return console.error("Invalid number, please enter a positive integer.");
        if (num === 0) return [0];
        if (num === 1) return [0, 1];
        let fibonacciArr = [0, 1];
        for (let i = 2; i < num; i++) {
            fibonacciArr.push(fibonacciArr[i - 1] + fibonacciArr[i - 2]);
        }

        return fibonacciArr;
    }

    // Usage example: fibonacci(30): [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34]

    console.log(fibonacci(10));

});


