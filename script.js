// GLOBAL VARIABLES //

let userInput = "";
let num1 = null;
let num2 = null;
let inputOperator = null;
let workingOperator = null;
let workingResult = null;
let finalResult = null;

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

// GET USER INPUT //

const numberKeys = document.querySelectorAll(".number");

numberKeys.forEach(element => element.addEventListener("click", e => {
    userInput += e.target.id;
    displayUserInput(userInput);
}));

// DISPLAY USER INPUT //

const operationArea = document.querySelector(".operation-area");

function displayUserInput(userInput) {
    operationArea.textContent = userInput;
}

// GET OPERATOR //

const operatorKeys = document.querySelectorAll(".operator");

operatorKeys.forEach(element => element.addEventListener("click", e => {
    switch (e.target.id) {
        case "add":
        case "substract":
        case "multiply":
        case"divide":
            inputOperator = e.target.id;
            setWorkingValues();
            break;
        case ("operate"):
            performOperation();
            break;
    }
}));

// DISPLAY RESULT //

const resultArea = document.querySelector(".result-area");

function displayResult(result) {
    resultArea.textContent = result;
}

// GET SIGN INPUT //

const signKeys = document.querySelectorAll(".sign");

signKeys.forEach(element => element.addEventListener("click", e => {
    switch (e.target.id) {
        case "decimal":
            if (!userInput.includes(".")) {
                userInput += ".";
            }
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
            deleteLastChar();
            break;
        case "clear":
            clearAll();
            break;
        case "last-result":
            inputLastResult();
            break;
    }
}));

// UTILITY FUNCTIONS //

function deleteLastChar() {
    userInput = userInput.slice(0, -1);
    displayUserInput(userInput);
};

function clearAll() {
    userInput = "";
    num1 = null;
    num2 = null;
    inputOperator = null;
    workingOperator = null;
    workingResult = null;
    finalResult = null;

    displayResult(finalResult);
    displayUserInput(userInput);
};

function inputLastResult() {
    userInput = finalResult;
    displayUserInput(userInput);
};

function performOperation() {
    num2 = userInput;
    finalResult = operate(num1, num2, inputOperator);
    displayResult(finalResult);
    num1 = null;
    num2 = null;
    workingOperator = null;
    userInput = "";
    displayUserInput(userInput);
};

function setWorkingValues() {
    if (workingOperator == null) {
        num1 = userInput;
        workingOperator = inputOperator;
        userInput = "";
        displayUserInput(userInput);
    } else {
        num2 = userInput;
        workingResult = operate(num1, num2, workingOperator);
        displayResult(workingResult);
        num1 = workingResult;
        workingOperator = inputOperator;
        userInput = "";
        displayUserInput(userInput);
    }
};
