// Problem Statement
// Write a function called countVowels that takes in a string and returns the number of vowels in the string.

// Constraints
// It shouldn't matter if the input string is uppercase or lowercase

// Solution 1
const countVowels = (str) => {
    const nonVowelStr = str.toLowerCase().replace(/[aeiou]/g, '')
    return str.length - nonVowelStr.length;
}

// Solution 2
const countVowels2 = (str) => {
    const formattedStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < formattedStr.length; i++) {
        const char = formattedStr[i];

        if (
            char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u'
        ) {
            count++;
        }
    }

    return count;
}

module.exports = { countVowels, countVowels2 };