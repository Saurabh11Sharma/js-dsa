// Problem Statement
// Write a function called calculator that takes in 2 numbers and an operator and returns the result of the calculation.

const calculator = (firstNumber, secondNumber, operator) => {
    let response;
    switch (operator) {
        case '+':
            response = firstNumber + secondNumber;
            break;
        case '-':
            response = firstNumber - secondNumber;
            break;
        case '*':
            response = firstNumber * secondNumber;
            break;
        case '/':
            if (!secondNumber)
                return 'Cannot divide by Zero!';
            response = firstNumber / secondNumber;
            break;
        default:
            return 'Invalid Operator!'
    }
    return response;
};

module.exports = calculator;