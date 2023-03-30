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

// PERFORM CALCULATION //

function operate(num1, num2, operator) {
    switch(operator){
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return substract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
        default:
            return "Error: Missing user input"
    }
}

// GET AND DISPLAY USER INPUT //

// Get user input //

let userInput = "";

const numberKeys = document.querySelectorAll(".number");

numberKeys.forEach(element => element.addEventListener("click", e => {
    userInput += e.target.id;
    displayUserInput(userInput);
}));

// Display user input //

const operation = document.querySelector(".operation");

function displayUserInput(userInput) {
    operation.textContent = userInput;
}
