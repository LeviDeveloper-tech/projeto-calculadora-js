import { updateScreen } from "../../screen/screen.js";
import { state } from "../../state/state.js";

export function clickNumber() {
  const btNum = document.querySelectorAll(".btn-num");

  btNum.forEach((element) => {
    element.addEventListener("click", () => {
      if (state.shouldResetScreen || state.currentValue == 0) {
        state.currentValue = element.textContent.trim();
        state.shouldResetScreen = false;
      } else {
        state.currentValue += element.textContent.trim();
      }

      updateScreen();
    });
  });
}
