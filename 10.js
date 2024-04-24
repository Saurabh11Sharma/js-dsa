// Problem Statement
// Write a function called removeDuplicates that takes in an array and returns a new array with duplicates removed.

// Constraints
// The array can contain any data type

// Solution 1
const removeDuplicates = (arr) => Array.from(new Set(arr));

// Solution 2
const removeDuplicates2 = (arr) => {
    let tempArray = [];
    for (const elem of arr) {
        if (!tempArray.includes(elem)) {
            tempArray.push(elem);
        }
    }
    return tempArray;
}

module.exports = { removeDuplicates, removeDuplicates2 };