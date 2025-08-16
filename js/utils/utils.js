import { updateScreen } from "../screen/screen.js";
import { state } from "../state/state.js";

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
