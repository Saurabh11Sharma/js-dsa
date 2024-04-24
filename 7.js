// Problem Statement
// Write a function called reverseString that takes in a string and returns the reverse of that string. In this section, we are really focusing on loops without using any built-in methods, so try that first. 
// If you get stuck, you can always use the built-in methods to solve the problem.

// Solution 1
const reverseString = (str) => str.split('').reverse().join('');

// Solution 2
const reverseString2 = (str) => {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}

module.exports = { reverseString, reverseString2 };