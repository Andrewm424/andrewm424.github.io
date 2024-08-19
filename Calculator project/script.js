let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== '' && !isOperator(currentInput.slice(-1))) {
        currentInput += operator;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput === '' ? '0' : currentInput;
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}
