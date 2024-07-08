// data validation function
function validateNumber(input, argumentName) {
    if (typeof input !== 'number') {
        throw new Error(`${argumentName} must be a valid number`);
    }
}

function divideBy(firstNumber) {
    validateNumber(firstNumber, 'firstNumber');

    return function(secondNumber) {
        validateNumber(secondNumber, 'secondNumber');

        // divide
        return secondNumber / firstNumber;
    }
}

function addBy(firstNumber) {
    validateNumber(firstNumber, 'firstNumber');

    return function(secondNumber) {

        // addition
        return firstNumber + secondNumber;
    }
}

let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);
let addBy100 = addBy(100);
let addBy1000 = addBy(1000);