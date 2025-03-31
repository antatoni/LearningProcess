let input = ["5"];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);

// Check if any of the arguments is not a number and print an error message, using printError function

// Search how to check for type in JavaScript
// Now create functions subtract, multiply and divide. Make them work just like the add function.

// Extract the check as external function checkIfNumber and reuse it in all functions above

// Extend the function add to accept any number of arguments, add them together and return the result

// Now it is time to make some more advanced task. Create a calculator function that accepts two numbers and any of the first four 
// functions as third parameter (not the extended add function, but the one with two parameters). It invokes the passed function with the two numbers and returns the result

// Now extend the calculator to receive not just one of the functions but any number of them, invoke all of them, store the results in an array and return it


const error = function (msg = 'Error') {
    console.error(`Error : ${msg}`);
}

const checkIfNum = function (value) {
    return typeof value === 'number' && !isNaN(value);
}

const sum = function (a, b) {
    if (!checkIfNum(a) || !checkIfNum(b)) {
        error('Both arguments must be numbers');
        return;
    }
    return a + b;
}

const subtract = function (a, b) {
    if (!checkIfNum(a) || !checkIfNum(b)) {
        error('Both arguments must be numbers');
        return;
    }
    return a - b;
}

const multiplication = function (a, b) {
    if (!checkIfNum(a) || !checkIfNum(b)) {
        error('Both arguments must be numbers');
        return;
    }
    return a * b;
}

const division = function (a, b) {
    if (!checkIfNum(a) || !checkIfNum(b)) {
        error('Both arguments must be numbers');
        return;
    }
    return a / b;
}

const calc = function (a, b, program) {
    if (!checkIfNum(a) || !checkIfNum(b)) {
        error('Both arguments must be numbers');
        return;
    }
    return program(a, b);
}

const multiCalc = function (a, b, ...programs) {
    if (!checkIfNum(a) || !checkIfNum(b)) {
        error('Both arguments must be numbers');
        return;
    }
    const results = programs.map(program => program(a, b));
    console.log(results.join(' '));
}

multiCalc(5, 5, sum, multiplication, division, subtract);


