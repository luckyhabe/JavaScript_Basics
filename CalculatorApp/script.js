let currentInput = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

function init() {
    updateDisplay();
}
init();

// Display functions
function updateDisplay() {
    document.getElementById('inputBox').value = currentInput;
}

// Number input handler
function btnPressed(number) {
    if (waitingForSecondOperand) {
        currentInput = String(number);
        waitingForSecondOperand = false;
    } else {
        currentInput = currentInput === '0' ? String(number) : currentInput + number;
    }
    updateDisplay();
}

// Decimal point handler
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

// Operator handler
function handleOperator(nextOperator) {
    const inputValue = parseFloat(currentInput);

    if (operator && waitingForSecondOperand) {
        operator = nextOperator;
        return;
    }

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation();
        currentInput = String(result);
        firstOperand = result;
    }

    waitingForSecondOperand = true;
    operator = nextOperator;
    updateDisplay();
}


function performCalculation() {
    const first = firstOperand;
    const second = parseFloat(currentInput);
    
    if (isNaN(second)) return firstOperand || 0;
    
    switch (operator) {
        case '+': return first + second;
        case '-': return first - second;
        case '×': return first * second;
        case '/': 
            if (second === 0) return "Error: Div by 0";
            return first / second;
        case '%': return first % second;
        default: return second;
    }
}

// Equals handler
function calculate() {
    if (operator && !waitingForSecondOperand) {
        const result = performCalculation();
        currentInput = String(result);
        firstOperand = null;
        operator = null;
        waitingForSecondOperand = false;
        updateDisplay();
    }
}

// function Clear handler
function clearAll() {
    currentInput = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}