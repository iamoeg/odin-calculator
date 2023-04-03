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
let result;

// PERFORM CALCULATION //

function operate(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch(operator){
        case "add":
            return add(num1, num2);
            break;
        case "substract":
            return substract(num1, num2);
            break;
        case "multiply":
            return multiply(num1, num2);
            break;
        case "divide":
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

// GET OPERATOR //

const operatorKeys = document.querySelectorAll(".operator");

operatorKeys.forEach(element => element.addEventListener("click", e => {
    switch (e.target.id) {
        case "add":
        case "substract":
        case "multiply":
        case"divide":
            num1 = userInput;
            console.log({num1}); // To be removed
            operator = e.target.id;
            console.log({operator}); // To be removed
            userInput = "";
            displayUserInput(userInput);
            break;
        case ("operate"):
            num2 = userInput;
            console.log({num2}); // To be removed
            userInput = "";
            displayUserInput(userInput);
            result = operate(num1, num2, operator);
            console.log({result}); // To be removed
            displayResult(result);
            break;
    }
}));

// DISPLAY RESULT //

const resultArea = document.querySelector(".result");

function displayResult(result) {
    resultArea.textContent = result;
}

// GET SIGN INPUT //

const signKeys = document.querySelectorAll(".sign");

signKeys.forEach(element => element.addEventListener("click", e => {
    switch (e.target.id) {
        case "decimal":
            userInput += ".";
            displayUserInput(userInput);
            break;
        case "change-sign":
            userInput *= -1;
            displayUserInput(userInput);
            break;
    }
}));

// GET FUNCTION INPUT //

const functionKeys = document.querySelectorAll(".function");

functionKeys.forEach(element => element.addEventListener("click", e => {
    switch (e.target.id) {
        case "delete":
            userInput = userInput.slice(0, -1);
            displayUserInput(userInput);
            break;
        case "clear":
            userInput = "";
            num1 = "";
            num2 = "";
            operator = "";
            result = "";

            displayResult(result);
            displayUserInput(userInput);
            break;
        case "answer":
            userInput = result;
            displayUserInput(userInput);
    }
}));
