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
            console.log({num1});
            operator = e.target.id;
            console.log({operator});
            userInput = "";
            displayUserInput(userInput);
            break;
        case ("operate"):
            num2 = userInput;
            console.log({num2});
            userInput = "";
            displayUserInput(userInput);
            let result = operate(num1, num2, operator);
            console.log({result});
            break;
    }
}));
