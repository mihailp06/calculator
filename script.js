function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    let result;
    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default:
            result = 'ERROR';
    }
    return result;
}

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let output = 0;

buttons.forEach(button => button.addEventListener('click', () => {
    output += button.value;
    display.textContent = output;
}));