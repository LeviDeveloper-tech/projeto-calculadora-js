import { updateScreen } from "../screen/screen.js";
import { state } from "../state/state.js";

export function deleteLastNumber() {
  const btnDelete = document.querySelector(".btn-delete");

  btnDelete.addEventListener("click", () => {
    state.currentValue = state.currentValue.slice(0, -1);
    updateScreen();

    if (state.currentValue === "") {
      state.currentValue = 0;
      updateScreen();
    }
  });
}

export function clearAll() {
  const btnClear = document.querySelector(".btn-reset");
  btnClear.addEventListener("click", () => {
    state.currentOperator = "";
    state.currentValue = "0";
    state.previousValue = 0;
    state.shouldResetScreen = true;
    updateScreen();
  });
}
