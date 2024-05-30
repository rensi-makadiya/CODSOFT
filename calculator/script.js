let screen = document.getElementById('screen');
let currentNumber = '0';
let operator = '';
let previousNumber = '';

function appendToScreen(number) {
  if (currentNumber === '0' && number !== '.') {
    currentNumber = '';
  }
  currentNumber += number;
  screen.textContent = currentNumber;
}

function clearScreen() {
  currentNumber = '0';
  operator = '';
  previousNumber = '';
  screen.textContent = currentNumber;
}

function operate(op) {
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '0';
}

function calculate() {
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    default:
      result = currentNumber;
  }
  currentNumber = result.toString();
  operator = '';
  previousNumber = '';
  screen.textContent = currentNumber;
}
