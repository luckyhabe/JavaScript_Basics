let currentInput = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

function init() {
    updateDisplay();
}
init();


function updateDisplay() {
    document.getElementById('inputBox').value = currentInput;
}

function btnPressed(number) {
    if (waitingForSecondOperand) {
        currentInput = String(number);
        waitingForSecondOperand = false;
    } else {
        currentInput = currentInput === '0' ? String(number) : currentInput + number;
    }
    updateDisplay();
}

function inputDecimal() {
    if (waitingForSecondOperand) {
        currentInput = '0.';
        waitingForSecondOperand = false;
        return;
    }
    
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}