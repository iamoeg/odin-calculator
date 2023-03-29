// BASIC CALCULATION FUNCTIONS //

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return "Error: Cannot divide by 0"
    } else {
        return num1 / num2;
    }
}

// USER INPUT VARIABLES //

let num1, num2;
let operator;

