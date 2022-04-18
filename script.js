let previousOperand = '';
let currentOperand = '';
let operator = '';

const previousOperandDiv = document.querySelector('[data-previous-operand]');
const currentOperandDiv = document.querySelector('[data-current-operand]');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearBtn = document.querySelector('[data-clear]');
const equalsBtn = document.querySelector('[data-equals]');


function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    return +a / +b;
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

function clear() {
    previousOperand = '';
    currentOperand = '';
}

function appendNumber(num) {
    if (num === '.' && currentOperand.includes('.')) return;
    currentOperand += num;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
        currentOperandDiv.textContent = currentOperand;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        previousOperand = currentOperand;
        previousOperandDiv.textContent = `${previousOperand} ${operator}`;
        currentOperand = '';
        currentOperandDiv.textContent = currentOperand;
    });
});

equalsBtn.addEventListener('click', () => {
    if (previousOperand !== '') {
        currentOperand = operate(operator, previousOperand, currentOperand).toString();
        previousOperandDiv.textContent = '';
        currentOperandDiv.textContent = currentOperand;
    }
});

clearBtn.addEventListener('click', () => {
    clear();
    currentOperandDiv.textContent = currentOperand;
    previousOperandDiv.textContent = previousOperand;
});



