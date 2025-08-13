import { clickNumber } from "./actions/numbersClick/numbers.js";
import { allOperatorClick } from "./actions/operatorsClick/operator.js";
import { initialScreen } from "./screen/screen.js";

clickNumber();
allOperatorClick();

document.addEventListener("DOMContentLoaded", () => {
  initialScreen();
});
const numTeste = document.querySelector(".testeNumber");
