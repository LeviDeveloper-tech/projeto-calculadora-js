import { state } from "../state/state.js";

export function initialScreen() {
  const calcScreen = document.querySelector(".screen");
  calcScreen.textContent = state.currentValue;
}

export function updateScreen() {
  const calcScreen = document.querySelector(".screen");
  if (state.currentValue != 0) {
    calcScreen.textContent = state.currentValue;
  }
}
