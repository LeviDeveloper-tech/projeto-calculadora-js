import { state } from "../state/state.js";

export function initialScreen() {
  const calcScreen = document.querySelector(".screen");
  calcScreen.textContent = state.currentValue;
}

function updateScreen() {}
