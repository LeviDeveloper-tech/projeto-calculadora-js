import { updateScreen } from "../../screen/screen.js";
import { state } from "../../state/state.js";

export function allOperatorClick() {
  const btnOperator = document.querySelectorAll(".btn-oper");
  const equalsButton = document.querySelector(".btn-equals");

  if (equalsButton) {
  }

  btnOperator.forEach((element) => {
    element.addEventListener("click", () => {
      if (state.shouldResetScreen == false) {
        state.previousValue = state.currentValue;
        state.currentOperator = element.textContent.trim();
        state.shouldResetScreen = true;
      } else {
        state.currentOperator = element.textContent.trim();
        state.shouldResetScreen = true;
      }
    });
  });
}

export function calculate() {
  const equalsButton = document.querySelector(".btn-equals");

  equalsButton.addEventListener("click", () => {
    const primeiroValor = parseFloat(state.previousValue);
    const segundoValor = parseFloat(state.currentValue);
    const operator = state.currentOperator;

    console.log({
      previous: primeiroValor,
      current: segundoValor,
      op: operator,
    });
    let result = 0;

    switch (operator) {
      case "+":
        result = primeiroValor + segundoValor;
        state.currentValue = result;
        updateScreen();
        state.shouldResetScreen = true;
        break;
      case "-":
        result = primeiroValor - segundoValor;
        state.currentValue = result;
        updateScreen();
        state.shouldResetScreen = true;
        break;
      case "x":
        result = primeiroValor * segundoValor;
        state.currentValue = result;
        updateScreen();
        state.shouldResetScreen = true;
        break;

      case "÷":
        result = primeiroValor / segundoValor;
        state.currentValue = result;
        updateScreen();
        state.shouldResetScreen = true;
        break;

      default:
        break;
    }
    state.previousValue = state.currentValue;
  });
}
