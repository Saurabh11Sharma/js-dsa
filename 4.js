// Problem Statement
// Write a function called countOccurrences() that takes in a string and a character 
// and returns the number of occurrences of that character in the string.

// Solution 1
const countOccurrences = (str, char) => {
    let count = 0;
    for (const ch of str) {
        if (ch === char) {
            count++;
        }
    }
    return count;
}

// Solution 2
const countOccurrences2 = (str, char) => str.split(char).length - 1;

module.exports = { countOccurrences, countOccurrences2 };