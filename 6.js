// Problem Statement
// Write a function called titleCase that takes in a string and returns the string with the first letter of each word capitalized.

// Solution 1
const titleCase = (str) => {
    const words = str.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

// Solution 2
const titleCase2 = (str) => str.replace(/\b\w/g, (match) => match.toUpperCase());

module.exports = { titleCase, titleCase2 };