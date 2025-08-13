import { clickNumber } from "./actions/numbers.js";
import { initialScreen } from "./screen/screen.js";
clickNumber();

document.addEventListener("DOMContentLoaded", () => {
  initialScreen();
});

const numTeste = document.querySelector(".testeNumber");
