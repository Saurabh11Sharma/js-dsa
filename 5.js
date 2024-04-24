// Problem Statement
// Write a function called findMaxNumber that takes in an array of numbers and returns the largest number in the array.

// Solution 1
const findMaxNumber = (arr) => arr.sort((a, b) => a - b)[arr.length - 1];

// Solution 2
const findMaxNumber2 = (arr) => Math.max(...arr);

// Solution 3
const findMaxNumber3 = (arr) => {
    let maximum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maximum) {
            maximum = arr[i];
        }
    }
    return maximum;
}

// Solution 4
const findMaxNumber4 = (arr) => arr.reduce((max, current) => current > max ? current : max, arr[0]);

module.exports = { findMaxNumber, findMaxNumber2, findMaxNumber3, findMaxNumber4 };