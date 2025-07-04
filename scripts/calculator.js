// ===== VARIABLES =====
// Using let for variables that will change
let currentOperand = '0';
let previousOperand = '';
let operation = undefined;
let resetScreen = false;

// DOM Elements - Using query selectors to get elements
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandDisplay = document.querySelector('[data-previous-operand]');
const currentOperandDisplay = document.querySelector('[data-current-operand]');

// ===== FUNCTIONS =====
function clear() {
    currentOperand = '0';
    previousOperand = '';
    operation = undefined;
}

function deleteNumber() {
    currentOperand = currentOperand.toString().slice(0, -1);
    if (currentOperand === '') {
        currentOperand = '0';
    }
}

function appendNumber(number) {
    if (currentOperand === '0' || resetScreen) {
        currentOperand = '';
        resetScreen = false;
    }
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number.toString();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    
    // ===== CONDITIONS =====
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '÷':
            computation = prev / current;
            break;
        default:
            return;
    }
    
    currentOperand = computation.toString();
    operation = undefined;
    previousOperand = '';
    resetScreen = true;
}

function updateDisplay() {
    currentOperandDisplay.textContent = currentOperand;
    if (operation != null) {
        previousOperandDisplay.textContent = `${previousOperand} ${operation}`;
    } else {
        previousOperandDisplay.textContent = previousOperand;
    }
}

// ===== EVENT HANDLING =====
// Using forEach loop to add event listeners to all number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
        updateDisplay();
    });
});

// Using forEach loop to add event listeners to all operation buttons
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.textContent);
        updateDisplay();
    });
});

equalsButton.addEventListener('click', () => {
    compute();
    updateDisplay();
});

allClearButton.addEventListener('click', () => {
    clear();
    updateDisplay();
});

deleteButton.addEventListener('click', () => {
    deleteNumber();
    updateDisplay();
});

// ===== ARRAYS & OBJECTS =====
// Example of using an array for keyboard support
const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '=', 'Enter', 'Backspace', 'Escape', 'Delete'];

// Example of using an object for key mapping
const keyOperations = {
    '+': '+',
    '-': '-',
    '*': '*',
    '/': '÷',
    '=': '=',
    'Enter': '=',
    'Backspace': 'DEL',
    'Escape': 'AC',
    'Delete': 'AC'
};

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (!validKeys.includes(e.key)) return;
    
    e.preventDefault();
    
    if (e.key >= '0' && e.key <= '9') {
        appendNumber(e.key);
        updateDisplay();
    } else if (e.key === '.') {
        appendNumber('.');
        updateDisplay();
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        chooseOperation(keyOperations[e.key]);
        updateDisplay();
    } else if (e.key === '=' || e.key === 'Enter') {
        compute();
        updateDisplay();
    } else if (e.key === 'Backspace') {
        deleteNumber();
        updateDisplay();
    } else if (e.key === 'Escape' || e.key === 'Delete') {
        clear();
        updateDisplay();
    }
});

// Initialize calculator
clear();
updateDisplay();