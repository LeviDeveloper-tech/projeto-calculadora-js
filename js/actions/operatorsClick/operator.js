import { state } from "../../state/state.js";

export function allOperatorClick() {
  const btnOperator = document.querySelectorAll(".btn-oper");

  btnOperator.forEach((element) => {
    element.addEventListener("click", () => {
      state.shouldResetScreen = true;
      state.currentOperator = element.textContent;
      state.previousValue = state.currentValue;
    });
  });
  if (state.shouldResetScreen == true) {
    state.currentValue = "0";
  }
}
