let currentInput = '0';    
let firstOperand = null;
let operator = null;      
let waitingForSecondOperand = false;

function updateDisplay() {
  const display = document.getElementById('inputBox');
  display.value = currentInput;
}

updateDisplay();

function btnPressed(number) {
  if (waitingForSecondOperand) {
    currentInput = String(number);
    waitingForSecondOperand = false;
  } else {
    currentInput = currentInput === '0' ? String(number) : currentInput + number;
  }
  updateDisplay();
}