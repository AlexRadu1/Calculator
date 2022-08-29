let numberButtons = document.querySelectorAll(".button.numbers");
let op = document.querySelectorAll(".button.operator");
let currentNumber = document.querySelector(".number");
let previousNumber = document.querySelector(".operation");
let equalSign = document.querySelector(".button.equal");
let clearAll = document.querySelector(".button.clear");
let clearOne = document.querySelector(".button.back");
let firstNumber = "";
let secondNumber = "";
let sign = undefined;
let result;

let clear = () => {
  currentNumber.textContent = "";
  previousNumber.textContent = "";
  op = undefined;
  firstNumber = "";
  secondNumber = "";
};
let add = (a, b) => {
  return a + b;
};
let subtract = (a, b) => {
  return a - b;
};
let multiply = (a, b) => {
  return a * b;
};
let divide = (a, b) => {
  return a / b;
};
let operate = () => {
  let result;
  let second = parseFloat(secondNumber);
  let first = parseFloat(firstNumber);
  if (isNaN(first) || isNaN(second)) return;
  switch (sign) {
    case "-":
      result = subtract(second, first);
      break;
    case "+":
      result = add(second, first);
      break;
    case "x":
      result = multiply(second, first);
      break;
    case "/":
      result = divide(second, first);
      break;
    default:
      return;
  }
  firstNumber = result;
  sign = undefined;
  secondNumber = "";
};
let updateDisplay = () => {
  currentNumber.innerText = firstNumber;
  if (sign != null) {
    previousNumber.innerText = `${secondNumber} ${sign}`;
  }
};
let appendNumber = (n) => {
  if (n === "." && firstNumber.includes(".")) return;
  firstNumber = firstNumber.toString() + n.toString();
};
let operation = (operation) => {
  if (firstNumber === "") return;
  if (secondNumber !== "") {
    operate();
  }
  sign = operation;
  secondNumber = firstNumber;
  firstNumber = "";
};
let backspace = () => {
  firstNumber = firstNumber.toString().slice(0, -1);
};
numberButtons.forEach((number) => {
  number.addEventListener("click", () => {
    appendNumber(number.innerText);
    updateDisplay();
  });
});

op.forEach((operator) => {
  operator.addEventListener("click", () => {
    operation(operator.innerText);
    updateDisplay();
  });
});

equalSign.addEventListener("click", () => {
  operate();
  updateDisplay();
});

clearAll.addEventListener("click", () => {
  clear();
  updateDisplay();
});

clearOne.addEventListener("click", () => {
  backspace();
  updateDisplay();
});
